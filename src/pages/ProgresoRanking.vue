<template>
  <div class="progreso-ranking">
    <Progreso>
      <div class="ranking-content">
        <div class="flex flex-col md:flex-row mx-0 md:mx-6">
          <h2 class="font-normal mr-5">Elige el tipo de Ranking:</h2>
          <select
            type="text"
            class="bg-body rounded-lg py-1 pl-6 pr-24 mt-3 md:mt-0 border border-gray-600"
          >
            <option value>Mi oficina</option>
            <option value>General</option>
          </select>
        </div>
        <div class="ranking-dt my-8 border border-gray-600 rounded-xl">
          <table class="table-auto text-gray-600 font-normal w-full">
            <thead>
              <tr class="border-b border-gray-600">
                <th class="w-1/6 px-6 p-1 md:pb-2 pt-6 text-left font-bold">Puesto</th>
                <th class="w-3/6 p-1 md:pb-2 pt-6 text-left font-bold">Nombre</th>
                <th class="w-1/6 p-1 md:pb-2 pt-6 text-left font-bold">Mi oficina</th>
                <th class="w-1/6 p-1 md:pb-2 pt-6 text-left font-bold">Puntos</th>
              </tr>
            </thead>
            <tbody class="py-6">
              <tr>
                <td class="w-1/6 px-8 p-1 md:pb-3 pt-8">
                  <div class="flex items-center">
                    <span class="mr-0 md:mr-6">01</span>
                    <img
                      src="https://scontent.flim8-1.fna.fbcdn.net/v/t31.0-1/c0.0.160.160a/p160x160/1957720_10202680309021840_1243974886_o.jpg?_nc_cat=109&amp;_nc_sid=dbb9e7&amp;_nc_eui2=AeE-eoKP7fAqWJVc3w-N4eT32iZcuvlB2QraJly6-UHZCj10zmI1T5CFplXSDYPcv6Q&amp;_nc_ohc=qYSNIQIkUmoAX_egmhj&amp;_nc_ht=scontent.flim8-1.fna&amp;oh=126d319215a8cd1e881141028e9a6e4f&amp;oe=5F59033E"
                      alt="JC"
                      class="w-8 h-8 rounded-full hidden md:inline-block"
                    />
                  </div>
                </td>
                <td class="w-3/6 p-1 md:pb-3 pt-8">Julio Ramirez</td>
                <td class="w-1/6 p-1 md:pb-3 pt-8">Aula A</td>
                <td class="w-1/6 p-1 md:pb-3 pt-8">180 puntos</td>
              </tr>
              <tr class="bg-secondary_bg text-secondary font-bold">
                <td class="w-1/6 px-8 p-1 md:py-3">
                  <div class="flex items-center">
                    <span class="mr-0 md:mr-6">02</span>
                    <img
                      src="https://scontent.flim8-1.fna.fbcdn.net/v/t31.0-1/c0.0.160.160a/p160x160/1957720_10202680309021840_1243974886_o.jpg?_nc_cat=109&amp;_nc_sid=dbb9e7&amp;_nc_eui2=AeE-eoKP7fAqWJVc3w-N4eT32iZcuvlB2QraJly6-UHZCj10zmI1T5CFplXSDYPcv6Q&amp;_nc_ohc=qYSNIQIkUmoAX_egmhj&amp;_nc_ht=scontent.flim8-1.fna&amp;oh=126d319215a8cd1e881141028e9a6e4f&amp;oe=5F59033E"
                      alt="JC"
                      class="w-8 h-8 rounded-full hidden md:inline-block"
                    />
                  </div>
                </td>
                <td class="w-3/6 p-1 md:py-3">Jose Carlos Pajuelo</td>
                <td class="w-1/6 p-1 md:py-3">Aula B</td>
                <td class="w-1/6 p-1 md:py-3">180 puntos</td>
              </tr>
              <tr>
                <td class="w-1/6 px-8 p-1 md:pt-3 pb-8">
                  <div class="flex items-center">
                    <span class="mr-0 md:mr-6">03</span>
                    <img
                      src="https://scontent.flim8-1.fna.fbcdn.net/v/t31.0-1/c0.0.160.160a/p160x160/1957720_10202680309021840_1243974886_o.jpg?_nc_cat=109&amp;_nc_sid=dbb9e7&amp;_nc_eui2=AeE-eoKP7fAqWJVc3w-N4eT32iZcuvlB2QraJly6-UHZCj10zmI1T5CFplXSDYPcv6Q&amp;_nc_ohc=qYSNIQIkUmoAX_egmhj&amp;_nc_ht=scontent.flim8-1.fna&amp;oh=126d319215a8cd1e881141028e9a6e4f&amp;oe=5F59033E"
                      alt="JC"
                      class="w-8 h-8 rounded-full hidden md:inline-block"
                    />
                  </div>
                </td>
                <td class="w-3/6 p-1 md:pt-3 pb-8">Sergio García</td>
                <td class="w-1/6 p-1 md:pt-3 pb-8">Aula D</td>
                <td class="w-1/6 p-1 md:pt-3 pb-8">182 puntos</td>
              </tr>
            </tbody>
          </table>
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