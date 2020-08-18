<template>
  <div id="app">
    <NavBar v-if="$route.name != 'login'" />
    <!-- {{$route}} -->
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import NavBar from "@/components/layouts/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
  // watch: {
  //   $route(to, next) {
  //     document.title = to.meta.title || "CURSALAB V2";
  //   },
  // },
};
</script>

<style lang="scss">
$color-body: #f2f2f2;

body {
  background-color: $color-body;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  font-size: 18px;
}
</style>
