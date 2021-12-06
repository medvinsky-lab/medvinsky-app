<template>
  <div
    id="chart"
    ref="chart"
    class="m-auto w-full overflow-auto container"
  ></div>
</template>

<script>
import * as d3 from 'd3';

export default {
  mounted() {
    const svg = d3
      .select('#chart')
      .append('svg')
      .attr('height', '620')
      .attr('width', '100%');

    let yStart = 10;
    const boxWidth = 150;
    const boxHeight = 25;

    for (let i = 0; i < 20; i++) {
      svg
        .append('rect')
        .attr('x', 20)
        .attr('y', yStart)
        .attr('width', boxWidth)
        .attr('height', boxHeight)
        .attr('rx', 5)
        .attr('ry', 5);

      yStart = yStart + boxHeight + 5;
    }
  },
  data: () => ({
    chartData: [40, 60, 80, 100, 70, 120, 100, 60, 70, 150, 120, 140],
    barWidth: 40,
    barOffset: 10,
  }),
};
</script>

<style scoped>
.container {
  height: 500px;
}
</style>
