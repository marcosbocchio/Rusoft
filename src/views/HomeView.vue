<template>
  <main>
    <section class="section bg-hero">
      <div class="container">
        <h1 style="margin: 0 0 10px; font-size: 40px">{{ hero.headline }}</h1>
        <p style="margin: 0 0 20px; opacity: 0.9; max-width: 800px">
          {{ hero.subheadline }}
        </p>
        <router-link to="/contacto" class="button-primary">{{
          hero.primary_cta.label
        }}</router-link>
      </div>
    </section>


    <section class="section bg-alt">
      <div class="container">
        <h2 style="margin-top: 0">{{ services.title }}</h2>
        <div
          class="grid"
          style="
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
            margin-top: 16px;
          "
        >
          <article v-for="s in services.items" :key="s.name" class="card">
            <h3 style="margin-top: 0">{{ s.name }}</h3>
            <p style="opacity: 0.9">{{ s.summary }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Sección de Tecnologías -->
    <section class="section bg-alt">
      <div class="container">
        <h2 ref="techTitle" style="margin-top: 0; text-align: center; margin-bottom: 40px">
          Tecnologías que Dominamos
        </h2>
        <div class="tech-grid">
          <div 
            v-for="(tech, index) in technologies" 
            :key="tech.name"
            class="tech-item"
            :class="{ 
              'animate-tech-left': index % 2 === 0 && isTechVisible, 
              'animate-tech-right': index % 2 === 1 && isTechVisible 
            }"
            :style="{ animationDelay: isTechVisible ? `${index * 0.1}s` : '0s' }"
          >
            <div class="tech-icon">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round"
                v-html="tech.icon"
              ></svg>
            </div>
            <p class="tech-name">{{ tech.name }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 ref="clientsTitle" style="margin-top: 0; text-align: center; margin-bottom: 40px">
          Nuestros Clientes
        </h2>
        <div class="clients-list" ref="clientsSection">
          <div 
            v-for="(client, index) in clients" 
            :key="client.name" 
            class="client-item"
            :class="{ 
              'animate-left': index % 2 === 0 && isVisible, 
              'animate-right': index % 2 === 1 && isVisible 
            }"
            :style="{ animationDelay: isVisible ? `${index * 0.2}s` : '0s' }"
          >
            <div class="client-logo">
              <img
                :src="client.logo"
                :alt="`Logo de ${client.name}`"
                loading="lazy"
              />
            </div>
            <div class="client-info">
              <h3 class="client-name">{{ client.name }}</h3>
              <p class="client-description">
                {{ client.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import { content } from "@/content/site";

export default defineComponent({
  name: "HomeView",
  setup() {
    const hero = content.pages.home.hero;
    const services = content.pages.home.services;
    const isVisible = ref(false);
    const isTechVisible = ref(false);
    const clientsTitle = ref<HTMLElement | null>(null);
    const techTitle = ref<HTMLElement | null>(null);

    const technologies = [
      {
        name: "Java",
        icon: '<path d="M12 2l6 4v12l-6 4-6-4V6l6-4z"></path><path d="M12 6l-4 2.5v7l4 2.5 4-2.5v-7L12 6z"></path>'
      },
      {
        name: ".NET",
        icon: '<path d="M12 2l-8 5v10l8 5 8-5V7l-8-5z"></path><path d="M8 12h8M12 8v8"></path>'
      },
      {
        name: "PHP",
        icon: '<path d="M16 2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"></path><path d="M10 9h4"></path><path d="M10 15h4"></path>'
      },
      {
        name: "Laravel",
        icon: '<path d="M12 2l-8 5v10l8 5 8-5V7l-8-5z"></path><path d="M12 7l-4 2.5v5l4 2.5 4-2.5v-5L12 7z"></path>'
      },
      {
        name: "Node.js",
        icon: '<path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"></path><path d="M12 6.5V17.5M12 6.5L8 10.5M12 6.5L16 10.5"></path>'
      },
      {
        name: "MySQL",
        icon: '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path>'
      },
      {
        name: "SQL Server",
        icon: '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path>'
      },
      {
        name: "Vue.js",
        icon: '<path d="M12 22l-10-17h20l-10 17zM2.83 5.42L12 20.25l9.17-14.83H2.83z"></path><path d="M12 2l-7 12h14zM12 4l-5.5 9h11z"></path>'
      },
      {
        name: "JavaScript",
        icon: '<circle cx="12" cy="12" r="10"></circle><path d="M12 16V8M8 12h8"></path>'
      },
      {
        name: "TypeScript",
        icon: '<path d="M12 2l6 4v12l-6 4-6-4V6l6-4z"></path><path d="M12 6l-4 2.5v7l4 2.5 4-2.5v-7L12 6z"></path>'
      },
      {
        name: "Python",
        icon: '<path d="M12 2l-7 5v10l7 5 7-5V7l-7-5z"></path><path d="M8 12h8M12 8v8"></path>'
      },
      {
        name: "PostgreSQL",
        icon: '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path>'
      },
      {
        name: "Informix",
        icon: '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path>'
      },
      {
        name: "React",
        icon: '<path d="M12 2l-8 5v10l8 5 8-5V7l-8-5z"></path><path d="M8 12h8M12 8v8"></path>'
      },
      {
        name: "Angular",
        icon: '<path d="M12 2l-8 5v10l8 5 8-5V7l-8-5z"></path><path d="M8 12h8M12 8v8"></path>'
      },
      {
        name: "Docker",
        icon: '<path d="M12 2l-8 5v10l8 5 8-5V7l-8-5z"></path><path d="M8 12h8M12 8v8"></path>'
      },
      {
        name: "AWS",
        icon: '<path d="M12 2l-7 5v10l7 5 7-5V7l-7-5z"></path><path d="M8 12h8M12 8v8"></path>'
      },
      {
        name: "Git",
        icon: '<path d="M12 2l-8 5v10l8 5 8-5V7l-8-5z"></path><path d="M8 12h8M12 8v8"></path>'
      }
    ];

    const clients = [
      {
        name: "Vicente López",
        logo: require("@/assets/logos-clientes/logo-municipalidad_vicente-lopez.png"),
        description: "Descripción del cliente Vicente López",
      },
      {
        name: "Enod",
        logo: require("@/assets/logos-clientes/logo-enod-web.jpg"),
        description: "Descripción del cliente Enod",
      },
      {
        name: "Pastoriza",
        logo: require("@/assets/logos-clientes/logo-la-pastoriza.jpg"),
        description: "Descripción del cliente Pastoriza",
      },
      {
        name: "Corralón de Marco",
        logo: require("@/assets/logos-clientes/logo_de-marco-corralon.png"),
        description: "Descripción del cliente Corralón de Marco",
      },
      {
        name: "Pri Sports",
        logo: require("@/assets/logos-clientes/logo-pri-sports.jpg"),
        description: "Descripción del cliente Pri Sports",
      },
      {
        name: "Sanitarios Álvarez",
        logo: require("@/assets/logos-clientes/logo-sanitarios-alvarez.png"),
        description: "Descripción del cliente Sanitarios Álvarez",
      },
      {
        name: "Kanauf",
        logo: require("@/assets/logos-clientes/logo-kanauf.png"),
        description: "Descripción del cliente Kanauf",
      },
      {
        name: "La Noria",
        logo: require("@/assets/logos-clientes/logo_la-noria_revistimiento.png"),
        description: "Descripción del cliente La Noria",
      },
      {
        name: "Revestimiento Magimundo",
        logo: require("@/assets/logos-clientes/logo_magimundo_color.png"),
        description: "Descripción del cliente Revestimiento Magimundo",
      },
      {
        name: "Aberturas 3 de Febrero",
        logo: require("@/assets/logos-clientes/logo_abertura-3-febrero-r8_color.png"),
        description: "Descripción del cliente Aberturas 3 de Febrero",
      },
      {
        name: "Enfoque Pop",
        logo: require("@/assets/logos-clientes/logo-enfoque-pop.jpg"),
        description: "Descripción del cliente Enfoque Pop",
      },
      {
        name: "Herrajes Mitre",
        logo: require("@/assets/logos-clientes/logo-herrajes-mitre.png"),
        description: "Descripción del cliente Herrajes Mitre",
      },
      {
        name: "Pinturería San Andrés",
        logo: require("@/assets/logos-clientes/logo_pintureria-san-andres.png"),
        description: "Descripción del cliente Pinturería San Andrés",
      },
    ];

    // Intersection Observer para activar animaciones cuando las secciones sean visibles
    let clientsObserver: IntersectionObserver | null = null;
    let techObserver: IntersectionObserver | null = null;

    onMounted(() => {
      // Observer para la sección de clientes
      if (clientsTitle.value) {
        clientsObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                isVisible.value = true;
                // Una vez que se activa, desconectamos el observer
                if (clientsObserver) {
                  clientsObserver.disconnect();
                }
              }
            });
          },
          {
            threshold: 0.1, // Se activa cuando el 10% del título es visible
            rootMargin: '0px 0px 0px 0px' // Se activa ni bien aparece el título
          }
        );
        
        clientsObserver.observe(clientsTitle.value);
      }

      // Observer para la sección de tecnologías
      if (techTitle.value) {
        techObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                isTechVisible.value = true;
                // Una vez que se activa, desconectamos el observer
                if (techObserver) {
                  techObserver.disconnect();
                }
              }
            });
          },
          {
            threshold: 0.1, // Se activa cuando el 10% del título es visible
            rootMargin: '0px 0px 0px 0px' // Se activa ni bien aparece el título
          }
        );
        
        techObserver.observe(techTitle.value);
      }
    });

    onUnmounted(() => {
      if (clientsObserver) {
        clientsObserver.disconnect();
      }
      if (techObserver) {
        techObserver.disconnect();
      }
    });

    return { hero, services, technologies, clients, isVisible, isTechVisible, clientsTitle, techTitle };
  },
});
</script>

