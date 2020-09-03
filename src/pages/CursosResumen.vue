<template>
  <div class="progreso-cursos">
    <ProgresoLayout>
      <div class="curso-content flex flex-col p-0 md:p-3">
        <div class="flex flex-col lg:flex-row w-full mb-6">
          <div class="curso-img w-full lg:w-1/6">
            <img src="http://placehold.it/500x350" alt />
          </div>
          <div class="cursos-ext flex flex-col w-full lg:w-5/6">
            <div class="flex flex-col xl:flex-row w-full">
              <div class="flex flex-col w-full xl:w-5/12 lg:pl-6 xl:pl-12 py-2">
                <div class="flex justify-between my-2">
                  <h2 class="text-gray-600 font-bold text-overflow-2 mr-2">Curso 01</h2>
                  <div class="text-secondary font-bold">Aprobado</div>
                </div>
                <div class="curso-progressbar">
                  <div class="w-full rounded-md bg-gray-400">
                    <div
                      class="rounded-md text-xs leading-none py-1 text-center text-white bg-secondary"
                      style="width: 70% "
                    ></div>
                  </div>
                </div>
                <div class="temas text-gray-600 font-normal flex justify-between my-2">
                  <div class>7/10 temas</div>
                  <div class>70%</div>
                </div>
              </div>
              <div class="flex items-center justify-center xl:justify-end w-full xl:w-7/12">
                <div class="flex flex-row">
                  <router-link
                    class="w-auto md:w-40 bg-primary hover:bg-primary_hover shadow-3xl text-sm text-white text-center uppercase font-medium py-3 px-3 md:px-5 m-1 md:m-2 rounded-full"
                    :to="{ name: 'evaluacion' }"
                  >Ir a evaluacion</router-link>
                  <button
                    class="w-auto md:w-40 flex bg-secondary_hover hover:bg-secondary_hover shadow-3xl text-sm text-white text-center uppercase font-medium py-3 px-3 md:px-5 m-1 md:m-2 rounded-full"
                  >
                    Ver detalle
                    <IconSvg name="x" classes="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            </div>

            <div
              class="temas-list bg-body py-5 px-2 md:px-5 lg:px-10 lg:ml-6 xl:ml-12 rounded-lg mt-4 mb-8"
            >
              <table class="table-auto w-full text-base md:text-lg text-gray-600 font-normal">
                <thead>
                  <tr class="border-b border-gray-600">
                    <th class="w-2/4 p-1 md:px-4 md:py-2"></th>
                    <th class="w-1/4 p-1 md:px-4 md:py-2 text-left font-bold">Notas</th>
                    <th class="w-1/4 py-1 px-10 md:py-2 text-left font-bold">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="w-2/4 p-1 md:px-4 md:py-2">Tema 01</td>
                    <td class="w-1/4 p-1 md:px-4 md:py-2">15.50</td>
                    <td class="w-1/4 p-1 md:px-4 md:py-2 flex items-center">
                      <IconSvg name="check" classes="w-5 h-5 text-secondary mr-1" />
                      <span>Aprobado</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="w-2/4 p-1 md:px-4 md:py-2">Tema 02</td>
                    <td class="w-1/4 p-1 md:px-4 md:py-2">17.40</td>
                    <td class="w-1/4 p-1 md:px-4 md:py-2 flex items-center">
                      <IconSvg name="check" classes="w-5 h-5 text-secondary mr-1" />
                      <span>Aprobado</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="w-2/4 p-1 md:px-4 md:py-2">Tema 03</td>
                    <td class="w-1/4 p-1 md:px-4 md:py-2">19.45</td>
                    <td class="w-1/4 p-1 md:px-4 md:py-2 flex items-center">
                      <IconSvg name="check" classes="w-5 h-5 text-secondary mr-1" />
                      <span>Aprobado</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row w-full mb-6">
          <div class="curso-img w-full lg:w-1/6">
            <img src="http://placehold.it/500x350" alt />
          </div>
          <div class="cursos-ext flex flex-col w-full lg:w-5/6">
            <div class="flex flex-col xl:flex-row w-full">
              <div class="flex flex-col w-full xl:w-5/12 lg:pl-6 xl:pl-12 py-2">
                <div class="flex justify-between my-2">
                  <h2 class="text-gray-600 font-bold text-overflow-2 mr-2">Curso 01</h2>
                  <div class="text-secondary font-bold">Aprobado</div>
                </div>
                <div class="curso-progressbar">
                  <div class="w-full rounded-md bg-gray-400">
                    <div
                      class="rounded-md text-xs leading-none py-1 text-center text-white bg-secondary"
                      style="width: 10% "
                    ></div>
                  </div>
                </div>
                <div class="temas text-gray-600 font-normal flex justify-between my-2">
                  <div>1/10 temas</div>
                  <div>10%</div>
                </div>
              </div>
              <div class="flex items-center justify-center xl:justify-end w-full xl:w-7/12">
                <div class="flex flex-row">
                  <router-link
                    class="w-auto md:w-40 bg-primary hover:bg-primary_hover shadow-3xl text-sm text-white text-center uppercase font-medium py-3 px-3 md:px-5 m-1 md:m-2 rounded-full"
                    :to="{ name: 'tema' }"
                  >Ir al curso</router-link>
                  <button
                    class="w-auto md:w-40 flex bg-secondary hover:bg-secondary_hover shadow-3xl text-sm text-white text-center uppercase font-medium py-3 px-3 md:px-5 m-1 md:m-2 rounded-full"
                  >
                    Ver detalle
                    <IconSvg name="chevron-down" classes="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row w-full mb-6">
          <div class="curso-img w-full lg:w-1/6">
            <img src="http://placehold.it/500x350" alt />
          </div>
          <div class="cursos-ext flex flex-col w-full lg:w-5/6">
            <div class="flex flex-col xl:flex-row w-full">
              <div class="flex flex-col w-full xl:w-5/12 lg:pl-6 xl:pl-12 py-2">
                <div class="flex justify-between my-2">
                  <h2 class="text-gray-600 font-bold text-overflow-2 mr-2">Curso 01</h2>
                  <div class="text-secondary font-bold">Aprobado</div>
                </div>
                <div class="curso-progressbar">
                  <div class="w-full rounded-md bg-gray-400">
                    <div
                      class="rounded-md text-xs leading-none py-1 text-center text-white bg-secondary"
                      style="width: 11% "
                    ></div>
                  </div>
                </div>
                <div class="temas text-gray-600 font-normal flex justify-between my-2">
                  <div>2/10 temas</div>
                  <div>11%</div>
                </div>
              </div>
              <div class="flex items-center justify-center xl:justify-end w-full xl:w-7/12">
                <div class="flex flex-row">
                  <router-link
                    class="w-auto md:w-40 bg-primary hover:bg-primary_hover shadow-3xl text-sm text-white text-center uppercase font-medium py-3 px-3 md:px-5 m-1 md:m-2 rounded-full"
                    :to="{ name: 'tema' }"
                  >Ir al curso</router-link>
                  <button
                    class="w-auto md:w-40 flex bg-secondary hover:bg-secondary_hover shadow-3xl text-sm text-white text-center uppercase font-medium py-3 px-3 md:px-5 m-1 md:m-2 rounded-full"
                  >
                    Ver detalle
                    <IconSvg name="chevron-down" classes="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProgresoLayout>
  </div>
</template>

<script>
import ProgresoLayout from "@/layouts/ProgresoLayout.vue";
export default {
  components: {
    ProgresoLayout,
  },
};
</script>

<style lang="scss" scoped>
</style>