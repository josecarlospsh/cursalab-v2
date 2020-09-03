import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/pages/Home.vue";
import Cursos from "@/pages/Cursos.vue";
import Tema from "@/pages/Tema.vue";
import Evaluacion from "@/pages/Evaluacion.vue";
import Faq from "@/pages/Faq.vue";
import Ayuda from "@/pages/Ayuda.vue";
import CursosResumen from "@/pages/CursosResumen.vue";
import Diplomas from "@/pages/Diplomas.vue";
import Ranking from "@/pages/Ranking.vue";
import Medallas from "@/pages/Medallas.vue";
import Encuestas from "@/pages/Encuestas.vue";

/**
 * Vistas para version movil
 * UPDATE: En desarrollo - Para ver solo poner en el browser el route->path de la vista
 */
import HomeMobile from "@/pages/mobile/HomeMobile.vue";
import CursosMobile from "@/pages/mobile/CursosMobile.vue";
import TemaMobile from "@/pages/mobile/TemaMobile.vue";
import EvaluacionMobile from "@/pages/mobile/EvaluacionMobile.vue";
import CursosResumenMobile from "@/pages/mobile/CursosResumenMobile.vue";
import DiplomasMobile from "@/pages/mobile/DiplomasMobile.vue";
import RankingMobile from "@/pages/mobile/RankingMobile.vue";
import MedallasMobile from "@/pages/mobile/MedallasMobile.vue";
import EncuestasMobile from "@/pages/mobile/EncuestasMobile.vue";

import Archivo from "@/pages/Archivo.vue";
import Login from "@/pages/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "inicio",
    component: Home,
    meta: {
      title: "Anuncios",
    },
  },
  {
    path: "/anunciosmb",
    name: "anunciosmb",
    component: HomeMobile,
    meta: {
      title: "Inicio Mobile",
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
    path: "/cursosmb",
    name: "cursosmb",
    component: CursosMobile,
    meta: {
      title: "Cursos Mobile",
    },
  },
  {
    path: "/progreso",
    name: "progreso",
    component: CursosResumen,
    meta: {
      title: "Progreso",
    },
  },
  {
    path: "/progresomb",
    name: "progresomb",
    component: CursosResumenMobile,
    meta: {
      title: "Progreso Mobile",
    },
  },
  {
    path: "/diplomas",
    name: "diplomas",
    component: Diplomas,
    meta: {
      title: "Diplomas",
    },
  },
  {
    path: "/diplomasmb",
    name: "diplomasmb",
    component: DiplomasMobile,
    meta: {
      title: "Diplomas Mobile",
    },
  },
  {
    path: "/ranking",
    name: "ranking",
    component: Ranking,
    meta: {
      title: "Ranking",
    },
  },
  {
    path: "/rankingmb",
    name: "rankingmb",
    component: RankingMobile,
    meta: {
      title: "Ranking Mobile",
    },
  },
  {
    path: "/medallas",
    name: "medallas",
    component: Medallas,
    meta: {
      title: "Medallas",
    },
  },
  {
    path: "/medallasmb",
    name: "medallasmb",
    component: MedallasMobile,
    meta: {
      title: "Medallas Mobile",
    },
  },
  {
    path: "/encuestas",
    name: "encuestas",
    component: Encuestas,
    meta: {
      title: "Encuestas",
    },
  },
  {
    path: "/encuestasmb",
    name: "encuestasmb",
    component: EncuestasMobile,
    meta: {
      title: "Encuestas Mobile",
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
    path: "/temamb",
    name: "temamb",
    component: TemaMobile,
    meta: {
      title: "Tema Mobile",
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
    path: "/evaluacionmb",
    name: "evaluacionmb",
    component: EvaluacionMobile,
    meta: {
      title: "Evaluacion Mobile",
    },
  },
  {
    path: "/faq",
    name: "faq",
    component: Faq,
    meta: {
      title: "Faq",
    },
    // children: [
    //   {
    //     path: "ayuda",
    //     name: "ayuda",
    //     component: Ayuda,
    //     meta: {
    //       title: "Ayuda",
    //     },
    //   },
    // ],
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
