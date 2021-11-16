<template>
  <div>
    <main-card class="h-full">
      <div class="h-full w-full bg-white flex p-2">
        <highchart
          class="w-full h-4/5 m-auto"
          :options="chartOptions"
          :modules="['heatmap']"
        />
      </div>
    </main-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      series: [],
      xAxis: [],
      yAxis: [],
    };
  },
  computed: {
    chartOptions() {
      return {
        chart: {
          type: 'heatmap',
          marginTop: 40,
        },
        title: {
          text: null,
        },
        xAxis: {
          categories: this.xAxis,
          gridLineWidth: 0,
          lineWidth: 0,
        },
        yAxis: {
          categories: this.yAxis,
          gridLineWidth: 0,
          title: null,
          reversed: true,
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
  },
  async created() {
    const data = await this.$content('data').fetch();
    const axisKeys = Object.keys(data.body[0]);

    // Assumes same rownames and colnames in passed CSV file
    this.xAxis = this.yAxis = axisKeys;

    data.body.forEach((item, row) => {
      Object.entries(item).forEach(([key, val], col) => {
        const x = parseFloat(col);
        const y = parseFloat(row);
        const value = parseFloat(val);
        this.series.push({ x, y, value });
      });
    });
  },
};
</script>
