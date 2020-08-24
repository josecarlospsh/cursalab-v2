<template>
  <div class="flex justify-center w-full lg:w-1/2 xl:w-1/3 py-12 px-4 xl:px-8">
    <div
      class="flex flex-wrap relative"
      :class="{ 'bloqueado lock-active': estado == 'bloqueado' }"
    >
      <div v-if="estado == 'bloqueado'" class="bloqueado-msg p-3 lg:p-8">
        <IconSvg name="lock-big" v-if="estado == 'bloqueado'" />
        <h3
          class="text-white font-semibold text-2xl leading-8 mb-4 md:mb-6 uppercase"
        >Curso Bloqueado</h3>
        <p
          class="text-white font-normal text-lg leading-6 mb-6"
        >Para desbloquearlo antes debes aprobar otros cursos.</p>
      </div>
      <div class="max-w-sm w-full lg:max-w-full bg-white rounded-t-xl rounded-b-xl shadow-lg">
        <img
          class="w-full rounded-t-xl rounded-b-xl"
          src="https://static.universidadcorporativafp.com.pe/images/25601526.PNG"
          alt
        />
        <div class="p-6">
          <h2
            class="curso-title text-gray-600 font-bold text-xl md:text-2xl leading-6 md:leading-8 mb-4"
          >{{ title }}</h2>
          <div class="mb-6 w-full">
            <div
              class="w-full rounded-md"
              :class="{
                'bg-secondary_bg': estado == 'iniciado',
                'bg-orange-200': estado == 'noiniciado',
                'bg-gray-200': estado == 'bloqueado',
                'bg-secondary_hover': estado == 'completado',
              }"
            >
              <div
                class="rounded-md text-xs leading-none py-1 text-center text-white"
                style="width: 61%"
                :class="{
                  'bg-secondary': estado == 'iniciado',
                  'bg-orange-600': estado == 'noiniciado',
                  'bg-gray-600': estado == 'bloqueado',
                  'bg-secondary_hover': estado == 'completado',
                }"
              ></div>
            </div>
            <div class="text-sm mt-4">
              <p class="text-gray-600 leading-none flex items-center">
                <IconSvg name="clock" v-if="estado == 'iniciado'" />
                <IconSvg name="timer" v-if="estado == 'noiniciado'" />
                <IconSvg name="lock" v-if="estado == 'bloqueado'" />
                <IconSvg name="thumb-up" v-if="estado == 'completado'" />
                <span>{{ progreso }}</span>
              </p>
            </div>
          </div>
          <div class="flex justify-center">
            <router-link
              v-if="estado != 'bloqueado'"
              class="w-48 md:w-60 shadow-3xl text-sm md:text-base text-white text-center uppercase font-medium py-3 px-0 md:px-1 rounded-full absolute -bottom-8"
              :class="{
                'bg-primary hover:bg-primary_hover': estado == 'iniciado',
                'bg-orange-500 hover:bg-orange-600': estado == 'noiniciado',
                'bg-gray-300 cursor-not-allowed': estado == 'bloqueado',
                'bg-secondary hover:bg-secondary_hover': estado == 'completado',
              }"
              :to="{ name: 'tema' }"
            >{{ buttonText }}</router-link>
            <div
              v-if="estado == 'bloqueado'"
              class="btn-lock w-48 md:w-60 bg-gray-300 shadow-3xl text-sm md:text-base text-white text-center uppercase font-medium py-3 px-0 md:px-1 rounded-full absolute -bottom-8 cursor-default"
            >{{ buttonText }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconSvg from "@/components/ui/IconSvg.vue";
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
    icon: {
      type: String,
    },
  },
  components: {
    IconSvg,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.curso-title {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.bloqueado {
  position: relative;
  .bloqueado-msg {
    opacity: 0;
    @apply absolute w-full h-full flex flex-col items-center justify-center text-center text-white px-8 py-10;
    z-index: 2;
  }
  &:after {
    @apply bg-transparent absolute w-full h-full;
    @apply rounded-t-xl rounded-b-xl;
    content: "";
    height: 106%;
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
  &:hover {
    .btn-lock {
      @apply bg-primary bg-opacity-90 text-opacity-25;
    }
  }
}
</style>
