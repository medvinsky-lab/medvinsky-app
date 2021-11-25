<template>
  <highchart
    class="flex-grow rounded"
    :options="chartOptions"
    :modules="['heatmap']"
  />
</template>

<script>
export default {
  props: ['plotData'],
  computed: {
    chartOptions() {
      return {
        chart: {
          type: 'heatmap',
          margin: 70,
        },
        title: {
          text: null,
        },
        xAxis: {
          categories: this.xAxis,
          gridLineWidth: 0,
          lineWidth: 0,
          labels: {
            rotation: 0,
            align: 'center',
            enabled: false,
          },
        },
        yAxis: {
          categories: this.yAxis,
          gridLineWidth: 0,
          title: null,
          reversed: true,
          labels: {
            enabled: false,
          },
        },
        colorAxis: {
          minColor: '#fff7bc',
          maxColor: '#d95f0e',
        },
        tooltip: {
          formatter() {
            const yLabel = this.series.yAxis.categories[this.point.y];
            const xLabel = this.series.xAxis.categories[this.point.x];
            return (
              `x: ${xLabel}<br>` +
              `y: ${yLabel}<br>` +
              `val: ${this.point.value}`
            );
          },
        },
        legend: {
          align: 'right',
          layout: 'vertical',
          margin: 0,
          verticalAlign: 'top',
          y: 25,
          enabled: false,
        },
        series: [
          {
            type: 'heatmap',
            borderWidth: 2,
            borderColor: 'white',
            data: this.series,
            dataLabels: {
              enabled: true,
              color: '#000000',
            },
          },
        ],
        credits: {
          enabled: false,
        },
      };
    },
    xAxis() {
      return Object.keys(this.plotData[0]);
    },
    yAxis() {
      return Object.keys(this.plotData[0]);
    },
    series() {
      const series = [];
      this.plotData.forEach((item, row) => {
        Object.entries(item).forEach(([key, val], col) => {
          const x = parseFloat(col);
          const y = parseFloat(row);
          const value = parseFloat(val);
          series.push({ x, y, value });
        });
      });
      return series;
    },
  },
};
</script>
