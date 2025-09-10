import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Rusoft - Desarrollo de Software y Sistemas a Medida | Software Factory Argentina",
      description: "Rusoft es una software factory especializada en desarrollo de sistemas a medida, aplicaciones web, móviles y soluciones de inteligencia artificial. Servicios de desarrollo de software en Argentina.",
      keywords: "desarrollo de software, software factory, sistemas a medida, aplicaciones web, aplicaciones móviles, inteligencia artificial, desarrollo argentina"
    }
  },
  {
    path: "/nosotros",
    name: "nosotros",
    component: () =>
      import(/* webpackChunkName: "nosotros" */ "../views/NosotrosView.vue"),
    meta: {
      title: "Nosotros - Rusoft | Equipo de Desarrollo de Software",
      description: "Conoce al equipo de Rusoft, especialistas en desarrollo de software a medida con años de experiencia en tecnologías modernas.",
      keywords: "equipo desarrollo software, programadores argentina, desarrolladores, software factory equipo"
    }
  },
  {
    path: "/contacto",
    name: "contacto",
    component: () =>
      import(/* webpackChunkName: "contacto" */ "../views/ContactoView.vue"),
    meta: {
      title: "Contacto - Rusoft | Solicita tu Presupuesto de Software",
      description: "Contacta con Rusoft para solicitar presupuesto de desarrollo de software a medida. Consulta gratuita y sin compromiso.",
      keywords: "contacto desarrollo software, presupuesto software, consulta desarrollo, contacto rusoft"
    }
  },
  {
    path: "/cv",
    name: "cv",
    component: () =>
      import(/* webpackChunkName: "cv" */ "../views/CvView.vue"),
    meta: {
      title: "CV - Rusoft | Currículum del Equipo de Desarrollo",
      description: "Conoce la experiencia y formación del equipo de desarrollo de Rusoft. Especialistas en tecnologías modernas.",
      keywords: "cv desarrolladores, experiencia programadores, currículum equipo desarrollo"
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Siempre ir al inicio de la página al cambiar de ruta
    return { top: 0 }
  },
});

// SEO Meta tags guard
router.beforeEach((to, from, next) => {
  // Update document title
  if (to.meta.title) {
    document.title = to.meta.title as string;
  }
  
  // Update meta description
  if (to.meta.description) {
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', to.meta.description as string);
    }
  }
  
  // Update meta keywords
  if (to.meta.keywords) {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', to.meta.keywords as string);
    }
  }
  
  next();
});

export default router;
