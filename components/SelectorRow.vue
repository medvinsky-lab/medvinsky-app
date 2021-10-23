<template>
    <div class="grid grid-cols-3 gap-2 mb-2 h-16">
        <drop-down
            label="Dataset"
            description="Select dataset"
            :items="datasets"
        ></drop-down>
        <drop-down
            label="Ligand"
            description="Select ligand population"
        ></drop-down>
        <drop-down
            label="Receptor"
            description="Select receptor population"
        ></drop-down>
    </div>
</template>

<script>
export default {
    data() {
        return {
            datasets: [
                { type: 'dataset', id: 'cs13', name: 'LCM-Seq CS13' },
                { type: 'dataset', id: 'cs14', name: 'LCM-Seq CS14' },
                { type: 'dataset', id: 'cs15', name: 'LCM-Seq CS15' },
                { type: 'dataset', id: 'umap', name: 'UMAP CS13-CS15' },
            ],
        };
    },
};
</script>
