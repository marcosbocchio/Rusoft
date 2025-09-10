<template>
  <header class="app-header">
    <div class="container">
      <router-link to="/" class="brand" aria-label="Rusoft">
        <img :src="logo" alt="Rusoft" class="logo" />
      </router-link>
      
      <!-- Menú hamburguesa para móviles -->
      <button 
        class="mobile-menu-toggle" 
        @click="toggleMobileMenu"
        :class="{ 'active': isMobileMenuOpen }"
        aria-label="Abrir menú"
      >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
      
      <!-- Menú de navegación -->
      <nav class="nav-menu" :class="{ 'mobile-open': isMobileMenuOpen }">
        <router-link to="/" @click="closeMobileMenu">Inicio</router-link>
        <router-link to="/nosotros" @click="closeMobileMenu">Nuestra empresa</router-link>
        <router-link to="/contacto" @click="closeMobileMenu">Contacto</router-link>
        <router-link to="/cv" @click="closeMobileMenu">Trabaja con nosotros</router-link>
      </nav>
      
      <!-- Overlay para móviles -->
      <div 
        class="mobile-overlay" 
        :class="{ 'active': isMobileMenuOpen }"
        @click="closeMobileMenu"
      ></div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import logo from "@/assets/logo.png";

export default defineComponent({
  name: "AppHeader",
  setup() {
    const isMobileMenuOpen = ref(false);

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
    };

    const closeMobileMenu = () => {
      isMobileMenuOpen.value = false;
    };

    // Cerrar menú al cambiar de ruta
    const handleRouteChange = () => {
      closeMobileMenu();
    };

    // Cerrar menú al hacer scroll
    const handleScroll = () => {
      if (isMobileMenuOpen.value) {
        closeMobileMenu();
      }
    };

    // Cerrar menú al redimensionar la ventana
    const handleResize = () => {
      if (window.innerWidth > 768) {
        closeMobileMenu();
      }
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    });

    return { 
      logo, 
      isMobileMenuOpen, 
      toggleMobileMenu, 
      closeMobileMenu,
      handleRouteChange
    };
  },
});
</script>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.3);
  color: rgb(5, 44, 89);
  border-bottom: none;
  transition: all 0.3s ease;
}

.container {
  max-width: 1540px;
  margin: 0 auto;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.brand {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: inherit;
  z-index: 1001;
}

.logo {
  height: 54px;
  width: auto;
  object-fit: contain;
}

/* Menú hamburguesa */
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
}

.hamburger-line {
  width: 100%;
  height: 3px;
  background-color: rgb(5, 44, 89);
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.mobile-menu-toggle.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.mobile-menu-toggle.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Menú de navegación */
.nav-menu {
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav-menu a {
  color: rgb(5, 44, 89);
  text-decoration: none;
  opacity: 0.8;
  transition: all 0.3s ease;
  font-size: 18px;
  font-weight: 500;
  white-space: nowrap;
}

.nav-menu a.router-link-exact-active {
  opacity: 1;
  font-weight: 700;
  color: rgb(5, 44, 89);
}

.nav-menu a:hover {
  opacity: 1;
  font-weight: 700;
  color: rgb(5, 44, 89);
}

/* Overlay para móviles */
.mobile-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.mobile-overlay.active {
  opacity: 1;
}

/* Efecto de transparencia dinámica */
.app-header:hover {
  background: rgba(255, 255, 255, 0.5);
  border-bottom: none;
}

/* Responsive */
@media (max-width: 768px) {
  .container {
    padding: 8px 20px;
  }
  
  .mobile-menu-toggle {
    display: flex;
  }
  
  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 280px;
    height: 100vh;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 80px 0 0 0;
    gap: 0;
    transition: right 0.3s ease;
    z-index: 1000;
    box-shadow: -5px 0 20px rgba(0, 0, 0, 0.1);
  }
  
  .nav-menu.mobile-open {
    right: 0;
  }
  
  .nav-menu a {
    width: 100%;
    padding: 16px 24px;
    font-size: 16px;
    border-bottom: 1px solid rgba(5, 44, 89, 0.1);
    margin: 0;
  }
  
  .nav-menu a:last-child {
    border-bottom: none;
  }
  
  .nav-menu a:hover {
    background: rgba(5, 44, 89, 0.05);
  }
  
  .mobile-overlay {
    display: block;
  }
  
  .logo {
    height: 48px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 8px 16px;
  }
  
  .nav-menu {
    width: 100%;
    right: -100%;
  }
  
  .nav-menu.mobile-open {
    right: 0;
  }
  
  .nav-menu a {
    padding: 18px 20px;
    font-size: 15px;
  }
  
  .logo {
    height: 44px;
  }
  
  .mobile-menu-toggle {
    width: 28px;
    height: 28px;
  }
  
  .hamburger-line {
    height: 2.5px;
  }
}

@media (max-width: 360px) {
  .container {
    padding: 6px 12px;
  }
  
  .nav-menu a {
    padding: 16px 16px;
    font-size: 14px;
  }
  
  .logo {
    height: 40px;
  }
}
</style>