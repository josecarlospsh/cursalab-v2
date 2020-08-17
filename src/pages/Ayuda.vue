<template>
  <div class="mx-4 md:ml-10 md:mr-56 pt-24 pb-12">
    <div class="logo flex justify-center text-center mb-8">
      <img
        src="https://cursalab.pe/wp-content/uploads/2018/11/logo.png"
        alt="Cursalab"
        width="220"
        class
      />
    </div>
    <div class="flex justify-center">
      <div
        class="flex flex-wrap flex-row justify-center w-full md:w-1/2 border-b-2 border-gray-400"
      >
        <div class="flex justify-center w-1/2">
          <button
            class="border-b-4 border-transparent pb-4 font-semibold text-primary"
          >Preguntas Frecuentes</button>
        </div>
        <div class="flex justify-center w-1/2">
          <button class="border-b-4 border-primary pb-4 font-semibold">Ayuda</button>
        </div>
      </div>
    </div>
    <div class="flex justify-center my-8 mx-2">
      <div class="relative w-full md:w-2/3">
        <input
          class="bg-white focus:outline-none focus:shadow-outline border border-gray-600 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="Buscar"
        />
        <button
          class="absolute top-0 bottom-0 right-0 bg-transparent text-gray-700 font-semibold hover:text-gray py-2 px-4 rounded"
        >
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="search w-6 h-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div
      class="p-10 lg:p-12 w-full lg:max-w-full bg-white rounded-t-xxl rounded-b-xxl shadow-lg"
    >sds</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>