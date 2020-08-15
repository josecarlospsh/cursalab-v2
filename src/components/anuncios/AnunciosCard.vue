<template>
  <div
    class="relative flex flex-wrap justify-center pt-10 p-4 w-full lg:w-1/2"
    :class="[viewList ? 'w-full' : 'xl:w-1/3']"
  >
    <p class="absolute -top-10 text-base text-gray-600 px-6 py-2">{{date}}</p>
    <div
      class="max-w-sm w-full lg:max-w-full bg-white rounded-t-xl rounded-b-xl shadow-lg flex"
      :class="[viewList ? 'flex-row' : 'flex-col']"
    >
      <div :class="[viewList ? 'w-1/4' : 'w-full']">
        <img class="w-full rounded-t-xl rounded-b-xl" src="http://placehold.it/500x400" alt />
      </div>
      <div class="p-6" :class="[viewList ? 'w-3/4' : 'w-full']">
        <div class="text-gray-900 font-bold text-2xl leading-8 mb-4">{{title}}</div>
        <p class="text-gray-700 text-base mb-8">{{description}}</p>
        <div class="flex justify-center">
          <button
            class="flex items-center bg-primary shadow-3xl hover:bg-primary-700 text-white uppercase font-medium py-2 px-8 rounded-full"
          >
            <svg
              v-if="buttonIcon == 'eye'"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="eye w-6 h-6 mx-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <svg
              v-if="buttonIcon == 'cloud-download'"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="cloud-download w-6 h-6 mx-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
              />
            </svg>
            <svg
              v-if="buttonIcon == 'arrow-narrow-right'"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="arrow-narrow-right w-6 h-6 mx-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            <span>{{buttonText}}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    viewList: {
      type: Boolean,
      // default: false,
    },
    date: {
      type: String,
      default: "04 Julio 2020",
    },
    title: {
      type: String,
      default: "Titular del anuncio lorem ipsum dolor sit amet",
    },
    description: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repudiandae, illum iure dignissimos consequuntur tempora explicabo dolorum natus facere accusamus vitae ea ex expedita sint excepturi",
    },
    buttonIcon: {
      type: String,
      default: "",
    },
    buttonText: {
      type: String,
      default: "Ver mas",
    },
  },
  data() {
    return {};
  },
};
</script>

<style></style>
