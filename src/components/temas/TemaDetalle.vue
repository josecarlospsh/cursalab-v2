<template>
  <div class="tema-detalle">
    <div class="flex flex-wrap">
      <div class="flex w-full lg:w-3/4 overflow-x-auto">
        <button
          class="flex items-center bg-secondary text-sm text-white py-2 px-3 mr-3 border border-secondary rounded-lg"
        >
          <IconSvg name="content-text" />
          <span class="font-bold">About</span>
        </button>
        <button
          class="flex items-center bg-transparent hover:bg-secondary_bg text-sm text-gray-600 py-2 px-3 mr-3 border border-secondary rounded-lg"
        >
          <IconSvg name="content-text" />
          <span class="font-bold">Contenido uno</span>
        </button>
        <button
          class="flex items-center bg-transparent hover:bg-secondary_bg text-sm text-gray-600 py-2 px-3 mr-3 border border-secondary rounded-lg"
        >
          <IconSvg name="content-audio" />
          <IconSvg name="content-pdf" />
          <span class="font-bold">Contenido dos</span>
        </button>
        <button
          class="flex items-center bg-transparent hover:bg-secondary_bg text-sm text-gray-600 py-2 px-3 mr-3 border border-secondary rounded-lg"
        >
          <IconSvg name="content-text" />
          <span class="font-bold">Contenido Lorem</span>
        </button>
        <button
          class="flex items-center bg-transparent hover:bg-secondary_bg text-sm text-gray-600 py-2 px-3 mr-3 border border-secondary rounded-lg"
        >
          <IconSvg name="content-pdf" />
          <IconSvg name="content-play" />
          <span class="font-bold">Contenido Lorem</span>
        </button>
      </div>

      <div class="flex items-center w-full my-6 lg:my-0 justify-center lg:justify-end lg:w-1/4">
        <router-link
          class="bg-primary hover:bg-primary_hover shadow-3xl text-sm text-white text-center uppercase font-medium py-3 px-4 md:px-8 rounded-full"
          :to="{ name: 'evaluacion' }"
        >Resolver evaluacion</router-link>
      </div>
    </div>
    <div class="mt-8 flex">
      <div
        class="py-10 px-6 lg:px-10 lg:py-12 w-full lg:max-w-full bg-white rounded-t-xxl rounded-b-xxl shadow-lg"
      >
        <h2 class="flex items-center mb-8 text-2xl text-gray-900 leading-tight font-bold">
          <span>Tema titulo</span>
        </h2>
        <iframe
          src="https://open.spotify.com/embed-podcast/episode/4on1bq9jCxUBEfwlHOBO2g"
          width="100%"
          height="180"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
        <br />
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/ub3snw1_T-o"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo tenetur
          ex minima sint temporibus ab expedita beatae veniam tempora iure fuga
          aliquam quasi nesciunt nisi numquam, maiores excepturi, nobis esse.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  @apply bg-gray-400;
  padding: 10px;
  width: 5px;
  height: 3px;
  // display: none;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 3px rgba(131, 131, 131, 0.315);
  -webkit-border-radius: 10px;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  @apply bg-gray-900;
}
::-webkit-scrollbar-thumb:window-inactive {
  @apply bg-gray-600;
}
::placeholder {
  @apply text-gray-600;
}
</style>
