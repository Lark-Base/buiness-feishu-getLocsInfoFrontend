<template>
  <div class="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50/30">
    <!-- 公告栏 - 魔法设计 -->
    <div v-if="showAnnouncement" class="max-w-[420px] mx-auto px-3 pt-3">
      <div class="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50 backdrop-blur !rounded-2xl border border-primary/10 shadow-lg p-5 group">
        <!-- 装饰圆圈 -->
        <div class="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-primary/30 to-blue-300/30 rounded-full opacity-70"></div>
        <div class="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-tr from-indigo-300/20 to-primary/20 rounded-full opacity-60"></div>
        
        <!-- 闪光效果 -->
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-in-out"></div>
        
        <div class="relative flex items-start gap-4">
          <!-- 左侧图标 -->
          <div class="shrink-0 w-10 h-10 bg-white !rounded-xl flex items-center justify-center shadow-md relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-indigo-400/10 opacity-70"></div>
            <div class="relative z-10 flex items-center justify-center">
              <i class="fas fa-bell text-primary text-sm animate-pulse"></i>
            </div>
          </div>
          
          <!-- 右侧内容 -->
          <div class="flex-1 min-w-0">
            <div class="flex items-start justify-between mb-2">
              <div class="flex items-center gap-2">
                <div class="h-5 bg-gradient-to-r from-primary to-blue-500 !rounded-full px-2.5 flex items-center">
                  <span class="text-white text-xs font-medium">最新</span>
                </div>
                <h3 class="bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent font-medium text-sm">插件更新提醒</h3>
              </div>
              <button @click="closeAnnouncement" class="text-primary/60 hover:text-primary/80 transition-colors p-1.5 hover:bg-white/80 !rounded-full">
                <i class="fas fa-times text-xs"></i>
              </button>
            </div>
            
            <div class="bg-white/60 backdrop-blur-sm !rounded-xl p-3 shadow-sm mb-3 border border-primary/5">
              <p class="text-gray-600 text-sm leading-relaxed break-words">新版本已发布，以往购买的 apikey 可联系开发者回收</p>
            </div>
            
            <div class="flex items-center justify-between">
              <span class="text-gray-500 text-xs flex items-center gap-1 bg-white/50 px-2 py-1 !rounded-full">
                <i class="fas fa-clock text-primary/60 text-[10px]"></i>
                2024-03-23 10:30
              </span>
              <a href="https://www.feishu.cn/invitation/page/add_contact/?token=f7aof1e6-25ae-433a-affd-fd9164dfef96&amp;unique_id=bAZU6WdTe_thJ89teW6Djw==" 
                 target="_blank" 
                 class="bg-gradient-to-r from-primary to-blue-500 text-white text-xs font-medium hover:shadow-lg transition-all flex items-center gap-1.5 px-3 py-1.5 !rounded-full shadow-md group-hover:scale-105 duration-300">
                <span>联系开发者</span>
                <i class="fas fa-arrow-right text-[10px] group-hover:translate-x-0.5 transition-transform"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 主体内容 - 魔法版 -->
    <div class="flex-1 flex justify-center items-center p-2">
      <div class="relative bg-white/80 backdrop-blur-sm w-full max-w-[420px] min-h-[762px] text-gray-800 shadow-xl !rounded-3xl border border-white/50 overflow-hidden">
        <!-- 魔法装饰元素 -->
        <div class="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/10 to-indigo-300/10 rounded-full opacity-60"></div>
        <div class="absolute -bottom-10 -left-10 w-28 h-28 bg-gradient-to-tr from-blue-300/10 to-primary/10 rounded-full opacity-50"></div>
        <div class="absolute top-1/3 right-0 w-3 h-20 bg-gradient-to-b from-primary/30 to-transparent opacity-40 blur-sm"></div>
        <div class="absolute top-2/3 left-0 w-3 h-20 bg-gradient-to-b from-blue-400/20 to-transparent opacity-40 blur-sm"></div>
        
        <!-- 内容容器 -->
        <div class="relative px-6 pt-6 pb-24">
          <div class="space-y-6">
            <!-- API 介绍 - 高级魔法版 -->
            <div class="group/api relative p-6 bg-gradient-to-br from-primary/5 via-blue-50/50 to-primary/10 backdrop-blur !rounded-2xl border border-primary/10 shadow-sm overflow-hidden hover:shadow-md transition-all duration-500">
              <!-- 增强装饰元素 -->
              <div class="absolute right-3 top-1/2 -translate-y-1/2 w-28 h-28 bg-gradient-to-br from-primary/20 to-blue-300/0 rounded-full opacity-70 blur-xl group-hover:scale-110 group-hover:opacity-90 transition-all duration-700"></div>
              <div class="absolute left-0 -bottom-2 w-1/3 h-2 bg-gradient-to-r from-transparent via-primary/20 to-transparent group-hover:via-primary/30 transition-colors duration-500"></div>
              
              <!-- 新增魔法光效 -->
              <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none">
                <!-- 发光边框 -->
                <div class="absolute -inset-0.5 bg-gradient-to-br from-blue-200/10 via-primary/10 to-blue-300/5 !rounded-2xl blur-sm"></div>
                <!-- 顶部光线 -->
                <div class="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent transform translate-y-px"></div>
                <!-- 漂浮光点 -->
                <div class="absolute w-8 h-8 bg-blue-400/10 !rounded-full blur-xl left-1/3 top-0 animate-float-slow"></div>
                <div class="absolute w-6 h-6 bg-primary/10 !rounded-full blur-lg right-1/4 bottom-1/4 animate-float"></div>
              </div>
              
              <!-- 标题栏带标志 -->
              <div class="relative flex items-center gap-3 mb-4">
                <div class="h-10 w-10 flex-shrink-0 bg-white !rounded-xl shadow-md flex items-center justify-center relative overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-400/5"></div>
                  <div class="relative z-10">
                    <i class="fas fa-truck text-primary text-lg group-hover:scale-110 transition-transform"></i>
                  </div>
                </div>
                <h1 class="text-xl font-semibold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent group-hover:scale-[1.01] origin-left transition-transform">物流信息查询</h1>
              </div>
              
              <!-- 描述文本 -->
              <div class="relative bg-white/50 backdrop-blur-sm p-3 !rounded-xl mb-4 border border-primary/5 shadow-sm">
                <p class="text-gray-600 text-sm leading-relaxed">提供全面的快递物流查询服务，支持国内外超过 500 家快递公司，实时跟踪包裹状态，准确率高达 99.9%。</p>
              </div>
              
              <!-- 功能标签 -->
              <div class="relative flex flex-wrap items-center gap-3">
                <div class="flex items-center gap-2 bg-white/80 px-3 py-1.5 !rounded-full shadow-sm border border-primary/5 hover:bg-white hover:shadow transition-all">
                  <div class="w-5 h-5 bg-primary/10 !rounded-full flex items-center justify-center">
                    <i class="fas fa-rocket text-primary text-xs"></i>
                  </div>
                  <span class="text-sm text-gray-600 font-medium">秒级响应</span>
                </div>
                <div class="flex items-center gap-2 bg-white/80 px-3 py-1.5 !rounded-full shadow-sm border border-primary/5 hover:bg-white hover:shadow transition-all">
                  <div class="w-5 h-5 bg-primary/10 !rounded-full flex items-center justify-center">
                    <i class="fas fa-shield-alt text-primary text-xs"></i>
                  </div>
                  <span class="text-sm text-gray-600 font-medium">数据安全加密</span>
                </div>
              </div>
            </div>

            <!-- 查询额度 - 魔法版 -->
            <div class="pt-4">
              <div class="flex items-center mb-4">
                <div class="w-1 h-5 bg-gradient-to-b from-primary to-blue-400 !rounded-full mr-2"></div>
                <h2 class="text-base font-medium bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">查询余量</h2>
                <div class="ml-2 text-xs text-gray-500 flex items-center gap-1 bg-gray-50 px-2 py-0.5 !rounded-full border border-gray-100">
                  <i class="fas fa-sync-alt text-[10px]"></i>
                  <span>每日刷新</span>
                </div>
                <p class="ml-auto text-xs text-gray-500">仅针对当前多维表格</p>
              </div>
              
              <div class="grid grid-cols-2 gap-4">
                <!-- 国内查询卡片 -->
                <div class="group relative bg-gradient-to-br from-white to-blue-50/30 p-4 !rounded-2xl shadow-md border border-gray-100 hover:border-primary/20 transition-all hover:shadow-lg overflow-hidden">
                  <!-- 装饰效果 -->
                  <div class="absolute -right-2 -top-2 w-16 h-16 bg-gradient-to-br from-primary/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <!-- 悬浮光效 -->
                  <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none">
                    <!-- 顶部光晕 -->
                    <div class="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                    <!-- 四周发光边框 -->
                    <div class="absolute -inset-0.5 bg-gradient-to-br from-primary/0 via-primary/10 to-blue-300/10 !rounded-2xl blur-sm"></div>
                    <!-- 内部光点 -->
                    <div class="absolute top-1/3 right-1/4 w-10 h-10 bg-primary/5 rounded-full blur-xl animate-pulse"></div>
                  </div>
                  
                  <div class="relative">
                    <!-- 标题和数值 - 垂直布局改进版 -->
                    <div class="mb-3">
                      <div class="flex items-center justify-between mb-2">
                        <div class="flex items-center gap-2">
                          <div class="w-6 h-6 bg-primary/10 !rounded-lg flex items-center justify-center">
                            <i class="fas fa-map-marker-alt text-primary text-xs"></i>
                          </div>
                          <span class="text-sm font-medium text-gray-700">国内查询</span>
                        </div>
                        <button @click="showDomesticQuotaInfo = !showDomesticQuotaInfo" 
                                class="h-7 px-2 bg-primary/5 !rounded-lg flex items-center gap-1.5 hover:bg-primary/10 transition-colors">
                          <i class="fas fa-info-circle text-primary text-xs"></i>
                          <span class="text-xs text-primary font-medium">详情</span>
                        </button>
                      </div>
                      
                      <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                          <div class="text-primary font-semibold text-xl">{{ formatNumber(domesticQuota) }}</div>
                          <div class="text-xs text-gray-500 bg-gray-50 px-2 py-0.5 !rounded-full">可用次数</div>
                        </div>
                      </div>
                      
                      <!-- 详细信息弹出框 -->
                      <div v-if="showDomesticQuotaInfo" 
                           class="mt-2 p-2 bg-white border border-primary/10 !rounded-lg shadow-lg">
                        <div class="text-xs text-gray-500 mb-1">精确余量</div>
                        <div class="flex items-center justify-between">
                          <div class="font-bold text-primary text-base">{{ domesticQuota }} 次</div>
                          <button @click="copyToClipboard(domesticQuota, 'domestic')" 
                                  class="h-6 w-6 bg-primary/5 !rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors">
                            <i class="fas fa-copy text-primary text-[8px]"></i>
                          </button>
                        </div>
                        <div v-if="copiedType === 'domestic'" class="text-[10px] text-green-500 mt-0.5">已复制!</div>
                      </div>
                    </div>
                    
                    <!-- 增强进度条 -->
                    <div class="relative w-full bg-gray-100 !rounded-full h-2 mb-3 overflow-hidden">
                      <div class="h-full bg-gradient-to-r from-primary to-blue-500 !rounded-full shadow-sm transition-all duration-500 ease-out" 
                           :style="{ width: `${Math.min((domesticQuota / 5000) * 100, 100)}%` }"></div>
                      <!-- 进度条上的闪光效果 -->
                      <div class="absolute inset-0 w-full h-full opacity-30 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                    </div>
                    
                    <!-- 余额不足提示 -->
                    <div v-if="domesticQuota < 100" 
                         class="mb-2 flex items-center gap-1.5 text-xs text-red-500 bg-red-50/70 px-2 py-1 !rounded-lg border border-red-100/50">
                      <i class="fas fa-exclamation-circle text-[10px]"></i>
                      <span>余额不足，请及时充值</span>
                    </div>
                    
                    <!-- 改进的充值按钮 -->
                    <button @click="togglePaymentModal" 
                            class="w-full h-8 bg-gradient-to-r from-primary to-blue-600 text-white text-xs font-medium !rounded-lg flex items-center justify-center shadow-sm hover:shadow group-hover:scale-[1.01] transition-all">
                      <i class="fas fa-wallet text-xs mr-1.5"></i>
                      <span>立即充值</span>
                    </button>
                  </div>
                </div>
                
                <!-- 国际查询卡片 - 增加光效 -->
                <div class="group relative bg-gradient-to-br from-white to-indigo-50/20 p-4 !rounded-2xl shadow-md border border-gray-100 hover:border-indigo-200/50 transition-all hover:shadow-lg overflow-hidden">
                  <!-- 装饰效果 -->
                  <div class="absolute -right-2 -top-2 w-16 h-16 bg-gradient-to-br from-indigo-400/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <!-- 悬浮光效 -->
                  <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none">
                    <!-- 顶部光晕 -->
                    <div class="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-indigo-300/20 to-transparent"></div>
                    <!-- 四周发光边框 -->
                    <div class="absolute -inset-0.5 bg-gradient-to-br from-indigo-200/0 via-indigo-300/10 to-indigo-400/5 !rounded-2xl blur-sm"></div>
                    <!-- 内部光点 -->
                    <div class="absolute top-1/3 right-1/4 w-10 h-10 bg-indigo-400/5 rounded-full blur-xl animate-pulse"></div>
                  </div>
                  
                  <div class="relative">
                    <!-- 标题和数值 - 垂直布局改进版 -->
                    <div class="mb-3">
                      <div class="flex items-center justify-between mb-2">
                        <div class="flex items-center gap-2">
                          <div class="w-6 h-6 bg-indigo-50 !rounded-lg flex items-center justify-center">
                            <i class="fas fa-globe text-indigo-500 text-xs"></i>
                          </div>
                          <span class="text-sm font-medium text-gray-700">国际查询</span>
                        </div>
                        <button @click="showInternationalQuotaInfo = !showInternationalQuotaInfo" 
                                class="h-7 px-2 bg-indigo-50 !rounded-lg flex items-center gap-1.5 hover:bg-indigo-100 transition-colors">
                          <i class="fas fa-info-circle text-indigo-500 text-xs"></i>
                          <span class="text-xs text-indigo-500 font-medium">详情</span>
                        </button>
                      </div>
                      
                      <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                          <div class="text-indigo-500 font-semibold text-xl">{{ formatNumber(internationalQuota) }}</div>
                          <div class="text-xs text-gray-500 bg-gray-50 px-2 py-0.5 !rounded-full">可用次数</div>
                        </div>
                      </div>
                      
                      <!-- 详细信息弹出框 -->
                      <div v-if="showInternationalQuotaInfo" 
                           class="mt-2 p-2 bg-white border border-indigo-200/50 !rounded-lg shadow-lg">
                        <div class="text-xs text-gray-500 mb-1">精确余量</div>
                        <div class="flex items-center justify-between">
                          <div class="font-bold text-indigo-500 text-base">{{ internationalQuota }} 次</div>
                          <button @click="copyToClipboard(internationalQuota, 'international')" 
                                  class="h-6 w-6 bg-indigo-50 !rounded-full flex items-center justify-center hover:bg-indigo-100 transition-colors">
                            <i class="fas fa-copy text-indigo-500 text-[8px]"></i>
                          </button>
                        </div>
                        <div v-if="copiedType === 'international'" class="text-[10px] text-green-500 mt-0.5">已复制!</div>
                      </div>
                    </div>
                    
                    <!-- 增强进度条 -->
                    <div class="relative w-full bg-gray-100 !rounded-full h-2 mb-3 overflow-hidden">
                      <div class="h-full bg-gradient-to-r from-indigo-500 to-blue-400 !rounded-full shadow-sm transition-all duration-500 ease-out" 
                           :style="{ width: `${Math.min((internationalQuota / 5000) * 100, 100)}%` }"></div>
                      <!-- 进度条上的闪光效果 -->
                      <div class="absolute inset-0 w-full h-full opacity-30 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                    </div>
                    
                    <!-- 余额不足提示 -->
                    <div v-if="internationalQuota < 100" 
                         class="mb-2 flex items-center gap-1.5 text-xs text-red-500 bg-red-50/70 px-2 py-1 !rounded-lg border border-red-100/50">
                      <i class="fas fa-exclamation-circle text-[10px]"></i>
                      <span>余额不足，请及时充值</span>
                    </div>
                    
                    <!-- 即将上线提示 -->
                    <div class="flex items-center justify-center gap-1.5 bg-indigo-50/80 py-1.5 !rounded-lg border border-indigo-100/50">
                      <div class="relative w-2 h-2">
                        <div class="absolute inset-0 bg-indigo-400/50 !rounded-full animate-ping"></div>
                        <div class="absolute inset-0 bg-indigo-500 !rounded-full"></div>
                      </div>
                      <span class="text-xs font-medium text-indigo-600">国际查询功能即将上线</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 错误提示 -->
            <div v-if="errorMessage && hasError" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 !rounded-lg mb-4">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm whitespace-pre-line">{{ errorMessage }}</p>
                </div>
              </div>
            </div>

            <!-- 成功提示 -->
            <div v-if="successMessage" class="bg-green-50 border border-green-200 text-green-700 px-4 py-3 !rounded-lg mb-4">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm whitespace-pre-line">{{ successMessage }}</p>
                </div>
              </div>
            </div>

            <!-- 字段选择 - 魔法版 -->
            <div class="pt-4">
              <div class="flex items-center mb-4">
                <div class="w-1 h-5 bg-gradient-to-b from-primary to-blue-400 !rounded-full mr-2"></div>
                <h2 class="text-base font-medium bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">选择快递单号字段</h2>
                <div class="ml-auto">
                  <button @click="clearCache" 
                          class="group/reset text-sm text-gray-500 hover:text-primary transition-colors flex items-center gap-1.5 bg-gray-50 hover:bg-white px-3 py-1 !rounded-full border border-gray-100 hover:border-primary/20 hover:shadow-sm">
                    <i class="fas fa-sync-alt text-xs group-hover/reset:rotate-180 transition-transform duration-500"></i>
                    <span>重置选择</span>
                  </button>
                </div>
              </div>
              
              <div class="relative">
                <!-- 选择器按钮 -->
                <button @click="showFieldSelector = !showFieldSelector" 
                        :class="[
                          'group/selector w-full h-12 px-4 bg-white/90 shadow-sm border !rounded-xl flex items-center justify-between transition-all hover:shadow',
                          selectedField 
                            ? 'border-primary/30 bg-blue-50/30' 
                            : 'border-gray-200 hover:border-gray-300'
                        ]">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 bg-primary/5 !rounded-lg flex items-center justify-center">
                      <i class="fas fa-table text-primary group-hover/selector:scale-110 transition-transform"></i>
                    </div>
                    <div class="flex flex-col">
                      <span class="text-gray-700 text-sm font-medium truncate">
                        {{ selectedField ? selectedField.name : '请选择字段' }}
                      </span>
                      <span v-if="selectedField" class="text-xs text-gray-500">已选择字段</span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <div v-if="viewRecords.length > 0" 
                         class="flex items-center gap-1 px-2 py-0.5 bg-primary/5 !rounded-full">
                      <i class="fas fa-list-ul text-primary text-[10px]"></i>
                      <span class="text-xs font-medium text-primary">
                        {{ viewRecords.length }}条记录
                      </span>
                    </div>
                    <div class="w-6 h-6 flex items-center justify-center">
                      <i :class="[
                        'fas transition-transform duration-300', 
                        showFieldSelector ? 'fa-chevron-up text-primary' : 'fa-chevron-down text-gray-400 group-hover/selector:text-primary'
                      ]"></i>
                    </div>
                  </div>
                </button>
                
                <!-- 字段选择下拉框 -->
                <div v-if="showFieldSelector" 
                     class="absolute z-10 w-full mt-2 bg-white/95 backdrop-blur-sm border border-primary/10 !rounded-xl shadow-xl max-h-60 overflow-y-auto">
                  <!-- 字段列表 -->
                  <div class="p-2">
                    <div v-for="field in tableFields" 
                         :key="field.id" 
                         @click="selectField(field)"
                         class="group/field px-3 py-2.5 cursor-pointer flex items-center justify-between transition-all !rounded-lg hover:bg-gray-50">
                      <div class="flex items-center gap-3">
                        <div :class="[
                          'w-7 h-7 !rounded-lg flex items-center justify-center transition-colors',
                          selectedField && selectedField.id === field.id
                            ? 'bg-primary/10'
                            : 'bg-gray-100 group-hover/field:bg-gray-200/80'
                        ]">
                          <i :class="[
                            'fas fa-font text-sm',
                            selectedField && selectedField.id === field.id
                              ? 'text-primary'
                              : 'text-gray-500'
                          ]"></i>
                        </div>
                        <span :class="[
                          'text-sm font-medium truncate',
                          selectedField && selectedField.id === field.id
                            ? 'text-primary'
                            : 'text-gray-700 group-hover/field:text-gray-900'
                        ]">{{ field.name }}</span>
                      </div>
                      <i v-if="selectedField && selectedField.id === field.id" 
                         class="fas fa-check text-primary"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 操作按钮 - 魔法版 -->
            <div class="mt-10">
              <div class="relative overflow-hidden">
                <button @click="batchQuery"
                        :disabled="isLoading || !selectedField || viewRecords.length === 0"
                        :class="[
                          'group/query w-full h-12 px-6 relative overflow-hidden',
                          isLoading || !selectedField || viewRecords.length === 0 
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed !rounded-xl'
                            : 'bg-gradient-to-r from-primary to-blue-600 text-white hover:shadow-blue-200/50 hover:shadow-xl active:scale-[0.98] !rounded-xl'
                        ]">
                  
                  <!-- 按钮背景效果 - 增强版 -->
                  <div v-if="!isLoading && selectedField && viewRecords.length > 0" 
                       class="absolute inset-0 w-full h-full opacity-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/query:translate-x-full group-hover/query:opacity-100 transition-all duration-1000 ease-in-out"></div>
                  
                  <!-- 鼠标悬浮光效 - 高级魔法版 -->
                  <div v-if="!isLoading && selectedField && viewRecords.length > 0"
                       class="absolute inset-0 w-full h-full opacity-0 group-hover/query:opacity-100 transition-opacity duration-300">
                    <!-- 基础光晕 -->
                    <div class="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/5 to-primary/0 rounded-xl blur-md"></div>
                    <!-- 脉动边框 -->
                    <div class="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-blue-400/20 to-primary/0 rounded-xl opacity-0 group-hover/query:opacity-100 transition-opacity duration-700 animate-pulse"></div>
                    <!-- 光环效果 -->
                    <div class="absolute inset-0 overflow-hidden">
                      <div class="w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-[20deg] -translate-x-full group-hover/query:animate-shine"></div>
                    </div>
                    <!-- 角落闪光点 -->
                    <div class="absolute w-2 h-2 rounded-full bg-white/80 blur-sm top-2 right-2 opacity-0 group-hover/query:animate-twinkle"></div>
                    <div class="absolute w-1.5 h-1.5 rounded-full bg-white/80 blur-sm bottom-3 left-4 opacity-0 group-hover/query:animate-twinkle-delayed"></div>
                  </div>
                  
                  <!-- 网格布局 -->
                  <div class="grid grid-cols-3 items-center h-full relative z-10">
                    <!-- 左侧图标 -->
                    <div class="flex justify-start">
                      <div class="w-7 h-7 flex-shrink-0 flex items-center justify-center bg-white/10 !rounded-lg">
                        <i v-if="isLoading" class="fas fa-spinner fa-spin text-white"></i>
                        <i v-else class="fas fa-play text-white text-sm"></i>
                      </div>
                    </div>
                    
                    <!-- 中间文字 - 完全居中 -->
                    <div class="flex justify-center items-center">
                      <span class="font-medium text-base whitespace-nowrap">{{ isLoading ? '处理中...' : '开始查询' }}</span>
                    </div>
                    
                    <!-- 右侧状态 -->
                    <div class="flex justify-end">
                      <div v-if="!isLoading && selectedField && viewRecords.length > 0" 
                           class="flex items-center gap-1.5">
                        <div class="relative w-2 h-2">
                          <div class="absolute inset-0 bg-white !rounded-full animate-ping opacity-70"></div>
                          <div class="absolute inset-0 bg-white !rounded-full"></div>
                        </div>
                        <span class="text-xs font-medium text-white/90">就绪</span>
                      </div>
                      <!-- 占位元素 -->
                      <div v-else class="w-7 h-7 opacity-0"></div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 支付按钮 -->
    <button @click="togglePaymentModal" 
            class="fixed bottom-8 left-6 h-12 w-12 bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg !rounded-full flex items-center justify-center hover:opacity-90 transition-all group">
      <i class="fas fa-wallet text-lg"></i>
      <div class="absolute left-full ml-2 bg-gray-800 text-white text-xs px-2 py-1 !rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        充值查询额度
      </div>
    </button>

    <!-- 右侧工具栏 -->
    <div class="fixed bottom-8 right-6 flex flex-col gap-2 items-end">
      <button @click="toggleGroupQRModal" 
              class="h-9 w-9 bg-white text-gray-600 shadow-lg !rounded-xl flex items-center justify-center hover:text-primary transition-colors border border-gray-100 hover:border-primary/10 hover:shadow-xl">
        <i class="fas fa-comments"></i>
      </button>
      <button @click="openDocumentation" 
              class="h-9 px-3 bg-white text-gray-600 shadow-lg !rounded-xl flex items-center justify-center hover:text-primary transition-colors border border-gray-100 hover:border-primary/10 hover:shadow-xl space-x-2">
        <i class="fas fa-book"></i>
        <span class="text-sm">使用文档</span>
      </button>
      <button @click="openFeedback" 
              class="h-9 px-3 bg-white text-gray-600 shadow-lg !rounded-xl flex items-center justify-center hover:text-primary transition-colors border border-gray-100 hover:border-primary/10 hover:shadow-xl space-x-2">
        <i class="fas fa-pencil-alt"></i>
        <span class="text-sm">问题反馈</span>
      </button>
    </div>

    <!-- 支付弹窗 -->
    <div v-if="showPaymentModal" 
         class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
         @click.self="togglePaymentModal">
      <div class="bg-white !rounded-xl w-full max-w-md p-6 space-y-6">
        <!-- 支付弹窗标题 -->
        <div class="flex justify-between items-center">
          <h3 class="font-medium text-lg flex items-center gap-2">
            <i class="fas fa-crown text-amber-500"></i>
            <span>增值服务套餐</span>
          </h3>
          <button @click="togglePaymentModal" class="text-gray-400 hover:text-gray-600 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
            <i class="fas fa-times"></i>
          </button>
        </div>
        
        <!-- 套餐选择 -->
        <div v-if="!selectedPackage" class="space-y-5">
          <!-- 国内套餐 -->
          <div>
            <h4 class="text-base font-medium mb-3 flex items-center gap-2">
              <span class="py-1 px-3 bg-blue-50 text-primary text-sm rounded-full">国内套餐</span>
              <div class="h-px flex-1 bg-gradient-to-r from-blue-100 to-transparent"></div>
            </h4>
            <div v-if="isLoadingPackages" class="flex justify-center py-4">
              <i class="fas fa-spinner fa-spin text-primary"></i>
            </div>
            <div v-else-if="domesticPackages.length === 0" class="text-center py-4 text-gray-500 text-sm">
              暂无可用的国内套餐
            </div>
            <div v-else class="grid grid-cols-2 gap-3">
              <div v-for="pkg in domesticPackages" 
                   :key="pkg.id"
                   :class="[
                     'p-3 !rounded-xl border transition-all cursor-pointer relative group',
                     pkg.popular 
                       ? 'bg-gradient-to-r from-primary/5 to-blue-50 border-primary/20 hover:shadow-md hover:border-primary/30' 
                       : 'bg-white border-gray-100 hover:shadow hover:border-primary/10'
                   ]"
                   @click="handlePayment(pkg.id)">
                <!-- 标签 -->
                <div v-if="pkg.tag" 
                     :class="[
                       'absolute -top-2 right-3 px-2 py-0.5 text-xs font-medium !rounded-full shadow-sm',
                       pkg.popular 
                         ? 'bg-primary text-white' 
                         : 'bg-primary/10 text-primary'
                     ]">
                  {{ pkg.tag }}
                </div>
                
                <!-- 套餐内容 -->
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center gap-2">
                    <div :class="[
                      'w-7 h-7 shrink-0 rounded-lg flex items-center justify-center',
                      pkg.popular ? 'bg-primary/10' : 'bg-gray-50'
                    ]">
                      <i class="fas fa-box text-primary text-[10px]"></i>
                    </div>
                    <div class="min-w-0 flex-1">
                      <span class="font-medium text-xs line-clamp-1">{{ pkg.name }}</span>
                      <p class="text-xs text-gray-500 mt-0.5 line-clamp-1">{{ pkg.description }}</p>
                    </div>
                  </div>
                  <div class="text-right flex flex-col items-end ml-1">
                    <div class="flex items-baseline gap-0.5">
                      <span class="text-xs text-gray-500">¥</span>
                      <span class="text-sm font-medium text-primary">{{ pkg.price }}</span>
                    </div>
                    <p class="text-xs text-gray-500 whitespace-nowrap">{{ formatNumber(pkg.quota) }}次</p>
                  </div>
                </div>
                
                <!-- 价格对比 -->
                <div class="flex items-center justify-between text-xs">
                  <div class="flex items-center gap-1 text-gray-500 truncate">
                    <i class="fas fa-calculator text-[10px]"></i>
                    <span class="text-[10px]">约{{ formatUnitPrice(pkg.price, pkg.quota) }}元/千次</span>
                  </div>
                  <div class="text-primary group-hover:translate-x-1 transition-transform duration-300">
                    <i class="fas fa-chevron-right text-[10px]"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 国际套餐 -->
          <div v-if="internationalPackages.length > 0">
            <h4 class="text-base font-medium mb-3 flex items-center gap-2">
              <span class="py-1 px-3 bg-indigo-50 text-indigo-600 text-sm rounded-full">国际套餐</span>
              <div class="h-px flex-1 bg-gradient-to-r from-indigo-100 to-transparent"></div>
            </h4>
            <div v-if="isLoadingPackages" class="flex justify-center py-4">
              <i class="fas fa-spinner fa-spin text-indigo-600"></i>
            </div>
            <div v-else class="grid grid-cols-2 gap-3">
              <div v-for="pkg in internationalPackages" 
                   :key="pkg.id"
                   :class="[
                     'p-3 !rounded-xl border transition-all cursor-pointer relative group',
                     pkg.popular 
                       ? 'bg-gradient-to-r from-indigo-50/50 to-blue-50/50 border-indigo-200/50 hover:shadow-md hover:border-indigo-300/50' 
                       : 'bg-white border-gray-100 hover:shadow hover:border-indigo-200/30'
                   ]"
                   @click="handlePayment(pkg.id)">
                <!-- 标签 -->
                <div v-if="pkg.tag" 
                     :class="[
                       'absolute -top-2 right-3 px-2 py-0.5 text-xs font-medium !rounded-full shadow-sm',
                       pkg.popular 
                         ? 'bg-indigo-600 text-white' 
                         : 'bg-indigo-100 text-indigo-600'
                     ]">
                  {{ pkg.tag }}
                </div>
                
                <!-- 套餐内容 -->
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center gap-2">
                    <div :class="[
                      'w-7 h-7 shrink-0 rounded-lg flex items-center justify-center',
                      pkg.popular ? 'bg-primary/10' : 'bg-gray-50'
                    ]">
                      <i class="fas fa-box text-primary text-[10px]"></i>
                    </div>
                    <div class="min-w-0 flex-1">
                      <span class="font-medium text-xs line-clamp-1">{{ pkg.name }}</span>
                      <p class="text-xs text-gray-500 mt-0.5 line-clamp-1">{{ pkg.description }}</p>
                    </div>
                  </div>
                  <div class="text-right flex flex-col items-end ml-1">
                    <div class="flex items-baseline gap-0.5">
                      <span class="text-xs text-gray-500">¥</span>
                      <span class="text-sm font-medium text-primary">{{ pkg.price }}</span>
                    </div>
                    <p class="text-xs text-gray-500 whitespace-nowrap">{{ formatNumber(pkg.quota) }}次</p>
                  </div>
                </div>
                
                <!-- 价格对比 -->
                <div class="flex items-center justify-between text-xs">
                  <div class="flex items-center gap-1 text-gray-500 truncate">
                    <i class="fas fa-calculator text-[10px]"></i>
                    <span class="text-[10px]">约{{ formatUnitPrice(pkg.price, pkg.quota) }}元/千次</span>
                  </div>
                  <div class="text-indigo-600 group-hover:translate-x-1 transition-transform duration-300">
                    <i class="fas fa-chevron-right text-[10px]"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 支付二维码 -->
        <div v-else class="space-y-4">
          <div class="text-center space-y-3">
            <h4 class="text-base font-medium">请使用支付宝扫码支付</h4>
            <div class="text-sm text-gray-500 mb-2">{{ selectedPackage?.name || '加载中...' }} - ¥{{ selectedPackage?.price || '0.00' }}</div>
            
            <div class="bg-white p-2 !rounded-lg border border-gray-100 mx-auto w-56 h-56 flex items-center justify-center">
              <img v-if="orderInfo && orderInfo.qrcode_url" 
                   :src="orderInfo.qrcode_url" 
                   alt="支付二维码" 
                   class="w-full h-full object-contain !rounded-lg" />
              <div v-else class="text-center text-gray-500">
                <i class="fas fa-spinner fa-spin text-xl mb-2"></i>
                <p class="text-sm">加载中...</p>
              </div>
            </div>
            
            <p class="text-xs text-gray-500 mt-2">订单号: {{ orderInfo?.order_id || '加载中...' }}</p>
          </div>
          
          <!-- 支付提示区域 -->
          <div v-if="paymentCheckMessage" 
               class="bg-yellow-50 border border-yellow-200 !rounded-lg p-3 text-sm text-yellow-700 flex items-start gap-2">
            <i class="fas fa-exclamation-circle text-yellow-500 mt-0.5"></i>
            <span>{{ paymentCheckMessage }}</span>
          </div>
          
          <div class="flex gap-2">
            <button @click="selectedPackage = null" 
                    class="flex-1 h-10 border border-gray-200 !rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
              返回
            </button>
            <button @click="checkPaymentStatus" 
                    data-check-payment
                    class="flex-1 h-10 bg-primary text-white !rounded-lg hover:bg-primary/90 transition-colors">
              完成支付
            </button>
          </div>
        </div>
        
        <!-- 套餐说明 -->
        <div class="bg-gradient-to-r from-blue-50/70 to-indigo-50/70 !rounded-xl p-3 text-xs space-y-2 border border-blue-100/40">
          <div class="flex items-start gap-2">
            <i class="fas fa-info-circle shrink-0 mt-0.5 text-blue-500" style="width: 14px; height: 14px;"></i>
            <span class="text-gray-600">套餐可叠加购买，额度永久有效，支付后立即生效</span>
          </div>
          <div class="flex items-start gap-2">
            <i class="fas fa-exclamation-triangle shrink-0 mt-0.5 text-amber-500" style="width: 14px; height: 14px;"></i>
            <span class="text-gray-600 font-medium">重要：额度与当前多维表格绑定，更换表格后额度不可用</span>
          </div>
          <div class="mt-1 p-2 bg-amber-50 border border-amber-100 !rounded-lg">
            <div class="flex items-start gap-2">
              <i class="fas fa-lightbulb shrink-0 mt-0.5 text-amber-500" style="width: 14px; height: 14px;"></i>
              <span class="text-gray-700">当前表格ID: <span class="text-amber-600 select-all" id="currentBaseId"></span></span>
            </div>
            <div class="mt-1 text-gray-600">所有成员共享额度，务必在确认使用的表格中购买</div>
          </div>
          <a href="https://www.feishu.cn/invitation/page/add_contact/?token=f7aof1e6-25ae-433a-affd-fd9164dfef96&amp;unique_id=bAZU6WdTe_thJ89teW6Djw==" 
            target="_blank" 
            class="flex items-center justify-center gap-2 mt-1 py-1.5 bg-white !rounded-lg text-primary hover:bg-blue-50 transition-colors border border-blue-100 group">
            <i class="fas fa-headset text-xs"></i>
            <span class="font-medium">联系开发者换绑或解决问题</span>
            <i class="fas fa-arrow-right text-[10px] opacity-0 group-hover:opacity-100 transition-opacity"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- 支付成功弹窗 -->
    <div v-if="showPaymentSuccessModal" 
         class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div class="bg-white !rounded-xl w-full max-w-sm p-6 space-y-4">
        <div class="flex justify-between items-center">
          <h3 class="text-lg font-semibold">支付成功</h3>
          <button @click="showPaymentSuccessModal = false" class="text-gray-400 hover:text-gray-600">
            <i class="fas fa-times" style="width: 20px; height: 20px; display: flex; justify-content: center; align-items: center;"></i>
          </button>
        </div>
        <div class="text-center space-y-3">
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <i class="fas fa-check text-green-500 text-2xl"></i>
          </div>
          <p class="text-gray-600">订单号：{{ orderInfo?.order_id || '未知' }}</p>
          <p class="text-gray-600">支付时间：{{ orderInfo?.payment_time || '--' }}</p>
          <p class="text-gray-600">支付金额：¥{{ selectedPackage?.price || '0.00' }}</p>
          <p class="text-gray-600">查询额度：{{ formatNumber(selectedPackage?.quota || 0) }}次</p>
        </div>
        <button @click="showPaymentSuccessModal = false" 
                class="w-full h-11 bg-primary text-white shadow !rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors">
          确定
        </button>
      </div>
    </div>

    <!-- 群名片二维码弹窗 -->
    <div v-if="showGroupQRModal" 
         class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
         @click.self="toggleGroupQRModal">
      <div class="bg-white !rounded-xl w-full max-w-xs p-6 space-y-4">
        <div class="flex justify-between items-center">
          <h3 class="text-lg font-semibold">加入交流群</h3>
          <button @click="toggleGroupQRModal" class="text-gray-400 hover:text-gray-600">
            <i class="fas fa-times" style="width: 20px; height: 20px; display: flex; justify-content: center; align-items: center;"></i>
          </button>
        </div>
        <div class="text-center">
          <img src="/group-qr.jpg" alt="群二维码" class="w-48 h-48 mx-auto !rounded-lg shadow-sm object-cover">
          <p class="text-center text-sm text-gray-500 mt-3">扫码加入用户交流群</p>
        </div>
      </div>
    </div>

    <!-- 加载中水波图 -->
    <div v-if="isLoading" 
         class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div class="bg-white !rounded-xl p-6 w-64 h-64 flex flex-col items-center justify-center">
        <div id="loadingChart" class="w-48 h-48"></div>
        <p class="text-sm text-gray-500 mt-4">正在查询中...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { bitable, FieldType } from '@lark-base-open/js-sdk';
