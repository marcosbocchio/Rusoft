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
  background: rgba(11, 18, 26, 0.7);
  color: #ffffff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}
.container {
  max-width: 1100px;
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
  color: #ffffff;
  text-decoration: none;
  opacity: 0.9;
}
nav a.router-link-exact-active {
  opacity: 1;
  font-weight: 600;
}

/* Efecto de transparencia dinámica */
.app-header:hover {
  background: rgba(11, 18, 26, 0.85);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

/* Mejorar la transparencia de los enlaces */
nav a {
  margin-left: 16px;
  color: #ffffff;
  text-decoration: none;
  opacity: 0.8;
  transition: all 0.3s ease;
}

nav a:hover {
  opacity: 1;
  color: #7dd3fc;
}
</style>