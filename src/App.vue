<template>
  <div id="app">
    <NavBar />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import NavBar from "@/components/layout/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
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