import { useI18n } from 'vue-i18n';
import { ref, onMounted, computed, isShallow, h, nextTick, onUnmounted, watch } from 'vue';
import * as echarts from 'echarts'
import 'echarts-liquidfill'
import 'swiper/css';
import { formatDateTime, queryExpressInfo, updateRecordInfo, queryRemainingQuota, getPackages } from '../services/dataService';
import axios from 'axios';

// 状态变量
const selectedField = ref(null);
const showFieldSelector = ref(false);
const tableFields = ref([]);
const viewRecords = ref([]);
const isLoading = ref(false);
const errorMessage = ref('');
const table = ref(null);
const view = ref(null);
const remainingQuota = ref(0); // 总余量
const domesticQuota = ref(0);  // 国内余量
const internationalQuota = ref(0); // 国际余量
const showPaymentModal = ref(false);
const selectedPackage = ref(null);
const orderInfo = ref(null);
const showPaymentSuccessModal = ref(false);
const paymentCheckMessage = ref('');
const successMessage = ref('');
const hasError = ref(false);
const packages = ref([]); // 套餐列表
const isLoadingPackages = ref(false); // 是否正在加载套餐
const showDomesticQuotaInfo = ref(false); // 国内额度详情面板
const showInternationalQuotaInfo = ref(false); // 国际额度详情面板

