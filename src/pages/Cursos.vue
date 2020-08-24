<template>
  <div class="mx-4 md:ml-20 md:mr-52 pt-24 pb-12">
    <h1 class="flex items-center mb-6 text-2xl md:text-3xl text-gray-900 leading-tight font-bold">
      <IconSvg name="tag" />
      <span>Elige una categoría:</span>
    </h1>
    <div class="mt-10 pl-0 lg:pl-24">
      <div class="flex flex-wrap mb-8 px-4 xl:px-8">
        <div class="categorias-name flex w-full lg:w-3/4 overflow-x-auto">
          <!-- <vue-scroll :type="type" class="flex"> -->
          <button
            class="flex-none bg-secondary text-white font-semibold py-3 px-5 mr-2 border border-secondary rounded-lg"
          >Escuela lorem ipsum</button>
          <button
            class="flex-none bg-white hover:bg-secondary_bg text-gray-900 font-semibold py-3 px-5 mr-2 border border-secondary rounded-lg"
            v-for="(cat, i) in categories"
            :key="i"
            :index="i"
          >{{ cat.title }}</button>
          <!-- </vue-scroll> -->
        </div>
        <div class="flex items-center justify-center lg:justify-end w-full lg:w-1/4">
          <form class="relative mt-10 lg:mt-0 md:pl-3 w-full">
            <input
              class="bg-white focus:outline-none focus:shadow-outline border border-gray-600 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              type="text"
              placeholder="Buscar"
            />
            <button
              class="absolute top-0 bottom-0 right-0 bg-transparent text-gray-600 font-semibold hover:text-gray py-2 px-4 rounded"
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
      <vue-scroll :ops="opscursos" style="direction: rtl">
        <div class="cursos flex flex-wrap" style="direction: ltr">
          <CursosCard
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
  </div>
</template>

<script>
// import MainLayout from "@/layouts/MainLayout.vue";
import CursosCard from "@/components/cursos/CursosCard.vue";
import IconSvg from "@/components/ui/IconSvg.vue";

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
    CursosCard,
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
