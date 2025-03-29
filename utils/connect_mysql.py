import pymysql
from pymysql.cursors import DictCursor
from contextlib import contextmanager
import threading


class MySQLPool:
    _instance = None
    _lock = threading.Lock()

    def __new__(cls, *args, **kwargs):
        if cls._instance is None:
            with cls._lock:
                if cls._instance is None:
                    cls._instance = super().__new__(cls)
        return cls._instance

    def __init__(self, host, user, password, database, max_connections=10):
        if not hasattr(self, "pool"):
            self.pool = []
            self.max_connections = max_connections
            self.host = host
            self.user = user
            self.password = password
            self.database = database
            self._lock = threading.Lock()

    @contextmanager
    def get_connection(self):
        connection = None
        try:
            with self._lock:
                if len(self.pool) < self.max_connections:
                    connection = pymysql.connect(
                        host=self.host,
                        user=self.user,
                        password=self.password,
                        database=self.database,
                        cursorclass=DictCursor,
                        charset="utf8mb4",
                    )
                    self.pool.append(connection)
                else:
                    connection = self.pool.pop(0)
            yield connection
        finally:
            if connection:
                with self._lock:
                    if connection not in self.pool:
                        self.pool.append(connection)

    def close_all(self):
        with self._lock:
            for conn in self.pool:
                try:
                    conn.close()
                except:
                    pass
            self.pool.clear()


class MySQLConnector:
    def __init__(self, host, user, password, database, table):
        self.host = host
        self.user = user
        self.password = password
        self.database = database
        self.table = table
        self.pool = MySQLPool(host, user, password, database)

    @contextmanager
    def get_connection(self):
        with self.pool.get_connection() as connection:
            yield connection

    def close_connection(self):
        # 不再需要手动关闭连接，连接会被放回连接池
        pass

    def find_cookie_by_node(self, node_order):
        with self.get_connection() as connection:
            with connection.cursor() as cursor:
                query = "SELECT cookie, extra_vip_count FROM common_usage WHERE node_order = %s AND is_used = 0 ORDER BY last_use_time DESC LIMIT 1"
                cursor.execute(query, (node_order,))
                result = cursor.fetchone()
                if result:
                    return result["cookie"], result["extra_vip_count"]
                return None, 0

    def find_and_mark_as_used(self, node_order):
        with self.get_connection() as connection:
            with connection.cursor() as cursor:
                # 先获取一个未使用的cookie
                query = "SELECT cookie FROM common_usage WHERE node_order = %s AND is_used = 0 ORDER BY last_use_time DESC LIMIT 1"
                cursor.execute(query, (node_order,))
                result = cursor.fetchone()
                if result:
                    cookie = result["cookie"]
                    # 标记为已使用
                    update_query = "UPDATE common_usage SET is_used = 1, last_use_time = NOW() WHERE cookie = %s"
                    cursor.execute(update_query, (cookie,))
                    connection.commit()
                    return cookie
                return None

    def check_and_update_count_by_token(self, token):
        with self.get_connection() as connection:
            with connection.cursor() as cursor:
                # 先获取当前计数
                query = "SELECT count, last_use_time FROM vip_usage WHERE token = %s"
                cursor.execute(query, (token,))
                result = cursor.fetchone()

                if result:
                    current_count = result["count"]
                    last_use_time = result["last_use_time"]
                    # 更新计数
                    update_query = "UPDATE vip_usage SET count = count + 1, last_use_time = NOW() WHERE token = %s"
                    cursor.execute(update_query, (token,))
                    connection.commit()
                    return current_count + 1, last_use_time
                else:
                    # 如果token不存在，创建新记录
                    insert_query = "INSERT INTO vip_usage (token, count, last_use_time) VALUES (%s, 1, NOW())"
                    cursor.execute(insert_query, (token,))
                    connection.commit()
                    return 1, None

    def check_and_update_extra_count_by_cookie(self, cookie):
        with self.get_connection() as connection:
            with connection.cursor() as cursor:
                # 更新extra_vip_count
                update_query = "UPDATE common_usage SET extra_vip_count = extra_vip_count + 1 WHERE cookie = %s"
                cursor.execute(update_query, (cookie,))
                connection.commit()

                # 获取更新后的值
                query = "SELECT extra_vip_count FROM common_usage WHERE cookie = %s"
                cursor.execute(query, (cookie,))
                result = cursor.fetchone()
                return result["extra_vip_count"] if result else 0