// 本地存储相关的常量
const STORAGE_KEY = {
  FIELD_ID: 'express_tracking_field_id'
};

// 添加字段名常量
const FIELD_NAMES = {
  LATEST_STATUS: '最新状态',
  LATEST_UPDATE_TIME: '最新更新时间',
  REFRESH_CHANGE: '刷新变动',
  ALL_LOGISTICS_INFO: '全部物流信息'
};

// 初始化函数
const initPluginData = async () => {
  try {
    await getTableFields();
    await initLoadingChart();
    
    // 获取当前多维表格ID并查询剩余次数
    const selection = await bitable.base.getSelection();
    if (selection.baseId) {
      await getRemainingQuota(selection.baseId);
      // 添加获取并显示当前表格ID
      updateCurrentBaseId(selection.baseId);
    }
    
    // 获取套餐列表
    await loadPackages();
  } catch (error) {
    console.error('初始化失败:', error);
    errorMessage.value = '初始化失败，请刷新页面重试';
  }
};

// 加载套餐列表
const loadPackages = async () => {
  try {
    isLoadingPackages.value = true;
    const response = await getPackages();
    if (response.success && response.data && response.data.length > 0) {
      // 处理套餐数据
      packages.value = response.data.map(pkg => {
        // 标记热门套餐（中间套餐为热门）
        const popular = pkg.quota === 1000 || pkg.name.includes('套餐2');
        // 为套餐添加标签
        let tag = '';
        if (pkg.description && pkg.description.includes('限购一次')) {
          tag = '仅可购买一次';
        } else if (popular) {
          tag = '热销';
        } else if (pkg.quota >= 10000) {
          tag = '最优惠';
        }
        
        return {
          id: pkg.id,
          name: pkg.name,
          quota: pkg.quota,
          price: pkg.price,
          description: pkg.description || getPackageDescription(pkg.quota),
          tag,
          popular,
          type: pkg.type, // 0为国内套餐，1为国际套餐
          type_text: pkg.type_text
        };
      });
      
      // 按类型和价格排序
      packages.value.sort((a, b) => {
        if (a.type !== b.type) return a.type - b.type;
        return a.price - b.price;
      });
    } else {
      // 如果API获取失败，使用默认套餐配置
      useDefaultPackages();
    }
  } catch (error) {
    console.error('加载套餐列表失败:', error);
    // 使用默认套餐配置
    useDefaultPackages();
  } finally {
    isLoadingPackages.value = false;
  }
};

