<template>
    <div class="grid grid-cols-3 gap-2 mb-1 h-16">
        <drop-down
            label="Dataset"
            desc="LCM-Seq CS13"
            type="dataset"
            :items="datasets" 
            class="z-40"
        ></drop-down>
        <drop-down
            label="Ligand"
            desc="Select ligand"
            type="ligand"
            :items="ligandRegions"
            class="z-40"
        ></drop-down>
        <drop-down
            label="Receptor"
            desc="Select receptor"
            type="receptor"
            :items="receptorRegions"
            class="z-40"
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
