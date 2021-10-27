<template>
    <div class="grid grid-cols-8 gap-2">
        <main-card class="col-span-4">
            <div class="h-24">
                <h1>
                    Receptor-ligand interactions across the human embryonic
                    hematopoietic stem cell niche
                </h1>
            </div>
            <p>
                Interactively explore receptor-ligand interactions as predicted
                by NATMI (link) across the human embryonic hematopoietic stem
                cell niche using spatial (Crosse et al., 2021; Crosse et al.,
                2020) and single cell (Crosse et al., 2021, Zeng et al., 2019)
                datasets. Toggle through the different datasets available
                including three spatial transcriptomes from Carnegie stages 13
                (LCM-Seq CS13), 14 (LCM-Seq CS14) and 16 (LCM-Seq CS16), and the
                hematoendothelial + niche single cell dataset.
            </p>
        </main-card>
        <main-card class="col-span-4">
            <div class="h-24">
                <h1>Tutorial</h1>
            </div>
            <ol class="list-decimal list-inside">
                <li>Select dataset of interest via the dropdown menu</li>
                <li>
                    Select a ligand population by clicking on a spatial domain
                    or cluster
                </li>
                <li>
                    Select a receptor population by clicking on a second spatial
                    domain or cluster
                </li>
                <li>
                    Toggle between the heatmap and interactions view using the
                    upper-left buttons
                </li>
                <li>
                    View the overall interaction strength between two
                    populations using the heatmap view
                </li>
                <li>
                    View the top 20 interactions for the selected populations
                    using the ligand-receptor view
                </li>
            </ol>
        </main-card>
        <main-card class="col-span-4">
            <selector-row></selector-row>
            <cs13 v-if="activeDataset === 'LCM-Seq CS13'"></cs13>
        </main-card>
        <main-card class="col-span-4 flex">
            <p class="m-auto">This will be the plot content</p>
        </main-card>
        <main-card class="col-span-8 flex">
            <h1 class="m-auto">This will be the footer content</h1>
        </main-card>
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
    margin: 1rem 6rem;
}
h1 {
    @apply text-3xl font-bold;
}
</style>
