<template>
  <div class="mx-4 pt-8 pb-24">
    <div class="px-3 w-full">
      <ResumenMobile />
      <div class="w-full">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import ResumenMobile from "@/components/progreso/ResumenMobile.vue";

export default {
  components: {
    ResumenMobile,
  },
};
</script>

<style lang="sass" scoped></style>
