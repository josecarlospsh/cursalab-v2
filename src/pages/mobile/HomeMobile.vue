<template>
  <div class="home-mobile">
    <Logo
      width="100"
      classes="fixed top-0 right-0 z-10 pt-5 pb-5 px-6 w-20 bg-white rounded-bl-xl"
    />
    <MainLayoutMobile>
      <h1 class="flex items-center mb-6 text-2xl md:text-3xl text-gray-900 leading-tight font-bold">
        <IconSvg name="book-open" classes="mr-3" />
        <span>Continuar curso:</span>
      </h1>
      <div class="cursos-carousel flex w-full overflow-x-auto">
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
      <div class="flex flex-wrap items-stretch hidden">
        <div class="flex justify-center w-full lg:w-1/2 xl:w-2/3 pt-10 p-4">
          <div class="flex flex-wrap relative">
            <p class="absolute -top-10 text-base text-gray-600 py-2">04 Julio 2020</p>
            <div
              class="max-w-sm w-full lg:max-w-full xl:flex bg-white rounded-t-xxl rounded-b-xxl shadow-lg"
            >
              <div
                class="w-full xl:w-1/2 flex items-center justify-center bg-primary_bg rounded-t-xxl rounded-b-xxl"
              >
                <img
                  class="flex-none rounded-t-xxl rounded-b-xxl xl:rounded-none h-auto"
                  src="https://static.universidadcorporativafp.com.pe/images/FP-2ACTUALIZACI%C3%93N-01.png"
                  alt
                />
              </div>
              <div
                class="w-full xl:w-1/2 bg-white rounded-t-xxl rounded-b-xxl p-6 xl:px-10 xl:pt-20 xl:pb-24 flex flex-col leading-normal"
              >
                <div
                  class="lg:text-overflow-2 xl:text-overflow-3 text-gray-600 font-bold text-xl md:text-2xl leading-6 md:leading-8 mb-4"
                >
                  Titular del anuncio lorem ipsum dolor sit amet adipiscing
                  elit, sed diam nonummy
                </div>
                <div class="mb-6 w-full">
                  <div class="w-full bg-secondary_bg rounded-md">
                    <div
                      class="bg-secondary rounded-md text-xs leading-none py-1 text-center text-white"
                      style="width: 12%"
                    ></div>
                  </div>
                  <div class="text-sm mt-4">
                    <p class="text-gray-600 leading-none flex items-center">
                      <IconSvg name="clock" />12% completado
                    </p>
                  </div>
                </div>
                <p class="hidden xl:block text-gray-600 text-base mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
                <div class="flex justify-center">
                  <router-link
                    :to="{ name: 'tema' }"
                    class="xl:absolute xl:bottom-10 bg-primary shadow-3xl hover:bg-primary_hover text-sm md:text-base text-white uppercase font-medium py-3 px-5 md:px-10 rounded-full"
                  >Continuar el curso</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center w-full lg:w-1/2 xl:w-1/3 pt-10 p-4">
          <div class="flex flex-wrap relative">
            <p class="absolute -top-10 text-base text-gray-600 px-6 py-2">04 Julio 2020</p>
            <div class="max-w-sm w-full lg:max-w-full bg-white rounded-t-xl rounded-b-xl shadow-lg">
              <img
                class="w-full rounded-t-xl rounded-b-xl"
                src="https://static.universidadcorporativafp.com.pe/images/1194402608.png"
                alt
              />
              <div class="p-6 xl:pb-24">
                <div
                  class="lg:text-overflow-2 text-gray-600 font-bold text-xl md:text-2xl leading-6 md:leading-8 mb-4"
                >Titular del anuncio lorem ipsum dolor sit amet</div>
                <div class="mb-6 w-full">
                  <div class="w-full bg-secondary_bg rounded-md">
                    <div
                      class="bg-secondary rounded-md text-xs leading-none py-1 text-center text-white"
                      style="width: 61%"
                    ></div>
                  </div>
                  <div class="text-sm mt-4">
                    <p class="text-gray-600 leading-none flex items-center">
                      <IconSvg name="clock" />61% completado
                    </p>
                  </div>
                </div>
                <div class="flex justify-center">
                  <router-link
                    :to="{ name: 'tema' }"
                    class="xl:absolute xl:bottom-10 bg-primary shadow-3xl hover:bg-primary_hover text-sm md:text-base text-white uppercase font-medium py-3 px-5 md:px-10 rounded-full"
                  >Continuar el curso</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="bg-gray-700 h-px mt-10 mx-4 mb-10 hidden" />
      <div class="flex items-center mt-8 mb-6">
        <h1 class="flex items-center text-2xl md:text-3xl text-gray-900 leading-tight font-bold">
          <IconSvg name="speakerphone" />
          <span>Últimos anuncios</span>
        </h1>
        <div class="ml-auto flex items-center flex">
          <span class="text-base text-gray-500 hidden">CAMBIAR VISUALIZACIÓN</span>
          <button
            class="ml-3 mr-5 text-gray-900 hover:text-primary"
            @click.prevent="changeViewList"
          >
            <IconSvg name="view-grid" v-if="viewList != false" />
            <IconSvg name="view-list" v-else />
          </button>
        </div>
      </div>
      <div class="anuncios-list flex flex-wrap" :class="[viewList ? 'flex-col' : 'flex-row']">
        <AnunciosCardMobile
          v-for="(ar, index) in anunciosAr"
          :date="ar.date"
          :title="ar.title"
          :description="ar.description"
          :buttonIcon="ar.buttonIcon"
          :buttonText="ar.buttonText"
          :viewList="viewList"
          :key="index"
        />
      </div>
    </MainLayoutMobile>
  </div>
</template>

<script>
import MainLayoutMobile from "@/layouts/MainLayoutMobile.vue";
import CursosCardMobile from "@/components/cursos/CursosCardMobile.vue";
import AnunciosCardMobile from "@/components/anuncios/AnunciosCardMobile.vue";
import IconSvg from "@/components/ui/IconSvg.vue";
import Logo from "@/components/ui/Logo.vue";

export default {
  components: {
    Logo,
    MainLayoutMobile,
    CursosCardMobile,
    AnunciosCardMobile,
    IconSvg,
  },
  data() {
    return {
      viewList: false,
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
      anunciosAr: [
        {
          date: "04 Julio 2020",
          title: "¡Universidad Corporativa se renueva!",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus vitae excepturi!",
          buttonIcon: "eye",
          buttonText: "Ver mas",
        },
        {
          date: "05 Julio 2020",
          title:
            "Titular del anuncio lorem ipsum dolor sit amet illum iure dignissimos consequuntur tempora",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repudiandae, illum iure dignissimos consequuntur tempora explicabo dolorum natus facere accusamus vitae ea ex expedita sint excepturi, nulla impedit nesciunt similique!",
          buttonIcon: "cloud-download",
          buttonText: "Descargar",
        },
        {
          date: "05 Julio 2020",
          title: "Titular del anuncio lorem ipsum dolor consequuntur tempora",
          description:
            "Quibusdam repudiandae, illum iure dignissimos consequuntur tempora explicabo dolorum natus facere accusamus vitae ea ex expedita sint excepturi, nulla impedit nesciunt similique!",
          buttonIcon: "arrow-narrow-right",
          buttonText: "Ir al detalle",
        },
      ],
    };
  },
  methods: {
    changeViewList() {
      this.viewList = !this.viewList;
    },
  },
};
</script>

<style lang="scss" scoped></style>
