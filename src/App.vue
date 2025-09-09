<template>
  <div>
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import "@/assets/styles/base.css";

export default defineComponent({
  name: "App",
  components: { AppHeader, AppFooter },
});
</script>

<style>
/* estilos globales en base.css */
</style>
