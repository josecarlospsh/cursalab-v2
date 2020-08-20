<template>
  <div class="mx-4 md:ml-10 md:mr-56 pt-24 pb-12">
    <h1 class="flex items-center justify-center mb-6 text-3xl text-primary leading-tight font-bold">
      <span>Evaluacion</span>
    </h1>
    <div class="flex items-center justify-end text-orange-500 mb-4 text-2xl font-semibold mx-4">
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="clock w-6 h-6 mr-2">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      04:05 min.
    </div>
    <div class="py-10 lg:py-12 w-full lg:max-w-full bg-white rounded-t-xxl rounded-b-xxl shadow-lg">
      <div class="flex flex-col justify-center items-center mb-8 mx-4">
        <h2 class="flex items-center text-2xl text-gray-900 leading-tight font-bold">
          <span>Titulo lorem ipsum set amit</span>
        </h2>
        <div class="text-lg text-gray-500 italic mt-3 md:mt-0">3 intentos restantes.</div>
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
            class="bg-primary shadow-3xl hover:bg-primary-700 text-lg text-white uppercase font-medium py-3 px-8 mx-4 my-3 rounded-full"
          >Enviar</button>
          <button
            class="bg-orange-500 shadow-3xl hover:bg-orange-700 text-lg text-white uppercase font-medium py-3 px-8 mx-4 my-3 rounded-full"
          >Cancelar</button>
        </div>
      </form>

      <div class="flex justify-center mt-8 text-lg text-gray-500 italic">(2 de 3 preguntas resultas)</div>
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
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
