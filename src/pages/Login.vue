<template>
  <div class="login flex flex-col lg:flex-row h-auto md:h-screen bg-white">
    <div
      class="w-full lg:w-7/12 h-auto lg:h-full bg-primary relative flex flex-col lg:flex-row items-center justify-center"
    >
      <div class="flex relative lg:absolute lg:top-0 lg:left-0 px-8 lg:px-12 py-6 lg:py-10">
        <img src="../assets/logo_cursalab.svg" alt="Cursalab" width="180" class />
      </div>
      <img src="../assets/bg-login.svg" alt class="w-2/3 hidden lg:block p-3 lg:p-0" />
    </div>
    <div class="w-full lg:w-5/12 h-full relative">
      <div class="frm h-full py-12 px-10 flex flex-col justify-center items-center">
        <h1 class="text-4xl text-primary leading-tight font-bold mb-12">¡Bienvenido a Cursalab!</h1>
        <form class="frm w-full md:w-3/4 lg:w-2/3">
          <div class="frm-control flex flex-col mb-6">
            <label for="usuario" class="text-gray-900 font-semibold">Usuario</label>
            <input type="text" class="border-gray-600 border-b py-1 px-3" />
          </div>
          <div class="frm-control flex flex-col mb-6">
            <label for="contrasena" class="text-gray-900 font-semibold">Contraseña</label>
            <input type="text" class="border-gray-600 border-b py-1 px-3" />
          </div>
          <div class="frm-control flex flex-col mb-6">
            <div class="usuario text-gray-900 font-semibold">Comprueba que no eres un robot:</div>
            <div class="captcha mt-3 p-8 bg-gray-400"></div>
          </div>
          <div class="frm-control flex justify-center mt-10 mb-6">
            <router-link
              :to="{name: 'inicio'}"
              type="text"
              class="flex items-center justify-center w-full bg-primary shadow-3xl hover:bg-primary-700 text-base text-white uppercase font-medium py-3 px-4 md:px-8 rounded-full"
            >
              <span>Ingresar</span>
              <IconSvg name="arrow-narrow-right" classes="w-3 h-3 ml-2" />
            </router-link>
          </div>
        </form>
        <div class="text-sm text-gray-500 text-center">
          <a href>¿Olvidaste tu contraseña?</a>
        </div>
      </div>
      <div
        class="relative text-center md:absolute md:bottom-0 md:right-0 px-6 py-4 text-sm text-primary"
      >
        &copy;
        <span v-html="year"></span> La Media
      </div>
    </div>
  </div>
</template>

<script>
const date = new Date();
const year = date.getFullYear();
export default {
  data() {
    return {
      year: year,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>