<template>
  <div class="login flex flex-col md:flex-row h-screen bg-white">
    <div class="w-full md:w-1/2 h-auto md:h-full bg-primary relative">
      <div class="flex">
        <img
          src="https://cursalab.pe/wp-content/uploads/2018/11/logo.png"
          alt="Cursalab"
          width="220"
          class="absolute top-0 left-0 px-8 py-6"
        />
      </div>
      <!-- <img src="http://placehold.it/500x300" alt /> -->
    </div>
    <div class="w-full md:w-1/2 h-full relative">
      <div class="frm h-full py-12 px-12 flex flex-col justify-center items-center">
        <h1 class="text-4xl text-primary font-bold mb-10">Bienvenido a cursalab!</h1>
        <div class="frm">
          <div class="frm-control flex flex-col mb-6">
            <label for="usuario">Usuario</label>
            <input type="text" />
          </div>
          <div class="frm-control flex flex-col mb-6">
            <label for="contrasena">Contrasena</label>
            <input type="text" />
          </div>
          <div class="frm-control flex flex-col mb-6">
            <div class="usuario">Comprueba que no eres un robot</div>
            <div class="captcha"></div>
          </div>
          <div class="frm-control flex flex-col mb-6">
            <button
              type="text"
              class="bg-primary shadow-3xl hover:bg-primary-700 text-sm md:text-lg text-white uppercase font-medium py-2 px-4 md:px-8 rounded-full"
            >Ingresar</button>
          </div>
          <div class="text-gray-600">
            <a href>Olvidaste tu contrasena?</a>
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 right-0 px-6 py-4 text-sm text-primary">&copy; 2020 La Media</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>