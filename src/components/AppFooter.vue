<template>
  <footer class="app-footer">
    <div class="container">
      <div class="copy">© 2025 Rusoft. Todos los derechos reservados.</div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppFooter",
});
</script>

<style scoped>
.app-footer {
  background: #0b0f14;
  color: #c9d3df;
  padding: 24px 20px;
  margin-top: 0;
  text-align: center;
}
.container {
  max-width: 1100px;
  margin: 0 auto;
}
.copy {
  font-size: 14px;
  opacity: 0.8;
}
</style>
