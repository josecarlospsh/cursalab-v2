<template>
  <div class="search-frm">
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
  </div>
</template>

<script>
export default {
  name: "SearchForm",
};
</script>

<style lang="sass" scoped>

</style>