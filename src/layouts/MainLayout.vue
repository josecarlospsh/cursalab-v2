<template>
  <div class="mx-4 md:ml-20 md:mr-56 pt-24 pb-12">
    <!-- <NavBar /> -->
    <slot></slot>
  </div>
</template>

<script>
// import NavBar from "@/components/layouts/NavBar.vue";
export default {
  name: "MainLayout",
  components: {
    // NavBar,
  },
};
</script>

<style lang="sass" scoped>

</style>