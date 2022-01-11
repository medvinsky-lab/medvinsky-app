<template>
  <highchart
    class="flex-grow rounded"
    :options="chartOptions"
    :modules="['heatmap']"
  />
</template>

<script>
export default {
  props: ['data'],
  computed: {
    axis() {
      const axisLabels = [];
      this.data.axis.forEach(function (e, i) {
        axisLabels[i] = e.label;
      });
      return axisLabels;
    },
    chartOptions() {
      return {
        chart: {
          type: 'heatmap',
          margin: 100,
          animation: false,
        },
        title: {
          text: null,
        },
        xAxis: {
          categories: this.axis,
          gridLineWidth: 0,
          lineWidth: 0,
          labels: {
            rotation: 0,
            enabled: true,
            align: 'center',
            formatter() {
              return this.value.replace(/\s/g, '</br>');
            },
          },
        },
        yAxis: {
          categories: this.axis,
          gridLineWidth: 0,
          title: null,
          reversed: true,
          labels: {
            enabled: true,
            formatter() {
              return this.value.replace(/\s/g, '</br>');
            },
          },
        },
        colorAxis: {
          stops: [
            [0, '#fef0d9'],
            [0.2, '#fdd49e'],
            [0.4, '#fdbb84'],
            [0.6, '#fc8d59'],
            [0.8, '#e34a33'],
            [1, '#b30000'],
          ],
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
          y: 85,
          x: -20,
          enabled: true,
        },
        series: [
          {
            animation: false,
            type: 'heatmap',
            borderWidth: 3,
            borderColor: 'white',
            borderRadius: 10,
            data: this.data.data,
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
  },
};
</script>
