<template>
  <div class="ranking-mobile">
    <ProgresoLayoutMobile>
      <div class="ranking-content">
        <div class="mb-6 text-center">
          <h2 class="text-2xl font-bold text-primary">Mis Ranking</h2>
        </div>
        <div class="flex flex-col">
          <h2 class="text-base font-normal mr-5">Elige el tipo de Ranking:</h2>
          <div class="relative mt-3">
            <select
              type="text"
              class="w-full bg-white rounded-lg py-2 pl-6 pr-24 border border-gray-600 appearance-none text-base"
            >
              <option value>Mi oficina</option>
              <option value>General</option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <IconSvg name="chevron-down" classes="h-6 w-6" />
            </div>
          </div>
        </div>
        <div class="ranking-dt bg-white my-4 rounded-lg text-base">
          <table class="table-auto w-full text-base text-gray-600 font-normal">
            <tbody>
              <tr class="bg-secondary_bg text-secondary">
                <td class="w-2/6 px-3 pt-4">
                  <div class="flex justify-center">
                    <img
                      src="https://scontent.flim8-1.fna.fbcdn.net/v/t31.0-1/c0.0.160.160a/p160x160/1957720_10202680309021840_1243974886_o.jpg?_nc_cat=109&amp;_nc_sid=dbb9e7&amp;_nc_eui2=AeE-eoKP7fAqWJVc3w-N4eT32iZcuvlB2QraJly6-UHZCj10zmI1T5CFplXSDYPcv6Q&amp;_nc_ohc=qYSNIQIkUmoAX_egmhj&amp;_nc_ht=scontent.flim8-1.fna&amp;oh=126d319215a8cd1e881141028e9a6e4f&amp;oe=5F59033E"
                      alt="JC"
                      class="w-10 h-10 rounded-full"
                    />
                  </div>
                </td>
                <td class="w-4/6 py-3">
                  <div class="mb-1">Jose Carlos Pajuelo</div>
                  <div>
                    <span class="font-bold">Puesto:</span> 74
                  </div>
                  <div>
                    <span class="font-bold">Oficina:</span> Aula B
                  </div>
                  <div>
                    <span class="font-bold">Puntos:</span> 180
                  </div>
                </td>
              </tr>
              <tr class="py-4 border-b mx-2">
                <td class="w-2/6 px-3 pt-4">
                  <div class="flex justify-center">
                    <img
                      src="https://scontent.flim8-1.fna.fbcdn.net/v/t31.0-1/c0.0.160.160a/p160x160/1957720_10202680309021840_1243974886_o.jpg?_nc_cat=109&amp;_nc_sid=dbb9e7&amp;_nc_eui2=AeE-eoKP7fAqWJVc3w-N4eT32iZcuvlB2QraJly6-UHZCj10zmI1T5CFplXSDYPcv6Q&amp;_nc_ohc=qYSNIQIkUmoAX_egmhj&amp;_nc_ht=scontent.flim8-1.fna&amp;oh=126d319215a8cd1e881141028e9a6e4f&amp;oe=5F59033E"
                      alt="JC"
                      class="w-10 h-10 rounded-full"
                    />
                  </div>
                </td>
                <td class="w-4/6 py-3">
                  <div class="mb-1">Julio Ramirez</div>
                  <div>
                    <span class="font-bold">Puesto:</span> 74
                  </div>
                  <div>
                    <span class="font-bold">Oficina:</span> Aula B
                  </div>
                  <div>
                    <span class="font-bold">Puntos:</span> 180
                  </div>
                </td>
              </tr>
              <tr class="py-4">
                <td class="w-2/6 px-3 pt-4">
                  <div class="flex justify-center">
                    <img
                      src="https://scontent.flim8-1.fna.fbcdn.net/v/t31.0-1/c0.0.160.160a/p160x160/1957720_10202680309021840_1243974886_o.jpg?_nc_cat=109&amp;_nc_sid=dbb9e7&amp;_nc_eui2=AeE-eoKP7fAqWJVc3w-N4eT32iZcuvlB2QraJly6-UHZCj10zmI1T5CFplXSDYPcv6Q&amp;_nc_ohc=qYSNIQIkUmoAX_egmhj&amp;_nc_ht=scontent.flim8-1.fna&amp;oh=126d319215a8cd1e881141028e9a6e4f&amp;oe=5F59033E"
                      alt="JC"
                      class="w-10 h-10 rounded-full"
                    />
                  </div>
                </td>
                <td class="w-4/6 py-3">
                  <div class="mb-1">Julio Ramirez</div>
                  <div>
                    <span class="font-bold">Puesto:</span> 74
                  </div>
                  <div>
                    <span class="font-bold">Oficina:</span> Aula B
                  </div>
                  <div>
                    <span class="font-bold">Puntos:</span> 180
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
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