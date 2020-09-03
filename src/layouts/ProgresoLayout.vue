<template>
  <div class="mx-4 md:ml-24 md:mr-40 pt-24 pb-12">
    <div
      class="py-10 px-4 md:px-6 lg:px-8 lg:py-12 w-full lg:max-w-full bg-white rounded-t-xxl rounded-b-xxl shadow-lg"
    >
      <Resumen />
      <div class="flex flex-wrap flex-row mx-0 lg:mx-3 xl:mx-5">
        <div class="w-full lg:w-1/5 mb-6 lg:mb-0 pr-0 pt-6 lg:pr-6">
          <Sidemenu />
        </div>
        <div class="w-full lg:w-4/5 pl-0 lg:pl-6">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Resumen from "@/components/progreso/Resumen.vue";
import Sidemenu from "@/components/progreso/Sidemenu.vue";

export default {
  components: {
    Resumen,
    Sidemenu,
  },
};
</script>

<style lang="sass" scoped></style>
