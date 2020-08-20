<template>
  <div class="tema-sidemenu">
    <div class="flex flex-row flex-wrap w-full border-b-2 border-gray-400">
      <div class="flex justify-center w-1/3">
        <button
          class="border-b-4 border-primary pb-4 font-semibold text-primary"
          @click="toggleTab('mis-cursos')"
        >Mis cursos</button>
      </div>
      <div class="flex justify-center w-1/3">
        <button
          class="border-b-4 border-transparent pb-4 font-semibold"
          @click="toggleTab('mis-apuntes')"
        >Apuntes</button>
      </div>
      <div class="flex justify-center w-1/3">
        <button
          class="border-b-4 border-transparent pb-4 font-semibold"
          @click="toggleTab('mis-avances')"
        >Mis avances</button>
      </div>
    </div>
    <div class="mt-4 flex">
      <div class="p-5 lg:py-8 w-full lg:max-w-full bg-white rounded-t-xl rounded-b-xl shadow-lg">
        <MisCursos v-if="tabName == 'mis-cursos'" />
        <MisApuntes v-if="tabName == 'mis-apuntes'" />
        <MisAvances v-if="tabName == 'mis-avances'" />
      </div>
    </div>
  </div>
</template>

<script>
import MisCursos from "@/components/cursos/MisCursos.vue";
import MisApuntes from "@/components/cursos/MisApuntes.vue";
import MisAvances from "@/components/cursos/MisAvances.vue";
export default {
  components: {
    MisCursos,
    MisApuntes,
    MisAvances,
  },
  data() {
    return {
      tabName: "mis-cursos",
    };
  },
  methods: {
    toggleTab(tabName) {
      this.tabName = tabName;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
