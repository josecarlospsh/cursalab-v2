<template>
  <div class="flex-none justify-center w-10/12 py-12 mr-8">
    <div
      class="flex flex-wrap relative"
      :class="{ 'bloqueado lock-active': estado == 'bloqueado' }"
    >
      <p class="absolute -top-10 text-base text-gray-600 py-2">04 Julio 2020</p>
      <div v-if="estado == 'bloqueado'" class="bloqueado-msg">
        <IconSvg name="lock-big" v-if="estado == 'bloqueado'" />
        <h3 class="text-white font-semibold text-lg leading-6 mb-4 uppercase">Curso Bloqueado</h3>
        <p
          class="text-white font-normal text-base leading-6 mb-6"
        >Para desbloquearlo antes debes aprobar otros cursos.</p>
      </div>
      <div class="w-full bg-white rounded-t-xl rounded-b-xl shadow-lg">
        <div class="bg-mask">
          <img
            class="w-full rounded-t-xl rounded-b-xl z-0"
            src="https://static.universidadcorporativafp.com.pe/images/25601526.PNG"
            alt
          />
          <h2
            class="curso-title absolute bottom-0 z-10 text-white font-semibold text-xl leading-6 m-5"
          >{{ title }}</h2>
        </div>
        <div class="p-6">
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
              class="w-48 md:w-60 shadow-3xl text-sm text-white text-center uppercase font-medium py-3 rounded-full absolute -bottom-8"
              :class="{
                'bg-primary hover:bg-primary_hover': estado == 'iniciado',
                'bg-orange-500 hover:bg-orange-600': estado == 'noiniciado',
                'bg-gray-300 cursor-not-allowed': estado == 'bloqueado',
                'bg-secondary hover:bg-secondary_hover': estado == 'completado',
              }"
              :to="{ name: 'temamb' }"
            >{{ buttonText }}</router-link>
            <div
              v-if="estado == 'bloqueado'"
              class="btn-lock w-48 md:w-60 bg-gray-300 shadow-3xl text-sm text-white text-center uppercase font-medium py-3 rounded-full absolute -bottom-8 cursor-default"
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
    @apply absolute w-full h-full flex flex-col items-center justify-center text-center text-white px-6 py-6;
    z-index: 12;
  }
  &:after {
    @apply bg-transparent absolute w-full h-full;
    @apply rounded-t-xl rounded-b-xl;
    content: "";
    height: 110%;
    z-index: 11;
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
.bg-mask {
  @apply relative;
  &:after {
    @apply bg-transparent absolute w-full h-full top-0 left-0;
    @apply rounded-t-xl rounded-b-xl;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.35) 61%,
      rgba(0, 0, 0, 0.45) 70%,
      rgba(0, 0, 0, 0.6) 100%
    );
    content: "";
    z-index: 1;
  }
}
</style>
