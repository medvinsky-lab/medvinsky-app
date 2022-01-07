<template>
  <main-card class="flex flex-col">
    <div class="mb-2 flex flex-row space-x-2 h-14 flex-wrap content-end">
      <standard-button
        label="Heatmap"
        :active="activePlot === 'heatmap'"
        @click="setPlot('heatmap')"
      ></standard-button>
      <standard-button
        label="Interactions"
        :active="activePlot === 'interaction'"
        @click="setPlot('interaction')"
      ></standard-button>
    </div>
    <heatmap
      v-if="activePlot === 'heatmap'"
      :key="activeDataset"
      :plot-data="plotData"
    ></heatmap>
    <interaction-plot v-if="activePlot === 'interaction'"></interaction-plot>
  </main-card>
</template>

<script>
export default {
  data: () => ({
    plotData: [],
  }),
  async fetch() {
    let slug = '';
    if (this.activeDataset === 'LCM-Seq CS13') {
      slug = 'cs13';
    } else if (this.activeDataset === 'LCM-Seq CS14') {
      slug = 'cs14';
    } else if (this.activeDataset === 'LCM-Seq CS15') {
      slug = 'cs15';
    } else if (this.activeDataset === 'UMAP CS13-CS15') {
      slug = 'umap';
    }
    const content = await this.$content('data/heatmap').where({ slug }).fetch();
    this.plotData = content[0].body;
  },
  computed: {
    activeDataset() {
      return this.$store.getters.activeDataset;
    },
    activePlot() {
      return this.$store.getters.activePlot;
    },
  },
  watch: {
    activeDataset: '$fetch',
  },
  methods: {
    setPlot(value) {
      this.$store.dispatch('setPlot', value);
    },
  },
};
</script>
