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
    <div class="bg-white rounded flex flex-grow">
      <heatmap v-if="activePlot === 'heatmap'" :plot-data="plotData"></heatmap>
      <interaction-plot v-if="activePlot === 'interaction'"></interaction-plot>
    </div>
  </main-card>
</template>

<script>
export default {
  data: () => ({
    plotData: [],
  }),
  async fetch() {
    if (this.activeDataset === 'LCM-Seq CS13') {
      const content = await this.$content('heatmapCS13').fetch();
      this.plotData = content.body;
    } else if (this.activeDataset === 'LCM-Seq CS14') {
      const content = await this.$content('heatmapCS14').fetch();
      this.plotData = content.body;
    } else if (this.activeDataset === 'LCM-Seq CS15') {
      const content = await this.$content('heatmapCS15').fetch();
      this.plotData = content.body;
    }
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
