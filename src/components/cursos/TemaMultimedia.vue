<template>
  <div class="tema-multimedia">
    <iframe
      width="100%"
      height="600"
      src="https://www.youtube.com/embed/ub3snw1_T-o"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.tema-multimedia {
  iframe {
    height: 300px;
    @media screen and (min-width: 640px) {
      height: 600px;
    }
  }
}
</style>