// 使用默认套餐配置
const useDefaultPackages = () => {
  packages.value = [
    { 
      id: 1, 
      name: '体验包', 
      quota: 100, 
      price: 1.99,
      description: '新用户专享',
      tag: '仅可购买一次',
      popular: false,
      type: 0,
      type_text: '国内套餐'
    },
    { 
      id: 2, 
      name: '基础包', 
      quota: 1000, 
      price: 5.9,
      description: '最具性价比',
      tag: '热销',
      popular: true,
      type: 0,
      type_text: '国内套餐'
    },
    { 
      id: 3, 
      name: '超值包', 
      quota: 10000, 
      price: 49.9,
      description: '企业首选',
      tag: '最优惠',
      popular: false,
      type: 0,
      type_text: '国内套餐'
    }
  ];
};

// 根据类型过滤套餐
const domesticPackages = computed(() => {
  return packages.value.filter(pkg => pkg.type === 0);
});

const internationalPackages = computed(() => {
  return packages.value.filter(pkg => pkg.type === 1);
});

// 获取多维表格字段
const getTableFields = async () => {
  try {
    isLoading.value = true;
    errorMessage.value = '';
    
    // 获取当前选中的表格和视图
    const selection = await bitable.base.getSelection();
    const table = await bitable.base.getTableById(selection.tableId);
    const view = await table.getViewById(selection.viewId);
    
    // 获取所有字段
    const fields = await table.getFieldMetaList();
    tableFields.value = fields.filter(field => field.type === FieldType.Text);
    
    // 尝试从本地存储恢复之前选择的字段
    const savedFieldId = localStorage.getItem(STORAGE_KEY.FIELD_ID);
    if (savedFieldId) {
      const savedField = tableFields.value.find(field => field.id === savedFieldId);
      if (savedField) {
        selectedField.value = savedField;
        await loadViewRecords(table, view);
      }
    }
  } catch (error) {
    console.error('获取字段失败:', error);
    errorMessage.value = '获取字段失败，请重试';
  } finally {
    isLoading.value = false;
  }
};

