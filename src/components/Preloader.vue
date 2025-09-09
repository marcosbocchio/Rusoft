<template>
  <div v-if="isLoading" class="preloader-overlay">
    <div class="preloader-container">
      <div class="preloader-logo">
        <img src="@/assets/logo.png" alt="Rusoft Logo" />
      </div>
      
      <div class="progress-container">
        <div class="progress-bar">
          <div 
            class="progress-fill" 
            :style="{ width: `${progress}%` }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Preloader',
  setup() {
    const store = useStore();
    
    const isLoading = computed(() => store.getters['app/isLoading']);
    const progress = computed(() => store.getters['app/loadingProgress']);
    
    return {
      isLoading,
      progress
    };
  }
});
</script>

<style scoped>
.preloader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeIn 0.5s ease-in;
}

.preloader-container {
  text-align: center;
  max-width: 300px;
  padding: 40px;
}

.preloader-logo {
  margin-bottom: 40px;
  animation: fadeIn 0.8s ease-out;
}

.preloader-logo img {
  width: 150px;
  height: auto;
}

.progress-container {
  width: 100%;
}

.progress-bar {
  width: 100%;
  height: 4px;
  background: #e5e7eb;
  border-radius: 2px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: #3b82f6;
  border-radius: 2px;
  transition: width 0.3s ease;
  position: relative;
}

.progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.6),
    transparent
  );
  animation: shimmer 2s infinite;
}

/* Animaciones */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .preloader-container {
    padding: 20px;
    max-width: 250px;
  }
  
  .preloader-logo img {
    width: 120px;
  }
}

@media (max-width: 480px) {
  .preloader-container {
    padding: 16px;
    max-width: 200px;
  }
  
  .preloader-logo img {
    width: 100px;
  }
}
</style>