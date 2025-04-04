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
      <div class="relative bg-white/80 backdrop-blur-sm w-full max-w-[420px] min-h-[762px] text-gray-800 shadow-xl !rounded-3xl border border-white/50">
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
            <!-- 查询额度 - 魔法版 -->
            <div class="pt-4 mt-3">
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
                           class="fixed inset-0 bg-white z-50 flex items-center justify-center p-4"
                           @click.self="showDomesticQuotaInfo = false">
                        <div class="w-full h-full flex flex-col">
                          <div class="flex justify-between items-center p-4 border-b">
                            <h3 class="text-base font-medium">国内查询余量详情</h3>
                            <button @click="showDomesticQuotaInfo = false" class="text-gray-400 hover:text-gray-600">
                              <i class="fas fa-times"></i>
                            </button>
                          </div>
                          <div class="flex-1 flex flex-col items-center justify-center p-4 space-y-4">
                            <div class="text-xs text-gray-500">精确余量</div>
                            <div class="flex items-center justify-between">
                              <div class="font-bold text-primary text-2xl">{{ domesticQuota }} 次</div>
                              <button @click="copyToClipboard(domesticQuota, 'domestic')" 
                                      class="h-8 w-8 bg-primary/5 !rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors">
                                <i class="fas fa-copy text-primary text-sm"></i>
                              </button>
                            </div>
                            <div v-if="copiedType === 'domestic'" class="text-sm text-green-500">已复制!</div>
                          </div>
                        </div>
                      </div>
                       
                      <!-- 增强进度条 -->
                      <div class="relative w-full bg-gray-100 !rounded-full h-2 mb-3 overflow-hidden">
                        <div class="h-full bg-gradient-to-r from-primary to-blue-500 !rounded-full shadow-sm transition-all duration-500 ease-out" 
                             :style="{ width: `${Math.min((domesticQuota / domesticPurchased) * 100, 100)}%` }"></div>
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
                           class="fixed inset-0 bg-white z-50 flex items-center justify-center p-4"
                           @click.self="showInternationalQuotaInfo = false">
                        <div class="w-full h-full flex flex-col">
                          <div class="flex justify-between items-center p-4 border-b">
                            <h3 class="text-base font-medium">国际查询余量详情</h3>
                            <button @click="showInternationalQuotaInfo = false" class="text-gray-400 hover:text-gray-600">
                              <i class="fas fa-times"></i>
                            </button>
                          </div>
                          <div class="flex-1 flex flex-col items-center justify-center p-4 space-y-4">
                            <div class="text-xs text-gray-500">精确余量</div>
                            <div class="flex items-center justify-between">
                              <div class="font-bold text-indigo-500 text-2xl">{{ internationalQuota }} 次</div>
                              <button @click="copyToClipboard(internationalQuota, 'international')" 
                                      class="h-8 w-8 bg-indigo-50 !rounded-full flex items-center justify-center hover:bg-indigo-100 transition-colors">
                                <i class="fas fa-copy text-indigo-500 text-sm"></i>
                              </button>
                            </div>
                            <div v-if="copiedType === 'international'" class="text-sm text-green-500">已复制!</div>
                          </div>
                        </div>
                      </div>
                       
                      <!-- 增强进度条 -->
                      <div class="relative w-full bg-gray-100 !rounded-full h-2 mb-3 overflow-hidden">
                        <div class="h-full bg-gradient-to-r from-indigo-500 to-blue-400 !rounded-full shadow-sm transition-all duration-500 ease-out" 
                             :style="{ width: `${Math.min((internationalQuota / internationalPurchased) * 100, 100)}%` }"></div>
                        <!-- 进度条上的闪光效果 -->
                        <div class="absolute inset-0 w-full h-full opacity-30 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                      </div>
                       
                      <!-- 余额不足提示 -->
                      <div v-if="internationalQuota < 100" 
                           class="mb-2 flex items-center gap-1.5 text-xs text-red-500 bg-red-50/70 px-2 py-1 !rounded-lg border border-red-100/50">
                        <i class="fas fa-exclamation-circle text-[10px]"></i>
                        <span>余额不足，请及时充值</span>
                      </div>
                       
                      <!-- 改进的充值按钮 -->
                      <button @click="togglePaymentModal" 
                              class="w-full h-8 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white text-xs font-medium !rounded-lg flex items-center justify-center shadow-sm hover:shadow group-hover:scale-[1.01] transition-all">
                        <i class="fas fa-wallet text-xs mr-1.5"></i>
                        <span>立即充值</span>
                      </button>
                      
                      <!-- 国际查询已启用 - 删除重复组件，保留新增的切换UI -->
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div class="pt-4">
              <div class="flex items-center mb-4">
                <div class="w-1 h-5 bg-gradient-to-b from-primary to-blue-400 !rounded-full mr-2"></div>
                <h2 class="text-base font-medium bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">查询操作</h2>
                <div class="ml-auto">
                  <button @click="clearCache" 
                          class="group/reset text-sm text-gray-500 hover:text-primary transition-colors flex items-center gap-1.5 bg-gray-50 hover:bg-white px-3 py-1 !rounded-full border border-gray-100 hover:border-primary/20 hover:shadow-sm">
                    <i class="fas fa-sync-alt text-xs group-hover/reset:rotate-180 transition-transform duration-500"></i>
                    <span>重置选择</span>
                  </button>
                </div>
              </div>
              
              <!-- 这里是修改后的UI界面 -->
              <div class="mt-3">
                <div class="relative">
                  <!-- 查询类型选择器 -->
                  <div class="mb-4">
                    <div class="flex items-center justify-between">
                      <div class="text-sm font-medium text-gray-700 mb-2">查询类型</div>
                    </div>
                    <div class="flex border !rounded-xl p-1 bg-gray-50">
                      <button 
                        @click="isInternationalEnabled = false" 
                        :class="[
                          'flex-1 py-2 text-sm font-medium flex items-center justify-center gap-2 transition-all',
                          !isInternationalEnabled 
                            ? 'bg-white !rounded-lg shadow text-primary' 
                            : 'text-gray-500 hover:text-gray-700'
                        ]"
                      >
                        <i class="fas fa-map-marker-alt text-xs"></i>
                        <span>国内查询</span>
                      </button>
                      <button 
                        @click="isInternationalEnabled = true" 
                        :class="[
                          'flex-1 py-2 text-sm font-medium flex items-center justify-center gap-2 transition-all',
                          isInternationalEnabled 
                            ? 'bg-white !rounded-lg shadow text-indigo-500' 
                            : 'text-gray-500 hover:text-gray-700'
                        ]"
                      >
                        <i class="fas fa-globe text-xs"></i>
                        <span>国际查询</span>
                      </button>
                    </div>
                  </div>

                  <!-- 根据查询类型显示不同的输入界面 -->
                  <div v-if="!isInternationalEnabled" class="space-y-4">
                    <!-- 国内查询界面 -->
                    <div class="w-full border !rounded-xl p-4 bg-white">
                      <div class="text-sm font-medium text-gray-700 mb-2">快递单号字段（必选）</div>
                      <div class="relative">
                        <div @click="showFieldSelector = !showFieldSelector" 
                            :class="[
                              'cursor-pointer group/selector w-full h-10 px-3 bg-white/90 shadow-sm border !rounded-lg flex items-center justify-between transition-all hover:shadow',
                              selectedField 
                                ? 'border-primary/30 bg-blue-50/30' 
                                : 'border-gray-200 hover:border-gray-300'
                            ]">
                          <div class="flex items-center gap-2">
                            <i class="fas fa-table text-primary"></i>
                            <span class="text-gray-700 text-sm truncate">
                              {{ selectedField ? selectedField.name : '请选择字段' }}
                            </span>
                          </div>
                          <i :class="[
                            'fas fa-chevron-down text-gray-400',
                            showFieldSelector ? 'fa-chevron-up text-primary' : ''
                          ]"></i>
                        </div>
                        
                        <!-- 字段选择下拉框 -->
                        <div v-if="showFieldSelector" 
                            class="absolute left-0 right-0 z-[1000] mt-2 bg-white/95 backdrop-blur-sm border border-primary/10 !rounded-xl shadow-xl max-h-60 overflow-y-auto">
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
                                    ? isInternationalEnabled ? 'bg-indigo-100' : 'bg-primary/10'
                                    : 'bg-gray-100 group-hover/field:bg-gray-200/80'
                                ]">
                                  <i :class="[
                                    'fas fa-font text-sm',
                                    selectedField && selectedField.id === field.id
                                      ? isInternationalEnabled ? 'text-indigo-500' : 'text-primary'
                                      : 'text-gray-500'
                                  ]"></i>
                                </div>
                                <span :class="[
                                  'text-sm font-medium truncate',
                                  selectedField && selectedField.id === field.id
                                    ? isInternationalEnabled ? 'text-indigo-500' : 'text-primary'
                                    : 'text-gray-700 group-hover/field:text-gray-900'
                                ]">{{ field.name }}</span>
                              </div>
                              <i v-if="selectedField && selectedField.id === field.id" 
                                :class="['fas fa-check', isInternationalEnabled ? 'text-indigo-500' : 'text-primary']"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="mt-3">
                        <div class="text-sm font-medium text-gray-700 mb-2">手机号码字段（可选）</div>
                        <div class="relative">
                          <div @click="showMobileFieldSelector = !showMobileFieldSelector" 
                              :class="[
                                'cursor-pointer group/selector w-full h-10 px-3 bg-white/90 shadow-sm border !rounded-lg flex items-center justify-between transition-all hover:shadow',
                                selectedMobileField 
                                  ? 'border-primary/30 bg-blue-50/30' 
                                  : 'border-gray-200 hover:border-gray-300'
                              ]">
                            <div class="flex items-center gap-2">
                              <i class="fas fa-mobile-alt text-primary"></i>
                              <span class="text-gray-700 text-sm truncate">
                                {{ selectedMobileField ? selectedMobileField.name : '不使用手机号' }}
                              </span>
                            </div>
                            <i :class="[
                              'fas fa-chevron-down text-gray-400',
                              showMobileFieldSelector ? 'fa-chevron-up text-primary' : ''
                            ]"></i>
                          </div>
                          
                          <!-- 手机号码字段选择下拉框 -->
                          <div v-if="showMobileFieldSelector" 
                              class="absolute left-0 right-0 z-[1000] mt-2 bg-white/95 backdrop-blur-sm border border-primary/10 !rounded-xl shadow-xl max-h-60 overflow-y-auto">
                            <!-- 字段列表 -->
                            <div class="p-2">
                              <!-- 空选项 -->
                              <div @click="selectMobileField(null)" 
                                  class="group/field px-3 py-2.5 cursor-pointer flex items-center justify-between transition-all !rounded-lg hover:bg-gray-50">
                                <div class="flex items-center gap-3">
                                  <div class="w-7 h-7 !rounded-lg flex items-center justify-center transition-colors bg-gray-100 group-hover/field:bg-gray-200/80">
                                    <i class="fas fa-times text-sm text-gray-500"></i>
                                  </div>
                                  <span class="text-sm font-medium truncate text-gray-700 group-hover/field:text-gray-900">不选择</span>
                                </div>
                                <i v-if="!selectedMobileField" class="fas fa-check text-primary"></i>
                              </div>
                              
                              <!-- 手机号码字段列表 -->
                              <div v-for="field in mobileFieldOptions" 
                                  :key="field.id" 
                                  @click="selectMobileField(field)"
                                  class="group/field px-3 py-2.5 cursor-pointer flex items-center justify-between transition-all !rounded-lg hover:bg-gray-50">
                                <div class="flex items-center gap-3">
                                  <div :class="[
                                    'w-7 h-7 !rounded-lg flex items-center justify-center transition-colors',
                                    selectedMobileField && selectedMobileField.id === field.id
                                      ? 'bg-primary/10'
                                      : 'bg-gray-100 group-hover/field:bg-gray-200/80'
                                  ]">
                                    <i :class="[
                                      getFieldIcon(field.type),
                                      selectedMobileField && selectedMobileField.id === field.id
                                        ? 'text-primary'
                                        : 'text-gray-500'
                                    ]"></i>
                                  </div>
                                  <span :class="[
                                    'text-sm font-medium truncate',
                                    selectedMobileField && selectedMobileField.id === field.id
                                      ? 'text-primary'
                                      : 'text-gray-700 group-hover/field:text-gray-900'
                                  ]">{{ field.name }}</span>
                                </div>
                                <i v-if="selectedMobileField && selectedMobileField.id === field.id" 
                                  class="fas fa-check text-primary"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div v-else class="space-y-4">
                    <!-- 国际查询界面 -->
                    <div class="w-full border !rounded-xl p-4 bg-white">
                      <div class="text-sm font-medium text-gray-700 mb-2">快递单号字段（必选）</div>
                      <div class="relative">
                        <div @click="showFieldSelector = !showFieldSelector" 
                            :class="[
                              'cursor-pointer group/selector w-full h-10 px-3 bg-white/90 shadow-sm border !rounded-lg flex items-center justify-between transition-all hover:shadow',
                              selectedField 
                                ? 'border-indigo-300 bg-indigo-50/30' 
                                : 'border-gray-200 hover:border-gray-300'
                            ]">
                          <div class="flex items-center gap-2">
                            <i class="fas fa-table text-indigo-500"></i>
                            <span class="text-gray-700 text-sm truncate">
                              {{ selectedField ? selectedField.name : '请选择字段' }}
                            </span>
                          </div>
                          <i :class="[
                            'fas fa-chevron-down text-gray-400',
                            showFieldSelector ? 'fa-chevron-up text-indigo-500' : ''
                          ]"></i>
                        </div>
                        
                        <!-- 字段选择下拉框 -->
                        <div v-if="showFieldSelector" 
                            class="absolute left-0 right-0 z-[1000] mt-2 bg-white/95 backdrop-blur-sm border border-indigo-200/80 !rounded-xl shadow-xl max-h-60 overflow-y-auto">
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
                                    ? 'bg-indigo-100'
                                    : 'bg-gray-100 group-hover/field:bg-gray-200/80'
                                ]">
                                  <i :class="[
                                    'fas fa-font text-sm',
                                    selectedField && selectedField.id === field.id
                                      ? 'text-indigo-500'
                                      : 'text-gray-500'
                                  ]"></i>
                                </div>
                                <span :class="[
                                  'text-sm font-medium truncate',
                                  selectedField && selectedField.id === field.id
                                    ? 'text-indigo-500'
                                    : 'text-gray-700 group-hover/field:text-gray-900'
                                ]">{{ field.name }}</span>
                              </div>
                              <i v-if="selectedField && selectedField.id === field.id" 
                                class="fas fa-check text-indigo-500"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="mt-3">
                        <div class="text-sm font-medium text-gray-700 mb-2">多维表格授权码（必填）</div>
                        <div class="relative">
                          <input 
                            v-model="baseToken" 
                            type="text" 
                            placeholder="请输入授权码 (pt-xxx...)" 
                            class="w-full h-10 px-3 bg-white border border-gray-200 !rounded-lg focus:border-indigo-300 focus:outline-none"
                          />
                          <button 
                            @click="showBaseTokenHelp = true" 
                            class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-indigo-500"
                          >
                            <i class="fas fa-question-circle"></i>
                          </button>
                        </div>
                        <div v-if="baseTokenError" class="mt-1 text-xs text-red-500">
                          {{ baseTokenError }}
                        </div>
                        <div class="mt-1 text-xs text-gray-500">
                          格式: pt-xxxxxxxxxxxxxxxxxxxxxxxx
                          <button @click="showBaseTokenHelp = true" class="text-indigo-500 hover:underline">如何获取?</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- 删除这里的下拉框，已经移到各自的父容器内 -->

                  <button @click="isInternationalEnabled ? batchQueryInternational() : batchQuery()"
                          :disabled="isLoading || !selectedField || (isInternationalEnabled && !baseToken)"
                          :class="[
                            'group/query w-full h-12 px-6 relative overflow-hidden mt-4',
                            isLoading || !selectedField || (isInternationalEnabled && !baseToken)
                              ? 'bg-gray-100 text-gray-400 cursor-not-allowed !rounded-xl'
                              : isInternationalEnabled
                                ? 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white hover:shadow-indigo-200/50 hover:shadow-xl active:scale-[0.98] !rounded-xl'
                                : 'bg-gradient-to-r from-primary to-blue-600 text-white hover:shadow-blue-200/50 hover:shadow-xl active:scale-[0.98] !rounded-xl'
                          ]">
                    
                    <!-- 按钮背景效果 - 增强版 -->
                    <div v-if="!isLoading && selectedField && (!isInternationalEnabled || baseToken)" 
                        class="absolute inset-0 w-full h-full opacity-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/query:translate-x-full group-hover/query:opacity-100 transition-all duration-1000 ease-in-out"></div>
                    
                    <!-- 网格布局 -->
                    <div class="grid grid-cols-3 items-center h-full relative z-10">
                      <!-- 左侧图标 -->
                      <div class="flex justify-start">
                        <div class="w-7 h-7 flex-shrink-0 flex items-center justify-center bg-white/10 !rounded-lg">
                          <i v-if="isLoading" class="fas fa-spinner fa-spin text-white"></i>
                          <i v-else-if="isInternationalEnabled" class="fas fa-globe text-white text-sm"></i>
                          <i v-else class="fas fa-truck text-white text-sm"></i>
                        </div>
                      </div>
                      
                      <!-- 中间文字 - 完全居中 -->
                      <div class="flex justify-center items-center">
                        <span class="font-medium text-base whitespace-nowrap">
                          {{ isLoading ? '处理中...' : (isInternationalEnabled ? '国际物流查询' : '国内物流查询') }}
                        </span>
                      </div>
                      
                      <!-- 右侧状态 -->
                      <div class="flex justify-end">
                        <div v-if="!isLoading && selectedField && (!isInternationalEnabled || baseToken)" 
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

            <!-- 中文字符警告提示 -->
            <div v-if="chineseWarningMessage" class="mt-4 p-3 bg-amber-50 !rounded-lg border border-amber-100 text-amber-700 text-xs">
              <div class="flex items-start gap-2">
                <i class="fas fa-exclamation-triangle text-amber-500 mt-0.5"></i>
                <span>{{ chineseWarningMessage }}</span>
              </div>
            </div>

            <!-- 错误提示 -->
            <div v-if="errorMessage && hasError" class="mt-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 !rounded-lg">
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
            <div v-if="successMessage" class="mt-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 !rounded-lg">
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
                   class="p-3 !rounded-xl border border-gray-100 bg-gray-50/80 relative group cursor-not-allowed">
                <!-- 标签 -->
                <div v-if="pkg.tag" 
                     class="absolute -top-2 right-3 px-2 py-0.5 text-xs font-medium !rounded-full shadow-sm bg-gray-200 text-gray-600">
                  {{ pkg.tag }}
                </div>
                
                <!-- 套餐内容 -->
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center gap-2">
                    <div class="w-7 h-7 shrink-0 rounded-lg flex items-center justify-center bg-gray-100">
                      <i class="fas fa-box text-gray-400 text-[10px]"></i>
                    </div>
                    <div class="min-w-0 flex-1">
                      <span class="font-medium text-xs line-clamp-1 text-gray-400">{{ pkg.name }}</span>
                      <p class="text-xs text-gray-400 mt-0.5 line-clamp-1">{{ pkg.description }}</p>
                    </div>
                  </div>
                  <div class="text-right flex flex-col items-end ml-1">
                    <div class="flex items-baseline gap-0.5">
                      <span class="text-xs text-gray-400">¥</span>
                      <span class="text-sm font-medium text-gray-400">{{ pkg.price }}</span>
                    </div>
                    <p class="text-xs text-gray-400 whitespace-nowrap">{{ formatNumber(pkg.quota) }}次</p>
                  </div>
                </div>
                
                <!-- 价格对比 -->
                <div class="flex items-center justify-between text-xs">
                  <div class="flex items-center gap-1 text-gray-400 truncate">
                    <i class="fas fa-calculator text-[10px]"></i>
                    <span class="text-[10px]">约{{ formatUnitPrice(pkg.price, pkg.quota) }}元/千次</span>
                  </div>
                  <div class="text-gray-400">
                    <i class="fas fa-chevron-right text-[10px]"></i>
                  </div>
                </div>

                <!-- 禁用遮罩 -->
                <div class="absolute inset-0 bg-gray-100/50 !rounded-xl flex items-center justify-center">
                  <span class="text-xs text-gray-500 bg-white/80 px-2 py-1 !rounded-full border border-gray-200">
                    即将上线
                  </span>
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
          <a href="https://jfsq6znqku.feishu.cn/wiki/E34hw9OzWiMKQ6kWJXWcRkVGnwd" 
            target="_blank" 
            class="flex items-center justify-center gap-2 mt-1 py-1.5 bg-white !rounded-lg text-primary hover:bg-blue-50 transition-colors border border-blue-100 group">
            <i class="fas fa-headset text-xs"></i>
            <span class="font-medium">获取多维表格授权码</span>
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
          <button @click="closePaymentSuccessModal" class="text-gray-400 hover:text-gray-600">
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
        <button @click="closePaymentSuccessModal" 
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

    <!-- 自定义确认对话框 -->
    <div v-if="showChineseConfirmDialog" 
         class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
         @click.self="toggleChineseConfirmDialog">
      <div class="bg-white !rounded-xl w-full max-w-md p-6 space-y-6">
        <div class="flex justify-between items-center">
          <h3 class="font-medium text-lg flex items-center gap-2">
            <i class="fas fa-exclamation-triangle text-amber-500"></i>
            <span>检测到快递单号中包含中文字符</span>
          </h3>
          <button @click="toggleChineseConfirmDialog" class="text-gray-400 hover:text-gray-600 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="text-center space-y-3">
          <p class="text-gray-600">检测到快递单号中包含中文字符，可能会影响查询准确性。是否继续查询？</p>
        </div>
        <div class="flex gap-2">
          <button @click="confirmDialogCallback(true)" 
                  class="flex-1 h-10 bg-primary text-white !rounded-lg hover:bg-primary/90 transition-colors">
            继续查询
          </button>
          <button @click="confirmDialogCallback(false)" 
                  class="flex-1 h-10 border border-gray-200 !rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
            取消查询
          </button>
        </div>
      </div>
    </div>

    <RecordSelector 
      :show="showRecordSelector" 
      @records-selected="handleRecordsSelected" 
      @cancel="showRecordSelector = false"
    />

    <!-- Base Token 帮助弹窗 -->
    <div v-if="showBaseTokenHelp" 
         class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
         @click.self="showBaseTokenHelp = false">
      <div class="bg-white !rounded-xl w-full max-w-md p-6 space-y-4">
        <div class="flex justify-between items-center">
          <h3 class="text-lg font-semibold">如何获取多维表格授权码</h3>
          <button @click="showBaseTokenHelp = false" class="text-gray-400 hover:text-gray-600">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="space-y-4">
          <p class="text-sm text-gray-600">多维表格授权码(base_token)是用于授权访问国际物流查询服务的凭证。</p>
          
          <div class="p-3 bg-blue-50 !rounded-lg border border-blue-100">
            <div class="flex items-start gap-2">
              <i class="fas fa-info-circle text-blue-500 mt-0.5"></i>
              <div class="text-sm text-blue-700">
                <p class="font-medium">获取授权码教程</p>
                <p class="mt-1">我们提供了详细的图文教程，帮助您快速获取多维表格授权码。</p>
              </div>
            </div>
          </div>
          
          <a href="https://jfsq6znqku.feishu.cn/wiki/E34hw9OzWiMKQ6kWJXWcRkVGnwd" 
             target="_blank" 
             class="block w-full py-2 bg-indigo-500 text-white text-center !rounded-lg hover:bg-indigo-600 transition-colors">
            查看授权码获取教程
          </a>
        </div>
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
import { formatDateTime, queryExpressInfo, updateRecordInfo, queryRemainingQuota, getPackages, queryInternationalExpressInfo } from '../services/dataService';
import axios from 'axios';
// import RecordSelector from '../components/RecordSelector';

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
const showRecordSelector = ref(false); // 记录选择器弹窗状态

