<template>
  <div class="diplomas-mobile">
    <ProgresoLayoutMobile>
      <div class="diplomas-content flex flex-col">
        <div class="mb-6 text-center">
          <h2 class="text-2xl font-bold text-primary">Mis Diplomas</h2>
        </div>
        <div class="w-full flex flex-col items-center mb-8">
          <div class="diploma-img w-3/5 flex justify-center">
            <img src="http://placehold.it/250x150" alt />
          </div>
          <div class="diploma-ext flex flex-col items-center mt-4 w-full">
            <div class="flex flex-col text-gray-600 mx-4">
              <h2 class="font-bold text-base">Por concluir el curso A-002</h2>
              <div class="font-normal text-base">21 de abril del 2020</div>
              <div class="flex flex-row items-center mt-5">
                <button
                  class="bg-primary hover:bg-primary_hover shadow-3xl text-sm text-white text-center uppercase font-medium py-3 px-8 my-2 mx-2 rounded-full"
                >Ver</button>
                <button
                  class="bg-secondary hover:bg-secondary_hover shadow-3xl text-sm text-white text-center uppercase font-medium py-3 px-8 my-2 mx-2 rounded-full"
                >Descargar</button>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full flex flex-col items-center mb-8">
          <div class="diploma-img w-3/5 flex justify-center">
            <img src="http://placehold.it/250x150" alt />
          </div>
          <div class="diploma-ext flex flex-col items-center mt-4 w-full">
            <div class="flex flex-col text-gray-600 mx-4">
              <h2 class="font-bold text-base">Por concluir el curso A-002</h2>
              <div class="font-normal text-base">21 de abril del 2020</div>
              <div class="flex flex-row items-center mt-5">
                <button
                  class="bg-primary hover:bg-primary_hover shadow-3xl text-sm text-white text-center uppercase font-medium py-3 px-8 my-2 mx-2 rounded-full"
                >Ver</button>
                <button
                  class="bg-secondary hover:bg-secondary_hover shadow-3xl text-sm text-white text-center uppercase font-medium py-3 px-8 my-2 mx-2 rounded-full"
                >Descargar</button>
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