<template>
  <div>
    <vue-scroll :ops="ops">
      <div class="mis-avances">
        <div class="avance-item">
          <p class="text-base text-gray-600 px-6 py-2 mt-3 text-right">12 Julio del 2020</p>
          <div class="p-5 lg:px-8 lg:py-6 w-full lg:max-w-full bg-body rounded-t-lg rounded-b-lg">
            <div class="status flex justify-end mb-3 text-orange-400">
              <!-- <svg viewBox="0 0 20 20" fill="currentColor" class="clock w-6 h-6 mr-2">
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clip-rule="evenodd"
                />
              </svg>-->
              <IconSvg name="clock" />
              <span>Pendiente</span>
            </div>
            <div>
              <h2 class="text-xl text-gray-600 leading-tight font-bold">Curso 01:</h2>
              <p class="text-gray-600">Tema titulo lorem ipsum set amit</p>
            </div>
            <div class="flex flex-col md:flex-row mt-3 md:mt-6 justify-between items-center">
              <a
                href="#"
                class="bg-primary hover:bg-primary_hover shadow-3xl text-sm text-white text-center uppercase font-medium py-3 px-4 md:px-8 rounded-full"
              >Resolver</a>
              <div class="text-base text-gray-300 font-roboto italic">3 intentos restantes</div>
            </div>
          </div>
        </div>
        <div class="avance-item">
          <p class="text-base text-gray-600 px-6 py-2 mt-3 text-right">12 Julio del 2020</p>
          <div class="p-5 lg:px-8 lg:py-6 w-full lg:max-w-full bg-body rounded-t-lg rounded-b-lg">
            <div class="status flex justify-end mb-3 text-secondary">
              <!-- <svg
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
              </svg>-->
              <IconSvg name="thumb-up" stroke="currentColor" class="font-bold" />
              <span>Aprobado</span>
            </div>
            <div>
              <h2 class="text-xl text-gray-600 leading-tight font-bold">Curso 02:</h2>
              <p class="text-gray-600">Tema titulo lorem ipsum set amit</p>
            </div>
            <div class="flex flex-col md:flex-row mt-3 md:mt-6 justify-between items-center">
              <div
                class="text-base md:text-lg text-secondary text-center font-semibold py-3 italic"
              >¡Buen trabajo, aprobaste este curso!</div>
              <div class="text-base text-secondary italic">
                <IconSvg name="emoji-happy" />
              </div>
            </div>
          </div>
        </div>
        <div class="avance-item">
          <p class="text-base text-gray-600 px-6 py-2 mt-3 text-right">12 Julio del 2020</p>
          <div class="p-5 lg:px-8 lg:py-6 w-full lg:max-w-full bg-body rounded-t-lg rounded-b-lg">
            <div class="status flex justify-end mb-3 text-red-600">
              <!-- <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="thumb-down w-6 h-6 mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
                />
              </svg>-->
              <IconSvg name="thumb-down" />
              <span>Desaprobado</span>
            </div>
            <div>
              <h2 class="text-xl text-gray-600 leading-tight font-bold">Curso 03:</h2>
              <p class="text-gray-600">Tema titulo lorem ipsum set amit</p>
            </div>
            <div class="flex flex-col md:flex-row mt-3 md:mt-6 justify-between items-center">
              <div
                class="text-base md:text-lg text-red-600 text-center font-semibold py-3 italic"
              >Lo sentimos, este curso fue desaprobado.</div>
              <div class="text-base text-red-600 italic">
                <IconSvg name="emoji-sad" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </vue-scroll>
    <div class="mt-8 text-center">
      <button
        class="m-3 bg-transparent hover:bg-secondary text-secondary hover:text-white inline-block text-sm text-center font-medium border-secondary border py-3 px-4 md:px-8 rounded-full"
      >
        <span class="uppercase">Realizar encuesta</span>
        <span
          class="hidden tooltip-text bg-red-300 border border-red-400 rounded text-red-600 text-xs right-0 left-0 -top-5"
        >Para realizar la encuesta antes debes terminar el curso y aprobar tu evaluacion.</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ops: {
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
          verticalNativeBarPos: "right",
          //   contentHeight: 700,
          maxHeight: 600,
        },
        bar: {
          background: "#5458ea",
          keepShow: true,
        },
        rail: {
          background: "#f2f2f2",
          opacity: 1,
          keepShow: false,
          gutterOfSide: "0",
          gutterOfEnds: "0",
          specifyBorderRadius: "0.25rem",
          size: "6px",
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>