// 国际查询相关状态
const isInternationalEnabled = ref(false);
const baseToken = ref('');
const baseTokenError = ref('');
const showBaseTokenHelp = ref(false);

// 本地存储相关的常量
const STORAGE_KEY = {
  FIELD_ID: 'express_tracking_field_id',
  MOBILE_FIELD_ID: 'mobile_field_id',
  BASE_TOKEN: 'base_token',
  QUERY_TYPE: 'query_type'
};

// 添加字段名常量
const FIELD_NAMES = {
  // 国内物流字段
  LATEST_STATUS: '物流状态',
  LATEST_UPDATE_TIME: '查询时间',
  REFRESH_CHANGE: '刷新变动',
  ALL_LOGISTICS_INFO: '全部物流信息',
  COURIER: '快递公司',
  LATEST_EVENT: '最新物流动态',
  LATEST_EVENT_TIME: '最新动态时间',
  CONTACT_INFO: '快递员信息',
  DELIVERY_TIMELINE: '运送时长',
  ERROR_MESSAGE: '报错信息',
  
  // 国际物流字段
  INTL_COURIER: '快递公司',
  INTL_STATUS: '物流状态',
  INTL_LATEST_STATUS: '最新状态',
  INTL_SHIPPING_DATE: '发货时间',
  INTL_DELIVERY_DATE: '签收时间',
  INTL_ORIGIN: '始发地',
  INTL_DESTINATION: '目的地',
  INTL_TRACKING_ROUTE: '物流轨迹',
  INTL_FIRST_QUERY_TIME: '首次查询时间',
  INTL_LAST_QUERY_TIME: '最后查询时间',
  INTL_UPDATE_TIME: '更新时间'
};

