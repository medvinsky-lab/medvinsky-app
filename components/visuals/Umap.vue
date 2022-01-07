<template>
  <div class="flex-grow">
    <scatter-plot
      class="mb-4 rounded"
      :plot-data="umap1Data"
      title="Hematoendothelial"
      x-axis-title="UMAP1"
      y-axis-title="UMAP2"
    />
    <scatter-plot
      class="rounded"
      :plot-data="umap2Data"
      title="Mesenchymal/epithelial"
      x-axis-title="UMAP1"
      y-axis-title="UMAP2"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    umap1Data: null,
    umap2Data: null,
  }),
  async fetch() {
    const umap1Data = await this.$content('data/umap')
      .where({ slug: 'umap_he1' })
      .fetch();
    const umap2Data = await this.$content('data/umap')
      .where({ slug: 'umap_niche2' })
      .fetch();
    this.umap1Data = umap1Data;
    this.umap2Data = umap2Data;
  },
};
</script>
