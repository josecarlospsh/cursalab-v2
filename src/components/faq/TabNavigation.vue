<template>
  <div class="tab-nav mb-6">
    <div class="flex justify-center">
      <div
        class="flex flex-wrap flex-row justify-center w-full md:w-3/4 lg:w-2/5 border-b border-gray-500"
      >
        <div class="flex justify-center w-1/2">
          <router-link
            :to="{name: 'faq'}"
            class="border-b-6 border-transparent pb-4 font-bold text-center w-full"
            :class="[ (page == 'faq') ? 'border-primary text-primary' : 'text-gray-600']"
          >Preguntas Frecuentes</router-link>
        </div>
        <div class="flex justify-center w-1/2">
          <router-link
            :to="{name: 'ayuda'}"
            class="border-b-6 border-transparent pb-4 font-bold text-center w-full"
            :class="[ (page == 'ayuda') ? 'border-primary text-primary' : 'text-gray-600']"
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
</style>