// 选择字段
const selectField = async (field) => {
  try {
    selectedField.value = field;
    showFieldSelector.value = false;
    
    // 保存字段ID到本地存储
    localStorage.setItem(STORAGE_KEY.FIELD_ID, field.id);
    
    // 获取当前表格和视图
    const selection = await bitable.base.getSelection();
    const table = await bitable.base.getTableById(selection.tableId);
    const view = await table.getViewById(selection.viewId);
    
    // 选择新字段后加载数据
    await loadViewRecords(table, view);
  } catch (error) {
    console.error('选择字段失败:', error);
    errorMessage.value = '选择字段失败，请重试';
  }
};

// 加载当前视图的数据
const loadViewRecords = async (table, view) => {
  if (!selectedField.value) {
    console.log('没有选择字段，按钮将保持禁用状态');
    return;
  }
  
  try {
    isLoading.value = true;
    errorMessage.value = '';
    
    console.log('开始获取记录...');
    // 获取当前视图的记录
    const records = await view.getVisibleRecordIdList();
    console.log('API返回的记录ID列表:', records);
    
    if (!Array.isArray(records)) {
      console.error('获取记录失败: 返回值不是数组');
      return;
    }
    
    // 获取字段值
    console.log('开始获取字段值...');
    console.log('选中的字段:', selectedField.value);
    
    const fieldValues = await Promise.all(
      records.map(async (recordId) => {
        try {
          const value = await table.getCellValue(selectedField.value.id, recordId);
          console.log('单个记录的原始值:', value);
          const textValue = value ? String(value) : '';
          console.log(`记录 ${recordId} 的最终值:`, textValue);
          return {
            recordId: recordId,
            value: textValue
          };
        } catch (err) {
          console.error(`获取记录 ${recordId} 的值失败:`, err);
          return {
            recordId: recordId,
            value: ''
          };
        }
      })
    );
    
    console.log('获取到的所有字段值:', fieldValues);
    
    // 过滤掉空值，同时添加错误处理
    viewRecords.value = fieldValues.filter(item => {
      try {
        return item.value && item.value.trim() !== '';
      } catch (err) {
        console.error('过滤记录失败:', err);
        return false;
      }
    });
    
    console.log('过滤后的有效记录:', viewRecords.value);
    console.log('有效记录数量:', viewRecords.value.length);
    
    // 更新总数
    totalCount.value = viewRecords.value.length;
    processedCount.value = 0;
    
  } catch (error) {
    console.error('加载数据失败:', error);
    console.error('错误详情:', {
      table: !!table,
      view: !!view,
      selectedField: selectedField.value,
      error: error.message,
      stack: error.stack
    });
    errorMessage.value = '加载数据失败，请重试';
  } finally {
    isLoading.value = false;
  }
};

