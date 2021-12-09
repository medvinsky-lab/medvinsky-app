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

    svg.attr('viewBox', `0 0 ${svgWidth} ${svgHeight}`);

    this.createRect(
      svg,
      this.xStart,
      this.yStart,
      this.rectWidth,
      this.rectHeight
    );
    this.createRect(
      svg,
      svgWidth - this.rectWidth - this.xStart,
      this.yStart,
      this.rectWidth,
      this.rectHeight
    );
    this.createLine(
      svg,
      this.xStart + this.rectWidth + this.rectMargin,
      this.yStart + this.rectHeight / 2,
      svgWidth - this.xStart - this.rectWidth - this.rectMargin,
      this.yStart + this.rectHeight / 2
    );
  },
  data() {
    return {
      xStart: 65,
      yStart: 40,
      rectWidth: 150,
      rectHeight: 30,
      rectMargin: 5,
    };
  },
  methods: {
    createRect(svg, x, y, w, h) {
      svg
        .append('rect')
        .attr('class', 'rect')
        .attr('x', x)
        .attr('y', y)
        .attr('width', w)
        .attr('height', h)
        .attr('rx', 5)
        .attr('ry', 5);
    },
    createLine(svg, x1, y1, x2, y2) {
      svg
        .append('line')
        .attr('class', 'line')
        .attr('x1', x1)
        .attr('y1', y1)
        .attr('x2', x2)
        .attr('y2', y2);
    },
  },
};
</script>

<style>
.rect {
  fill: #f2f6fa;
}
.line {
  stroke: #f2f6fa;
  stroke-width: 1.5;
  stroke-dasharray: 4;
}
</style>
