<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-50 p-4">
    <div class="bg-white w-full max-w-[420px] min-h-[762px] text-gray-800 shadow-lg !rounded-2xl">
      <div class="px-6 pt-8 pb-24">
        <div class="space-y-8">
          <!-- API 介绍 -->
          <div class="p-6 bg-secondary/50 backdrop-blur !rounded-xl border border-primary/10">
            <h1 class="text-xl font-semibold mb-3 text-primary">快递查询 API</h1>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">提供全面的快递物流查询服务，支持国内外超过 500 家快递公司，实时跟踪包裹状态，准确率高达 99.9%。</p>
            <div class="flex flex-wrap items-center gap-4">
              <div class="flex items-center gap-2">
                <i class="fas fa-rocket text-primary" style="width: 16px; height: 16px; display: flex; justify-content: center; align-items: center;"></i>
                <span class="text-sm text-gray-600">毫秒级响应</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="fas fa-shield-alt text-primary" style="width: 16px; height: 16px; display: flex; justify-content: center; align-items: center;"></i>
                <span class="text-sm text-gray-600">数据安全加密</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="fas fa-sync text-primary" style="width: 16px; height: 16px; display: flex; justify-content: center; align-items: center;"></i>
                <span class="text-sm text-gray-600">每日更新</span>
              </div>
            </div>
          </div>

          <!-- 公告栏 -->
          <div v-if="showAnnouncement" class="p-4 bg-yellow-50/80 backdrop-blur border border-yellow-200/50 !rounded-xl">
            <div class="flex items-start gap-3">
              <div class="shrink-0">
                <i class="fas fa-bullhorn text-yellow-500 mt-1" style="width: 16px; height: 16px; display: flex; justify-content: center; align-items: center;"></i>
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-start justify-between mb-1">
                  <h3 class="text-yellow-800 font-medium text-sm">插件更新提醒</h3>
                  <button @click="closeAnnouncement" class="text-yellow-500 hover:text-yellow-600 transition-colors">
                    <i class="fas fa-times" style="width: 14px; height: 14px; display: flex; justify-content: center; align-items: center;"></i>
                  </button>
                </div>
                <p class="text-yellow-700 text-sm leading-relaxed break-words mb-1">新版本已发布，以往购买的 apikey 可联系开发者回收</p>
                <div class="flex items-center justify-between mt-2">
                  <span class="text-yellow-600/70 text-xs">2024-03-23 10:30</span>
                  <button class="text-yellow-600 text-sm hover:text-yellow-700 transition-colors flex items-center gap-1">
                    <span>联系开发者</span>
                    <i class="fas fa-chevron-right text-xs"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- 查询额度 -->
          <div class="pt-2">
            <div class="flex items-center justify-between mb-4">
              <div>
                <h2 class="text-base font-medium">当前表格的查询余量</h2>
                <p class="text-xs text-gray-500 mt-1">仅针对您正在操作的这个多维表格</p>
              </div>
              <div class="text-xs text-gray-500 flex items-center gap-1">
                <i class="fas fa-info-circle"></i>
                <span>每日刷新</span>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-white p-4 !rounded-xl shadow-sm border border-gray-100 hover:border-primary/10 transition-colors relative">
                <div class="flex justify-between items-center mb-2">
                  <span class="text-sm text-gray-600">国内查询剩余</span>
                  <span class="text-primary font-medium">{{ remainingQuota }}次</span>
                </div>
                <div class="w-full bg-gray-100 !rounded-full h-1.5">
                  <div class="bg-primary h-full !rounded-full shadow-sm" :style="{ width: `${Math.min((remainingQuota / 5000) * 100, 100)}%` }"></div>
                </div>
                <!-- 优化余量不足提示 -->
                <div v-if="remainingQuota < 100" class="mt-2 flex items-center gap-1 text-[11px] text-red-500 whitespace-nowrap">
                  <i class="fas fa-exclamation-circle text-[10px]"></i>
                  <span>余额不足，建议充值</span>
                </div>
                <!-- 优化充值按钮 -->
                <button @click="togglePaymentModal" 
                        class="mt-2 w-full h-7 bg-primary/10 text-primary text-xs !rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <i class="fas fa-wallet text-[11px] mr-1"></i>
                  <span>立即充值</span>
                </button>
              </div>
              <div class="bg-white p-4 !rounded-xl shadow-sm border border-gray-100 opacity-50">
                <div class="flex justify-between items-center mb-2">
                  <span class="text-sm text-gray-400">国际查询剩余</span>
                  <span class="text-sm text-gray-400">即将开放</span>
                </div>
                <div class="w-full bg-gray-100 !rounded-full h-1.5">
                  <div class="bg-gray-300 h-full !rounded-full shadow-sm" style="width: 0%"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- 错误提示 -->
          <div v-if="errorMessage" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
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

          <!-- 字段选择 -->
          <div class="pt-2">
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-base font-medium">选择快递单号字段</h2>
              <button @click="clearCache" 
                      class="text-sm text-gray-500 hover:text-primary transition-colors flex items-center gap-1">
                <i class="fas fa-sync-alt text-xs"></i>
                <span>重置选择</span>
              </button>
            </div>
            <div class="relative">
              <button @click="showFieldSelector = !showFieldSelector" 
                      :class="['w-full h-11 px-4 bg-white shadow-sm border !rounded-lg flex items-center justify-between hover:border-primary transition-colors',
                              selectedField ? 'border-primary/20' : 'border-gray-200']">
                <div class="flex items-center gap-2">
                  <i class="fas fa-table text-primary/70" style="width: 16px; height: 16px;"></i>
                  <span class="text-gray-600 text-sm truncate">
                    {{ selectedField ? selectedField.name : '请选择字段' }}
                  </span>
                </div>
                <div class="flex items-center gap-2">
                  <span v-if="viewRecords.length > 0" class="text-xs text-gray-500">
                    {{ viewRecords.length }}条记录
                  </span>
                  <i class="fas fa-chevron-down text-primary"></i>
                </div>
              </button>
              
              <!-- 字段选择下拉框 -->
              <div v-if="showFieldSelector" 
                   class="absolute z-10 w-full mt-1 bg-white border border-gray-200 !rounded-lg shadow-lg max-h-60 overflow-y-auto">
                <div v-if="isLoading" class="p-4 text-center text-gray-500">
                  <i class="fas fa-spinner fa-spin mr-2"></i>加载中...
                </div>
                <div v-else-if="tableFields.length === 0" class="p-4 text-center text-gray-500">
                  暂无可用字段
                </div>
                <div v-else>
                  <div v-for="field in tableFields" 
                       :key="field.id" 
                       @click="selectField(field)"
                       class="px-4 py-2.5 hover:bg-gray-50 cursor-pointer flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <i class="fas fa-font text-gray-400" style="width: 16px; height: 16px;"></i>
                      <span class="text-gray-700 text-sm truncate">{{ field.name }}</span>
                    </div>
                    <i v-if="selectedField && selectedField.id === field.id" 
                       class="fas fa-check text-primary"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 操作按钮 -->
          <div class="space-y-4 mt-10">
            <button @click="batchQuery"
                    :disabled="isLoading || !selectedField || viewRecords.length === 0"
                    :class="['w-full h-11 shadow !rounded-lg flex items-center justify-center transition-all relative space-x-2',
                            isLoading || !selectedField || viewRecords.length === 0 
                              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                              : 'bg-primary text-white hover:bg-primary/90 active:scale-[0.98]']">
              <i v-if="isLoading" class="fas fa-spinner fa-spin"></i>
              <i v-else class="fas fa-play" style="width: 16px; height: 16px;"></i>
              <span class="font-medium">{{ isLoading ? '处理中...' : '开始查询' }}</span>
              <div v-if="!isLoading && selectedField && viewRecords.length > 0" 
                   class="absolute -top-1 -right-1 w-2 h-2 bg-red-500 !rounded-full animate-pulse"></div>
            </button>
          </div>

          <!-- 支付按钮 -->
          <button @click="togglePaymentModal" 
                  class="fixed bottom-8 left-6 h-12 w-12 bg-primary text-white shadow-lg !rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors group">
            <i class="fas fa-wallet text-lg"></i>
            <!-- 添加悬浮提示 -->
            <div class="absolute left-full ml-2 bg-gray-800 text-white text-xs px-2 py-1 !rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              充值查询额度
            </div>
          </button>

          <!-- 支付弹窗 -->
          <div v-if="showPaymentModal" 
               class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
               @click.self="togglePaymentModal">
            <div class="bg-white !rounded-xl w-full max-w-sm p-6 space-y-6">
              <div class="flex justify-between items-center">
                <h3 class="text-lg font-semibold">增值服务</h3>
                <button @click="togglePaymentModal" class="text-gray-400 hover:text-gray-600">
                  <i class="fas fa-times" style="width: 20px; height: 20px; display: flex; justify-content: center; align-items: center;"></i>
                </button>
              </div>
              
              <!-- 套餐选择 -->
              <div v-if="!selectedPackage" class="space-y-4">
                <h4 class="text-base font-medium mb-3">国内套餐</h4>
                <div class="space-y-3">
                  <div v-for="(pkg, index) in packages" 
                       :key="pkg.id"
                       :class="[
                         'p-4 !rounded-lg border transition-colors cursor-pointer relative',
                         pkg.popular 
                           ? 'bg-primary/5 border-primary/20 hover:border-primary/30' 
                           : 'bg-white border-gray-100 hover:border-primary/10'
                       ]"
                       @click="handlePayment(pkg.id)">
                    <!-- 标签 -->
                    <div v-if="pkg.tag" 
                         :class="[
                           'absolute -top-2 left-4 px-2 py-0.5 text-xs font-medium !rounded-full',
                           pkg.popular 
                             ? 'bg-primary text-white' 
                             : 'bg-primary/10 text-primary'
                         ]">
                      {{ pkg.tag }}
                    </div>
                    
                    <!-- 套餐内容 -->
                    <div class="flex items-center justify-between mb-2">
                      <div class="flex items-center gap-3">
                        <i class="fas fa-box text-primary" style="width: 16px; height: 16px; display: flex; justify-content: center; align-items: center;"></i>
                        <div>
                          <span class="font-medium text-sm">{{ pkg.name }}</span>
                          <p class="text-xs text-gray-500 mt-0.5">{{ pkg.description }}</p>
                        </div>
                      </div>
                      <div class="text-right">
                        <span class="text-lg font-medium text-primary">¥{{ pkg.price }}</span>
                        <p class="text-xs text-gray-500 mt-0.5">{{ pkg.quota }}条</p>
                      </div>
                    </div>
                    
                    <!-- 价格对比 -->
                    <div class="flex items-center gap-2 text-xs text-gray-500 mt-2">
                      <i class="fas fa-calculator" style="width: 12px; height: 12px;"></i>
                      <span>约{{ (pkg.price / pkg.quota * 1000).toFixed(2) }}元/千条</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- 套餐说明 -->
              <div class="mt-4 p-3 bg-gray-50 !rounded-lg text-xs text-gray-500 space-y-1">
                <p class="flex items-center gap-2">
                  <i class="fas fa-info-circle" style="width: 12px; height: 12px;"></i>
                  <span>所有套餐支持叠加购买，额度永久有效</span>
                </p>
                <p class="flex items-center gap-2">
                  <i class="fas fa-shield-alt" style="width: 12px; height: 12px;"></i>
                  <span>支付成功后立即生效</span>
                </p>
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
                <p class="text-gray-600">订单号：{{ orderInfo.order_id }}</p>
                <p class="text-gray-600">支付金额：¥{{ selectedPackage.price }}</p>
                <p class="text-gray-600">查询额度：{{ selectedPackage.quota }}条</p>
              </div>
              <button @click="showPaymentSuccessModal = false" 
                      class="w-full h-11 bg-primary text-white shadow !rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors">
                确定
              </button>
            </div>
          </div>

          <!-- 右侧工具栏 -->
          <div class="fixed bottom-8 right-6 flex flex-col gap-2 items-end">
            <button @click="toggleGroupQRModal" 
                    class="h-9 w-9 bg-white text-gray-600 shadow !rounded-lg flex items-center justify-center hover:text-primary transition-colors border border-gray-100">
              <i class="fas fa-comments" style="width: 16px; height: 16px; display: flex; justify-content: center; align-items: center;"></i>
            </button>
            <button @click="openDocumentation" 
                    class="h-9 px-3 bg-white text-gray-600 shadow !rounded-lg flex items-center justify-center hover:text-primary transition-colors border border-gray-100 space-x-2">
              <i class="fas fa-book" style="width: 16px; height: 16px; display: flex; justify-content: center; align-items: center;"></i>
              <span class="text-sm">使用文档</span>
            </button>
            <button @click="openFeedback" 
                    class="h-9 px-3 bg-white text-gray-600 shadow !rounded-lg flex items-center justify-center hover:text-primary transition-colors border border-gray-100 space-x-2">
              <i class="fas fa-pencil-alt" style="width: 16px; height: 16px; display: flex; justify-content: center; align-items: center;"></i>
              <span class="text-sm">问题反馈</span>
            </button>
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

          <!-- 在 template 中添加水波图容器 -->
          <div v-if="isLoading" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
            <div class="bg-white !rounded-xl p-6 w-64 h-64 flex flex-col items-center justify-center">
              <div id="loadingChart" class="w-48 h-48"></div>
              <p class="text-sm text-gray-500 mt-4">正在查询中...</p>
            </div>
          </div>
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
import { formatDateTime, queryExpressInfo, updateRecordInfo, queryRemainingQuota } from '../services/dataService';
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
const remainingQuota = ref(0);
const showPaymentModal = ref(false);
const selectedPackage = ref(null);
const orderInfo = ref(null);
const showPaymentSuccessModal = ref(false);

