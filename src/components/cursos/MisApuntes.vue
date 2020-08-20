<template>
  <div class="mis-apuntes relative">
    <button class="absolute -top-5 text-primary">
      <svg
        data-v-15b2fd34
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="plus w-8 h-8"
      >
        <path
          data-v-15b2fd34
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    </button>
    <div class="apunte-item">
      <p class="text-base text-gray-600 px-6 py-2 mt-3 text-right">12 Julio del 2020</p>
      <div
        class="p-5 lg:p-8 w-full lg:max-w-full bg-primary bg-opacity-50 rounded-t-lg rounded-b-lg"
        contenteditable="true"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus nobis, fugit reiciendis ducimus aliquam natus dicta magni soluta aperiam qui, quo necessitatibus fuga odit autem, minus officiis modi tempora impedit.</div>
      <div class="flex justify-end px-6 py-2">
        <button class="m-1 text-gray-500 hover:text-gray-600">
          <svg viewBox="0 0 20 20" fill="currentColor" class="save w-6 h-6">
            <path
              d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"
            />
          </svg>
        </button>
        <button class="m-1 text-gray-500 hover:text-gray-600">
          <svg viewBox="0 0 20 20" fill="currentColor" class="pencil-alt w-6 h-6">
            <path
              d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
            />
            <path
              fill-rule="evenodd"
              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <button class="m-1 text-gray-500 hover:text-gray-600">
          <svg viewBox="0 0 20 20" fill="currentColor" class="trash w-6 h-6">
            <path
              fill-rule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="apunte-item">
      <p class="text-base text-gray-600 px-6 py-2 mt-3 text-right">12 Julio del 2020</p>
      <div
        class="p-5 lg:p-8 w-full lg:max-w-full bg-secondary bg-opacity-50 rounded-t-lg rounded-b-lg relative"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus nobis, fugit reiciendis ducimus aliquam natus dicta magni soluta aperiam qui, quo necessitatibus fuga odit autem, minus officiis modi tempora impedit.
        <div
          class="flex flex-col items-center justify-center absolute inset-0 bg-secondary bg-opacity-75 h-full w-full rounded-t-lg rounded-b-lg"
        >
          <div class="switch-colors flex flex-wrap px-6 py-2">
            <button class="color-item bg-primary rounded-full border-white border-2 w-8 h-8 m-2"></button>
            <button class="color-item bg-secondary rounded-full border-white border-2 w-8 h-8 m-2"></button>
            <button class="color-item bg-orange-500 rounded-full border-white border-2 w-8 h-8 m-2"></button>
            <button class="color-item bg-yellow-500 rounded-full border-white border-2 w-8 h-8 m-2"></button>
            <button class="color-item bg-teal-500 rounded-full border-white border-2 w-8 h-8 m-2"></button>
            <button class="color-item bg-gray-500 rounded-full border-white border-2 w-8 h-8 m-2"></button>
          </div>
          <div class="btn-opt flex justify-center w-full px-6 py-2">
            <button class="m-1 text-white hover:text-white tooltip">
              <span
                class="tooltip-text bg-white border border-gray-400 rounded text-gray-600 text-xs text-center w-32 left-1/2 -top-5 transform -translate-x-1/2 -translate-y-1/2"
              >Editar nota</span>
              <svg viewBox="0 0 20 20" fill="currentColor" class="save w-8 h-8">
                <path
                  d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"
                />
              </svg>
            </button>
            <button class="m-1 text-white hover:text-white tooltip">
              <span
                class="tooltip-text bg-white border border-gray-400 rounded text-gray-600 text-xs text-center w-32 left-1/2 -top-5 transform -translate-x-1/2 -translate-y-1/2"
              >Elegir otro color para nota</span>
              <svg viewBox="0 0 20 20" fill="currentColor" class="pencil-alt w-8 h-8">
                <path
                  d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                />
                <path
                  fill-rule="evenodd"
                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <button class="m-1 text-white hover:text-white tooltip">
              <span
                class="tooltip-text bg-white border border-gray-400 rounded text-gray-600 text-xs text-center w-32 left-1/2 -top-5 transform -translate-x-1/2 -translate-y-1/2"
              >Borrar</span>
              <svg viewBox="0 0 20 20" fill="currentColor" class="trash w-8 h-8">
                <path
                  fill-rule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="flex justify-end px-6 py-2 hidden">
        <button class="m-1 text-gray-500 hover:text-gray-600">
          <svg viewBox="0 0 20 20" fill="currentColor" class="save w-6 h-6">
            <path
              d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"
            />
          </svg>
        </button>
        <button class="m-1 text-gray-500 hover:text-gray-600">
          <svg viewBox="0 0 20 20" fill="currentColor" class="pencil-alt w-6 h-6">
            <path
              d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
            />
            <path
              fill-rule="evenodd"
              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <button class="m-1 text-gray-500 hover:text-gray-600">
          <svg viewBox="0 0 20 20" fill="currentColor" class="trash w-6 h-6">
            <path
              fill-rule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="apunte-item">
      <p class="text-base text-gray-600 px-6 py-2 mt-3 text-right">12 Julio del 2020</p>
      <div
        class="p-5 lg:p-8 w-full lg:max-w-full bg-yellow-500 bg-opacity-50 rounded-t-lg rounded-b-lg"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus nobis, fugit reiciendis ducimus aliquam natus dicta magni soluta aperiam qui, quo necessitatibus fuga odit autem, minus officiis modi tempora impedit.</div>
      <div class="flex justify-end px-6 py-2 hidden">
        <button class="m-1 text-gray-500 hover:text-gray-600">
          <svg viewBox="0 0 20 20" fill="currentColor" class="save w-6 h-6">
            <path
              d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"
            />
          </svg>
        </button>
        <button class="m-1 text-gray-500 hover:text-gray-600">
          <svg viewBox="0 0 20 20" fill="currentColor" class="pencil-alt w-6 h-6">
            <path
              d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
            />
            <path
              fill-rule="evenodd"
              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <button class="m-1 text-gray-500 hover:text-gray-600">
          <svg viewBox="0 0 20 20" fill="currentColor" class="trash w-6 h-6">
            <path
              fill-rule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="mt-8 text-center">
      <button
        class="m-3 bg-transparent hover:bg-secondary text-secondary hover:text-white inline-block text-sm text-center font-medium border-secondary border py-3 px-4 md:px-8 rounded-full"
      >
        <span class="uppercase">Realizar encuesta</span>
        <span
          class="hidden tooltip-text bg-red-300 border border-red-400 rounded text-red-600 text-xs right-0 left-0 -top-5"
        >Para realizar la encuesta antes debes terminar el curso y aprobar tu evaluacion.</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.tooltip {
  @apply relative;
}
.tooltip .tooltip-text {
  @apply invisible p-2 absolute z-50 block rounded-lg;
}

.tooltip:hover .tooltip-text {
  @apply visible;
}
</style>