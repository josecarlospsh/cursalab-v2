<template>
  <div class="encuesta-pregunta py-6 md:py-10 px-8 md:px-12">
    <h3 class="flex items-end mb-8 text-lg text-gray-600 leading-tight font-bold">
      <span class="font-bold text-2xl mr-1" v-html="`0` + nro + `.`"></span>
      {{ title }}
    </h3>
    <div class="flex flex-col lg:flex-row">
      <div
        class="flex flex-wrap items-center text-lg m-3 lg:ml-0 lg:mr-6"
        v-for="(opc, index) in opciones"
        :key="index"
      >
        <input type="radio" :id="`pre` + index" class="mr-3 text-lg w-3 h-5 bg-primary" />
        <label :for="`pre` + index">{{ opc }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    opciones: {
      type: Array,
    },
    nro: {
      type: Number,
    },
  },
};
</script>

<style lang="scss" scoped>
.encuesta-pregunta:nth-child(2n) {
  @apply bg-body;
  [type="radio"]:checked + label:before,
  [type="radio"]:not(:checked) + label:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    @apply bg-white;
  }
}
[type="radio"]:checked,
[type="radio"]:not(:checked) {
  position: absolute;
  left: -9999px;
}
[type="radio"]:checked + label,
[type="radio"]:not(:checked) + label {
  position: relative;
  padding-left: 2.5rem;
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
