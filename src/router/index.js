import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/pages/Home.vue";
import Cursos from "@/pages/Cursos.vue";
import Progreso from "@/pages/Progreso.vue";
import Tema from "@/pages/Tema.vue";
import Evaluacion from "@/pages/Evalucion.vue";
import Faq from "@/pages/Faq.vue";
import Ayuda from "@/pages/Ayuda.vue";
import Login from "@/pages/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "inicio",
    component: Home,
  },
  {
    path: "/anuncios",
    name: "anuncios",
    component: Home,
  },
  {
    path: "/cursos",
    name: "cursos",
    component: Cursos,
  },
  {
    path: "/progreso",
    name: "progreso",
    component: Progreso,
  },
  {
    path: "/tema",
    name: "tema",
    component: Tema,
  },
  {
    path: "/evaluacion",
    name: "evaluacion",
    component: Evaluacion,
  },
  {
    path: "/faq",
    name: "faq",
    component: Faq,
  },
  {
    path: "/ayuda",
    name: "ayuda",
    component: Ayuda,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