<style scoped>
/* Animaciones de entrada */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInFromRight {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes techFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes slideInFromLeftTech {
  from {
    opacity: 0;
    transform: translateX(-80px) scale(0.8);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

@keyframes slideInFromRightTech {
  from {
    opacity: 0;
    transform: translateX(80px) scale(0.8);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

/* Grid de tecnologías */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateX(-80px) scale(0.8);
}

.tech-item.animate-tech-left {
  animation: slideInFromLeftTech 0.8s ease-out forwards;
}

.tech-item.animate-tech-right {
  animation: slideInFromRightTech 0.8s ease-out forwards;
}

.tech-item:hover {
  transform: translateY(-4px) scale(1.05);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(125, 211, 252, 0.3);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.tech-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  color: #7dd3fc;
  transition: all 0.3s ease;
}

.tech-item:hover .tech-icon {
  color: #22c55e;
  transform: scale(1.1);
}

.tech-name {
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  margin: 0;
  opacity: 0.9;
  transition: all 0.3s ease;
}

.tech-item:hover .tech-name {
  opacity: 1;
  color: #7dd3fc;
}

.clients-list {
  width: 100%;
  margin: 32px 0 0;
}

.client-item {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 32px;
  margin-bottom: 24px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  backdrop-filter: blur(8px);
}

.client-item.animate-left {
  animation: slideInFromLeft 0.8s ease-out forwards;
}

.client-item.animate-right {
  animation: slideInFromRight 0.8s ease-out forwards;
}

.client-item:hover {
  transform: translateX(8px) scale(1.02);
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(125, 211, 252, 0.3);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
}

.client-logo {
  width: 140px;
  height: 90px;
  margin-right: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  animation: slideInLeft 0.8s ease-out 0.2s forwards;
  opacity: 0;
  transform: translateX(-30px);
}

.client-logo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: all 0.3s ease;
}

.client-logo:hover img {
  transform: scale(1.05);
}

.client-info {
  flex: 1;
}

.client-name {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: #fff;
  transition: all 0.3s ease;
}

.client-item:hover .client-name {
  color: #7dd3fc;
  transform: translateX(4px);
}

.client-description {
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  opacity: 0.8;
  transition: all 0.3s ease;
}

.client-item:hover .client-description {
  opacity: 1;
  transform: translateX(4px);
}

.section h2 {
  animation: fadeInUp 0.8s ease-out;
}

@media (max-width: 768px) {
  .tech-grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 16px;
  }
  
  .tech-item {
    padding: 16px 12px;
  }
  
  .tech-item.animate-tech-left,
  .tech-item.animate-tech-right {
    animation: techFadeIn 0.6s ease-out forwards;
    animation-delay: 0s !important;
  }
  
  .tech-icon {
    width: 40px;
    height: 40px;
  }
  
  .tech-name {
    font-size: 12px;
  }
  
  .clients-list {
    margin: 24px 0 0;
  }
  
  .client-item {
    flex-direction: column;
    text-align: center;
    padding: 24px;
  }
  
  .client-item.animate-left,
  .client-item.animate-right {
    animation: fadeInUp 0.6s ease-out forwards;
    animation-delay: 0s !important;
  }
  
  .client-item:hover {
    transform: translateY(-4px) scale(1.02);
  }
  
  .client-logo {
    width: 120px;
    height: 80px;
    margin-right: 0;
    margin-bottom: 20px;
    animation: fadeInUp 0.6s ease-out 0.2s forwards;
  }
  
  .client-name {
    font-size: 1.3rem;
  }
  
  .client-description {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .tech-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }
  
  .tech-item {
    padding: 12px 8px;
  }
  
  .tech-icon {
    width: 32px;
    height: 32px;
  }
  
  .tech-name {
    font-size: 11px;
  }
}
</style>