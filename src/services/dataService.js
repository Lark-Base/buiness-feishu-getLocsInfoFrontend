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
  
  const currentStatus = logisticsData.data.status?.text || 
                      logisticsData.data.status || 
                      "未知状态";
  
  // 获取快递公司名称
  const carrierName = logisticsData.data.carrier?.name || 
                     logisticsData.data.carrier || 
                     "未知快递";
  
  // 打印API返回的原始状态数据，方便调试
  console.log('API返回的状态数据:', JSON.stringify(logisticsData.data.status));
  console.log('当前状态文本:', currentStatus);
  console.log('快递公司名称:', carrierName);
  
  // 获取之前的"刷新变动"字段内容
  let prevRefreshChange = "";
  try {
    if (refreshChangeField) {
      const refreshChangeValue = await currentTable.getCellValue(refreshChangeField.id, record.recordId);
      // 确保 prevRefreshChange 一定是字符串类型
      if (refreshChangeValue) {
        if (typeof refreshChangeValue === 'string') {
          prevRefreshChange = refreshChangeValue;
        } else if (Array.isArray(refreshChangeValue)) {
          // 如果是数组类型，通常是多选或其他复杂类型的字段，尝试获取text属性
          prevRefreshChange = refreshChangeValue.map(item => 
            typeof item === 'object' && item !== null ? (item.text || '') : String(item)
          ).join('');
        } else if (typeof refreshChangeValue === 'object' && refreshChangeValue !== null) {
          // 如果是对象类型，可能是单选等类型，尝试获取name或text属性
          prevRefreshChange = refreshChangeValue.name || refreshChangeValue.text || JSON.stringify(refreshChangeValue);
        } else {
          // 其他类型直接转字符串
          prevRefreshChange = String(refreshChangeValue);
        }
      }
      console.log('获取到的刷新变动内容:', prevRefreshChange);
    }
  } catch (error) {
    console.error('获取刷新变动字段内容失败:', error);
  }
  
  // 检测状态是否变化（考虑可能的对象格式）
  let hasChange = false;
  
  // 如果prevStatus是对象（来自飞书表格的单选字段），获取其name属性
  console.log("prevStatus=======", prevStatus)
  const prevStatusText = typeof prevStatus === 'object' && prevStatus !== null ? 
                        (prevStatus.text || "") : 
                        (prevStatus || "");
  
  console.log('上一次状态文本:', prevStatusText);
  
  // 比较状态文本
  hasChange = prevStatusText !== currentStatus;
  
  // 解析上一次的刷新变动，获取上一次的时间和状态变化信息
  let lastRefreshTime = prevUpdateTime || "";
  let lastStatusChange = "";
  
  // 确保 prevRefreshChange 是字符串并且不为空再进行正则匹配
  if (prevRefreshChange && typeof prevRefreshChange === 'string') {
    try {
      // 尝试从刷新变动中提取上次运行时间和状态变化
      const timeMatch = prevRefreshChange.match(/于\s+([\d/\s:]+)\s+刷新/);
      if (timeMatch && timeMatch[1]) {
        lastRefreshTime = timeMatch[1].trim();
      }
      
      // 尝试提取上次状态变化
      const statusChangeMatch = prevRefreshChange.match(/状态已从\s+"([^"]*)"\s+变为\s+"([^"]*)"/);
      if (statusChangeMatch && statusChangeMatch[2]) {
        // 上次变化后的状态应该是本次变化前的状态
        lastStatusChange = statusChangeMatch[2];
      }
    } catch (error) {
      console.error('解析刷新变动内容失败:', error, '原始内容:', prevRefreshChange);
    }
  }
  
  // 定义刷新文本变量
  let refreshText = `${carrierName} 于 ${currentTime} 刷新。` + 
                   `当前状态: ${currentStatus}。`;
  
  // 添加状态变化信息
  if (hasChange) {
    refreshText += `状态已从 "${prevStatusText}" 变为 "${currentStatus}"。`;
  } else {
    refreshText += `无状态变化。`;
  }
  
  // 添加上次刷新时间
  if (lastRefreshTime) {
    refreshText += `上次刷新时间 ${lastRefreshTime}。`;
  }
  
  // 准备要更新的字段值对象
  const fieldsToUpdate = {};

  try {
    // 处理单选字段 - 物流状态
    if (statusField) {
      try {
        // 获取当前字段的所有选项
        const statusOptions = await currentTable.getFieldMetaById(statusField.id);
        console.log('物流状态字段元数据:', JSON.stringify(statusOptions));
        
        if (statusOptions?.property?.options) {
          // 将API返回的状态文本转为标准格式
          const statusText = logisticsData.data.status?.text || 
                           logisticsData.data.status || 
                           "未知状态";
          
          console.log('要查找的状态文本:', statusText);
          console.log('可用的状态选项:', JSON.stringify(statusOptions.property.options));
          
          // 检查表格中是否已存在该选项（严格匹配）
          console.log("状态选项=======", statusOptions.property.options)
          let existingOption = statusOptions.property.options.find(
            opt => opt.name === statusText
          );
          
          // 如果严格匹配失败，尝试不区分大小写的匹配
          if (!existingOption) {
            existingOption = statusOptions.property.options.find(
              opt => opt.name.toLowerCase() === statusText.toLowerCase()
            );
          }
          
          // 如果还是没找到，尝试部分匹配（包含关系）
          if (!existingOption) {
            existingOption = statusOptions.property.options.find(
              opt => statusText.includes(opt.name) || opt.name.includes(statusText)
            );
          }
          
          // 如果还是没找到，尝试从事件中获取状态
          if (!existingOption && logisticsData.data.events && logisticsData.data.events.length > 0) {
            const latestEvent = logisticsData.data.events[0];
            if (latestEvent.sub_status) {
              // 根据 sub_status 映射到对应的状态
              const statusMap = {
                'ACCEPT': '已收件',
                'DELIVERING': '派送中',
                'DELIVERED': '已签收',
                'AGENT_SIGN': '已代签收',
                'TRANSPORT': '运输中'
              };
              
              const mappedStatus = statusMap[latestEvent.sub_status];
              if (mappedStatus) {
                existingOption = statusOptions.property.options.find(
                  opt => opt.name === mappedStatus
                );
              }
            }
          }
          
          console.log('找到的匹配选项:', existingOption);
          
          if (existingOption) {
            // 如果已存在该选项，直接使用完整的选项对象（包含id）
            // 注意: 必须包含选项的id
            fieldsToUpdate[statusField.id] = existingOption;
            console.log('使用已有选项更新状态(包含id):', fieldsToUpdate[statusField.id]);
          } else {
            // 如果不存在对应选项，我们需要通过API方式新增一个选项
            // 根据飞书SDK文档，我们不能直接创建新选项，只能使用已有选项
            // 尝试使用"未知状态"或其他通用状态
            
            let fallbackOption = statusOptions.property.options.find(
              opt => opt.name === "未知状态" || opt.name === "其他"
            );
            
            if (!fallbackOption && statusOptions.property.options.length > 0) {
              // 如果没有"未知状态"，使用第一个可用选项
              fallbackOption = statusOptions.property.options[0];
            }
            
            if (fallbackOption) {
              // 使用回退选项
              fieldsToUpdate[statusField.id] = fallbackOption;
              console.log('使用回退选项更新状态:', fallbackOption);
            } else {
              // 极端情况：没有任何可用选项
              console.error('没有找到任何可用的状态选项，无法更新状态字段');
            }
          }
        } else {
          console.error('物流状态字段无选项配置，无法更新');
        }
      } catch (error) {
        console.error('处理物流状态字段时出错:', error);
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
              // 如果已存在该选项，直接使用完整选项（包含id）
              fieldsToUpdate[courierField.id] = existingOption;
            } else {
              // 如果不存在，尝试找到一个通用选项
              let fallbackOption = courierOptions.property.options.find(
                opt => opt.name === "其他" || opt.name === "未知快递"
              );
              
              if (!fallbackOption && courierOptions.property.options.length > 0) {
                // 如果没有通用选项，使用第一个可用选项
                fallbackOption = courierOptions.property.options[0];
              }
              
              if (fallbackOption) {
                fieldsToUpdate[courierField.id] = fallbackOption;
                console.log('使用回退快递公司选项:', fallbackOption);
              } else {
                console.error('没有找到任何可用的快递公司选项');
              }
            }
          } else {
            console.error('快递公司字段无选项配置，无法更新');
          }
        } catch (error) {
          console.error('处理快递公司字段时出错:', error);
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
    try {
      await currentTable.setRecord(record.recordId, { fields: fieldsToUpdate });
    } catch (updateError) {
      console.error('批量更新字段失败，错误信息:', updateError);
      
      // 如果批量更新失败，尝试逐个字段更新
      console.log('尝试逐个字段更新...');
      // 依次更新每个字段
      for (const [fieldId, value] of Object.entries(fieldsToUpdate)) {
        try {
          // 特殊处理单选字段 - 避免无id的问题
          if ((statusField && fieldId === statusField.id) || 
              (courierField && fieldId === courierField.id)) {
            // 确保是有效的单选项对象（包含id）
            if (typeof value === 'object' && value !== null && 'id' in value) {
              console.log(`更新单选字段 ${fieldId}，值:`, value);
              await currentTable.setCellValue(fieldId, record.recordId, value);
            } else {
              console.error(`跳过单选字段 ${fieldId} 的更新，值无效:`, value);
            }
          } else {
            // 其他字段正常更新
            await currentTable.setCellValue(fieldId, record.recordId, value);
          }
        } catch (err) {
          console.error(`更新字段 ${fieldId} 失败:`, err);
        }
      }
    }
  } catch (error) {
    console.error('批量更新字段失败:', error);
    
    // 如果批量更新失败，尝试逐个字段更新
    console.log('尝试另一种方式逐个字段更新...');
    try {
      // 依次更新每个字段
      for (const [fieldId, value] of Object.entries(fieldsToUpdate)) {
        try {
          // 特殊处理单选字段
          if ((statusField && fieldId === statusField.id) || 
              (courierField && fieldId === courierField.id)) {
            // 仅处理有效的单选项对象
            if (typeof value === 'object' && value !== null && 'id' in value) {
              console.log(`更新单选字段 ${fieldId}，值:`, value);
              await currentTable.setCellValue(fieldId, record.recordId, value);
            } else {
              console.error(`跳过单选字段 ${fieldId} 的更新，值无效:`, value);
            }
          } else {
            await currentTable.setCellValue(fieldId, record.recordId, value);
          }
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
