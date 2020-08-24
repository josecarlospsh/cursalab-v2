<template>
  <div class="faq-item mb-8">
    <div
      class="flex border-b pb-5 faq-pregunta cursor-pointer"
      @click.prevent="toggleFaq"
      :class="[showContent ? 'border-secondary text-secondary' : 'border-gray-600 text-gray-600']"
    >
      <div class="w-5/6">
        <h2 class="font-bold text-xl md:text-2xl leading-6 md:leading-8">{{pregunta}}</h2>
      </div>
      <div class="w-1/6 flex justify-end">
        <IconSvg name="chevron-down" classes="w-6 h-6 mx-0 lg:mx-8" v-if="!showContent" />
        <IconSvg name="x" classes="w-6 h-6 mx-0 lg:mx-8" v-else />
      </div>
    </div>
    <div class="flex py-4 faq-respuesta" :class="[showContent? 'block' : 'hidden']">
      <p class="text-base md:text-lg">{{respuesta}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
    },
    pregunta: {
      type: String,
      //   default: "",
    },
    respuesta: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugit perferendis fugiat neque, necessitatibus odio possimus non obcaecati corporis eaque ducimus nihil culpa porro facilis autem tenetur voluptas et ad!",
    },
  },
  data() {
    return {
      showContent: false,
    };
  },
  methods: {
    toggleFaq() {
      this.showContent = !this.showContent;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>