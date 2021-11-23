<template>
  <div>
    <main-card class="h-full">
      <heatmap v-if="activePlot === 'heatmap'" :plot-data="plotData"></heatmap>
    </main-card>
  </div>
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