// 本地存储相关的常量
const STORAGE_KEY = {
  FIELD_ID: 'express_tracking_field_id'
};

// 添加字段名常量
const FIELD_NAMES = {
  LATEST_STATUS: '最新状态',
  LATEST_UPDATE_TIME: '最新更新时间',
  REFRESH_CHANGE: '刷新变动'
};

// 套餐配置
const packages = [
  { 
    id: 1, 
    name: '体验包', 
    quota: 100, 
    price: 1.99,
    description: '新用户专享',
    tag: '仅可购买一次',
    popular: false
  },
  { 
    id: 2, 
    name: '基础包', 
    quota: 1000, 
    price: 5.9,
    description: '最具性价比',
    tag: '热销',
    popular: true
  },
  { 
    id: 3, 
    name: '超值包', 
    quota: 10000, 
    price: 49.9,
    description: '企业首选',
    tag: '最优惠',
    popular: false
  }
];

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
    return;
  }

  try {
    isLoading.value = true;
    errorMessage.value = '';
    processedCount.value = 0;
    totalCount.value = viewRecords.value.length;
    
    // 初始化水波图
    await initLoadingChart();
    
    // 获取当前多维表格和表格
    const selection = await bitable.base.getSelection();
    const currentTable = await bitable.base.getTableById(selection.tableId);
    const baseId = selection.baseId; // 获取多维表格ID
    
    // 确保所需字段存在
    console.log('检查并创建必要字段...');
    const fields = await ensureRequiredFields(currentTable);
    
    // 获取字段ID
    const statusField = fields.find(f => f.name === FIELD_NAMES.LATEST_STATUS);
    const updateTimeField = fields.find(f => f.name === FIELD_NAMES.LATEST_UPDATE_TIME);
    const refreshChangeField = fields.find(f => f.name === FIELD_NAMES.REFRESH_CHANGE);

    let successCount = 0;
    let failCount = 0;
    let errorDetails = [];

    for (const record of viewRecords.value) {
      let trackingNumber = ''; // 将变量声明移到try块外面
      try {
        // 获取快递单号
        const trackingNumberData = await currentTable.getCellValue(selectedField.value.id, record.recordId);
        console.log("快递单号原始数据:", trackingNumberData);
        
        // 处理快递单号数据
        if (Array.isArray(trackingNumberData)) {
          trackingNumber = trackingNumberData.map(item => item.text).join('');
        } else if (typeof trackingNumberData === 'string') {
          trackingNumber = trackingNumberData;
        }
        
        console.log("处理后的快递单号:", trackingNumber);
        
        // 获取之前的状态和更新时间
        const prevStatus = await currentTable.getCellValue(statusField.id, record.recordId);
        const prevUpdateTime = await currentTable.getCellValue(updateTimeField.id, record.recordId);
        
        // 调用物流查询接口，传入多维表格的ID
        const logisticsData = await queryExpressInfo(trackingNumber, baseId);
        
        if (logisticsData.success) {
          // 更新记录信息
          await updateRecordInfo({
            currentTable,
            record,
            statusField,
            updateTimeField,
            refreshChangeField,
            logisticsData,
            prevStatus,
            prevUpdateTime
          });
          successCount++;
        } else {
          failCount++;
          errorDetails.push(`快递单号 ${trackingNumber} 查询失败: ${logisticsData.message || '未知错误'}`);
          console.error(`查询失败: ${logisticsData.message || '未知错误'}`);
        }

        processedCount.value++;
        updateLoadingChart();
        
      } catch (err) {
        failCount++;
        const errorMsg = err.message || '未知错误';
        errorDetails.push(`快递单号 ${trackingNumber || '未知'} 处理失败: ${errorMsg}`);
        console.error(`处理记录 ${record.recordId} 失败:`, err);
      }
    }
    
    // 更新错误信息显示
    if (failCount > 0) {
      errorMessage.value = `查询完成，成功 ${successCount} 条，失败 ${failCount} 条。\n${errorDetails.join('\n')}`;
    } else {
      errorMessage.value = `查询完成，成功 ${successCount} 条。`;
    }
    
  } catch (error) {
    console.error('批量查询失败:', error);
    errorMessage.value = error.message || '批量查询失败，请重试';
  } finally {
    isLoading.value = false;
  }
};

