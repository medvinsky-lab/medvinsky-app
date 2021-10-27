<template>
    <div class="grid grid-cols-3 gap-2 mb-2 h-16">
        <drop-down label="Dataset" type="dataset" :items="datasets"></drop-down>
        <drop-down
            label="Ligand"
            type="ligand"
            :items="ligandRegions"
        ></drop-down>
        <drop-down
            label="Receptor"
            type="receptor"
            :items="receptorRegions"
        ></drop-down>
    </div>
</template>

<script>
export default {
    data() {
        return {
            datasets: [
                { id: 'cs13', name: 'LCM-Seq CS13' },
                { id: 'cs14', name: 'LCM-Seq CS14' },
                { id: 'cs15', name: 'LCM-Seq CS15' },
                { id: 'umap', name: 'UMAP CS13-CS15' },
            ],
            ligandRegions: [
                { id: 'do', name: 'Dorsal outer' },
                { id: 'di', name: 'Dorsal inner' },
                { id: 'vo', name: 'Ventral outer' },
                { id: 'vi', name: 'Ventral inner' },
                { id: 'geo', name: 'Gonadal epithelium outer' },
                { id: 'gei', name: 'Gonadal epithelium inner' },
            ],
            receptorRegions: [
                { id: 'do', name: 'Dorsal outer' },
                { id: 'di', name: 'Dorsal inner' },
                { id: 'vo', name: 'Ventral outer' },
                { id: 'vi', name: 'Ventral inner' },
                { id: 'geo', name: 'Gonadal epithelium outer' },
                { id: 'gei', name: 'Gonadal epithelium inner' },
            ],
        };
    },
};
</script>
