import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/nosotros",
    name: "nosotros",
    component: () =>
      import(/* webpackChunkName: "nosotros" */ "../views/NosotrosView.vue"),
  },
  {
    path: "/contacto",
    name: "contacto",
    component: () =>
      import(/* webpackChunkName: "contacto" */ "../views/ContactoView.vue"),
  },
  {
    path: "/cv",
    name: "cv",
    component: () =>
      import(/* webpackChunkName: "cv" */ "../views/CvView.vue"),
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

export default router;
