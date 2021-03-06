<template>
  <main-card>
    <div class="flex flex-row space-x-2 h-16">
      <div class="w-1/3 relative">
        <drop-down
          label="Dataset"
          :selection="activeDataset"
          :items="datasets"
          @dispatch="setActiveDataset"
        ></drop-down>
      </div>
      <div class="w-1/3 relative">
        <drop-down
          ref="dropdown-ligand"
          label="Ligand"
          default-description="Select ligand region"
          :selection="activeLigand"
          :items="ligands"
          @dispatch="setActiveLigand"
          @hover="setHoveredLigand"
        ></drop-down>
      </div>
      <div class="w-1/3 relative">
        <drop-down
          ref="dropdown-receptor"
          label="Receptor"
          default-description="Select receptor region"
          :selection="activeReceptor"
          :items="receptors"
          @dispatch="setActiveReceptor"
          @hover="setHoveredReceptor"
        ></drop-down>
      </div>
    </div>
    <div class="flex-grow mb-2">
      <cs-13
        v-if="activeDataset === 'cs13'"
        :hovered-ligand="hoveredLigand"
        :hovered-receptor="hoveredReceptor"
      ></cs-13>
      <cs-14
        v-else-if="activeDataset === 'cs14'"
        :hovered-ligand="hoveredLigand"
        :hovered-receptor="hoveredReceptor"
      ></cs-14>
      <cs-16
        v-else-if="activeDataset === 'cs16'"
        :hovered-ligand="hoveredLigand"
        :hovered-receptor="hoveredReceptor"
      ></cs-16>
      <umap
        v-else-if="activeDataset === 'umap'"
        :active-ligand="activeLigand"
        :active-receptor="activeReceptor"
        :hovered-ligand="hoveredLigand"
        :hovered-receptor="hoveredReceptor"
      ></umap>
    </div>
    <div class="bg-white p-4 rounded h-40">
      <p class="text-sm font-bold">Explanation</p>
      <p>
        Spatial transcriptome schematics show transverse sections of the human
        embryo including the neural tube, dorsal aorta and urogenital ridges.
        Sub-dissected domains around the dorsal aorta, where hematopoietic stem
        cells first emerge from the ventral vessel wall, are highlighted.
      </p>
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
