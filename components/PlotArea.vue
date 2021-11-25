<template>
  <main-card class="flex flex-col">
    <div class="mb-2 flex flex-row space-x-2">
      <standard-button label="Heatmap"></standard-button>
      <standard-button label="Interactions"></standard-button>
    </div>
    <heatmap v-if="activePlot === 'heatmap'" :plot-data="plotData"></heatmap>
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
};
</script>