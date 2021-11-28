<template>
  <div class="flex-grow flex flex-col">
    <div id="chart" ref="chart" class="bg-white flex-grow rounded"></div>
  </div>
</template>

<script>
import * as d3 from 'd3';

export default {
  mounted() {
    const svg = d3
      .select('#chart')
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', `0 0 620 578`);

    svg
      .append('circle')
      .attr('cx', 50)
      .attr('cy', 50)
      .attr('r', 50)
      .attr('stroke-width', 1);
  },
  data: () => ({
    chartData: [40, 60, 80, 100, 70, 120, 100, 60, 70, 150, 120, 140],
    barWidth: 40,
    barOffset: 10,
  }),
};
</script>