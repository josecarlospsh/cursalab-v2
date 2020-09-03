<template>
  <div class="encuestas-mobile">
    <MainLayoutMobile>
      <div class="encuestas-content">
        <div class="mb-6 text-center">
          <h2 class="text-2xl font-bold text-primary">Encuestas</h2>
        </div>
        <div class="flex justify-center mb-2 mx-3 font-normal text-red-600">
          <IconSvg name="emoji-sad" classes="w-4 h-4" />
          <span class="font-bold text-base">Tienes 1 encuesta sin resolver</span>
        </div>
        <div class="encuesta-preg bg-white mt-10 mb-2 py-4 px-0 rounded-xl shadow-lg">
          <EncuestaPregunta
            v-for="(pregunta, index) in preguntasEnc"
            :title="pregunta.title"
            :opciones="pregunta.opciones"
            :nro="index+1"
            :key="index"
          />
          <div class="flex flex-wrap mx-12 my-8">
            <button
              class="bg-secondary hover:bg-secondary_hover shadow-3xl text-sm md:text-base text-white uppercase font-medium py-3 px-16 rounded-full"
            >Enviar</button>
          </div>
        </div>
      </div>
    </MainLayoutMobile>
  </div>
</template>

<script>
import MainLayoutMobile from "@/layouts/MainLayoutMobile.vue";
import EncuestaPregunta from "@/components/encuestas/EncuestaPregunta.vue";
export default {
  components: {
    MainLayoutMobile,
    EncuestaPregunta,
  },
  data() {
    return {
      preguntasEnc: [
        {
          title: "¿Cómo exlicarías el lorem ipsum set amit humus camel?",
          opciones: [
            "Muy bueno",
            "Bueno",
            "Puede Mejorar",
            "No me gusta",
            "Mala",
          ],
        },
        {
          title: "¿Cómo exlicarías el lorem ipsum set amit humus camel?",
          opciones: [
            "Muy bueno",
            "Bueno",
            "Puede Mejorar",
            "No me gusta",
            "Mala",
          ],
        },
        {
          title: "¿Cómo exlicarías el lorem ipsum set amit humus camel?",
          opciones: [
            "Muy bueno",
            "Bueno",
            "Puede Mejorar",
            "No me gusta",
            "Mala",
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>