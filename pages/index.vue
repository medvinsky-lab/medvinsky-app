<template>
  <div class="grid grid-cols-8 gap-4">
    <introduction class="col-start-2 col-span-3"></introduction>
    <tutorial class="col-start-5 col-span-3"></tutorial>
    <data-area class="col-start-2 col-span-3"></data-area>
    <plot-area class="col-start-5 col-span-3"></plot-area>
    <footer-area class="col-start-2 col-span-6"></footer-area>
  </div>
</template>

<style>
body {
  @apply my-8;
}
h1 {
  @apply text-2xl font-bold;
}
</style>

<script>
export default {};
</script>
