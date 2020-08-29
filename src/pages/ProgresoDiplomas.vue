<template>
  <div class="progreso-diplomas">
    <Progreso>
      <div class="diplomas-content">
        <div
          class="flex flex-col items-cente rmd:items-stretch md:flex-row md:justify-center mb-16"
        >
          <div class="diploma-img w-full flex justify-center lg:w-2/5 xl:w-1/5">
            <img src="http://placehold.it/250x150" alt />
          </div>
          <div
            class="diploma-ext flex flex-col items-center mt-4 md:mt-0 md:items-stretch w-full lg:w-3/5 xl:w-4/5"
          >
            <div class="flex flex-col text-gray-600 mx-4 md:mx-8">
              <h2 class="font-bold">Por concluir el curso A-002</h2>
              <div class="font-normal">21 de abril del 2020</div>
              <div class="flex flex-col md:flex-row items-center mt-5">
                <button
                  class="bg-primary hover:bg-primary_hover shadow-3xl text-sm text-white text-center uppercase font-medium py-3 px-8 my-2 md:mr-4 rounded-full"
                >Ver</button>
                <button
                  class="bg-secondary hover:bg-secondary_hover shadow-3xl text-sm text-white text-center uppercase font-medium py-3 px-8 my-2 md:mr-4 rounded-full"
                >Descargar</button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col items-cente rmd:items-stretch md:flex-row md:justify-center mb-16"
        >
          <div class="diploma-img w-full flex justify-center lg:w-2/5 xl:w-1/5">
            <img src="http://placehold.it/250x150" alt />
          </div>
          <div
            class="diploma-ext flex flex-col items-center mt-4 md:mt-0 md:items-stretch w-full lg:w-3/5 xl:w-4/5"
          >
            <div class="flex flex-col text-gray-600 mx-4 md:mx-8">
              <h2 class="font-bold">Por concluir el curso A-002</h2>
              <div class="font-normal">21 de abril del 2020</div>
              <div class="flex flex-col md:flex-row items-center mt-5">
                <button
                  class="bg-primary hover:bg-primary_hover shadow-3xl text-sm text-white text-center uppercase font-medium py-3 px-8 my-2 md:mr-4 rounded-full"
                >Ver</button>
                <button
                  class="bg-secondary hover:bg-secondary_hover shadow-3xl text-sm text-white text-center uppercase font-medium py-3 px-8 my-2 md:mr-4 rounded-full"
                >Descargar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Progreso>
  </div>
</template>

<script>
import Progreso from "@/pages/Progreso.vue";
export default {
  components: {
    Progreso,
  },
};
</script>

<style lang="scss" scoped>
</style>