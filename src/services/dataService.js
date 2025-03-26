import axios from 'axios';

// 格式化日期时间
export const formatDateTime = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const hour = String(d.getHours()).padStart(2, '0');
  const minute = String(d.getMinutes()).padStart(2, '0');
  return `${year}/${month}/${day} ${hour}:${minute}`;
};

// 创建axios实例
const api = axios.create({
  timeout: 10000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  validateStatus: function (status) {
    return status >= 200 && status < 300;
  }
});

// 查询快递物流信息
export const queryExpressInfo = async (trackingNumber, baseId) => {
  try {
    // 确保trackingNumber是字符串
    const trackingNumberStr = String(trackingNumber).trim();
    
    const response = await api({
      method: 'post',
      url: `/api/query/domestic`,
      data: {
        tracking_number: trackingNumberStr,
        base_id: baseId
      },
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // 处理响应数据
    if (response.data.success) {
      const data = response.data.data;
      return {
        success: true,
        data: {
          carrier: data.courier,
          status_desc: data.latest_event,
          status: data.status_text,
          events: data.events.map(event => ({
            time: event.time,
            context: event.context,
            location: event.location
          }))
        },
        remaining: response.data.remaining
      };
    } else {
      throw new Error(response.data.message || '查询失败');
    }
  } catch (error) {
    console.error('查询快递信息失败:', error);
    if (error.code === 'ERR_NETWORK') {
      throw new Error('网络连接失败，请检查网络设置或联系管理员');
    } else if (error.code === 'ERR_SSL_PROTOCOL_ERROR') {
      throw new Error('SSL证书验证失败，请联系管理员');
    }
    throw error;
  }
};

// 更新记录信息
export const updateRecordInfo = async ({
  currentTable,
  record,
  statusField,
  updateTimeField,
  refreshChangeField,
  allLogisticsInfoField,
  logisticsData,
  prevStatus,
  prevUpdateTime
}) => {
  const now = new Date();
  const currentTime = formatDateTime(now);
  const hasChange = prevStatus !== logisticsData.data.status_desc;

  // 更新最新状态
  await currentTable.setCellValue(statusField.id, record.recordId, logisticsData.data.status_desc);
  
  // 更新最新更新时间
  await currentTable.setCellValue(updateTimeField.id, record.recordId, currentTime);
  
  // 更新刷新变动
  const refreshText = `${logisticsData.data.carrier} 于 ${currentTime} 刷新。新变动 ${hasChange ? '√' : '×'}。${prevUpdateTime ? `上次刷新时间 ${prevUpdateTime}` : ''}`;
  await currentTable.setCellValue(refreshChangeField.id, record.recordId, refreshText);

  // 更新全部物流信息（按时间倒序排列）
  if (allLogisticsInfoField && logisticsData.data.events && logisticsData.data.events.length > 0) {
    // 按时间倒序排序物流事件
    const sortedEvents = [...logisticsData.data.events].sort((a, b) => {
      // 将时间字符串转换为时间戳进行比较
      const timeA = new Date(a.time.replace(/-/g, '/'));
      const timeB = new Date(b.time.replace(/-/g, '/'));
      return timeB - timeA; // 倒序排列
    });
    
    // 格式化物流信息文本
    const allLogisticsText = sortedEvents.map(event => {
      return `【${event.time}】${event.location ? event.location + ' - ' : ''}${event.context}`;
    }).join('\n\n');
    
    // 设置全部物流信息字段
    await currentTable.setCellValue(allLogisticsInfoField.id, record.recordId, allLogisticsText);
  }

  return {
    currentTime,
    hasChange,
    refreshText
  };
};

// 查询剩余次数
export const queryRemainingQuota = async (baseId) => {
  try {
    const response = await api({
      method: 'get',
      url: `/api/api/auth/total-remaining?base_id=${baseId}`,
      withCredentials: true
    });

    return {
      success: response.data.success,
      data: {
        remaining_quota: response.data.data.remaining_quota,
        domestic_quota: response.data.data.domestic_quota,
        international_quota: response.data.data.international_quota,
        base_id: response.data.data.base_id
      }
    };
  } catch (error) {
    console.error('查询剩余次数失败:', error);
    throw error;
  }
};

// 获取套餐列表
export const getPackages = async () => {
  try {
    const response = await api({
      method: 'get',
      url: `/api/api/package/`,
    });

    return response.data;
  } catch (error) {
    console.error('获取套餐列表失败:', error);
    throw error;
  }
};
