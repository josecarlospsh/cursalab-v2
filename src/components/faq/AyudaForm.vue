<template>
  <div class="ayuda-frm">
    <form action="
      ">
      <div class="opc-radio mb-4" v-for="(op, index) in opcionesAr" :key="index">
        <h2
          class="mb-8 text-gray-900 font-bold text-xl md:text-2xl leading-6 md:leading-8"
        >{{op.title}}</h2>
        <div class="flex flex-col">
          <div class="flex flex-wrap items-center mb-3" v-for="(res,index) in op.res" :key="index">
            <input type="radio" :id="`op` + index" class="mr-3 text-lg w-3 h-5 bg-primary" />
            <label :for="`op` + index">{{ res }}</label>
          </div>
        </div>
      </div>
      <div class="opc-texta mb-4">
        <textarea
          name
          id
          cols="30"
          rows="6"
          class="w-full bg-gray-200 border border-gray-400 rounded-lg py-4 px-6"
          :placeholder="textarea"
        ></textarea>
      </div>
      <div class="flex flex-wrap mt-8">
        <button
          class="bg-secondary shadow-3xl hover:bg-primary-700 text-lg text-white uppercase font-medium py-3 px-8 my-3 rounded-full"
        >Enviar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      opcionesAr: [
        {
          title: "Selecciona una opcion y detallanos en que te podemos ayudar",
          res: [
            "Tengo un problema con mis notas",
            "Tengo un problema con un curso",
            "No puedo acceder va un curso",
            "Otros problemas",
          ],
        },
        {
          title: "Selecciona una opcion y detallanos en que te podemos ayudar",
          res: [
            "Tengo un problema con mis notas",
            "Tengo un problema con un curso",
            "No puedo acceder va un curso",
            "Otros problemas",
          ],
        },
      ],
      textarea: "Detallanos lo que necesitas...",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>