// 监听表格变化
watch(async () => {
  try {
    const selection = await bitable.base.getSelection();
    return selection.tableId;
  } catch (error) {
    console.error('监听表格变化失败:', error);
    return null;
  }
}, async (newTableId, oldTableId) => {
  if (newTableId && newTableId !== oldTableId) {
    await getTableFields();
  }
}, { immediate: true });

// 检查并创建必要的字段
const ensureRequiredFields = async (table) => {
  const fields = await table.getFieldMetaList();
  
  // 检查每个必需字段
  for (const fieldName of Object.values(FIELD_NAMES)) {
    const field = fields.find(f => f.name === fieldName);
    if (!field) {
      // 如果字段不存在，创建它
      await table.addField({
        type: FieldType.Text,
        name: fieldName
      });
      console.log(`创建字段: ${fieldName}`);
    }
  }
  
  // 重新获取字段列表
  return await table.getFieldMetaList();
};

// 添加水波图相关变量和方法
const loadingChartInstance = ref(null);

// 初始化水波图
const initLoadingChart = async () => {
  await nextTick()
  const chartDom = document.getElementById('loadingChart')
  if (!chartDom) return

  loadingChartInstance.value = echarts.init(chartDom)

  const option = {
    backgroundColor: 'transparent',
    series: [{
      type: 'liquidFill',
      data: [0],
      radius: '80%',
      amplitude: 20,
      color: ['#409eff'],
      backgroundStyle: {
        color: '#f5f7fa'
      },
      outline: {
        show: false
      },
      label: {
        show: true,
        fontSize: 28,
        fontFamily: 'Arial',
        color: '#409eff',
        insideColor: '#fff',
        formatter: () => {
          return `${Math.round(processedCount.value / totalCount.value * 100)}%`
        }
      }
    }]
  }

  loadingChartInstance.value.setOption(option)
}

