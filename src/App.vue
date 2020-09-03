<template>
  <div id="app" :class="{mobile}">
    <NavBar v-if="!mobile && $route.name != 'login'" />
    <NavBarMobile v-if="mobile && $route.name != 'login'" />
    <!-- {{$route}} -->
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import NavBar from "@/components/ui/NavBar.vue";
import NavBarMobile from "@/components/ui/NavBarMobile.vue";

export default {
  name: "App",
  components: {
    NavBar,
    NavBarMobile,
  },
  data() {
    return {
      mobile: window.innerWidth <= 640,
    };
  },
  created() {
    addEventListener("resize", () => {
      this.mobile = innerWidth <= 640;
    });
  },
  // watch: {
  //   $route(to, next) {
  //     document.title = to.meta.title || "CURSALAB V2";
  //   },
  // },
};
</script>

<style lang="scss">
body {
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  font-size: 18px;
  @apply text-gray-900 bg-body;
}
</style>
