<template>
  <main-card class="flex flex-col">
    <div class="flex flex-row space-x-2 h-16 w-full">
      <drop-down
        label="Dataset"
        description="Select dataset"
        :items="datasets"
        @dispatch="reset"
      ></drop-down>
      <drop-down
        label="Ligand"
        description="Select ligand region"
        :items="ligands"
        @hover="propagateLigand"
      ></drop-down>
      <drop-down
        label="Receptor"
        description="Select receptor region"
        :items="receptors"
        @hover="propagateReceptor"
      ></drop-down>
    </div>
    <div class="flex flex-grow">
      <cs-13
        v-if="activeDataset === 'LCM-Seq CS13'"
        :ligand="ligand"
        :receptor="receptor"
      ></cs-13>
      <umap v-if="activeDataset === 'UMAP CS13-CS15'"></umap>
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
      ligand: null,
      receptor: null,
    };
  },
  computed: {
    activeDataset() {
      return this.$store.getters.activeDataset;
    },
  },
  methods: {
    reset() {
      this.ligand = null;
      this.receptor = null;
    },
    propagateLigand(value) {
      this.ligand = value;
    },
    propagateReceptor(value) {
      this.receptor = value;
    },
  },
};
</script>