// 更新水波图进度
const updateLoadingChart = () => {
  if (!loadingChartInstance.value) return

  // 确保分母不为0
  const total = totalCount.value || 1
  const progress = Math.min(processedCount.value / total, 1)

  loadingChartInstance.value.setOption({
    series: [{
      data: [progress],
      label: {
        formatter: () => {
          return `${Math.round(progress * 100)}%`
        }
      }
    }]
  })
}

// 在组件卸载时销毁图表实例
onUnmounted(() => {
  if (loadingChartInstance.value) {
    loadingChartInstance.value.dispose()
  }
})

// 修改 batchQuery 方法
const batchQuery = async () => {
  if (!selectedField.value || viewRecords.value.length === 0) {
    errorMessage.value = '请先选择字段并确保有数据';
    hasError.value = true;
    return;
  }

  try {
    isLoading.value = true;
    errorMessage.value = '';
    successMessage.value = '';
    hasError.value = false;
    processedCount.value = 0;
    totalCount.value = viewRecords.value.length;
    
    // 初始化水波图
    await initLoadingChart();
    
    // 获取当前多维表格和表格
    const selection = await bitable.base.getSelection();
    const currentTable = await bitable.base.getTableById(selection.tableId);
    const baseId = selection.baseId;
    
    // 确保所需字段存在
    console.log('检查并创建必要字段...');
    const fields = await ensureRequiredFields(currentTable);
    
    // 获取字段ID
    const statusField = fields.find(f => f.name === FIELD_NAMES.LATEST_STATUS);
    const updateTimeField = fields.find(f => f.name === FIELD_NAMES.LATEST_UPDATE_TIME);
    const refreshChangeField = fields.find(f => f.name === FIELD_NAMES.REFRESH_CHANGE);
    const allLogisticsInfoField = fields.find(f => f.name === FIELD_NAMES.ALL_LOGISTICS_INFO);

    let successCount = 0;
    let failCount = 0;
    let errorDetails = [];

    for (const record of viewRecords.value) {
      let trackingNumber = '';
      try {
        const trackingNumberData = await currentTable.getCellValue(selectedField.value.id, record.recordId);
        
        if (Array.isArray(trackingNumberData)) {
          trackingNumber = trackingNumberData.map(item => item.text).join('');
        } else if (typeof trackingNumberData === 'string') {
          trackingNumber = trackingNumberData;
        }
        
        const prevStatus = await currentTable.getCellValue(statusField.id, record.recordId);
        const prevUpdateTime = await currentTable.getCellValue(updateTimeField.id, record.recordId);
        
        const logisticsData = await queryExpressInfo(trackingNumber, baseId);
        
        if (logisticsData.success) {
          await updateRecordInfo({
            currentTable,
            record,
            statusField,
            updateTimeField,
            refreshChangeField,
            allLogisticsInfoField,
            logisticsData,
            prevStatus,
            prevUpdateTime
          });
          successCount++;
        } else {
          failCount++;
          errorDetails.push(`快递单号 ${trackingNumber} 查询失败: ${logisticsData.message || '未知错误'}`);
        }

        processedCount.value++;
        updateLoadingChart();
        
      } catch (err) {
        failCount++;
        const errorMsg = err.message || '未知错误';
        errorDetails.push(`快递单号 ${trackingNumber || '未知'} 处理失败: ${errorMsg}`);
      }
    }
    
    // 更新消息显示
    if (failCount > 0) {
      hasError.value = true;
      errorMessage.value = `查询失败 ${failCount} 条：\n${errorDetails.join('\n')}`;
    }
    if (successCount > 0) {
      successMessage.value = `成功查询 ${successCount} 条物流信息。`;
    }
    
  } catch (error) {
    console.error('批量查询失败:', error);
    hasError.value = true;
    errorMessage.value = error.message || '批量查询失败，请重试';
  } finally {
    isLoading.value = false;
  }
};

// 修改 clearCache 方法，清除所有消息
const clearCache = () => {
  localStorage.removeItem(STORAGE_KEY.FIELD_ID);
  selectedField.value = null;
  viewRecords.value = [];
  processedCount.value = 0;
  totalCount.value = 0;
  errorMessage.value = '';
  successMessage.value = '';
  hasError.value = false;
  updateLoadingChart();
};

// 初始化
onMounted(async () => {
  await initPluginData();
});

// 切换支付弹窗显示状态
const togglePaymentModal = () => {
  showPaymentModal.value = !showPaymentModal.value;
  if (!showPaymentModal.value) {
    // 关闭弹窗时重置状态
    selectedPackage.value = null;
    orderInfo.value = null;
    paymentCheckMessage.value = '';
  } else {
    // 打开弹窗时获取并显示当前表格ID
    getCurrentBaseId();
  }
};

// 检查数量变量（为了保持原代码兼容）
const processedCount = ref(0);
const totalCount = ref(100);

// 添加 refreshPlugin 方法
const refreshPlugin = () => {
  window.location.reload()
}

// 添加公告显示状态
const showAnnouncement = ref(true);

// 关闭公告
const closeAnnouncement = () => {
  showAnnouncement.value = false;
};

// 添加群二维码弹窗状态
const showGroupQRModal = ref(false);

// 切换群二维码弹窗显示状态
const toggleGroupQRModal = () => {
  showGroupQRModal.value = !showGroupQRModal.value;
};

// 打开使用文档
const openDocumentation = () => {
  window.open('https://jfsq6znqku.feishu.cn/wiki/Pr0kwAAn9iQMIakrZK1coFIynhf', '_blank');
};

// 查询剩余次数
const getRemainingQuota = async (baseId) => {
  try {
    const response = await queryRemainingQuota(baseId);
    if (response.success) {
      remainingQuota.value = response.data.remaining_quota;
      domesticQuota.value = response.data.domestic_quota;
      internationalQuota.value = response.data.international_quota;
    }
  } catch (error) {
    console.error('获取剩余次数失败:', error);
  }
};

// 创建订单
const createOrder = async (packageId) => {
  try {
    console.log('开始创建订单，套餐ID:', packageId);
    const selection = await bitable.base.getSelection();
    console.log('当前base_id:', selection.baseId);
    
    const response = await axios.post('/api/api/payment/create', {
      base_id: selection.baseId,
      package_id: packageId
    });
    
    console.log('创建订单API响应:', response.data);
    
    if (response.data.success) {
      orderInfo.value = {
        order_id: response.data.data.trade_order_id,
        qrcode_url: response.data.data.qrcode_url,
        payment_url: response.data.data.payment_url,
        amount: response.data.data.amount,
        package_info: response.data.data.package_info,
        created_time: response.data.data.created_time || new Date().toLocaleString()
      };
      console.log('订单信息设置成功:', orderInfo.value);
      return true;
    } else {
      console.error('创建订单失败:', response.data.message);
      errorMessage.value = response.data.message || '创建订单失败';
      return false;
    }
  } catch (error) {
    console.error('创建订单异常:', error);
    errorMessage.value = '创建订单失败，请重试';
    return false;
  }
};

// 查询订单状态
const checkOrderStatus = async (orderId) => {
  try {
    const response = await axios.get(`/api/api/payment/${orderId}`);
    
    if (response.data.success) {
      // 判断支付状态，status为1表示已支付
      if (response.data.data.status === 1) {
        // 更新订单信息中的支付时间
        if (orderInfo.value) {
          orderInfo.value.payment_time = response.data.data.payment_time;
        }
        
        // 支付成功，更新余量
        const selection = await bitable.base.getSelection();
        await getRemainingQuota(selection.baseId);
        
        // 清除支付检查消息
        paymentCheckMessage.value = '';
        
        // 显示支付成功弹窗
        showPaymentSuccessModal.value = true;
        showPaymentModal.value = false;
        return true;
      }
    }
    return false;
  } catch (error) {
    console.error('查询订单状态失败:', error);
    return false;
  }
};