// 清除缓存
const clearCache = () => {
  localStorage.removeItem(STORAGE_KEY.FIELD_ID);
  selectedField.value = null;
  viewRecords.value = [];
  processedCount.value = 0;
  totalCount.value = 0;
  updateLoadingChart();
};

// 初始化
onMounted(async () => {
  try {
    await getTableFields();
    await initLoadingChart();
    
    // 获取当前多维表格ID并查询剩余次数
    const selection = await bitable.base.getSelection();
    if (selection.baseId) {
      await getRemainingQuota(selection.baseId);
    }
  } catch (error) {
    console.error('初始化失败:', error);
    errorMessage.value = '初始化失败，请刷新页面重试';
  }
});

// 切换支付弹窗显示状态
const togglePaymentModal = () => {
  showPaymentModal.value = !showPaymentModal.value;
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
    }
  } catch (error) {
    console.error('获取剩余次数失败:', error);
  }
};

// 创建订单
const createOrder = async (packageId) => {
  try {
    const selection = await bitable.base.getSelection();
    const response = await axios.post('https://sky-eve-yang.com.cn:5000/api/orders/create', {
      base_id: selection.baseId,
      package_id: packageId
    });
    
    if (response.data.success) {
      orderInfo.value = response.data.data;
      return true;
    } else {
      errorMessage.value = response.data.message || '创建订单失败';
      return false;
    }
  } catch (error) {
    console.error('创建订单失败:', error);
    errorMessage.value = '创建订单失败，请重试';
    return false;
  }
};

