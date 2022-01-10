<template>
  <main-card class="flex flex-col">
    <div class="w-full flex flex-row space-x-2">
      <div class="w-1/3 h-16 relative">
        <drop-down
          label="Dataset"
          :selected="activeDataset"
          :items="datasets"
          @dispatch="setActiveDataset"
        ></drop-down>
      </div>
      <div class="w-1/3 h-16 relative">
        <drop-down
          label="Ligand"
          default-description="Select ligand region"
          :items="ligands"
        ></drop-down>
      </div>
      <div class="w-1/3 h-16 relative">
        <drop-down
          label="Receptor"
          default-description="Select receptor region"
          :items="receptors"
        ></drop-down>
      </div>
    </div>
    <div class="flex flex-grow">
      <cs-13
        v-if="activeDataset === 'cs13'"
        :ligand="activeLigand"
        :receptor="activeReceptor"
      ></cs-13>
      <umap v-if="activeDataset === 'umap'"></umap>
    </div>
  </main-card>
</template>

<script>
export default {
  data: () => ({
    datasets: [],
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
  }),
  computed: {
    activeDataset() {
      return this.$store.getters.activeDataset;
    },
    activeLigand() {
      return this.$store.getters.activeLigand;
    },
    activeReceptor() {
      return this.$store.getters.activeReceptor;
    },
  },
  methods: {
    setActiveDataset(item) {
      this.$store.dispatch('setActiveDataset', item.id);
    },
    setActiveLigand(item) {
      this.$store.dispatch('setActiveLigand', item.id);
    },
    setActiveReceptor(item) {
      this.$store.dispatch('setActiveReceptor', item.id);
    },
  },
  async fetch() {
    this.datasets = await this.$content('datasets').fetch();
  },
};
</script>
