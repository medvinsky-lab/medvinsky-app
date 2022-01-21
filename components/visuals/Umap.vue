<template>
  <div class="flex-grow">
    <scatter-plot
      class="mb-4 rounded"
      title="Hematoendothelial"
      x-axis-title="UMAP1"
      y-axis-title="UMAP2"
      :plot-data="umap1Data"
      :selections="[activeLigand, activeReceptor]"
    />
    <scatter-plot
      class="rounded"
      title="Mesenchymal/epithelial"
      x-axis-title="UMAP1"
      y-axis-title="UMAP2"
      :plot-data="umap2Data"
      :selections="[activeLigand, activeReceptor]"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    umap1Data: [],
    umap2Data: [],
  }),
  props: {
    activeLigand: { type: String },
    activeReceptor: { type: String },
    hoveredLigand: { type: String },
    hoveredReceptor: { type: String },
  },
  async fetch() {
    const umap1Data = await this.$content('umap')
      .where({ slug: 'umap_he1' })
      .fetch()
      .then((res) => {
        console.log('Fetched umap1');
        return res;
      });
    const umap2Data = await this.$content('umap')
      .where({ slug: 'umap_niche2' })
      .fetch()
      .then((res) => {
        console.log('Fetched umap2');
        return res;
      });
    this.umap1Data = umap1Data;
    this.umap2Data = umap2Data;
  },
};
</script>