// 查询订单状态
const checkOrderStatus = async (orderId) => {
  try {
    const response = await axios.get(`https://sky-eve-yang.com.cn:5000/api/orders/${orderId}/status`);
    
    if (response.data.success) {
      if (response.data.data.status === 'paid') {
        // 支付成功，更新余量
        const selection = await bitable.base.getSelection();
        await getRemainingQuota(selection.baseId);
        
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

// 处理支付流程
const handlePayment = async (packageId) => {
  try {
    // 创建订单
    const orderCreated = await createOrder(packageId);
    if (!orderCreated) return;
    
    // 显示支付二维码
    selectedPackage.value = packages.find(p => p.id === packageId);
  } catch (error) {
    console.error('支付处理失败:', error);
    errorMessage.value = '支付处理失败，请重试';
  }
};

// 检查支付状态
const checkPaymentStatus = async () => {
  if (!orderInfo.value) return;
  
  const isPaid = await checkOrderStatus(orderInfo.value.order_id);
  if (!isPaid) {
    errorMessage.value = '支付未完成，请完成支付后重试';
  }
};

// 打开反馈表单
const openFeedback = () => {
  window.open('https://jfsq6znqku.feishu.cn/share/base/form/shrcnXUwXl4g8nDM5oasagYnRpd', '_blank');
};
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
</style>
