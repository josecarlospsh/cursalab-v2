<template>
  <div class="sidemenu">
    <router-link :to="{name: 'progreso'}" class="flex flex-wrap items-center mb-4">
      <svg viewBox="0 0 20 20" fill="currentColor" class="chevron-right w-5 h-5 mr-2">
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
      <span>Mis Cursos</span>
    </router-link>
    <router-link :to="{name: 'diplomas'}" class="flex flex-wrap items-center mb-4">
      <svg viewBox="0 0 20 20" fill="currentColor" class="chevron-right w-5 h-5 mr-2">
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
      <span>Mis Diplomas</span>
    </router-link>
    <router-link :to="{name: 'medallas'}" class="flex flex-wrap items-center mb-4">
      <svg viewBox="0 0 20 20" fill="currentColor" class="chevron-right w-5 h-5 mr-2">
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
      <span>Mis Medallas</span>
    </router-link>
    <router-link :to="{name: 'ranking'}" class="flex flex-wrap items-center mb-4">
      <svg viewBox="0 0 20 20" fill="currentColor" class="chevron-right w-5 h-5 mr-2">
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
      <span>Ranking</span>
    </router-link>
    <router-link :to="{name: 'encuestas'}" class="flex flex-wrap items-center mb-4">
      <svg viewBox="0 0 20 20" fill="currentColor" class="chevron-right w-5 h-5 mr-2">
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
      <span>Encuestas</span>
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        class="exclamation-circle w-6 h-6 ml-2 text-red-600"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
          clip-rule="evenodd"
        />
      </svg>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.sidemenu {
  a {
    &.active,
    &.router-link-active {
      @apply font-bold text-primary;
    }
  }
}
</style>