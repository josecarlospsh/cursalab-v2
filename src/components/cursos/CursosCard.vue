<template>
  <div class="flex justify-center w-full lg:w-1/2 xl:w-1/3 pt-10 p-4">
    <div
      class="flex flex-wrap relative"
      :class="{ 'bloqueado lock-active': estado == 'bloqueado' }"
    >
      <div v-if="estado == 'bloqueado'" class="bloqueado-msg">
        <svg
          v-if="estado == 'bloqueado'"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="lock-closed w-12 h-12 my-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
        <h3 class="text-white font-semibold text-3xl leading-8 mb-6 uppercase">
          Curso Bloqueado
        </h3>
        <p class="text-white font-normal text-xl leading-6 mb-6">
          Para desbloquearlo antes debes aprobar otros cursos.
        </p>
      </div>
      <div
        class="max-w-sm w-full lg:max-w-full bg-white rounded-t-xl rounded-b-xl shadow-lg"
      >
        <img
          class="w-full rounded-t-xl rounded-b-xl"
          src="http://placehold.it/500x300"
          alt
        />
        <div class="p-6">
          <div class="text-gray-900 font-bold text-2xl leading-8 mb-4">
            {{ title }}
          </div>
          <div class="mb-6 w-full">
            <div
              class="w-full rounded-md"
              :class="{
                'bg-teal-200': estado == 'iniciado',
                'bg-orange-200': estado == 'noiniciado',
                'bg-gray-200': estado == 'bloqueado',
                'bg-teal-200': estado == 'completado',
              }"
            >
              <div
                class="rounded-md text-xs leading-none py-1 text-center text-white"
                style="width: 61%"
                :class="{
                  'bg-teal-600': estado == 'iniciado',
                  'bg-orange-600': estado == 'noiniciado',
                  'bg-gray-600': estado == 'bloqueado',
                  'bg-teal-600': estado == 'completado',
                }"
              ></div>
            </div>
            <div class="text-sm mt-4">
              <p class="text-gray-600 leading-none flex items-center">
                <svg
                  v-if="estado == 'iniciado' || estado == 'noiniciado'"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="clock w-6 h-6 mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <svg
                  v-if="estado == 'bloqueado'"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="lock-closed w-6 h-6 mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <svg
                  v-if="estado == 'completado'"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="thumb-up w-6 h-6 mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
                {{ progreso }}
              </p>
            </div>
          </div>
          <div class="flex justify-center">
            <router-link
              class="shadow-3xl text-white uppercase font-medium py-2 px-8 rounded-full"
              :class="{
                'bg-primary': estado == 'iniciado',
                'bg-orange-500': estado == 'noiniciado',
                'bg-gray-500 cursor-not-allowed': estado == 'bloqueado',
                'bg-teal-500': estado == 'completado',
              }"
              :to="{ name: 'tema' }"
              >{{ buttonText }}</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Curso Titulo lorem ipsum dolor sit amet",
    },
    progreso: {
      type: String,
      default: "-",
    },
    description: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repudiandae, illum iure dignissimos consequuntur tempora explicabo dolorum natus facere accusamus vitae ea ex expedita sint excepturi",
    },
    buttonText: {
      type: String,
      default: "Continuar el curso",
    },
    estado: {
      type: String,
      default: "noiniciado",
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.bloqueado {
  position: relative;
  .bloqueado-msg {
    opacity: 0;
    @apply absolute w-full h-full flex flex-col items-center justify-center text-center text-white p-12;
    z-index: 2;
  }
  &:after {
    @apply bg-transparent absolute w-full h-full;
    @apply rounded-t-xl rounded-b-xl;
    content: "";
    z-index: 1;
  }
  &:hover,
  .lock-active {
    &:after {
      @apply bg-primary bg-opacity-90;
    }
    .bloqueado-msg {
      opacity: 1;
    }
  }
}
</style>
