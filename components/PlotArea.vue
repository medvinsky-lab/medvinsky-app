<template>
  <main-card class="flex flex-col space-y-2">
    <div
      class="flex flex-row space-x-2 h-16 flex-wrap content-end -mb-2 py-2.5"
    >
      <standard-button
        label="Heatmap"
        :active="activePlot === 'heatmap'"
        @click="setActivePlot('heatmap')"
      ></standard-button>
      <standard-button
        label="Interactions"
        :active="activePlot === 'interaction'"
        @click="setActivePlot('interaction')"
      ></standard-button>
    </div>
    <div class="flex flex-grow">
      <heatmap
        v-if="activePlot === 'heatmap'"
        :key="activeDataset"
        :data="heatmapData"
        :active-ligand="activeLigand"
        :active-receptor="activeReceptor"
      ></heatmap>
      <interaction-plot
        v-else-if="
          activePlot === 'interaction' && activeLigand && activeReceptor
        "
        :plot-data="interactionsData"
      ></interaction-plot>
      <div v-else class="flex flex-grow justify-center items-center">
        <div class="bg-white p-8 rounded">
          Please select ligand and receptor populations
        </div>
      </div>
    </div>
    <div class="bg-white p-4 rounded h-40">
      <p class="text-sm font-bold">Explanation</p>
      <p>Placeholder</p>
    </div>
    <!-- <div class="mb-2 flex flex-row space-x-2 h-14 flex-wrap content-end">
      <standard-button
        label="Heatmap"
        :active="activePlot === 'heatmap'"
        @click="setActivePlot('heatmap')"
      ></standard-button>
      <standard-button
        label="Interactions"
        :active="activePlot === 'interaction'"
        @click="setActivePlot('interaction')"
      ></standard-button>
    </div> -->
    <!-- <div class="flex flex-grow mb-2">
      <heatmap
        v-if="activePlot === 'heatmap'"
        :key="activeDataset"
        :data="heatmapData"
        :active-ligand="activeLigand"
        :active-receptor="activeReceptor"
      ></heatmap>
      <interaction-plot
        v-else-if="
          activePlot === 'interaction' && activeLigand && activeReceptor
        "
        :plot-data="interactionsData"
      ></interaction-plot>
      <div v-else class="flex flex-grow justify-center items-center">
        <div class="bg-white p-8 rounded">
          Please select ligand and receptor populations
        </div>
      </div>
    </div> -->
    <!-- <div class="flex-grow bg-white p-4 rounded">
      <p class="text-sm font-bold">Explanation</p>
      <p>
        Spatial transcriptome schematics show transverse sections of the human
        embryo including the neural tube, dorsal aorta and urogenital ridges.
        Sub-dissected domains around the dorsal aorta, where hematopoietic stem
        cells first emerge from the ventral vessel wall, are highlighted.
      </p>
    </div> -->
  </main-card>
</template>

<script>
export default {
  data() {
    return {
      heatmapData: [],
      interactionsData: [],
    };
  },
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
    activePlot() {
      return this.$store.getters.activePlot;
    },
    activeSelection() {
      return [this.activeLigand, this.activeReceptor];
    },
  },
  watch: {
    async activeDataset() {
      const heatmapData = await this.fetchHeatmapData();
      this.heatmapData = heatmapData;
    },
    activeSelection() {
      if (!this.activeSelection.includes(null)) {
        this.fetchInteractionsData();
      }
    },
  },
  async fetch() {
    const heatmapData = await this.fetchHeatmapData();
    this.heatmapData = heatmapData;
  },
  methods: {
    setActivePlot(value) {
      this.$store.dispatch('setActivePlot', value);
    },
    async fetchHeatmapData() {
      const heatmapData = await this.$content('heatmaps')
        .where({ slug: this.activeDataset })
        .fetch()
        .then((res) => {
          return res[0];
        });
      return heatmapData;
    },
    async fetchInteractionsData() {
      const slug = this.activeLigand + '_to_' + this.activeReceptor;
      const interactionsData = await this.$content(
        'interactions/' + this.activeDataset
      )
        .where({ slug })
        .fetch();
      this.interactionsData = interactionsData;
    },
  },
};
</script>
