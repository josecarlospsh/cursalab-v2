import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuescroll from "vuescroll";

import "@/assets/css/tailwind.css";

Vue.config.productionTip = false;

Vue.use(vuescroll);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
