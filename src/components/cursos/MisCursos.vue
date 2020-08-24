<template>
  <div class="mis-cursos">
    <div class="curso-item abierto">
      <div
        class="curso-title flex bg-secondary w-full text-white text-base md:text-lg px-6 py-6 rounded-lg mt-2 font-semibold cursor-pointer"
      >
        <div class="flex">
          <IconSvg name="eye" />
          <span>Curso 1 Lorem, ipsum dolor abierto</span>
        </div>
        <div class="flex flex-1 justify-end">
          <IconSvg name="chevron-down" classes="w-6 h-6 ml-2" />
          <!-- <svg viewBox="0 0 20 20" fill="currentColor" class="x w-6 h-6 ml-3" v-else>
            <path
              data-v-15b2fd34
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              fill-rule="evenodd"
              clip-rule="evenodd"
            />
          </svg>-->
        </div>
      </div>
      <div class="temas-list block">
        <div class="flex flex-col bg-secondary_bg w-full px-6 py-6 rounded-lg mt-1 mb-2">
          <a
            href="#"
            class="flex font-medium pb-6 mb-6 text-secondary text-base md:text-lg border-white border-b-2"
          >
            <IconSvg name="eye" />
            <span>Tema 1 Lorem, ipsum dolor abierto</span>
          </a>
          <a
            href="#"
            class="flex font-medium pb-6 mb-6 text-gray-600 text-base md:text-lg border-white border-b-2"
          >
            <IconSvg name="unlocked" />
            <span>Tema 2 Lorem, ipsum dolor desbloqueado</span>
          </a>
          <div
            class="flex font-medium pb-6 mb-6 text-gray-500 text-base md:text-lg border-white border-b-2"
          >
            <IconSvg name="lock" />
            <span>Tema 3 Lorem, ipsum dolor bloqueado</span>
          </div>
          <div
            class="flex font-medium pb-0 mb-0 text-gray-500 text-base md:text-lg border-transparent border-b-2"
          >
            <IconSvg name="lock" />
            <span>Tema 4 Lorem, ipsum dolor bloqueado</span>
          </div>
        </div>
        <div class="my-5 text-center">
          <div
            class="m-2 bg-transparent text-secondary text-opacity-50 tooltip inline-block text-sm text-center font-medium border-secondary border border-opacity-50 py-3 px-4 md:px-8 rounded-full"
          >
            <span class="uppercase">Realizar encuesta</span>
            <span
              class="tooltip-text bg-red-300 border border-red-400 rounded text-red-600 text-xs text-center right-0 left-0 -top-5"
            >Para realizar la encuesta antes debes terminar el curso y aprobar tu evaluacion.</span>
          </div>
        </div>
      </div>
    </div>
    <div class="curso-item cerrado">
      <div
        class="curso-title flex bg-green-400 w-full text-white text-base md:text-lg px-6 py-6 rounded-lg mt-2 font-semibold cursor-pointer"
        @click="toggleTemas"
      >
        <div class="flex justify-start">
          <IconSvg name="book-closed" />
          <span>Curso 2 Lorem, ipsum dolor cerrado</span>
        </div>
        <div class="flex flex-1 justify-end">
          <IconSvg name="chevron-down" classes="w-6 h-6 ml-2" v-if="!showTemas" />
          <IconSvg name="x" classes="w-6 h-6 ml-2" v-else />
        </div>
      </div>
      <div class="temas-list" :class="[showTemas? 'block' : 'hidden']">
        <div class="flex flex-col bg-green-200 w-full px-6 py-6 rounded-lg mt-1 mb-2">
          <a
            href="#"
            class="flex font-medium pb-6 mb-6 text-gray-600 text-base md:text-lg border-white border-b-2"
          >
            <IconSvg name="unlocked" />
            <span>Tema 1 Lorem, ipsum dolor desbloqueado</span>
          </a>
          <a
            href="#"
            class="flex font-medium pb-6 mb-6 text-gray-600 text-base md:text-lg border-white border-b-2"
          >
            <IconSvg name="unlocked" />
            <span>Tema 2 Lorem, ipsum dolor desbloqueado</span>
          </a>
          <div
            class="flex font-medium pb-6 mb-6 text-gray-500 text-base md:text-lg border-white border-b-2"
          >
            <IconSvg name="lock" />
            <span>Tema 3 Lorem, ipsum dolor bloqueado</span>
          </div>
          <div
            class="flex font-medium pb-0 mb-0 text-gray-500 text-base md:text-lg border-transparent border-b-2"
          >
            <IconSvg name="lock" />
            <span>Tema 4 Lorem, ipsum dolor bloqueado</span>
          </div>
        </div>
        <div class="my-5 text-center">
          <div
            class="m-2 bg-transparent text-green-400 text-opacity-50 tooltip inline-block text-sm text-center font-medium border-green-400 border border-opacity-50 py-3 px-4 md:px-8 rounded-full"
          >
            <span class="uppercase">Realizar encuesta</span>
            <span
              class="tooltip-text bg-red-300 border border-red-400 rounded text-red-600 text-xs text-center right-0 left-0 -top-5"
            >Para realizar la encuesta antes debes terminar el curso y aprobar tu evaluacion.</span>
          </div>
        </div>
      </div>
    </div>
    <div class="curso-item bloqueado">
      <div
        class="curso-title flex bg-gray-400 w-full text-gray-500 text-base md:text-lg tooltip px-6 py-6 rounded-lg mt-2 font-medium"
      >
        <div class="flex justify-start">
          <IconSvg name="lock" />
          <span>Curso 3 Lorem, ipsum dolor bloqueado</span>
        </div>
        <div class="flex flex-1 justify-end">
          <IconSvg name="chevron-down" classes="w-6 h-6 ml-2" />
        </div>
        <span
          class="tooltip-text bg-red-300 border border-red-400 rounded text-red-600 text-xs text-center w-2/3 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >Para realizar este curso antes debes aprobar otros cursos.</span>
      </div>
    </div>
    <div class="curso-item cerrado">
      <a
        href
        class="curso-title flex bg-gray-400 hover:bg-green-200 w-full text-gray-600 text-base md:text-lg px-6 py-6 rounded-lg mt-2 font-semibold"
      >
        <div class="flex justify-start">
          <IconSvg name="book-closed" />
          <span>Curso 2 Lorem, ipsum dolor cerrado</span>
        </div>
        <div class="flex flex-1 justify-end">
          <IconSvg name="chevron-down" classes="w-6 h-6 ml-2" />
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import IconSvg from "@/components/ui/IconSvg.vue";

export default {
  components: {
    IconSvg,
  },
  data() {
    return {
      showTemas: false,
    };
  },
  methods: {
    toggleTemas() {
      this.showTemas = !this.showTemas;
    },
  },
};
</script>

<style lang="scss" scoped>
.tooltip {
  @apply relative;
}
.tooltip .tooltip-text {
  @apply invisible p-2 absolute z-50 block rounded-lg;
}

.tooltip:hover .tooltip-text {
  @apply visible;
}
</style>