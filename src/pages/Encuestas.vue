<template>
  <div class="progreso-encuestas">
    <ProgresoLayout>
      <div class="encuestas-content">
        <div class="flex mb-2 mx-12 font-normal text-red-600">
          <IconSvg name="emoji-sad" />
          <span class="font-bold">Tienes 1 encuesta sin resolver</span>
        </div>
        <div class="encuesta-preg my-2 py-4 px-0 border border-gray-600 rounded-xl">
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
    </ProgresoLayout>
  </div>
</template>

<script>
import ProgresoLayout from "@/layouts/ProgresoLayout.vue";
import EncuestaPregunta from "@/components/encuestas/EncuestaPregunta.vue";
export default {
  components: {
    ProgresoLayout,
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