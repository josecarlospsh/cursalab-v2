<template>
  <div class="logo flex justify-center text-center" :class="classes">
    <img src="../../assets/logo.svg" alt="Cursalab" :width="width" />
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: [Number, String],
      default: 220,
    },
    classes: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>