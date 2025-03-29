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
const apiClient = axios.create({
  baseURL: 'https://sky-eve-yang.com.cn/logi',
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
export const queryExpressInfo = async (trackingNumber, baseId, mobile = null) => {
  try {
    const requestData = {
      tracking_number: trackingNumber,
      base_id: baseId
    };
    
    // 如果有手机号码且有效，添加到请求数据中
    if (mobile) {
      requestData.mobile = mobile;
    }
    
    const response = await apiClient({
      method: 'post',
      url: `/query/domestic`,
      data: requestData,
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    });

    // 响应格式可能有多种，需要适配
    if (!response.data.success) {
      // API明确表示查询失败
      return {
        success: false,
        message: response.data.error || "查询失败",
        remaining: response.data.remaining
      };
    }

    // 处理响应数据
    const data = response.data.data;
    
    // 检查不同格式的错误信息
    if (data.error) {
      return {
        success: false,
        message: data.error,
        remaining: response.data.remaining
      };
    }
    
    // 处理顺丰需要手机号的情况（两种可能的格式）
    if ((data.status_text && data.status_text.includes("顺丰需要输入手机")) || 
        (data.status && data.status.text && data.status.text.includes("顺丰需要输入手机"))) {
      return {
        success: false,
        message: data.status_text || (data.status && data.status.text) || "顺丰需要输入手机",
        remaining: response.data.remaining
      };
    }
    
    // 检查状态是否存在，如果不存在则视为查询失败
    if ((!data.status || !data.status.text) && !data.status_text) {
      return {
        success: false,
        message: "物流状态未知，查询失败，请确认快递单号是否正确",
        remaining: response.data.remaining
      };
    }

    // 检查状态是否为"未知"，如果是则视为查询失败
    if ((data.status && data.status.text === "未知") || data.status_text === "未知") {
      return {
        success: false,
        message: "物流状态未知，查询失败，请确认快递单号是否正确",
        remaining: response.data.remaining
      };
    }

    // 检查是否有事件数据
    if (!data.events || data.events.length === 0) {
      // 其他错误情况
      return {
        success: false,
        message: data.message || "查询失败，未获取到物流信息",
        remaining: response.data.remaining
      };
    }
    
    // 从事件中提取最新动态信息
    const latestEvent = data.events[0]; // 事件通常按时间倒序排列，第一个是最新的
    
    return {
      success: true,
      data: {
        carrier: data.carrier && data.carrier.name ? data.carrier.name : (data.courier || "未知快递"),
        status_desc: (data.status && data.status.description) || "",
        status: (data.status && data.status.text) || data.status_text || "",
        latest_event: latestEvent.description || latestEvent.context || "",
        latest_event_time: latestEvent.eventTime || latestEvent.time || "",
        events: data.events.map(event => ({
          time: event.eventTime || event.time || "",
          context: event.description || event.context || "",
          location: (event.location && event.location.name) ? event.location.name : (event.location || "")
        }))
      },
      remaining: response.data.remaining,
      purchased: response.data.purchased
    };
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
  prevUpdateTime,
  courierField,
  latestEventField,
  latestEventTimeField,
  contactInfoField,
  deliveryTimelineField,
  errorMessageField
}) => {
  const now = new Date();
  const currentTime = formatDateTime(now);
  
  // 获取当前状态
  const currentStatus = (logisticsData.data.status && logisticsData.data.status.text) || 
                      logisticsData.data.status_text || 
                      "未知状态";
  
  // 检测状态是否变化（考虑可能的对象格式）
  let hasChange = false;
  
  // 如果prevStatus是对象（来自飞书表格的单选字段），获取其name属性
  const prevStatusText = typeof prevStatus === 'object' && prevStatus !== null ? 
                        (prevStatus.name || "") : 
                        (prevStatus || "");
  
  // 比较状态文本
  hasChange = prevStatusText !== currentStatus;
  
  // 定义刷新文本变量
  const refreshText = `${logisticsData.data.carrier} 于 ${currentTime} 刷新。` + 
                     `当前状态: ${currentStatus}。` + 
                     `${hasChange ? `状态已从 "${prevStatusText}" 变为 "${currentStatus}"` : '无状态变化'}。` + 
                     `${prevUpdateTime ? `上次刷新时间 ${prevUpdateTime}` : ''}`;

  // 准备要更新的字段值对象
  const fieldsToUpdate = {};

  try {
    // 处理单选字段 - 物流状态
    if (statusField) {
      try {
        // 获取当前字段的所有选项
        const statusOptions = await currentTable.getFieldMetaById(statusField.id);
        if (statusOptions?.property?.options) {
          // 将API返回的状态文本转为标准格式
          const statusText = (logisticsData.data.status && logisticsData.data.status.text) || 
                           logisticsData.data.status_text || 
                           "未知状态";
          
          // 检查表格中是否已存在该选项
          const existingOption = statusOptions.property.options.find(
            opt => opt.name === statusText || 
                 opt.name.toLowerCase() === statusText.toLowerCase() // 不区分大小写比较
          );
          
          if (existingOption) {
            // 如果已存在该选项，直接使用
            fieldsToUpdate[statusField.id] = existingOption;
          } else {
            // 如果不存在，创建新选项
            const newOption = {
              name: statusText,
              color: 0  // 默认颜色
            };
            fieldsToUpdate[statusField.id] = newOption;
          }
        } else {
          // 如果字段没有选项配置，则创建基本选项
          fieldsToUpdate[statusField.id] = {
            name: (logisticsData.data.status && logisticsData.data.status.text) || 
                 logisticsData.data.status_text || 
                 "未知状态",
            color: 0
          };
        }
      } catch (error) {
        console.error('处理物流状态字段时出错:', error);
        // 发生错误时的回退方案
        fieldsToUpdate[statusField.id] = {
          name: (logisticsData.data.status && logisticsData.data.status.text) || 
               logisticsData.data.status_text || 
               "未知状态",
          color: 0
        };
      }
    }

    // 处理日期时间字段 - 查询时间
    if (updateTimeField) {
      fieldsToUpdate[updateTimeField.id] = now.getTime();
    }

    // 处理刷新变动字段
    if (refreshChangeField) {
      fieldsToUpdate[refreshChangeField.id] = refreshText;
    }
    
    // 处理报错信息字段 - 查询成功时清空报错信息
    if (errorMessageField) {
      fieldsToUpdate[errorMessageField.id] = ''; // 清空报错信息
    }

    // 排序物流事件数据（如果存在）
    let sortedEvents = [];
    if (logisticsData.data.events && logisticsData.data.events.length > 0) {
      sortedEvents = [...logisticsData.data.events].sort((a, b) => {
        const timeA = new Date(a.time.replace(/-/g, '/'));
        const timeB = new Date(b.time.replace(/-/g, '/'));
        return timeB - timeA; // 倒序排列
      });
      
      // 处理全部物流信息字段
      if (allLogisticsInfoField) {
        const allLogisticsText = sortedEvents.map(event => {
          return `【${event.time}】${event.location ? event.location + ' - ' : ''}${event.context}`;
        }).join('\n\n');
        fieldsToUpdate[allLogisticsInfoField.id] = allLogisticsText;
      }

      // 处理单选字段 - 快递公司
      if (courierField) {
        try {
          // 获取当前字段的所有选项
          const courierOptions = await currentTable.getFieldMetaById(courierField.id);
          if (courierOptions?.property?.options) {
            // 将API返回的快递公司名称转为标准格式
            const carrierName = logisticsData.data.carrier;
            
            // 检查表格中是否已存在该选项
            const existingOption = courierOptions.property.options.find(
              opt => opt.name === carrierName || 
                   opt.name.toLowerCase() === carrierName.toLowerCase() // 不区分大小写比较
            );
            
            if (existingOption) {
              // 如果已存在该选项，直接使用
              fieldsToUpdate[courierField.id] = existingOption;
            } else {
              // 如果不存在，创建新选项
              const newOption = {
                name: carrierName,
                color: 0  // 默认颜色
              };
              fieldsToUpdate[courierField.id] = newOption;
            }
          } else {
            // 如果字段没有选项配置，则创建基本选项
            fieldsToUpdate[courierField.id] = {
              name: logisticsData.data.carrier,
              color: 0
            };
          }
        } catch (error) {
          console.error('处理快递公司字段时出错:', error);
          // 发生错误时的回退方案
          fieldsToUpdate[courierField.id] = {
            name: logisticsData.data.carrier,
            color: 0
          };
        }
      }

      // 处理最新物流动态字段
      if (latestEventField) {
        fieldsToUpdate[latestEventField.id] = logisticsData.data.latest_event;
      }

      // 处理日期时间字段 - 最新动态时间
      if (latestEventTimeField && sortedEvents.length > 0) {
        const latestEventDate = new Date(sortedEvents[0].time.replace(/-/g, '/'));
        fieldsToUpdate[latestEventTimeField.id] = latestEventDate.getTime();
      }

      // 处理快递员信息字段
      if (contactInfoField && sortedEvents.length > 0) {
        const latestEvent = sortedEvents[0].context;
        // 顺丰快递员提取格式: 快递员【薛强强，电话：17831023585】
        const contactRegex = /快递员【(.*?)，(?:电话|联系电话)[：:](\d+)】/;
        const contactMatch = latestEvent.match(contactRegex);
        
        if (contactMatch && contactMatch.length >= 3) {
          const contactName = contactMatch[1];
          const contactPhone = contactMatch[2];
          fieldsToUpdate[contactInfoField.id] = `${contactName} (${contactPhone})`;
        } else {
          // 其他快递格式: 【薛强强，联系电话：17831023585】
          const altContactRegex = /【(.*?)，联系电话[：:](\d+)】/;
          const altMatch = latestEvent.match(altContactRegex);
          
          if (altMatch && altMatch.length >= 3) {
            const contactName = altMatch[1];
            const contactPhone = altMatch[2];
            fieldsToUpdate[contactInfoField.id] = `${contactName} (${contactPhone})`;
          }
        }
      }

      // 处理运送时长字段
      if (deliveryTimelineField && sortedEvents.length > 1) {
        const firstEvent = sortedEvents[sortedEvents.length - 1]; // 最早的事件
        const lastEvent = sortedEvents[0]; // 最新的事件
        
        const startTime = new Date(firstEvent.time.replace(/-/g, '/'));
        const endTime = new Date(lastEvent.time.replace(/-/g, '/'));
        const timeDiff = endTime - startTime;
        
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
        let timelineText = '';
        if (days > 0) {
          timelineText += `${days}天`;
        }
        if (hours > 0 || days === 0) {
          timelineText += `${hours}小时`;
        }
        
        fieldsToUpdate[deliveryTimelineField.id] = timelineText;
      }
    }

    // 一次性更新所有字段
    console.log('一次性更新所有字段:', fieldsToUpdate);
    await currentTable.setRecord(record.recordId, { fields: fieldsToUpdate });
    
  } catch (error) {
    console.error('批量更新字段失败:', error);
    
    // 如果批量更新失败，尝试逐个字段更新
    console.log('尝试逐个字段更新...');
    try {
      // 依次更新每个字段
      for (const [fieldId, value] of Object.entries(fieldsToUpdate)) {
        try {
          await currentTable.setCellValue(fieldId, record.recordId, value);
        } catch (err) {
          console.error(`更新字段 ${fieldId} 失败:`, err);
        }
      }
    } catch (fallbackError) {
      console.error('逐个字段更新失败:', fallbackError);
      
      // 如果有报错信息字段，记录更新失败的错误
      if (errorMessageField) {
        try {
          await currentTable.setCellValue(
            errorMessageField.id, 
            record.recordId, 
            `数据更新失败: ${fallbackError.message || '未知错误'}`
          );
        } catch (e) {
          console.error('写入报错信息失败:', e);
        }
      }
      
      throw fallbackError;
    }
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
    const response = await apiClient({
      method: 'get',
      url: `/api/auth/total-remaining?base_id=${baseId}`,
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
    const response = await apiClient({
      method: 'get',
      url: `/api/package/`,
    });

    return response.data;
  } catch (error) {
    console.error('获取套餐列表失败:', error);
    throw error;
  }
};
