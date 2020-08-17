<template>
  <div class="evaluacion-pregunta py-6 md:py-10 px-8 md:px-24">
    <h3 class="flex items-end mb-8 text-lg text-gray-900 leading-tight font-bold">
      <span class="font-bold text-2xl mr-2">01.</span>
      {{ title }}
    </h3>
    <div class="flex flex-col">
      <div class="flex flex-wrap items-center mb-3" v-for="(opc, index) in opciones" :key="index">
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
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.evaluacion-pregunta:nth-child(2n) {
  @apply bg-gray-200;
}
[type="radio"]:checked,
[type="radio"]:not(:checked) {
  position: absolute;
  left: -9999px;
}
[type="radio"]:checked + label,
[type="radio"]:not(:checked) + label {
  position: relative;
  padding-left: 40px;
  cursor: pointer;
  line-height: 25px;
  display: inline-block;
  color: #666;
}
[type="radio"]:checked + label:before,
[type="radio"]:not(:checked) + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 25px;
  height: 25px;
  border: 1px solid #ddd;
  border-radius: 100%;
  background: #fff;
}
[type="radio"]:checked + label:after,
[type="radio"]:not(:checked) + label:after {
  content: "";
  width: 13px;
  height: 13px;
  background: #444;
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
</style>
