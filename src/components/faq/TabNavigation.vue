<template>
  <div class="tab-nav mb-8">
    <div class="flex justify-center">
      <div
        class="flex flex-wrap flex-row justify-center w-full md:w-1/2 border-b-2 border-gray-400"
      >
        <div class="flex justify-center w-1/2">
          <router-link
            :to="{name: 'faq'}"
            class="border-b-4 border-transparent pb-4 font-semibold text-center"
            :class="{'border-primary text-primary': page == 'faq'}"
          >Preguntas Frecuentes</router-link>
        </div>
        <div class="flex justify-center w-1/2">
          <router-link
            :to="{name: 'ayuda'}"
            class="border-b-4 border-transparent pb-4 font-semibold text-center"
            :class="{'border-primary text-primary': page == 'ayuda'}"
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