// 检查支付状态
const checkPaymentStatus = async () => {
  if (!orderInfo.value) return;
  
  try {
    // 清除之前的消息
    paymentCheckMessage.value = '';
    
    // 显示加载状态
    const checkBtn = document.querySelector('[data-check-payment]');
    if (checkBtn) {
      checkBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-1"></i>检查中...';
      checkBtn.disabled = true;
    }
    
    // 检查支付状态
    const isPaid = await checkOrderStatus(orderInfo.value.order_id);
    
    // 恢复按钮状态
    if (checkBtn) {
      checkBtn.innerHTML = '完成支付';
      checkBtn.disabled = false;
    }
    
    if (!isPaid) {
      paymentCheckMessage.value = '订单未支付或支付结果尚未同步，请扫码支付后再点击"完成支付"按钮。';
    }
  } catch (error) {
    console.error('检查支付状态失败:', error);
    paymentCheckMessage.value = '检查支付状态失败，请稍候再试';
    
    // 恢复按钮状态
    const checkBtn = document.querySelector('[data-check-payment]');
    if (checkBtn) {
      checkBtn.innerHTML = '完成支付';
      checkBtn.disabled = false;
    }
  }
};

// 打开反馈表单
const openFeedback = () => {
  window.open('https://jfsq6znqku.feishu.cn/share/base/form/shrcnXUwXl4g8nDM5oasagYnRpd', '_blank');
};

// 格式化数字显示
const formatNumber = (num) => {
  if (num >= 10000) {
    return (num / 10000).toFixed(1) + 'w';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num.toString();
};

// 格式化单价显示
const formatUnitPrice = (price, quota) => {
  const unitPrice = (price / quota * 1000).toFixed(2);
  if (unitPrice >= 10) {
    return Math.round(unitPrice);
  }
  return unitPrice;
};

// 添加获取并显示当前表格ID的函数
const getCurrentBaseId = async () => {
  try {
    const selection = await bitable.base.getSelection();
    if (selection.baseId) {
      updateCurrentBaseId(selection.baseId);
    }
  } catch (error) {
    console.error('获取当前表格ID失败:', error);
  }
};

// 更新当前表格ID显示
const updateCurrentBaseId = (baseId) => {
  // 使用nextTick确保DOM已更新
  nextTick(() => {
    const baseIdElement = document.getElementById('currentBaseId');
    if (baseIdElement) {
      baseIdElement.textContent = baseId;
    }
  });
};

// 处理支付流程
const handlePayment = async (packageId) => {
  try {
    // 重置消息
    paymentCheckMessage.value = '';
    errorMessage.value = '';
    
    console.log('开始处理支付，套餐ID:', packageId);
    
    // 先设置套餐信息，以防止接口延迟导致页面不刷新
    const packageItem = packages.value.find(p => String(p.id) === String(packageId));
    if (packageItem) {
      selectedPackage.value = packageItem;
      console.log('已设置选中的套餐:', selectedPackage.value);
    } else {
      console.error('找不到指定ID的套餐:', packageId);
      errorMessage.value = '套餐信息加载失败，请刷新页面重试';
      return;
    }
    
    // 创建订单
    isLoading.value = true;
    const orderCreated = await createOrder(packageId);
    isLoading.value = false;
    
    if (!orderCreated) {
      console.error('订单创建失败，中止支付流程');
      // 如果订单创建失败，重置选中的套餐
      selectedPackage.value = null;
      errorMessage.value = '创建订单失败，请稍后重试或联系客服';
      return;
    }
    
    if (!orderInfo.value || !orderInfo.value.qrcode_url) {
      console.error('二维码URL为空');
      errorMessage.value = '获取支付二维码失败，请稍后重试';
      // 不重置套餐信息，让用户可以返回
    }
    
    // 确保当前表格ID已显示（虽然在togglePaymentModal中已经获取，但为了保险起见再次获取）
    getCurrentBaseId();
  } catch (error) {
    console.error('支付处理失败:', error);
    isLoading.value = false;
    errorMessage.value = '支付处理失败，请重试';
    // 如果出现异常，重置选中的套餐
    selectedPackage.value = null;
  }
};

// 在 script setup 部分添加 getPackageDescription 函数
const getPackageDescription = (quota) => {
  if (quota === 1000) {
    return '最具性价比';
  }
  if (quota <= 100) {
    return '新用户专享';
  }
  return '企业首选';
};

// 复制到剪贴板
const copyToClipboard = (text, type) => {
  // 使用现代clipboard API
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text)
      .then(() => {
        copiedType.value = type;
        // 2秒后重置复制状态
        setTimeout(() => {
          if (copiedType.value === type) {
            copiedType.value = '';
          }
        }, 2000);
      })
      .catch(err => {
        console.error('复制失败:', err);
        // 如果现代API失败，回退到传统方法
        fallbackCopy(text, type);
      });
  } else {
    // 回退到传统方法
    fallbackCopy(text, type);
  }
};

// 传统复制方法（回退方案）
const fallbackCopy = (text, type) => {
  try {
    const input = document.createElement('input');
    input.value = text;
    input.style.position = 'fixed';
    input.style.opacity = '0';
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    
    copiedType.value = type;
    // 2秒后重置复制状态
    setTimeout(() => {
      if (copiedType.value === type) {
        copiedType.value = '';
      }
    }, 2000);
  } catch (err) {
    console.error('复制失败:', err);
  }
};

// 复制状态 - 使用统一的状态变量
const copiedType = ref('');
</script>

<style>
/* 添加TailwindCSS配置 */
:root {
  --color-primary: #2B6BFF;
  --color-secondary: #F5F9FF;
}

.bg-primary {
  background-color: var(--color-primary);
}

.bg-secondary {
  background-color: var(--color-secondary);
}

.text-primary {
  color: var(--color-primary);
}

.border-primary\/10 {
  border-color: rgba(43, 107, 255, 0.1);
}

.border-primary\/20 {
  border-color: rgba(43, 107, 255, 0.2);
}

.border-primary\/30 {
  border-color: rgba(43, 107, 255, 0.3);
}

.bg-primary\/10 {
  background-color: rgba(43, 107, 255, 0.1);
}

.hover\:bg-primary\/90:hover {
  background-color: rgba(43, 107, 255, 0.9);
}

.hover\:border-primary:hover {
  border-color: var(--color-primary);
}

.hover\:border-primary\/10:hover {
  border-color: rgba(43, 107, 255, 0.1);
}

.hover\:text-primary:hover {
  color: var(--color-primary);
}

/* 确保圆角在所有环境下都能正常工作 */
.rounded-lg {
  border-radius: 8px !important;
}

.rounded-xl {
  border-radius: 12px !important;
}

.rounded-2xl {
  border-radius: 16px !important;
}

.rounded-full {
  border-radius: 9999px !important;
}

/* 动画 */
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .7;
  }
}

.active\:scale-\[0\.98\]:active {
  transform: scale(0.98);
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-colors {
  transition-property: color, background-color, border-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

/* 滚动条美化 */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #d1d5db;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #9ca3af;
}

/* 添加漂浮动画 */
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes float-slow {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0px);
  }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 6s ease-in-out infinite;
}

/* 闪光横扫动画 */
@keyframes shine {
  0% {
    transform: translateX(-100%) skewX(-20deg);
  }
  100% {
    transform: translateX(200%) skewX(-20deg);
  }
}

@keyframes twinkle {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

@keyframes twinkle-delayed {
  0%, 30%, 100% { opacity: 0; }
  60% { opacity: 1; }
}

.animate-shine {
  animation: shine 2s ease-in-out;
}

.animate-twinkle {
  animation: twinkle 2s ease-in-out infinite;
}

.animate-twinkle-delayed {
  animation: twinkle-delayed 3s ease-in-out infinite;
  animation-delay: 0.5s;
}
</style>
