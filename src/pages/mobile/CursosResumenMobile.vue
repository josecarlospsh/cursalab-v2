<template>
  <div class="cursos-mobile">
    <ProgresoLayoutMobile>
      <div class="curso-content flex flex-col">
        <div class="mb-6 text-center">
          <h2 class="text-2xl font-bold text-primary">Mis Cursos</h2>
        </div>
        <div class="flex flex-col w-full mb-4">
          <div class="flex items-center mb-2">
            <div class="curso-img w-2/6">
              <img src="http://placehold.it/500x350" alt />
            </div>
            <div class="flex flex-col w-4/6 py-2 pl-4 text-base">
              <div class="flex justify-between my-2">
                <h2 class="text-gray-600 font-bold text-overflow-2 mr-2">Curso 01</h2>
                <div class="text-secondary font-bold">Aprobado</div>
              </div>
              <div class="curso-progressbar">
                <div class="w-full rounded-md bg-gray-400">
                  <div class="rounded-md leading-none py-1 bg-secondary" style="width: 70% "></div>
                </div>
              </div>
              <div class="temas text-gray-600 font-normal flex justify-between my-2">
                <div>7/10 temas</div>
                <div>70%</div>
              </div>
            </div>
          </div>

          <div class="cursos-ext flex flex-col w-full">
            <div class="flex flex-col w-full">
              <div class="flex items-center justify-center w-full mb-6">
                <div class="flex flex-row">
                  <router-link
                    class="w-36 bg-primary hover:bg-primary_hover shadow-3xl text-sm text-white text-center uppercase font-medium py-3 px-3 m-1 rounded-full"
                    :to="{ name: 'evaluacionmb' }"
                  >Ir a evaluacion</router-link>
                  <button
                    class="w-36 flex bg-secondary_hover hover:bg-secondary_hover shadow-3xl text-sm text-white text-center uppercase font-medium py-3 px-3 m-1 rounded-full"
                  >
                    Ver detalle
                    <IconSvg name="x" classes="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            </div>

            <div class="temas-list bg-white p-5 rounded-lg mb-8">
              <table class="table-auto w-full text-sm text-gray-600 font-normal">
                <thead>
                  <tr class="border-b border-gray-600">
                    <th class="w-2/4 p-1"></th>
                    <th class="w-1/4 p-1 text-left font-bold">Notas</th>
                    <th class="w-1/4 py-1 px-8 text-left font-bold">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="w-2/4 h-12 p-1">Tema 01</td>
                    <td class="w-1/4 p-1">15.50</td>
                    <td class="w-1/4 p-1 flex items-center">
                      <IconSvg name="check" classes="w-4 h-4 text-secondary mr-1" />
                      <span>Aprobado</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="w-2/4 p-1">Tema 02</td>
                    <td class="w-1/4 p-1">17.40</td>
                    <td class="w-1/4 p-1 flex items-center">
                      <IconSvg name="check" classes="w-4 h-4 text-secondary mr-1" />
                      <span>Aprobado</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="w-2/4 p-1">Tema 03</td>
                    <td class="w-1/4 p-1">19.45</td>
                    <td class="w-1/4 p-1 flex items-center">
                      <IconSvg name="check" classes="w-4 h-4 text-secondary mr-1" />
                      <span>Aprobado</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="flex flex-col w-full mb-4">
          <div class="flex items-center mb-2">
            <div class="curso-img w-2/6">
              <img src="http://placehold.it/500x350" alt />
            </div>
            <div class="flex flex-col w-4/6 py-2 pl-4 text-base">
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
          </div>
          <div class="cursos-ext flex flex-col w-full">
            <div class="flex flex-col w-full">
              <div class="flex items-center justify-center w-full mb-6">
                <div class="flex flex-row">
                  <router-link
                    class="w-36 bg-primary hover:bg-primary_hover shadow-3xl text-sm text-white text-center uppercase font-medium py-3 px-3 m-1 rounded-full"
                    :to="{ name: 'temamb' }"
                  >Ir al curso</router-link>
                  <button
                    class="w-36 flex bg-secondary hover:bg-secondary_hover shadow-3xl text-sm text-white text-center uppercase font-medium py-3 px-3 m-1 rounded-full"
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
    </ProgresoLayoutMobile>
  </div>
</template>

<script>
import ProgresoLayoutMobile from "@/layouts/ProgresoLayoutMobile.vue";

export default {
  components: {
    ProgresoLayoutMobile,
  },
};
</script>

<style lang="scss" scoped>
</style>