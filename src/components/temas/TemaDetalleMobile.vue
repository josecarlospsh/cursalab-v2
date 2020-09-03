<template>
  <div class="tema-detalle">
    <div class="flex flex-wrap">
      <div class="relative w-3/5 overflow-x-auto">
        <select
          class="bg-secondary text-sm text-white py-2 px-3 mr-3 border border-secondary rounded-lg"
        >
          <option value="
        ">
            <IconSvg name="content-text" />
            <span class="font-bold">About</span>
          </option>
          <option class>
            <IconSvg name="content-text" />
            <span class="font-bold">Contenido uno</span>
          </option>
          <option class>
            <IconSvg name="content-audio" />
            <IconSvg name="content-pdf" />
            <span class="font-bold">Contenido dos</span>
          </option>
          <option class>
            <IconSvg name="content-text" />
            <span class="font-bold">Contenido Lorem</span>
          </option>
          <option class>
            <IconSvg name="content-pdf" />
            <IconSvg name="content-play" />
            <span class="font-bold">Contenido Lorem</span>
          </option>
        </select>
      </div>

      <div class="flex items-center w-2/5 justify-center">
        <router-link
          class="bg-primary hover:bg-primary_hover shadow-3xl text-sm text-white text-center uppercase font-medium py-3 px-4 md:px-8 rounded-full"
          :to="{ name: 'evaluacionmb' }"
        >Evaluacion</router-link>
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

<style lang="scss" scoped></style>
