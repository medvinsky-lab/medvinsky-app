<template>
  <main-card class="flex flex-col">
    <div class="w-full flex flex-row space-x-2">
      <div class="w-1/3 h-16 relative">
        <drop-down
          label="Dataset"
          :selection="activeDataset"
          :items="datasets"
          @dispatch="setActiveDataset"
        ></drop-down>
      </div>
      <div class="w-1/3 h-16 relative">
        <drop-down
          label="Ligand"
          default-description="Select ligand region"
          :selection="activeLigand"
          :items="ligands"
          @dispatch="setActiveLigand"
          @hover="setHoveredLigand"
        ></drop-down>
      </div>
      <div class="w-1/3 h-16 relative">
        <drop-down
          label="Receptor"
          default-description="Select receptor region"
          :selection="activeReceptor"
          :items="receptors"
          @dispatch="setActiveReceptor"
          @hover="setHoveredReceptor"
        ></drop-down>
      </div>
    </div>
    <div class="flex flex-grow">
      <cs-13
        v-if="activeDataset === 'cs13'"
        :hovered-ligand="hoveredLigand"
        :hovered-receptor="hoveredReceptor"
      ></cs-13>
      <umap v-if="activeDataset === 'umap'"></umap>
    </div>
  </main-card>
</template>

<script>
export default {
  data: () => ({
    datasets: [],
    ligands: [],
    receptors: [],
    hoveredLigand: null,
    hoveredReceptor: null,
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
      this.$store.dispatch('setActiveLigand', null);
      this.$store.dispatch('setActiveReceptor', null);
    },
    setActiveLigand(item) {
      this.$store.dispatch('setActiveLigand', item.id);
    },
    setActiveReceptor(item) {
      this.$store.dispatch('setActiveReceptor', item.id);
    },
    setHoveredLigand(item) {
      this.hoveredLigand = item;
    },
    setHoveredReceptor(item) {
      this.hoveredReceptor = item;
    },
  },
  async fetch() {
    this.datasets = await this.$content('datasets').fetch();
    this.ligands = await this.$content('heatmaps')
      .where({
        slug: this.activeDataset,
      })
      .only(['axis'])
      .fetch()
      .then((value) => {
        return value[0].axis;
      });
    this.receptors = await this.$content('heatmaps')
      .where({
        slug: this.activeDataset,
      })
      .only(['axis'])
      .fetch()
      .then((value) => {
        return value[0].axis;
      });
  },
  watch: {
    activeDataset: '$fetch',
  },
};
</script>
