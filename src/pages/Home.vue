<template>
  <div class="mx-4 md:ml-10 md:mr-56 py-12">
    <h1 class="flex items-center mb-6 text-3xl text-gray-900 leading-tight font-bold">
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="book-open w-10 h-10 mx-3">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
      <span>Continuar curso:</span>
    </h1>
    <div class="flex flex-wrap items-stretch">
      <div class="flex justify-center w-full lg:w-1/2 xl:w-2/3 pt-10 p-4">
        <div class="flex flex-wrap relative">
          <p class="absolute -top-10 text-base text-gray-600 px-6 py-2">04 Julio 2020</p>
          <div
            class="max-w-sm w-full lg:max-w-full xl:flex bg-white rounded-t-xxl rounded-b-xxl shadow-lg"
          >
            <img
              class="w-full xl:w-1/2 flex rounded-t-xxl rounded-b-xxl"
              src="http://placehold.it/500x300"
              alt
            />

            <!-- <div
              class="w-full lg:w-1/2 flex bg-cover rounded-t-xl rounded-b-xl text-center overflow-hidden shadow-lg"
              style="background-image: url('http://placehold.it/600x300')"
              title
            ></div>-->
            <div
              class="w-full xl:w-1/2 bg-white rounded-t-xxl rounded-b-xxl p-6 xl:p-10 flex flex-col leading-normal"
            >
              <div class="text-gray-900 font-bold text-2xl leading-8 mb-4">
                Titular del anuncio lorem ipsum dolor sit amet adipiscing
                elit, sed diam nonummy
              </div>
              <div class="mb-6 w-full">
                <div class="w-full bg-teal-200 rounded-md">
                  <div
                    class="bg-teal-600 rounded-md text-xs leading-none py-1 text-center text-white"
                    style="width: 12%"
                  ></div>
                </div>
                <div class="text-sm mt-4">
                  <p class="text-gray-600 leading-none flex items-center">
                    <svg
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
                    12% completado
                  </p>
                </div>
              </div>
              <p class="text-gray-700 text-base mb-8 hidden xl:block">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
              <div class="flex justify-center">
                <button
                  class="bg-primary shadow-3xl hover:bg-primary-700 text-white uppercase font-medium py-2 px-8 rounded-full"
                >Continuar el curso</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center w-full lg:w-1/2 xl:w-1/3 pt-10 p-4">
        <div class="flex flex-wrap relative">
          <p class="absolute -top-10 text-base text-gray-600 px-6 py-2">04 Julio 2020</p>
          <div class="max-w-sm w-full lg:max-w-full bg-white rounded-t-xl rounded-b-xl shadow-lg">
            <img class="w-full rounded-t-xl rounded-b-xl" src="http://placehold.it/500x300" alt />
            <div class="p-6">
              <div
                class="text-gray-900 font-bold text-2xl leading-8 mb-4"
              >Titular del anuncio lorem ipsum dolor sit amet</div>
              <div class="mb-6 w-full">
                <div class="w-full bg-teal-200 rounded-md">
                  <div
                    class="bg-teal-600 rounded-md text-xs leading-none py-1 text-center text-white"
                    style="width: 61%"
                  ></div>
                </div>
                <div class="text-sm mt-4">
                  <p class="text-gray-600 leading-none flex items-center">
                    <svg
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
                    61% completado
                  </p>
                </div>
              </div>
              <div class="flex justify-center">
                <button
                  class="bg-primary shadow-3xl hover:bg-primary-700 text-white uppercase font-medium py-2 px-8 rounded-full"
                >Continuar el curso</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="bg-black h-px mt-10 mb-10" />
    <div class="flex items-center mb-6">
      <h1 class="flex items-center text-3xl text-gray-900 leading-tight font-bold">
        <!-- <svg
          class="fill-current w-4 h-4 mx-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>-->
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="speakerphone w-10 h-10 mx-3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
          />
        </svg>
        <span>Ultimos anuncios</span>
      </h1>
      <div class="ml-auto flex items-center hidden lg:flex">
        <span class="text-base text-gray-500 hidden lg:inline-block">CAMBIAR VISUALIZACION</span>
        <button class="ml-3 mr-5 text-gray-700" @click.prevent="changeViewList">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="view-list w-6 h-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
            />
          </svg>
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="view-grid w-6 h-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="anuncios-list flex flex-wrap" :class="[viewList ? 'flex-col' : 'flex-row']">
      <AnunciosCard
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
  </div>
</template>

<script>
import AnunciosCard from "@/components/anuncios/AnunciosCard.vue";
export default {
  components: {
    AnunciosCard,
  },
  data() {
    return {
      viewList: false,
      anunciosAr: [
        {
          date: "04 Julio 2020",
          title: "Titular del anuncio lorem ipsum dolor sit amet",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repudiandae, illum iure dignissimos consequuntur tempora explicabo dolorum natus facere accusamus vitae ea ex expedita sint excepturi, nulla impedit nesciunt similique!",
          buttonIcon: "eye",
          buttonText: "Ver mas",
        },
        {
          date: "05 Julio 2020",
          title: "Titular del anuncio lorem ipsum dolor sit amet",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repudiandae, illum iure dignissimos consequuntur tempora explicabo dolorum natus facere accusamus vitae ea ex expedita sint excepturi, nulla impedit nesciunt similique!",
          buttonIcon: "cloud-download",
          buttonText: "Descargar",
        },
        {
          date: "05 Julio 2020",
          title: "Titular del anuncio lorem ipsum dolor sit amet",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repudiandae, illum iure dignissimos consequuntur tempora explicabo dolorum natus facere accusamus vitae ea ex expedita sint excepturi, nulla impedit nesciunt similique!",
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
