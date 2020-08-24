<template>
  <div class="ayuda-frm">
    <form action="
      ">
      <div class="opc-radio mb-4" v-for="(op, index) in opcionesAr" :key="index">
        <h2
          class="mb-8 text-gray-600 font-bold text-xl md:text-2xl leading-6 md:leading-8"
        >{{op.title}}</h2>
        <div class="flex flex-col">
          <div
            class="flex flex-wrap items-center text-lg mb-4"
            v-for="(res,index) in op.res"
            :key="index"
          >
            <input type="radio" :id="`op` + index+14" class="mr-3 text-lg w-3 h-5 bg-primary" />
            <label :for="`op` + index+14" class="text-gray-600">{{ res }}</label>
          </div>
        </div>
      </div>
      <div class="opc-texta mb-4">
        <textarea
          name
          id
          cols="30"
          rows="6"
          class="w-full bg-body border border-gray-600 rounded-lg py-6 px-10"
          :placeholder="textarea"
        ></textarea>
      </div>
      <div class="flex flex-wrap mt-8">
        <button
          class="bg-secondary hover:bg-secondary_hover shadow-3xl hover:bg-primary-700 text-sm md:text-base text-white uppercase font-medium py-3 px-16 my-3 rounded-full"
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
      textarea: "Detállanos lo que necesitas..",
    };
  },
};
</script>

<style lang="scss" scoped>
::placeholder {
  @apply text-gray-500;
}
[type="radio"]:checked,
[type="radio"]:not(:checked) {
  position: absolute;
  left: -9999px;
}
[type="radio"]:checked + label,
[type="radio"]:not(:checked) + label {
  position: relative;
  padding-left: 45px;
  cursor: pointer;
  display: inline-block;
  @apply text-gray-600;
}
[type="radio"]:checked + label:before,
[type="radio"]:not(:checked) + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  @apply bg-body;
}
[type="radio"]:checked + label:after,
[type="radio"]:not(:checked) + label:after {
  content: "";
  width: 13px;
  height: 13px;
  @apply bg-secondary;
  position: absolute;
  top: 6px;
  left: 6px;
  border-radius: 100%;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
[type="radio"]:not(:checked) + label:after {
  opacity: 0;
  -webkit-transform: scale(0);
  transform: scale(0);
}
[type="radio"]:checked + label:after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}
[type="radio"]:checked + label:before {
  @apply bg-white border border-secondary;
}
[type="radio"]:checked + label {
  @apply text-secondary;
}
</style>