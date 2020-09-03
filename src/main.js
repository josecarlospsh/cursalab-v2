import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuescroll from "vuescroll";
import IconSvg from "@/components/ui/IconSvg.vue";

Vue.component("IconSvg", IconSvg);

//Importar estilos
import "vuescroll/dist/vuescroll.css";
import "@/assets/css/tailwind.css";

Vue.config.productionTip = false;

Vue.use(vuescroll);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
