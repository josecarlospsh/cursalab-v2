<template>
  <div class="faq-item mb-8">
    <div
      class="flex border-b-2 pb-5 faq-pregunta cursor-pointer"
      @click.prevent="toggleFaq"
      :class="[showContent ? 'border-secondary text-secondary' : 'text-gray-900']"
    >
      <div class="w-5/6">
        <h2 class="font-bold text-xl md:text-2xl leading-6 md:leading-8">{{pregunta}}</h2>
      </div>
      <div class="w-1/6 flex justify-end">
        <svg
          v-if="!showContent"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="chevron-down w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
        <svg v-if="showContent" viewBox="0 0 20 20" fill="currentColor" class="x w-6 h-6">
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
    <div class="flex py-4 faq-respuesta" :class="[showContent? 'block' : 'hidden']">
      <p
        class="text-base md:text-lg"
      >{{respuesta}} Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugit perferendis fugiat neque, necessitatibus odio possimus non obcaecati corporis eaque ducimus nihil culpa porro facilis autem tenetur voluptas et ad!</p>
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