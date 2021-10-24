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
            :items="ligandRegions"
        ></drop-down>
        <drop-down
            label="Receptor"
            description="Select receptor population"
            :items="receptorRegions"
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
            ligandRegions: [
                { type: 'ligand', id: 'do', name: 'Dorsal outer' },
                { type: 'ligand', id: 'di', name: 'Dorsal inner' },
                { type: 'ligand', id: 'vo', name: 'Ventral outer' },
                { type: 'ligand', id: 'vi', name: 'Ventral inner' },
                { type: 'ligand', id: 'geo', name: 'Gonadal epithelium outer' },
                { type: 'ligand', id: 'gei', name: 'Gonadal epithelium inner' },
            ],
            receptorRegions: [
                { type: 'receptor', id: 'do', name: 'Dorsal outer' },
                { type: 'receptor', id: 'di', name: 'Dorsal inner' },
                { type: 'receptor', id: 'vo', name: 'Ventral outer' },
                { type: 'receptor', id: 'vi', name: 'Ventral inner' },
                {
                    type: 'receptor',
                    id: 'geo',
                    name: 'Gonadal epithelium outer',
                },
                {
                    type: 'receptor',
                    id: 'gei',
                    name: 'Gonadal epithelium inner',
                },
            ],
        };
    },
};
</script>
