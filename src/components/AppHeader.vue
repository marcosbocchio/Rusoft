<template>
  <header class="app-header">
    <div class="container">
      <router-link to="/" class="brand" aria-label="Rusoft">
        <img :src="logo" alt="Rusoft" class="logo" />
      </router-link>
      <nav>
        <router-link to="/">Inicio</router-link>
        <router-link to="/nosotros">Nosotros</router-link>
        <router-link to="/contacto">Contacto</router-link>
        <router-link to="/cv">Subir CV</router-link>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import logo from "@/assets/logo.png";

export default defineComponent({
  name: "AppHeader",
  setup() {
    return { logo };
  },
});
</script>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(12px);
  background: rgba(226, 232, 240, 0.7);
  color: rgb(5, 44, 89);
  border-bottom: 1px solid rgba(203, 213, 225, 0.3);
  transition: all 0.3s ease;
}
.container {
  max-width: 1540px;
  margin: 0 auto;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.brand {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: inherit;
}
.logo {
  height: 54px;
  width: auto;
  object-fit: contain;
}
nav a {
  margin-left: 16px;
  color: rgb(5, 44, 89);
  text-decoration: none;
  opacity: 0.8;
  transition: all 0.3s ease;
}
nav a.router-link-exact-active {
  opacity: 1;
  font-weight: 600;
  color: #2dd4bf;
}

/* Efecto de transparencia dinámica */
.app-header:hover {
  background: rgba(226, 232, 240, 0.85);
  border-bottom: 1px solid rgba(203, 213, 225, 0.6);
}

/* Efecto hover en enlaces */
nav a:hover {
  opacity: 1;
  color: #2dd4bf;
}
</style>