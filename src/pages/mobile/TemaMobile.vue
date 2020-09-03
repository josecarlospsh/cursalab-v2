<template>
  <div class="tema-mobile">
    <TemaLayoutMobile>
      <TemaMultimedia />
      <div class="mx-4 pt-8">
        <div class="flex flex-col w-full xl:w-2/3 pb-4 xl:pb-0 xl:pr-4">
          <TemaTitle />
          <div class="my-4">
            <TemaDetalleMobile />
          </div>
        </div>
        <div class="flex flex-col w-full xl:w-1/3 pt-4 xl:pt-0 xl:pl-4">
          <TemaSidemenu />
        </div>
      </div>
    </TemaLayoutMobile>
  </div>
</template>

<script>
import TemaTitle from "@/components/temas/TemaTitle.vue";
import TemaMultimedia from "@/components/temas/TemaMultimedia.vue";
import TemaDetalleMobile from "@/components/temas/TemaDetalleMobile.vue";
import TemaSidemenu from "@/components/temas/TemaSidemenu.vue";

import TemaLayoutMobile from "@/layouts/TemaLayoutMobile.vue";

export default {
  components: {
    TemaLayoutMobile,
    TemaTitle,
    TemaMultimedia,
    TemaDetalleMobile,
    TemaSidemenu,
  },
};
</script>

<style lang="scss" scoped>
</style>