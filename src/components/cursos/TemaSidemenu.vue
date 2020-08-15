<template>
  <div class="tema-sidemenu">
    <div class="flex flex-row flex-wrap w-full border-b-2 border-gray-400">
      <div class="flex justify-center w-1/3">
        <button
          class="border-b-4 border-primary pb-4 font-semibold text-primary"
        >
          Mis cursos
        </button>
      </div>
      <div class="flex justify-center w-1/3">
        <button class="border-b-4 border-transparent pb-4 font-semibold">
          Apuntes
        </button>
      </div>
      <div class="flex justify-center w-1/3">
        <button class="border-b-4 border-transparent pb-4 font-semibold">
          Mis avances
        </button>
      </div>
    </div>
    <div class="mt-4 flex">
      <div
        class="p-5 lg:py-8 w-full lg:max-w-full bg-white rounded-t-xl rounded-b-xl shadow-lg"
      >
        <vue-scroll :ops="ops">
          <div class="miscursos">
            <h2
              class="flex items-center mb-6 text-2xl text-gray-900 leading-tight font-bold"
            >
              <span>Tema titulo</span>
            </h2>

            <br />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
              tenetur ex minima sint temporibus ab expedita beatae veniam
              tempora iure fuga aliquam quasi nesciunt nisi numquam, maiores
              excepturi, nobis esse.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
              tenetur ex minima sint temporibus ab expedita beatae veniam
              tempora iure fuga aliquam quasi nesciunt nisi numquam, maiores
              excepturi, nobis esse.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
              tenetur ex minima sint temporibus ab expedita beatae veniam
              tempora iure fuga aliquam quasi nesciunt nisi numquam, maiores
              excepturi, nobis esse.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
              tenetur ex minima sint temporibus ab expedita beatae veniam
              tempora iure fuga aliquam quasi nesciunt nisi numquam, maiores
              excepturi, nobis esse.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
              tenetur ex minima sint temporibus ab expedita beatae veniam
              tempora iure fuga aliquam quasi nesciunt nisi numquam, maiores
              excepturi, nobis esse.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
              tenetur ex minima sint temporibus ab expedita beatae veniam
              tempora iure fuga aliquam quasi nesciunt nisi numquam, maiores
              excepturi, nobis esse.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
              tenetur ex minima sint temporibus ab expedita beatae veniam
              tempora iure fuga aliquam quasi nesciunt nisi numquam, maiores
              excepturi, nobis esse.
            </p>
          </div>
        </vue-scroll>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ops: {
        scrollPanel: {
          initialScrollY: false,
          initialScrollX: false,
          scrollingX: true,
          scrollingY: true,
          speed: 300,
          easing: undefined,
          verticalNativeBarPos: "right",
          //   contentHeight: 700,
          maxHeight: 500,
        },
        bar: {
          background: "#5458ea",
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
