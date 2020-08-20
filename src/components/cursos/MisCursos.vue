<template>
  <div class="mis-cursos">
    <div class="curso-item">
      <div
        class="curso-title flex bg-secondary w-full text-white text-base md:text-lg px-6 py-6 rounded-lg mb-2 font-medium cursor-pointer"
        @click="toggleTemas"
      >
        <div class="flex">
          <svg viewBox="0 0 20 20" fill="currentColor" class="eye w-6 h-6 mr-3">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path
              fill-rule="evenodd"
              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clip-rule="evenodd"
            />
          </svg>

          <span>Curso 1 Lorem, ipsum dolor abierto</span>
        </div>
        <div class="flex flex-1 justify-end">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            class="chevron-down w-6 h-6 ml-3"
            v-if="!showTemas"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
          <svg viewBox="0 0 20 20" fill="currentColor" class="x w-6 h-6 ml-3" v-else>
            <path
              data-v-15b2fd34
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              fill-rule="evenodd"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div class="temas-list" :class="[showTemas? 'block' : 'hidden']">
        <div class="flex flex-col bg-secondary bg-opacity-25 w-full px-6 py-6 rounded-lg mb-2">
          <a
            href="#"
            class="flex font-medium pb-6 mb-6 text-secondary text-base md:text-lg border-white border-b-2"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" class="eye w-6 h-6 mr-3">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fill-rule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span>Tema 1 Lorem, ipsum dolor abierto</span>
          </a>
          <a
            href="#"
            class="flex font-medium pb-6 mb-6 text-gray-700 text-base md:text-lg border-white border-b-2"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" class="lock-open w-6 h-6 mr-3">
              <path
                d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"
              />
            </svg>
            <span>Tema 2 Lorem, ipsum dolor desbloqueado</span>
          </a>
          <div
            class="flex font-medium pb-6 mb-6 text-gray-500 text-base md:text-lg border-white border-b-2"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" class="lock-closed w-6 h-6 mr-3">
              <path
                fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span>Tema 3 Lorem, ipsum dolor bloqueado</span>
          </div>
          <div
            class="flex font-medium pb-0 mb-0 text-gray-500 text-base md:text-lg border-transparent border-b-2"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" class="lock-closed w-6 h-6 mr-3">
              <path
                fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span>Tema 4 Lorem, ipsum dolor bloqueado</span>
          </div>
        </div>
        <div class="m-5 text-center">
          <div
            class="m-3 bg-transparent text-secondary text-opacity-50 tooltip inline-block text-sm text-center font-medium border-secondary border border-opacity-50 py-3 px-4 md:px-8 rounded-full"
          >
            <span class="uppercase">Realizar encuesta</span>
            <span
              class="tooltip-text bg-red-300 border border-red-400 rounded text-red-600 text-xs text-center right-0 left-0 -top-5"
            >Para realizar la encuesta antes debes terminar el curso y aprobar tu evaluacion.</span>
          </div>
        </div>
      </div>
    </div>
    <div class="curso-item">
      <a
        href="#"
        class="curso-title flex bg-gray-400 hover:bg-teal-200 w-full text-gray-700 text-base md:text-lg px-6 py-6 rounded-lg mb-2 font-medium"
      >
        <div class="flex justify-start">
          <svg viewBox="0 0 20 20" fill="currentColor" class="document-text w-6 h-6 mr-3">
            <path
              fill-rule="evenodd"
              d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
              clip-rule="evenodd"
            />
          </svg>
          <span>Curso 2 Lorem, ipsum dolor cerrado</span>
        </div>
        <div class="flex flex-1 justify-end">
          <svg viewBox="0 0 20 20" fill="currentColor" class="chevron-down w-6 h-6 ml-3">
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </a>
    </div>
    <div class="curso-item">
      <div
        class="curso-title flex bg-gray-400 w-full text-gray-500 text-base md:text-lg tooltip px-6 py-6 rounded-lg mb-2 font-medium"
      >
        <div class="flex justify-start">
          <svg viewBox="0 0 20 20" fill="currentColor" class="lock-closed w-6 h-6 mr-3">
            <path
              fill-rule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clip-rule="evenodd"
            />
          </svg>
          <span>Curso 3 Lorem, ipsum dolor bloqueado</span>
        </div>
        <div class="flex flex-1 justify-end">
          <svg viewBox="0 0 20 20" fill="currentColor" class="chevron-down w-6 h-6 ml-3">
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <span
          class="tooltip-text bg-red-300 border border-red-400 rounded text-red-600 text-xs text-center w-2/3 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >Para realizar este curso antes debes aprobar otros cursos.</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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