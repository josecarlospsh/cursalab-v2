<template>
  <div class="cursos-mobile">
    <Logo
      width="100"
      classes="fixed top-0 right-0 z-10 pt-5 pb-5 px-6 w-20 bg-white rounded-bl-xl"
    />
    <MainLayoutMobile>
      <h1 class="flex items-center mb-6 text-2xl md:text-3xl text-gray-900 leading-tight font-bold">
        <IconSvg name="tag" />
        <span>Elige una categoría:</span>
      </h1>
      <div class="mt-4">
        <div class="flex flex-row justify-between mb-8">
          <div class="relative w-4/6">
            <select
              class="categorias-name w-full bg-white rounded-lg py-2 pl-6 pr-24 border border-secondary appearance-none text-base"
            >
              <option
                class="flex-none bg-secondary text-white font-bold py-3 px-5 mr-2 border border-secondary rounded-lg"
              >Categorias</option>
              <option
                class="flex-none bg-white hover:bg-secondary_bg text-gray-900 font-bold py-3 px-5 mr-2 border border-secondary rounded-lg"
                v-for="(cat, i) in categories"
                :key="i"
                :index="i"
              >{{ cat.title }}</option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <IconSvg name="chevron-down" classes="h-6 w-6" />
            </div>
          </div>
          <div class="flex items-center justify-center w-2/6 px-4">
            <form class="relative w-full">
              <input
                class="hidden bg-white focus:outline-none focus:shadow-outline border border-gray-600 rounded-lg py-2 px-4 block w-auto appearance-none leading-normal"
                type="text"
                placeholder="Buscar"
              />
              <button
                class="md:absolute md:top-0 md:bottom-0 md:right-0 bg-white border border-gray-600 text-gray-600 font-semibold hover:text-gray py-2 px-4 rounded"
              >
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="search w-6 h-6">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
        <vue-scroll :ops="opscursos">
          <div class="cursos flex flex-wrap">
            <CursosCardMobile
              v-for="(ar, index) in cursosAr"
              :title="ar.title"
              :description="ar.description"
              :progreso="ar.progreso"
              :buttonText="ar.buttonText"
              :estado="ar.estado"
              :key="index"
            />
          </div>
        </vue-scroll>
      </div>
    </MainLayoutMobile>
  </div>
</template>

<script>
import MainLayoutMobile from "@/layouts/MainLayoutMobile.vue";
import CursosCardMobile from "@/components/cursos/CursosCardMobile.vue";
import IconSvg from "@/components/ui/IconSvg.vue";
import Logo from "@/components/ui/Logo.vue";

// import { VueperSlides, VueperSlide } from "vueperslides";
// import "vueperslides/dist/vueperslides.css";

// import { Hooper, Slide } from "hooper";
// import "hooper/dist/hooper.css";

