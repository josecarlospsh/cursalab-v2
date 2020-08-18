<template>
  <div class="login flex flex-col lg:flex-row h-screen bg-white">
    <div class="w-full lg:w-1/2 h-64 lg:h-full bg-primary relative">
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
    <div class="w-full lg:w-1/2 h-full relative">
      <div class="frm h-full py-12 px-10 flex flex-col justify-center items-center">
        <h1 class="text-4xl text-primary leading-tight font-bold mb-12">Bienvenido a Cursalab!</h1>
        <form class="frm w-full md:w-3/4 lg:w-2/3">
          <div class="frm-control flex flex-col mb-6">
            <label for="usuario">Usuario</label>
            <input type="text" class="border-gray-600 border-b-2 py-2 px-4" />
          </div>
          <div class="frm-control flex flex-col mb-6">
            <label for="contrasena">Contrasena</label>
            <input type="text" class="border-gray-600 border-b-2 py-2 px-4" />
          </div>
          <div class="frm-control flex flex-col mb-6">
            <div class="usuario">Comprueba que no eres un robot</div>
            <div class="captcha mt-3 p-8 bg-gray-400"></div>
          </div>
          <div class="frm-control flex justify-center mt-12 mb-6">
            <button
              type="text"
              class="flex items-center justify-center w-full bg-primary shadow-3xl hover:bg-primary-700 text-lg text-white uppercase font-medium py-3 px-4 md:px-8 rounded-full"
            >
              <span>Ingresar</span>
              <svg viewBox="0 0 20 20" fill="currentColor" class="arrow-narrow-right w-6 h-6 ml-3">
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </form>
        <div class="text-sm text-gray-600 text-center">
          <a href>Olvidaste tu contrasena?</a>
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