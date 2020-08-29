<template>
  <div class="tab-nav mb-6">
    <div class="flex justify-center">
      <div
        class="flex flex-wrap flex-row justify-center w-full md:w-3/4 lg:w-2/5 border-b border-gray-500"
      >
        <div class="flex justify-center w-1/2">
          <router-link
            :to="{name: 'faq'}"
            class="tab-item"
            :class="[ (page == 'faq') ? 'faq-active' : '']"
          >Preguntas Frecuentes</router-link>
        </div>
        <div class="flex justify-center w-1/2">
          <router-link
            :to="{name: 'ayuda'}"
            class="tab-item"
            :class="[ (page == 'ayuda') ? 'ayuda-active' : '']"
          >Ayuda</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabNavigation",
  props: {
    page: {
      type: String,
      default: "faq",
    },
  },
};
</script>

<style lang="scss" scoped>
.tab-item {
  @apply relative w-full font-bold text-center text-gray-600 py-4;
  &::after {
    @apply absolute h-2 w-full bg-transparent rounded-lg left-0 -bottom-2;
    content: "";
  }
  &.active,
  &.router-link-active {
    @apply text-primary;
    &::after {
      @apply bg-primary;
    }
  }
}
</style>