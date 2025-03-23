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
      method: 'get',
      url: `https://sky-eve-yang.com.cn:5000/query?tracking_number=${trackingNumberStr}&base_id=${baseId}&phone_suffix=&api=`,
      withCredentials: true
    });

    return response.data;
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
      url: `https://sky-eve-yang.com.cn:5000/api/auth/total-remaining?base_id=${baseId}`,
      withCredentials: true
    });

    return response.data;
  } catch (error) {
    console.error('查询剩余次数失败:', error);
    throw error;
  }
};
