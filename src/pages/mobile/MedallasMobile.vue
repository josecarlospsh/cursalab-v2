<template>
  <div class="medallas-mobile">
    <ProgresoLayoutMobile>
      <div class="medallas-content">
        <div class="mb-6 text-center">
          <h2 class="text-2xl font-bold text-primary">Mis Medallas</h2>
        </div>
        <div class="flex justify-center">
          <div class="w-11/12 flex flex-col justify-end">
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
        <div class="ranking-dt bg-white mt-8 py-4 px-8 rounded-xl shadow-lg">
          <div class="font-bold mb-5">Nivel 01</div>
          <div class="flex flex-wrap justify-center md:justify-between">
            <div class="mr-6">
              <img src="../../assets/astronaut.svg" class="w-24" alt />
            </div>
            <div class="mr-6">
              <img src="../../assets/placeholder_medallas.svg" class="w-24" alt />
            </div>
            <div class="mr-6">
              <img src="../../assets/placeholder_medallas.svg" class="w-24" alt />
            </div>
            <div class="mr-6">
              <img src="../../assets/placeholder_medallas.svg" class="w-24" alt />
            </div>
            <div class="mr-6">
              <img src="../../assets/placeholder_medallas.svg" class="w-24" alt />
            </div>
            <div>
              <img src="../../assets/placeholder_medallas.svg" class="w-24" alt />
            </div>
          </div>
          <div class="flex justify-end mt-5">
            <div class="w-full flex flex-row justify-end items-center">
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
        <div class="ranking-dt bg-white mt-8 py-4 px-8 rounded-xl shadow-lg">
          <div class="font-bold mb-5">Nivel 01</div>
          <div class="flex flex-wrap justify-center md:justify-between">
            <div class="mr-6">
              <img src="../../assets/astronaut.svg" class="w-24" alt />
            </div>
            <div class="mr-6">
              <img src="../../assets/placeholder_medallas.svg" class="w-24" alt />
            </div>
            <div class="mr-6">
              <img src="../../assets/placeholder_medallas.svg" class="w-24" alt />
            </div>
            <div class="mr-6">
              <img src="../../assets/placeholder_medallas.svg" class="w-24" alt />
            </div>
            <div class="mr-6">
              <img src="../../assets/placeholder_medallas.svg" class="w-24" alt />
            </div>
            <div>
              <img src="../../assets/placeholder_medallas.svg" class="w-24" alt />
            </div>
          </div>
          <div class="flex justify-end mt-5">
            <div class="w-full flex flex-row justify-end items-center">
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