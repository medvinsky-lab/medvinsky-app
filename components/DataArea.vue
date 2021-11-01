<template>
    <main-card class="grid grid-cols-2 gap-2">
        <div class="col-span-2 grid grid-cols-3 gap-2">
            <drop-down
                class="h-16"
                label="Dataset"
                text="Select dataset"
                :items="datasets"
            >
            </drop-down>
            <drop-down
                class="h-16"
                label="Ligand"
                text="Select ligand population"
                :items="ligands"
            ></drop-down>
            <drop-down
                class="h-16"
                label="Receptor"
                text="Select receptor population"
                :items="receptors"
            ></drop-down>
        </div>
        <div class="col-span-2">
            <cs-13 v-if="activeDataset === 'LCM-Seq CS13'"></cs-13>
        </div>
    </main-card>
</template>

<script>
export default {
    data() {
        return {
            datasets: [
                { id: 'cs13', label: 'LCM-Seq CS13' },
                { id: 'cs14', label: 'LCM-Seq CS14' },
                { id: 'cs15', label: 'LCM-Seq CS15' },
                { id: 'umap', label: 'UMAP CS13-CS15' },
            ],
            ligands: [
                { id: 'do', label: 'Dorsal outer' },
                { id: 'di', label: 'Dorsal inner' },
                { id: 'vo', label: 'Ventral outer' },
                { id: 'vi', label: 'Ventral inner' },
                { id: 'geo', label: 'Gonadal epithelium outer' },
                { id: 'gei', label: 'Gonadal epithelium inner' },
            ],
            receptors: [
                { id: 'do', label: 'Dorsal outer' },
                { id: 'di', label: 'Dorsal inner' },
                { id: 'vo', label: 'Ventral outer' },
                { id: 'vi', label: 'Ventral inner' },
                { id: 'geo', label: 'Gonadal epithelium outer' },
                { id: 'gei', label: 'Gonadal epithelium inner' },
            ],
        };
    },
    computed: {
        activeDataset() {
            return this.$store.getters.activeDataset;
        },
    },
};
</script>
