<template>
  <div
    class="flex justify-center pt-10 p-4 w-full"
    :class="[viewList ? 'w-full' : ' lg:w-1/2 xl:w-1/3']"
  >
    <div class="flex flex-wrap relative" :class="[viewList ? 'w-full' : '']">
      <p class="absolute -top-10 text-base text-gray-600 px-6 py-2">{{date}}</p>
      <div
        class="max-w-sm w-full lg:max-w-full bg-white rounded-t-xl rounded-b-xl shadow-lg flex"
        :class="[viewList ? 'flex-row' : 'flex-col']"
      >
        <div :class="[viewList ? 'w-1/4' : 'w-full']">
          <img
            class="w-full rounded-t-xl rounded-b-xl"
            src="https://static.universidadcorporativafp.com.pe/images/FP-2ACTUALIZACI%C3%93N-01.png"
            alt
          />
        </div>
        <div class="p-6" :class="[viewList ? 'w-3/4' : 'w-full']">
          <div
            class="lg:text-overflow-2 text-gray-600 font-bold text-xl md:text-2xl leading-6 md:leading-8 mb-4"
          >{{title}}</div>
          <p class="lg:text-overflow-3 text-gray-600 text-base mb-8">{{description}}</p>
          <div class="flex justify-center">
            <button
              class="flex items-center bg-primary shadow-3xl hover:bg-primary_hover text-sm md:text-base text-white uppercase font-medium py-3 px-5 md:px-10 rounded-full"
            >
              <IconSvg v-if="buttonIcon == 'eye'" name="eye" />
              <IconSvg v-if="buttonIcon == 'cloud-download'" name="cloud-download" />
              <IconSvg
                v-if="buttonIcon == 'arrow-narrow-right'"
                name="arrow-narrow-right"
                classes="w-4 h-4 mr-2"
              />
              <span>{{buttonText}}</span>
            </button>
          </div>
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
