<template>
  <div>
    <Preloader v-if="isLoading" />
    <div v-if="!isLoading" class="app-content">
      <AppHeader />
      <router-view />
      <AppFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from "vue";
import { useStore } from "vuex";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import Preloader from "@/components/Preloader.vue";
import "@/assets/styles/base.css";

export default defineComponent({
  name: "App",
  components: { AppHeader, AppFooter, Preloader },
  setup() {
    const store = useStore();
    const isLoading = computed(() => store.getters['app/isLoading']);

    onMounted(async () => {
      // Inicializar el precargador cuando la app se monta
      await store.dispatch('app/initializePreloader');
    });

    return {
      isLoading
    };
  }
});
</script>

<style>
/* estilos globales en base.css */

.app-content {
  animation: fadeInContent 0.8s ease-in-out;
}

@keyframes fadeInContent {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