export default {
  props: {
    type: {
      type: String,
      default: "h",
    },
  },
  components: {
    Logo,
    MainLayoutMobile,
    CursosCardMobile,
    IconSvg,
    // VueperSlides,
    // VueperSlide,
    // Hooper,
    // Slide,
    // MainLayout,
  },
  computed: {
    typeDesc() {
      return this.type != "h" ? "vertical" : "horizontal";
    },
  },
  data() {
    return {
      cursosAr: [
        {
          title: "Curso titulo lorem ipsum dolor",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repudiandae, illum iure dignissimos consequuntur tempora explicabo dolorum natus facere accusamus vitae ea ex expedita sint excepturi, nulla impedit nesciunt similique!",
          progreso: "12% completado",
          buttonText: "Continuar el curso",
          estado: "iniciado",
        },
        {
          title: "Curso titulo lorem ipsum dolor sit amet",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repudiandae, illum iure dignissimos consequuntur tempora explicabo dolorum natus facere accusamus vitae ea ex expedita sint excepturi, nulla impedit nesciunt similique!",
          progreso: "No iniciado",
          buttonText: "Comenzar el curso",
          estado: "noiniciado",
        },
        {
          title:
            "Curso titulo lorem ipsum dolor sit amet consectetur adipisicing elit repudiandae",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repudiandae, illum iure dignissimos consequuntur tempora explicabo dolorum natus facere accusamus vitae ea ex expedita sint excepturi, nulla impedit nesciunt similique!",
          progreso: "61% completado",
          buttonText: "Continuar el curso",
          estado: "iniciado",
        },
        {
          title: "Curso titulo lorem ipsum ",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repudiandae, illum iure dignissimos consequuntur tempora explicabo dolorum natus facere accusamus vitae ea ex expedita sint excepturi, nulla impedit nesciunt similique!",
          progreso: "Bloqueado",
          buttonText: "Bloqueado",
          estado: "bloqueado",
        },
        {
          title: "Curso titulo lorem ipsum dolor sit amet adipisicing elit",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repudiandae, illum iure dignissimos consequuntur tempora explicabo dolorum natus facere accusamus vitae ea ex expedita sint excepturi, nulla impedit nesciunt similique!",
          progreso: "Bloqueado",
          buttonText: "Bloqueado",
          estado: "bloqueado",
        },
        {
          title:
            "Curso titulo lorem ipsum dolor sit amet consectetur adipisicing elit",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repudiandae, illum iure dignissimos consequuntur tempora explicabo dolorum natus facere accusamus vitae ea ex expedita sint excepturi, nulla impedit nesciunt similique!",
          progreso: "¡Completado!",
          buttonText: "Ver curso",
          estado: "completado",
        },
        {
          title: "Curso titulo lorem ipsum dolor sit amet",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repudiandae, illum iure dignissimos consequuntur tempora explicabo dolorum natus facere accusamus vitae ea ex expedita sint excepturi, nulla impedit nesciunt similique!",
          progreso: "¡Completado!",
          buttonText: "Ver curso",
          estado: "completado",
        },
        {
          title: "Curso titulo lorem ipsum dolor sit amet",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repudiandae, illum iure dignissimos consequuntur tempora explicabo dolorum natus facere accusamus vitae ea ex expedita sint excepturi, nulla impedit nesciunt similique!",
          progreso: "No iniciado",
          buttonText: "Comenzar el curso",
          estado: "noiniciado",
        },
        {
          title: "Curso titulo lorem ipsum dolor sit amet",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repudiandae, illum iure dignissimos consequuntur tempora explicabo dolorum natus facere accusamus vitae ea ex expedita sint excepturi, nulla impedit nesciunt similique!",
          progreso: "¡Completado!",
          buttonText: "Ver curso",
          estado: "completado",
        },
        {
          title: "Curso titulo lorem ipsum dolor sit amet",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repudiandae, illum iure dignissimos consequuntur tempora explicabo dolorum natus facere accusamus vitae ea ex expedita sint excepturi, nulla impedit nesciunt similique!",
          progreso: "No iniciado",
          buttonText: "Comenzar el curso",
          estado: "noiniciado",
        },
      ],
      opscursos: {
        vuescroll: {
          mode: "native",
          sizeStrategy: "percent",
          detectResize: true,
          wheelScrollDuration: 350,
        },
        scrollPanel: {
          initialScrollY: false,
          initialScrollX: false,
          scrollingX: false,
          scrollingY: true,
          speed: 300,
          easing: undefined,
          verticalNativeBarPos: "left",
          contentHeight: 1240,
          maxHeight: 960,
        },
        bar: {
          background: "#29ABE2",
          minSize: 0.1,
          keepShow: true,
        },
        rail: {
          background: "#B3B3B3",
          opacity: 1,
          keepShow: false,
          gutterOfSide: "0",
          gutterOfEnds: "0",
          specifyBorderRadius: "0.25rem",
          size: "1px",
        },
      },
      opscat: {
        vuescroll: {
          mode: "native",
          sizeStrategy: "percent",
          detectResize: true,
          wheelScrollDuration: 350,
        },
        scrollPanel: {
          initialScrollY: false,
          initialScrollX: false,
          scrollingX: true,
          scrollingY: false,
          speed: 300,
          easing: undefined,
          verticalNativeBarPos: "right",
          contentHeight: 1240,
          maxHeight: 960,
        },
        bar: {
          background: "#29ABE2",
          minSize: 0.1,
          keepShow: true,
        },
        rail: {
          background: "#B3B3B3",
          opacity: 1,
          keepShow: false,
          gutterOfSide: "0",
          gutterOfEnds: "0",
          specifyBorderRadius: "0.25rem",
          size: "1px",
        },
      },
      carousel: {
        dots: true,
        infinite: true,
        centerMode: true,
        centerPadding: "20px",
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
      },
      categories: [
        {
          title: "Escuaela Nombre #1",
          content: "lorem ipsum",
        },
        {
          title: "Escuaela Nombre #2",
          content: "lorem ipsum",
        },
        {
          title: "Escuaela Nombre #3",
          content: "lorem ipsum",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  @apply bg-gray-400;
  padding: 10px;
  width: 5px;
  height: 3px;
  // display: none;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 3px rgba(131, 131, 131, 0.315);
  -webkit-border-radius: 10px;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  @apply bg-gray-900;
}
::-webkit-scrollbar-thumb:window-inactive {
  @apply bg-gray-600;
}
::placeholder {
  @apply text-gray-600;
}
</style>
