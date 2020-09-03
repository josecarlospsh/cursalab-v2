<template>
  <div class="progreso-medallas">
    <ProgresoLayout>
      <div class="medallas-content">
        <div class="flex justify-end">
          <div class="w-4/5 md:w-3/4 xl:w-2/6 flex flex-col justify-end mx-0 md:mx-8">
            <div class="mb-2 text-sm font-normal text-gray-600 text-right">
              <span class="font-bold">2/200 (2%)</span> Medallas conseguidas en total.
            </div>
            <div class="curso-progressbar">
              <div class="w-full rounded-md bg-secondary_bg">
                <div
                  class="rounded-md text-xs leading-none py-1 text-center text-white bg-primary"
                  style="width: 30% "
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div class="ranking-dt mt-4 py-4 px-8 border border-gray-600 rounded-xl">
          <div class="font-bold mb-5">Nivel 01</div>
          <div class="flex flex-wrap justify-center md:justify-between">
            <div class="mr-6">
              <img src="../assets/astronaut.svg" class="w-24" alt />
            </div>
            <div class="mr-6">
              <img src="../assets/placeholder_medallas.svg" class="w-24" alt />
            </div>
            <div class="mr-6">
              <img src="../assets/placeholder_medallas.svg" class="w-24" alt />
            </div>
            <div class="mr-6">
              <img src="../assets/placeholder_medallas.svg" class="w-24" alt />
            </div>
            <div class="mr-6">
              <img src="../assets/placeholder_medallas.svg" class="w-24" alt />
            </div>
            <div>
              <img src="../assets/placeholder_medallas.svg" class="w-24" alt />
            </div>
          </div>
          <div class="flex justify-end mt-5">
            <div class="w-4/5 md:w-3/4 xl:w-2/6 flex flex-row justify-end items-center">
              <div class="text-sm text-orange-600 font-semibold mr-2">1/6</div>
              <div class="w-full curso-progressbar">
                <div class="w-full rounded-md bg-orange-200">
                  <div
                    class="rounded-md text-xs leading-none py-1 text-center text-white bg-orange-600"
                    style="width: 25% "
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ranking-dt mt-4 py-4 px-8 border border-gray-600 rounded-xl">
          <div class="font-bold mb-5">Nivel 02</div>
          <div class="flex flex-wrap justify-center md:justify-between">
            <div class="mr-6">
              <img src="../assets/astronaut.svg" class="w-24" alt />
            </div>
            <div class="mr-6">
              <img src="../assets/placeholder_medallas.svg" class="w-24" alt />
            </div>
            <div class="mr-6">
              <img src="../assets/placeholder_medallas.svg" class="w-24" alt />
            </div>
            <div class="mr-6">
              <img src="../assets/placeholder_medallas.svg" class="w-24" alt />
            </div>
            <div class="mr-6">
              <img src="../assets/placeholder_medallas.svg" class="w-24" alt />
            </div>
            <div>
              <img src="../assets/placeholder_medallas.svg" class="w-24" alt />
            </div>
          </div>
          <div class="flex justify-end mt-5">
            <div class="w-4/5 md:w-3/4 xl:w-2/6 flex flex-row justify-end items-center">
              <div class="text-sm text-orange-600 font-semibold mr-2">1/6</div>
              <div class="w-full curso-progressbar">
                <div class="w-full rounded-md bg-orange-200">
                  <div
                    class="rounded-md text-xs leading-none py-1 text-center text-white bg-orange-600"
                    style="width: 25% "
                  ></div>
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