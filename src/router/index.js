import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/pages/Home.vue";
import Cursos from "@/pages/Cursos.vue";
import Progreso from "@/pages/Progreso.vue";
import Tema from "@/pages/Tema.vue";
import Evaluacion from "@/pages/Evaluacion.vue";
import Faq from "@/pages/Faq.vue";
import Ayuda from "@/pages/Ayuda.vue";
import Archivo from "@/pages/Archivo.vue";
import Login from "@/pages/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "inicio",
    component: Home,
    meta: {
      title: "Inicio",
    },
  },
  {
    path: "/anuncios",
    name: "anuncios",
    component: Home,
    meta: {
      title: "Anuncios",
    },
  },
  {
    path: "/cursos",
    name: "cursos",
    component: Cursos,
    meta: {
      title: "Cursos",
    },
  },
  {
    path: "/progreso",
    name: "progreso",
    component: Progreso,
    meta: {
      title: "Progreso",
    },
  },
  {
    path: "/diplomas",
    name: "diplomas",
    component: Progreso,
    meta: {
      title: "Diplomas",
    },
  },
  {
    path: "/ranking",
    name: "ranking",
    component: Progreso,
    meta: {
      title: "Ranking",
    },
  },
  {
    path: "/medallas",
    name: "medallas",
    component: Progreso,
    meta: {
      title: "Medallas",
    },
  },
  {
    path: "/encuestas",
    name: "encuestas",
    component: Progreso,
    meta: {
      title: "Encuestas",
    },
  },
  {
    path: "/tema",
    name: "tema",
    component: Tema,
    meta: {
      title: "Tema",
    },
  },
  {
    path: "/evaluacion",
    name: "evaluacion",
    component: Evaluacion,
    meta: {
      title: "Evaluacion",
    },
  },
  {
    path: "/faq",
    name: "faq",
    component: Faq,
    meta: {
      title: "Faq",
    },
  },
  {
    path: "/ayuda",
    name: "ayuda",
    component: Ayuda,
    meta: {
      title: "Ayuda",
    },
  },
  {
    path: "/archivo",
    name: "archivo",
    component: Archivo,
    meta: {
      title: "Archivo",
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      title: "Ingresar",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "CURSALAB V2";
  next();
});

// router.afterEach((to) => {
//   if (to.meta && to.meta.title) {
//     document.title = to.meta.title + " | CURSALAB V2";
//   }
// });

export default router;
