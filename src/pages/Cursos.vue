<template>
  <div class="mx-4 md:ml-10 md:mr-56 py-12">
    <h1 class="flex items-center mb-6 text-3xl text-gray-900 leading-tight font-bold">
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="tag w-10 h-10 mx-3">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
        />
      </svg>
      <span>Elige una categoria:</span>
    </h1>
    <div class="mt-10">
      <div class="flex flex-wrap justify-end">
        <div class="categorias-name flex">
          <button
            class="bg-white hover:bg-blue-500 text-gray-700 font-semibold hover:text-white py-2 px-4 mx-2 border border-blue-500 hover:border-transparent rounded"
          >Escuela nombre</button>
          <button
            class="bg-white hover:bg-blue-500 text-gray-700 font-semibold hover:text-white py-2 px-4 mx-2 border border-blue-500 hover:border-transparent rounded"
          >Escuela nombre</button>
          <button
            class="bg-white hover:bg-blue-500 text-gray-700 font-semibold hover:text-white py-2 px-4 mx-2 border border-blue-500 hover:border-transparent rounded"
          >Escuela nombre</button>
          <button
            class="bg-white hover:bg-blue-500 text-gray-700 font-semibold hover:text-white py-2 px-4 mx-2 border border-blue-500 hover:border-transparent rounded"
          >Escuela nombre</button>
          <div class="relative mx-2">
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
      </div>
      <div class="cursos flex flex-wrap">
        <CursosCard
          v-for="(ar,index) in cursosAr"
          :title="ar.title"
          :description="ar.description"
          :progreso="ar.progreso"
          :buttonText="ar.buttonText"
          :estado="ar.estado"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CursosCard from "@/components/cursos/CursosCard.vue";
export default {
  components: {
    CursosCard,
  },
  data() {
    return {
      cursosAr: [
        {
          title: "Curso titulo lorem ipsum dolor sit amet",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repudiandae, illum iure dignissimos consequuntur tempora explicabo dolorum natus facere accusamus vitae ea ex expedita sint excepturi, nulla impedit nesciunt similique!",
          progreso: "12% completado",
          buttonText: "Continuar el curso",
          estado: "iniciado",
        },
        {
          title: "Curso titulo lorem ipsum dolor sit amet",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repudiandae, illum iure dignissimos consequuntur tempora explicabo dolorum natus facere accusamus vitae ea ex expedita sint excepturi, nulla impedit nesciunt similique!",
          progreso: "No iniciado",
          buttonText: "Comenzar el curso",
          estado: "noiniciado",
        },
        {
          title: "Curso titulo lorem ipsum dolor sit amet",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repudiandae, illum iure dignissimos consequuntur tempora explicabo dolorum natus facere accusamus vitae ea ex expedita sint excepturi, nulla impedit nesciunt similique!",
          progreso: "61% completado",
          buttonText: "Continuar el curso",
          estado: "iniciado",
        },
        {
          title: "Curso titulo lorem ipsum dolor sit amet",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repudiandae, illum iure dignissimos consequuntur tempora explicabo dolorum natus facere accusamus vitae ea ex expedita sint excepturi, nulla impedit nesciunt similique!",
          progreso: "Bloqueado",
          buttonText: "Bloqueado",
          estado: "bloqueado",
        },
        {
          title: "Curso titulo lorem ipsum dolor sit amet",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repudiandae, illum iure dignissimos consequuntur tempora explicabo dolorum natus facere accusamus vitae ea ex expedita sint excepturi, nulla impedit nesciunt similique!",
          progreso: "Bloqueado",
          buttonText: "Bloqueado",
          estado: "bloqueado",
        },
        {
          title: "Curso titulo lorem ipsum dolor sit amet",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repudiandae, illum iure dignissimos consequuntur tempora explicabo dolorum natus facere accusamus vitae ea ex expedita sint excepturi, nulla impedit nesciunt similique!",
          progreso: "Completado",
          buttonText: "Ver curso",
          estado: "completado",
        },
        {
          title: "Curso titulo lorem ipsum dolor sit amet",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repudiandae, illum iure dignissimos consequuntur tempora explicabo dolorum natus facere accusamus vitae ea ex expedita sint excepturi, nulla impedit nesciunt similique!",
          progreso: "Completado",
          buttonText: "Ver curso",
          estado: "completado",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped></style>