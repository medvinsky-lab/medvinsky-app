<template>
  <main-card class="flex flex-col">
    <div class="mb-2 flex flex-row space-x-2 h-14 flex-wrap content-end">
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
    <heatmap
      v-if="activePlot === 'heatmap'"
      :key="activeDataset"
      :data="data"
      :active-ligand="activeLigand"
      :active-receptor="activeReceptor"
    ></heatmap>
    <interaction-plot v-if="activePlot === 'interaction'"></interaction-plot>
  </main-card>
</template>

<script>
export default {
  data: () => ({
    data: [],
  }),
  async fetch() {
    const data = await this.$content('heatmaps')
      .where({ slug: this.activeDataset })
      .fetch()
      .then((res) => {
        return res[0];
      });
    this.data = data;
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
  },
  watch: {
    activeDataset: '$fetch',
  },
  methods: {
    setActivePlot(value) {
      this.$store.dispatch('setActivePlot', value);
    },
  },
};
</script>
