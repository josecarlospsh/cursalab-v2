<template>
  <div class="mx-4 md:ml-20 md:mr-48 pt-24 pb-12">
    <div class="flex flex-wrap">
      <div class="flex flex-col w-full xl:w-2/3 pb-4 xl:pb-0 xl:pr-4">
        <TemaTitle />
        <TemaMultimedia />
        <div class="my-10">
          <TemaDetalle />
        </div>
      </div>
      <div class="flex flex-col w-full xl:w-1/3 pt-4 xl:pt-0 xl:pl-4">
        <TemaSidemenu />
      </div>
    </div>
  </div>
</template>

<script>
import TemaTitle from "@/components/temas/TemaTitle.vue";
import TemaMultimedia from "@/components/temas/TemaMultimedia.vue";
import TemaDetalle from "@/components/temas/TemaDetalle.vue";
import TemaSidemenu from "@/components/temas/TemaSidemenu.vue";

export default {
  components: {
    TemaTitle,
    TemaMultimedia,
    TemaDetalle,
    TemaSidemenu,
  },
};
</script>

<style lang="scss" scoped>
</style>