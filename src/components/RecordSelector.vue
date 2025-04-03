<template>
  <div v-if="show" class="record-selector-modal">
    <div class="modal-overlay" @click="cancelSelection"></div>
    <div class="modal-container">
      <div class="modal-header">
        <h3>选择记录获取模式</h3>
        <button class="close-button" @click="cancelSelection">
          <i class="fas fa-times"></i>
        </button>
      </div>
      
      <div class="modal-body">
        <div class="selector-options">
          <div 
            class="option" 
            :class="{ active: mode === 'view' }"
            @click="selectMode('view')"
          >
            <div class="option-icon">
              <i class="fas fa-list-ul"></i>
            </div>
            <div class="option-content">
              <h4>视图模式</h4>
              <p>从当前视图获取所有可见记录</p>
              <div class="option-badge" v-if="mode === 'view'">
                <i class="fas fa-check"></i> 已选择
              </div>
            </div>
          </div>
          
          <div 
            class="option" 
            :class="{ active: mode === 'manual' }"
            @click="selectMode('manual')"
          >
            <div class="option-icon">
              <i class="fas fa-hand-pointer"></i>
            </div>
            <div class="option-content">
              <h4>手动选择</h4>
              <p>交互式选择需要处理的记录</p>
              <div class="option-badge" v-if="mode === 'manual'">
                <i class="fas fa-check"></i> 已选择
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button 
          class="cancel-button"
          @click="cancelSelection"
        >
          取消
        </button>
        <button 
          class="primary-button"
          @click="confirmSelection"
          :disabled="!mode"
        >
          确认选择
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { bitable } from '@lark-base-open/js-sdk';
import { getRecordList } from '../services/dataService';

export default {
  name: 'RecordSelector',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  emits: ['records-selected', 'cancel'],
  
  setup(props, { emit }) {
    const mode = ref('view'); // 默认使用视图模式
    
    const selectMode = (selectedMode) => {
      mode.value = selectedMode;
    };
    
    const confirmSelection = async () => {
      try {
        // 显示加载中提示
        bitable.ui.showToast({
          type: 'loading',
          message: '正在获取记录...'
        });
        
        const result = await getRecordList(mode.value);
        
        if (result.success) {
          if (result.data.length === 0) {
            bitable.ui.showToast({
              type: 'warning',
              message: '未选择任何记录，请重新选择'
            });
            return;
          }
          
          emit('records-selected', {
            records: result.data,
            mode: mode.value
          });
        } else {
          bitable.ui.showToast({
            type: 'error',
            message: result.error || '获取记录失败'
          });
        }
      } catch (error) {
        bitable.ui.showToast({
          type: 'error',
          message: error.message || '操作失败'
        });
      }
    };
    
    const cancelSelection = () => {
      emit('cancel');
    };
    
    return {
      mode,
      selectMode,
      confirmSelection,
      cancelSelection
    };
  }
};
</script>

<style scoped>
.record-selector-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
}

.modal-container {
  position: relative;
  width: 100%;
  max-width: 480px;
  max-height: 90vh;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: modalAppear 0.3s ease;
}

@keyframes modalAppear {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-header {
  padding: 16px 20px;
  border-bottom: 1px solid #e5e6eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: #1f2329;
}

.close-button {
  background: none;
  border: none;
  color: #646a73;
  cursor: pointer;
  font-size: 16px;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.close-button:hover {
  background-color: #f2f3f5;
  color: #1f2329;
}

.modal-body {
  padding: 20px;
  overflow-y: auto;
}

.selector-options {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.option {
  display: flex;
  padding: 16px;
  border: 1px solid #e5e6eb;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.option:hover {
  border-color: #3370ff;
  background-color: #f5f8ff;
}

.option.active {
  border-color: #3370ff;
  background-color: #f0f6ff;
}

.option-icon {
  width: 40px;
  height: 40px;
  background-color: #f2f3f5;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #3370ff;
  margin-right: 16px;
  transition: all 0.3s ease;
}

.option.active .option-icon {
  background-color: #e8f1ff;
}

.option-content {
  flex: 1;
}

.option-content h4 {
  margin: 0 0 8px;
  font-size: 14px;
  color: #1f2329;
}

.option-content p {
  margin: 0;
  font-size: 12px;
  color: #646a73;
}

.option-badge {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background-color: #e8f1ff;
  color: #3370ff;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.modal-footer {
  padding: 16px 20px;
  border-top: 1px solid #e5e6eb;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

.primary-button {
  padding: 8px 16px;
  background-color: #3370ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.primary-button:hover {
  background-color: #2860e1;
}

.primary-button:disabled {
  background-color: #c9cdd4;
  cursor: not-allowed;
}

.cancel-button {
  padding: 8px 16px;
  background-color: white;
  color: #1f2329;
  border: 1px solid #e5e6eb;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
}

.cancel-button:hover {
  background-color: #f2f3f5;
  border-color: #c9cdd4;
}
</style> 