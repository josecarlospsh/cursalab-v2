<template>
  <div class="tema-detalle">
    <div class="flex flex-wrap">
      <div class="flex w-full lg:w-3/4 overflow-hidden">
        <button
          class="flex items-center bg-white hover:bg-blue-500 text-sm text-gray-700 font-semibold hover:text-white py-2 px-4 mx-2 border border-blue-500 hover:border-transparent rounded"
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="clipboard-list w-6 h-6 mr-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
          </svg>
          <span>About</span>
        </button>
        <button
          class="flex items-center bg-white hover:bg-blue-500 text-sm text-gray-700 font-semibold hover:text-white py-2 px-4 mx-2 border border-blue-500 hover:border-transparent rounded"
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="clipboard-list w-6 h-6 mr-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
          </svg>
          <span>Contenido uno</span>
        </button>
        <button
          class="flex items-center bg-white hover:bg-blue-500 text-sm text-gray-700 font-semibold hover:text-white py-2 px-4 mx-2 border border-blue-500 hover:border-transparent rounded"
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="clipboard-list w-6 h-6 mr-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
          </svg>
          <span>Contenido dos</span>
        </button>
        <button
          class="flex items-center bg-white hover:bg-blue-500 text-sm text-gray-700 font-semibold hover:text-white py-2 px-4 mx-2 border border-blue-500 hover:border-transparent rounded"
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="clipboard-list w-6 h-6 mr-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
          </svg>
          <span>Contenido Lorem</span>
        </button>
      </div>

      <div class="flex items-center w-full my-6 lg:my-0 justify-center lg:justify-end lg:w-1/4">
        <router-link
          class="bg-primary shadow-3xl text-sm text-white text-center uppercase font-medium py-3 px-4 md:px-8 rounded-full"
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
          src="https://open.spotify.com/embed/track/6WrI0LAC5M1Rw2MnX2ZvEg"
          width="100%"
          height="80"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
        <br />
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/-5KAN9_CzSA"
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
