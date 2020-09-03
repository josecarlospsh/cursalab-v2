<template>
  <div class="mx-4 md:ml-24 md:mr-40 pt-24 pb-12">
    <h1 class="flex items-center justify-center mb-6 text-3xl text-primary leading-tight font-bold">
      <span>Evaluación</span>
    </h1>
    <div
      class="flex items-center justify-end text-orange-500 mb-2 text-2xl font-semibold mx-5 md:mx-10"
    >
      <IconSvg name="clock" classes="w-6 h-6 mr-2" />
      <span>04:05 min.</span>
    </div>
    <div class="py-10 lg:py-12 w-full lg:max-w-full bg-white rounded-t-xxl rounded-b-xxl shadow-lg">
      <div class="flex flex-col justify-center items-center mb-8 mx-4">
        <h2 class="flex items-center text-2xl text-gray-600 leading-tight font-bold">
          <span>Titulo lorem ipsum set amit</span>
        </h2>
        <div class="text-base text-gray-300 font-roboto italic mt-3 md:mt-1">3 intentos restantes.</div>
      </div>
      <form action>
        <div class="flex flex-col">
          <EvaluacionPregunta
            v-for="(pregunta, index) in preguntasAr"
            :title="pregunta.title"
            :opciones="pregunta.opciones"
            :nro="index+1"
            :key="index"
          />
        </div>
        <div class="flex flex-wrap justify-center mt-8">
          <button
            class="bg-primary hover:bg-primary_hover shadow-3xl text-sm md:text-base text-white uppercase font-medium py-3 px-16 mx-4 my-3 rounded-full"
          >Enviar</button>
          <button
            class="bg-orange-500 hover:bg-orange-600 shadow-3xl text-sm md:text-base text-white uppercase font-medium py-3 px-16 mx-4 my-3 rounded-full"
          >Cancelar</button>
        </div>
      </form>

      <div
        class="flex justify-center mt-8 text-base text-gray-300 font-roboto italic"
      >(2 de 3 preguntas resultas)</div>
    </div>
  </div>
</template>

<script>
import EvaluacionPregunta from "@/components/evaluaciones/EvaluacionPregunta.vue";
export default {
  components: {
    EvaluacionPregunta,
  },
  data() {
    return {
      preguntasAr: [
        {
          title:
            "En referencia a los Productos Refrigerados, ¿quién es el encargado de controlar la temperatura de la refrigeradora local?",
          opciones: [
            "Cualquier colaborador que esté en la botica",
            "El técnico de farmacia",
            "El químico farmaceútico",
          ],
        },
        {
          title:
            "Los productos refrigerados, deben almacenarse a una temperatura de:",
          opciones: ["Entre 2° y 8°", "Entre 4° y 8°", "Entre 0° y 5°"],
        },
        {
          title:
            "En referencia a los Productos Refrigerados, ¿quién es el encargado de controlar la temperatura de la refrigeradora local?",
          opciones: [
            "Cualquier colaborador que esté en la botica",
            "El técnico de farmacia",
            "El químico farmaceútico",
          ],
        },
        {
          title:
            "En referencia a los Productos Refrigerados, ¿quién es el encargado de controlar la temperatura de la refrigeradora local?",
          opciones: [
            "Cualquier colaborador que esté en la botica",
            "El técnico de farmacia",
            "El químico farmaceútico",
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
