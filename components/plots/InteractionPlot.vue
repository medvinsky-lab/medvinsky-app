<template>
  <div id="chart" class="bg-white flex items-center flex-grow rounded"></div>
</template>

<script>
import * as d3 from 'd3';

export default {
  mounted() {
    const svg = d3
      .select('#chart')
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%');

    const svgWidth = parseFloat(svg.style('width'));
    const svgHeight = parseFloat(svg.style('height'));

    svg
      .append('rect')
      .attr('x', 10)
      .attr('y', 10)
      .attr('width', svgWidth - 20)
      .attr('height', svgHeight - 20);
  },
  data: () => ({
    nRects: 20,
  }),
};
</script>