// 初始化函数
const initPluginData = async () => {
  try {
    await getTableFields();
    await getMobileFieldOptions(); // 添加获取手机号码字段
    await initLoadingChart(); // 初始化水波图
    
    // 获取当前多维表格ID并查询剩余次数
    const selection = await bitable.base.getSelection();
    if (selection.baseId) {
      await getRemainingQuota(selection.baseId);
      // 添加获取并显示当前表格ID
      updateCurrentBaseId(selection.baseId);
    }
    
    // 获取套餐列表
    await loadPackages();
    
    // 恢复已保存的字段
    await restoreMobileField();
    
    // 恢复授权码
    restoreBaseToken();
    
    // 不在这里恢复查询类型，而是在onMounted中单独处理
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
        const popular = pkg.quota === 10000 || pkg.name.includes('套餐2');
        // 为套餐添加标签
        let tag = '';
        if (pkg.description && pkg.description.includes('限购一次')) {
          tag = '仅可购买一次';
        } else if (popular) {
          tag = '热销';
        } else if (pkg.quota >= 10000) {
          tag = '最优惠';
        } else if (pkg.quota < 10000) {
          tag = '入门款';
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
  packages.value = [];
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
    chineseWarningMessage.value = ''; // 清除之前的中文警告
    
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
          let textValue = ""
          const value = await table.getCellValue(selectedField.value.id, recordId);
          if (Array.isArray(value)) {
            textValue += value.map(item => item.text).join('');
          } else if (typeof value === 'string') {
            textValue += value;
          }
          
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
    
    // 检查是否包含中文字符
    let containsChinese = false;
    let chineseRecords = [];
    
    // 过滤掉空值，同时添加错误处理
    viewRecords.value = fieldValues.filter(item => {
      try {
        if (!item.value || item.value.trim() === '') return false;
        
        // 检查是否包含中文字符
        if (/[\u4e00-\u9fa5]/.test(item.value)) {
          containsChinese = true;
          chineseRecords.push(item.value);
          return true; // 仍然保留这条记录，但会显示警告
        }
        
        return true;
      } catch (err) {
        console.error('过滤记录失败:', err);
        return false;
      }
    });
    
    // 如果存在中文字符，显示警告
    if (containsChinese) {
      const maxSamples = 3; // 最多显示3个含中文的样本
      const samples = chineseRecords.slice(0, maxSamples).map(sample => `"${sample}"`).join('、');
      const remaining = chineseRecords.length > maxSamples ? `等${chineseRecords.length}条记录` : '';
      
      chineseWarningMessage.value = `检测到${chineseRecords.length}条记录中包含中文字符，可能会影响查询准确性：${samples}${remaining}。建议移除中文后再查询。`;
    }
    
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
  try {
    const fields = await table.getFieldMetaList();
    
    // 根据当前模式选择需要创建的字段
    if (isInternationalEnabled.value) {
      // 国际物流需要的字段
      const requiredFields = [
        { name: FIELD_NAMES.INTL_COURIER, type: FieldType.SingleSelect, description: '物流服务商名称' },
        { name: FIELD_NAMES.INTL_STATUS, type: FieldType.SingleSelect, description: '当前物流状态' },
        { name: FIELD_NAMES.INTL_LATEST_STATUS, type: FieldType.Text, description: '最新物流状态描述' },
        { name: FIELD_NAMES.INTL_SHIPPING_DATE, type: FieldType.DateTime, description: '包裹发货时间' },
        { name: FIELD_NAMES.INTL_DELIVERY_DATE, type: FieldType.DateTime, description: '包裹签收时间' },
        { name: FIELD_NAMES.INTL_ORIGIN, type: FieldType.Text, description: '始发地信息' },
        { name: FIELD_NAMES.INTL_DESTINATION, type: FieldType.Text, description: '目的地信息' },
        { name: FIELD_NAMES.INTL_TRACKING_ROUTE, type: FieldType.Text, description: '完整物流轨迹' },
        { name: FIELD_NAMES.INTL_FIRST_QUERY_TIME, type: FieldType.DateTime, description: '首次查询时间' },
        { name: FIELD_NAMES.INTL_LAST_QUERY_TIME, type: FieldType.DateTime, description: '最后查询时间' },
        { name: FIELD_NAMES.INTL_UPDATE_TIME, type: FieldType.DateTime, description: '记录更新时间' },
        { name: FIELD_NAMES.ERROR_MESSAGE, type: FieldType.Text, description: '查询失败时的错误信息' }
      ];
      
      for (const fieldConfig of requiredFields) {
        if (!fields.find(f => f.name === fieldConfig.name)) {
          // 只创建字段，不需要保存引用
          await table.addField({ 
            type: fieldConfig.type, 
            name: fieldConfig.name,
            description: fieldConfig.description
          });
          console.log(`创建国际物流字段: ${fieldConfig.name}`);
        }
      }
    } else {
      // 国内物流需要的字段
      const requiredFields = [
        { name: FIELD_NAMES.LATEST_STATUS, type: FieldType.SingleSelect, description: '当前物流状态' },
        { name: FIELD_NAMES.LATEST_UPDATE_TIME, type: FieldType.DateTime, description: '查询时间' },
        { name: FIELD_NAMES.REFRESH_CHANGE, type: FieldType.Text, description: '刷新变动记录' },
        { name: FIELD_NAMES.ALL_LOGISTICS_INFO, type: FieldType.Text, description: '完整物流信息' },
        { name: FIELD_NAMES.COURIER, type: FieldType.SingleSelect, description: '快递公司' },
        { name: FIELD_NAMES.LATEST_EVENT, type: FieldType.Text, description: '最新物流动态' },
        { name: FIELD_NAMES.LATEST_EVENT_TIME, type: FieldType.DateTime, description: '最新动态时间' },
        { name: FIELD_NAMES.CONTACT_INFO, type: FieldType.Text, description: '快递员联系信息' },
        { name: FIELD_NAMES.DELIVERY_TIMELINE, type: FieldType.Text, description: '运送时长' },
        { name: FIELD_NAMES.ERROR_MESSAGE, type: FieldType.Text, description: '查询失败时的错误信息' },
      ];
      
      for (const fieldConfig of requiredFields) {
        if (!fields.find(f => f.name === fieldConfig.name)) {
          await table.addField({ 
            type: fieldConfig.type, 
            name: fieldConfig.name,
            description: fieldConfig.description
          });
          console.log(`创建国内物流字段: ${fieldConfig.name}`);
        }
      }
    }
    
    // 只返回更新后的字段列表
    return await table.getFieldMetaList();
  } catch (error) {
    console.error('创建必要字段失败:', error);
    throw error;
  }
};

// 添加水波图相关变量和方法
const loadingChartInstance = ref(null);

// 初始化水波图
const initLoadingChart = async () => {
  console.log('初始化水波图...');
  try {
    // 等待DOM更新完成
    await nextTick();
    
    // 创建一个水波图容器，如果不存在的话
    if (!document.getElementById('loadingChart') && isLoading.value) {
      console.log('创建loadingChart容器...');
      // 查找加载弹窗容器
      const loadingContainer = document.querySelector('.fixed.inset-0.bg-black\\/50.backdrop-blur-sm.z-50 .bg-white');
      if (loadingContainer) {
        // 清空容器内容并创建新的图表容器
        loadingContainer.innerHTML = '<div id="loadingChart" class="w-48 h-48"></div><p class="text-sm text-gray-500 mt-4">正在查询中...</p>';
      } else {
        console.error('找不到加载弹窗容器');
        return false;
      }
    }
    
    // 获取DOM元素
    const chartDom = document.getElementById('loadingChart');
    if (!chartDom) {
      console.error('找不到loadingChart元素');
      return false;
    }

    // 销毁已有实例（如果存在）
    if (window.myLoadingChart) {
      window.myLoadingChart.dispose();
    }
    
    // 创建新实例
    window.myLoadingChart = echarts.init(chartDom);
    
    // 设置初始选项
    const option = {
      series: [{
        type: 'liquidFill',
        radius: '80%',
        data: [0],
        color: ['#2B6BFF'],
        backgroundStyle: {
          color: '#f5f5f5'
        },
        label: {
          show: true,
          color: '#2B6BFF',
          insideColor: '#fff',
          fontSize: 16,
          fontWeight: 'bold',
          formatter: '0%'
        },
        outline: {
          show: true,
          borderDistance: 4,
          itemStyle: {
            color: 'none',
            borderColor: '#2B6BFF',
            borderWidth: 2,
          }
        }
      }]
    };
    
    window.myLoadingChart.setOption(option);
    console.log('水波图初始化成功');
    return true;
  } catch (error) {
    console.error('初始化水波图失败:', error);
    return false;
  }
};

// 更新加载水波图进度
const updateLoadingChart = () => {
  try {
    // 如果实例不存在，尝试重新初始化
    if (!window.myLoadingChart) {
      console.warn('水波图未初始化，尝试重新初始化...');
      // 延迟100ms再尝试初始化和更新
      setTimeout(async () => {
        const initialized = await initLoadingChart();
        if (initialized) {
          updateLoadingChart(); // 递归调用自身更新
        }
      }, 100);
      return;
    }
    
    // 计算进度百分比
    let percent = 0;
    if (totalCount.value > 0) {
      percent = Math.min(processedCount.value / totalCount.value, 1);
    }
    
    // 更新水波图
    window.myLoadingChart.setOption({
      series: [{
        data: [percent],
        label: {
          formatter: (percent * 100).toFixed(0) + '%'
        }
      }]
    });
    
    console.log('水波图更新成功, 进度:', percent);
  } catch (error) {
    console.error('更新水波图失败:', error);
  }
};

// 在组件卸载时销毁图表实例
onUnmounted(() => {
  if (loadingChartInstance.value) {
    loadingChartInstance.value.dispose()
  }
})

// 修改 batchQuery 方法
const batchQuery = async () => {
  if (!selectedField.value) {
    errorMessage.value = '请先选择字段';
    hasError.value = true;
    return;
  }

  // 显示记录选择器弹窗
  showRecordSelector.value = true;
};

// 抽取查询执行逻辑到单独的方法
const executeBatchQuery = async () => {
  // 先设置加载状态，以确保弹窗显示
  isLoading.value = true;
  
  // 等待弹窗显示
  await nextTick();
  
  // 初始化水波图
  await initLoadingChart();
  
  // 重置其他状态
  errorMessage.value = '';
  successMessage.value = '';
  hasError.value = false;
  processedCount.value = 0;
  totalCount.value = viewRecords.value.length;

  try {
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
    const courierField = fields.find(f => f.name === FIELD_NAMES.COURIER);
    const latestEventField = fields.find(f => f.name === FIELD_NAMES.LATEST_EVENT);
    const latestEventTimeField = fields.find(f => f.name === FIELD_NAMES.LATEST_EVENT_TIME);
    const contactInfoField = fields.find(f => f.name === FIELD_NAMES.CONTACT_INFO);
    const deliveryTimelineField = fields.find(f => f.name === FIELD_NAMES.DELIVERY_TIMELINE);
    const errorMessageField = fields.find(f => f.name === FIELD_NAMES.ERROR_MESSAGE);

    let successCount = 0;
    let failCount = 0;
    let errorDetails = [];
    let recordErrorMessage = '';

    for (const record of viewRecords.value) {
      try {
        // 先清空该记录的错误信息
        if (errorMessageField) {
          await currentTable.setCellValue(errorMessageField.id, record.recordId, '');
        }
        
        // 获取快递单号
        const trackingNumberData = await currentTable.getCellValue(selectedField.value.id, record.recordId);
        let trackingNumber = '';
        
        if (Array.isArray(trackingNumberData)) {
          trackingNumber = trackingNumberData.map(item => item.text).join('');
        } else if (typeof trackingNumberData === 'string') {
          trackingNumber = trackingNumberData;
        }
        
        // 处理手机号码字段
        let mobileNumber = null;
        if (selectedMobileField.value) {
          const mobileData = await currentTable.getCellValue(selectedMobileField.value.id, record.recordId);
          let mobileStr = '';
          
          if (Array.isArray(mobileData)) {
            mobileStr = mobileData.map(item => item.text).join('');
          } else if (typeof mobileData === 'object' && mobileData !== null) {
            mobileStr = mobileData.text || '';
          } else {
            mobileStr = String(mobileData);
          }
          
          // 验证手机号码
          mobileNumber = validateMobileNumber(mobileStr);
          
          // 如果有记录但验证失败，只在第一次显示警告
          if (mobileStr && !mobileNumber && failCount === 0 && successCount === 0) {
            console.warn('手机号码格式不正确, 将不使用手机号码进行查询:', mobileStr);
          }
        }
        
        const prevStatus = await currentTable.getCellValue(statusField.id, record.recordId);
        const prevUpdateTime = await currentTable.getCellValue(updateTimeField.id, record.recordId);
        
        // 使用带手机号码的查询
        const logisticsData = await queryExpressInfo(trackingNumber, baseId, mobileNumber);
        
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
            prevUpdateTime,
            courierField,
            latestEventField,
            latestEventTimeField,
            contactInfoField,
            deliveryTimelineField,
            errorMessageField
          });
          successCount++;
          
          // 更新剩余额度
          if (logisticsData.remaining !== undefined && logisticsData.purchased !== undefined) {
            remainingQuota.value = logisticsData.remaining;
            domesticQuota.value = logisticsData.remaining; // 更新国内额度
            domesticPurchased.value = logisticsData.purchased; // 更新已购买额度
          }
        } else {
          failCount++;
          // 从响应中获取错误信息
          let errorMsg = logisticsData.message || '未知错误';
          
          // 优化针对特定情况的错误信息
          if (errorMsg.includes("物流状态未知")) {
            recordErrorMessage = `${errorMsg} (单号可能不正确)`;
          } else if (errorMsg.includes("顺丰需要输入手机")) {
            recordErrorMessage = `${errorMsg}（请添加4位手机尾号）`;
          } else {
            recordErrorMessage = errorMsg;
          }
          
          errorDetails.push(`快递单号 ${trackingNumber} 查询失败: ${recordErrorMessage}`);
          
          // 将错误信息写入到报错信息字段
          if (errorMessageField) {
            await currentTable.setCellValue(errorMessageField.id, record.recordId, recordErrorMessage);
          }
        }

        processedCount.value++;
        updateLoadingChart();
        
      } catch (err) {
        failCount++;
        const errorMsg = err.message || '未知错误';
        recordErrorMessage = errorMsg;
        errorDetails.push(`快递单号 ${trackingNumber || '未知'} 处理失败: ${recordErrorMessage}`);
        
        // 将错误信息写入到报错信息字段
        if (errorMessageField) {
          await currentTable.setCellValue(errorMessageField.id, record.recordId, recordErrorMessage);
        }
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

// 修改 clearCache 方法，清除所有消息和新状态
const clearCache = () => {
  localStorage.removeItem(STORAGE_KEY.FIELD_ID);
  localStorage.removeItem(STORAGE_KEY.MOBILE_FIELD_ID);
  localStorage.removeItem(STORAGE_KEY.BASE_TOKEN);
  localStorage.removeItem(STORAGE_KEY.QUERY_TYPE);
  selectedField.value = null;
  selectedMobileField.value = null;
  baseToken.value = '';
  isInternationalEnabled.value = false;
  viewRecords.value = [];
  processedCount.value = 0;
  totalCount.value = 0;
  errorMessage.value = '';
  successMessage.value = '';
  hasError.value = false;
  mobileValidationMessage.value = '';
  chineseWarningMessage.value = ''; // 清除中文警告
  showChineseConfirmDialog.value = false; // 清除确认对话框
  updateLoadingChart();
};

// 初始化
onMounted(async () => {
  // 先恢复查询类型
  restoreQueryType();
  // 然后初始化其他数据
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
      domesticPurchased.value = response.data.domestic_purchased;
      internationalPurchased.value = response.data.international_purchased;
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
    
    const response = await axios.post('https://sky-eve-yang.com.cn/logi/api/payment/create', {
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
      console.error('创建订单失败:', response.data.message || response.data.error);
      
      // 针对体验包限购的特殊处理
      if (response.data.error && response.data.error.includes('限购') && response.data.error.includes('已购买')) {
        // 显示友好的警告提示
        ElMessage({
          message: `${response.data.error}，请选择其他套餐`,
          type: 'warning',
          duration: 5000
        });
        
        // 将错误信息保存到状态中
        errorMessage.value = `${response.data.error}，请选择其他套餐`;
        
        // 自动重置选中的套餐，返回套餐列表
        setTimeout(() => {
          selectedPackage.value = null;
        }, 100);
      } else {
        errorMessage.value = response.data.message || response.data.error || '创建订单失败';
      }
      
      return false;
    }
  } catch (error) {
    console.error('创建订单异常:', error);
    
    // 处理HTTP响应状态码错误
    if (error.response) {
      // 服务器返回了具体的错误信息
      const statusCode = error.response.status;
      const responseData = error.response.data || {};
      
      // 记录详细错误信息
      console.error(`订单创建失败: 状态码 ${statusCode}`, responseData);
      
      if (statusCode === 400) {
        // 400错误通常表示请求参数有误或服务端验证失败
        if (responseData.error && responseData.error.includes('限购') && responseData.error.includes('已购买')) {
          // 体验包限购特殊处理
          const errorMsg = `${responseData.error}，请选择其他套餐`;
          ElMessage({
            message: errorMsg,
            type: 'warning',
            duration: 5000
          });
          errorMessage.value = errorMsg;
          
          // 自动返回套餐列表
          setTimeout(() => {
            selectedPackage.value = null;
          }, 100);
        } else {
          // 其他400错误处理
          const errorMsg = responseData.message || responseData.error || '请求参数错误，请重试';
          ElMessage({
            message: errorMsg,
            type: 'error',
            duration: 5000
          });
          errorMessage.value = errorMsg;
        }
      } else {
        // 其他HTTP错误码处理
        errorMessage.value = `服务器错误 (${statusCode}): ${responseData.message || '请稍后重试'}`;
        ElMessage({
          message: errorMessage.value,
          type: 'error',
          duration: 5000
        });
      }
    } else if (error.request) {
      // 请求已发送但没有收到响应
      errorMessage.value = '服务器未响应，请检查网络连接';
      ElMessage({
        message: errorMessage.value,
        type: 'error',
        duration: 5000
      });
    } else {
      // 请求设置时发生的错误
      errorMessage.value = `请求错误: ${error.message}`;
      ElMessage({
        message: errorMessage.value,
        type: 'error',
        duration: 5000
      });
    }
    
    return false;
  }
};

// 查询订单状态
const checkOrderStatus = async (orderId) => {
  try {
    const response = await axios.get(`https://sky-eve-yang.com.cn/logi/api/payment/${orderId}`);
    
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
  if (quota === 10000) {
    return '最具性价比';
  }
  if (quota <= 1000) {
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

// 在 script setup 部分添加新的响应式变量
const domesticPurchased = ref(0);
const internationalPurchased = ref(0);

// 在 script setup 部分添加以下变量
const mobileFieldOptions = ref([]);
const selectedMobileField = ref(null);
const showMobileFieldSelector = ref(false);
const mobileValidationMessage = ref('');

// 获取所有支持的字段类型，包括文本、数字、查找引用和公式类型
const getMobileFieldOptions = async () => {
  try {
    const selection = await bitable.base.getSelection();
    const table = await bitable.base.getTableById(selection.tableId);
    const fields = await table.getFieldMetaList();
    
    // 筛选支持的字段类型: 文本、数字、查找引用、公式
    mobileFieldOptions.value = fields.filter(field => 
      field.type === FieldType.Text || 
      field.type === FieldType.Number ||
      field.type === FieldType.LookUp ||
      field.type === FieldType.Formula
    );
  } catch (error) {
    console.error('获取手机号码字段失败:', error);
    errorMessage.value = '获取手机号码字段失败，请重试';
  }
};

// 选择手机号码字段
const selectMobileField = (field) => {
  selectedMobileField.value = field;
  showMobileFieldSelector.value = false;
  mobileValidationMessage.value = '';
  
  // 存储字段ID到本地存储
  if (field) {
    localStorage.setItem(STORAGE_KEY.MOBILE_FIELD_ID, field.id);
  } else {
    localStorage.removeItem(STORAGE_KEY.MOBILE_FIELD_ID);
  }
};

// 从本地存储恢复手机号码字段
const restoreMobileField = async () => {
  const savedMobileFieldId = localStorage.getItem(STORAGE_KEY.MOBILE_FIELD_ID);
  if (savedMobileFieldId && mobileFieldOptions.value.length > 0) {
    const savedField = mobileFieldOptions.value.find(field => field.id === savedMobileFieldId);
    if (savedField) {
      selectedMobileField.value = savedField;
    }
  }
};

// 获取字段对应的图标
const getFieldIcon = (fieldType) => {
  switch (fieldType) {
    case FieldType.Text:
      return 'fas fa-font text-sm';
    case FieldType.Number:
      return 'fas fa-hashtag text-sm';
    case FieldType.LookUp:
      return 'fas fa-search text-sm';
    case FieldType.Formula:
      return 'fas fa-equals text-sm';
    default:
      return 'fas fa-question text-sm';
  }
};

// 验证四位手机号码
const validateMobileNumber = (mobile) => {
  if (!mobile) return null;
  
  // 移除空格和回车符
  const cleanMobile = String(mobile).replace(/[\s\n\r]/g, '');
  
  // 检查是否是4位数字
  if (/^\d{4}$/.test(cleanMobile)) {
    return cleanMobile;
  }
  
  // 如果不是4位数字但有数值，显示警告
  if (cleanMobile) {
    mobileValidationMessage.value = '手机号码必须为4位数字，当前值不符合要求，将不使用手机号码进行查询';
  }
  
  return null;
};

// 添加中文检测警告信息变量
const chineseWarningMessage = ref('');
// 添加确认对话框相关状态
const showChineseConfirmDialog = ref(false);
const confirmDialogCallback = ref(null);

// 切换中文确认对话框显示状态
const toggleChineseConfirmDialog = (confirm = false) => {
  showChineseConfirmDialog.value = !showChineseConfirmDialog.value;
  // 如果关闭并且有回调函数，执行回调并传递结果
  if (!showChineseConfirmDialog.value && confirmDialogCallback.value) {
    confirmDialogCallback.value(confirm);
  }
};

// 关闭支付成功弹窗
const closePaymentSuccessModal = () => {
  showPaymentSuccessModal.value = false;
  // 重置支付相关状态，确保下次打开时显示套餐列表
  selectedPackage.value = null;
  orderInfo.value = null;
};

// 处理选中的记录
const handleRecordsSelected = ({ records, mode }) => {
  // 隐藏记录选择器弹窗
  showRecordSelector.value = false;
  
  // 保存选中的记录
  viewRecords.value = records.map(record => ({
    recordId: record.recordId,
    value: record.fields[selectedField.value.id] || ''
  }));
  
  // 记录总数
  totalCount.value = viewRecords.value.length;
  processedCount.value = 0;
  
  // 检查是否有中文字符
  const chineseRecords = [];
  for (const record of viewRecords.value) {
    if (/[\u4e00-\u9fa5]/.test(record.value)) {
      chineseRecords.push(record.value);
    }
  }
  
  // 如果存在中文字符，显示警告
  if (chineseRecords.length > 0) {
    const maxSamples = 3; // 最多显示3个含中文的样本
    const samples = chineseRecords.slice(0, maxSamples).map(sample => `"${sample}"`).join('、');
    const remaining = chineseRecords.length > maxSamples ? `等${chineseRecords.length}条记录` : '';
    
    chineseWarningMessage.value = `检测到${chineseRecords.length}条记录中包含中文字符，可能会影响查询准确性：${samples}${remaining}。建议移除中文后再查询。`;
    
    // 使用自定义确认对话框
    showChineseConfirmDialog.value = true;
    confirmDialogCallback.value = (confirmed) => {
      showChineseConfirmDialog.value = false;
      if (confirmed) {
        // 用户确认继续，根据当前模式执行对应的查询逻辑
        if (isInternationalEnabled.value) {
          executeInternationalBatchQuery();
        } else {
          executeBatchQuery();
        }
      }
    };
  } else {
    // 没有中文字符，根据当前模式直接执行查询
    if (isInternationalEnabled.value) {
      executeInternationalBatchQuery();
    } else {
      executeBatchQuery();
    }
  }
};

// 国际查询
const batchQueryInternational = async () => {
  if (!selectedField.value || !baseToken.value) {
    baseTokenError.value = '请先选择字段或输入授权码';
    return;
  }

  // 显示记录选择器弹窗
  showRecordSelector.value = true;
};

// 执行批量国际查询
const executeInternationalBatchQuery = async () => {
  // 先设置加载状态，以确保弹窗显示
  isLoading.value = true;
  
  // 等待弹窗显示
  await nextTick();
  
  // 初始化水波图
  await initLoadingChart();
  
  // 重置其他状态
  errorMessage.value = '';
  successMessage.value = '';
  hasError.value = false;
  processedCount.value = 0;
  totalCount.value = viewRecords.value.length;

  try {
    // 获取当前多维表格和表格
    const selection = await bitable.base.getSelection();
    const currentTable = await bitable.base.getTableById(selection.tableId);
    const baseId = selection.baseId;
    const tableId = selection.tableId;

    // 确保所需字段存在 - 仅创建字段不返回字段ID
    console.log('检查并创建必要字段...');
    await ensureRequiredFields(currentTable);
    
    // 获取错误信息字段 - 这是唯一需要前端写入的字段
    const fields = await currentTable.getFieldMetaList();
    const errorMessageField = fields.find(f => f.name === FIELD_NAMES.ERROR_MESSAGE);

    let successCount = 0;
    let failCount = 0;
    let errorDetails = [];

    for (const record of viewRecords.value) {
      try {
        // 先清空该记录的错误信息
        if (errorMessageField) {
          await currentTable.setCellValue(errorMessageField.id, record.recordId, '');
        }
        
        // 获取快递单号
        const trackingNumberData = await currentTable.getCellValue(selectedField.value.id, record.recordId);
        let trackingNumber = '';
        if (Array.isArray(trackingNumberData)) {
          trackingNumber = trackingNumberData.map(item => item.text).join('');
        } else if (typeof trackingNumberData === 'string') {
          trackingNumber = trackingNumberData;
        }
        
        // 使用国际查询 - 所有数据处理由服务端完成
        const logisticsData = await queryInternationalExpressInfo(
          trackingNumber, 
          baseId, 
          baseToken.value,
          tableId,
          record.recordId
        );
        
        if (logisticsData.success) {
          // 成功查询，数据由服务端直接写入
          successCount++;
          
          // 更新剩余额度
          if (logisticsData.remaining !== undefined) {
            internationalQuota.value = logisticsData.remaining;
            if (logisticsData.purchased !== undefined) {
              internationalPurchased.value = logisticsData.purchased;
            }
          }
        } else {
          failCount++;
          // 从响应中获取错误信息
          let errorMsg = logisticsData.message || '未知错误';
          const recordErrorMessage = errorMsg;
          
          errorDetails.push(`快递单号 ${trackingNumber} 查询失败: ${recordErrorMessage}`);
          
          // 将错误信息写入到报错信息字段
          if (errorMessageField) {
            await currentTable.setCellValue(errorMessageField.id, record.recordId, recordErrorMessage);
          }
        }

        processedCount.value++;
        updateLoadingChart();
        
      } catch (err) {
        failCount++;
        const errorMsg = err.message || '未知错误';
        const recordErrorMessage = errorMsg;
        
        // 记录错误详情
        errorDetails.push(`处理失败: ${errorMsg}`);
        
        // 将错误信息写入到报错信息字段
        try {
          if (errorMessageField && record.recordId) {
            await currentTable.setCellValue(errorMessageField.id, record.recordId, errorMsg);
          }
        } catch (e) {
          console.error('写入错误信息失败:', e);
        }
      }
    }
    
    // 更新消息显示
    if (failCount > 0) {
      hasError.value = true;
      errorMessage.value = `查询失败 ${failCount} 条：\n${errorDetails.join('\n')}`;
    }
    if (successCount > 0) {
      successMessage.value = `成功查询 ${successCount} 条国际物流信息。`;
    }
    
  } catch (error) {
    console.error('国际查询失败:', error);
    hasError.value = true;
    errorMessage.value = error.message || '国际查询失败，请重试';
  } finally {
    isLoading.value = false;
  }
};

// 切换国际查询功能状态
const toggleInternationalEnabled = () => {
  isInternationalEnabled.value = !isInternationalEnabled.value;
  const queryType = isInternationalEnabled.value ? 'international' : 'domestic';
  console.log('保存查询类型:', queryType);
  // 保存查询类型到本地存储
  localStorage.setItem(STORAGE_KEY.QUERY_TYPE, queryType);
};

// 恢复授权码
const restoreBaseToken = () => {
  const savedBaseToken = localStorage.getItem(STORAGE_KEY.BASE_TOKEN);
  if (savedBaseToken) {
    baseToken.value = savedBaseToken;
  }
};

// 恢复查询类型
const restoreQueryType = () => {
  const savedQueryType = localStorage.getItem(STORAGE_KEY.QUERY_TYPE);
  console.log('恢复查询类型:', savedQueryType);
  if (savedQueryType === 'international') {
    isInternationalEnabled.value = true;
    console.log('设置为国际查询模式');
  } else {
    isInternationalEnabled.value = false;
    console.log('设置为国内查询模式');
  }
};

// 监听授权码变化并保存到本地存储
watch(baseToken, (newValue) => {
  if (newValue) {
    localStorage.setItem(STORAGE_KEY.BASE_TOKEN, newValue);
  } else {
    localStorage.removeItem(STORAGE_KEY.BASE_TOKEN);
  }
});
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
