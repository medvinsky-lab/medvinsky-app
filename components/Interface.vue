<template>
    <div class="grid grid-cols-8 gap-2">
        <introduction class="col-span-4"></introduction>
        <tutorial class="col-span-4"></tutorial>
        <data-area class="col-span-4"></data-area>
        <plot-area class="col-span-4"></plot-area>
        <footer class="col-span-8"></footer>
    </div>
</template>

<script>
export default {
    computed: {
        activeDataset() {
            return this.$store.getters.activeDataset;
        },
    },
};
</script>

<style>
body {
    @apply mx-12 my-4;
}
h1 {
    @apply text-3xl font-bold;
}
</style>
