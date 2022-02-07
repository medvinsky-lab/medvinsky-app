<template>
  <div class="flex">
    <highchart
      class="flex-grow rounded"
      :options="chartOptions"
      :modules="['heatmap']"
      @chartLoaded="chartLoaded"
    />
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
    },
    activeLigand: {
      type: String,
    },
    activeReceptor: {
      type: String,
    },
  },
  methods: {
    async chartLoaded(chart) {
      let selections = [this.activeLigand, this.activeReceptor];
      let ligandIdx = this.axisIds.indexOf(this.activeLigand);
      let receptorIdx = this.axisIds.indexOf(this.activeReceptor);
      const dropdowns = this.$parent.$parent.$parent.$refs['data-area'].$refs;

      if (!selections.includes(null)) {
        chart.series[0].points.forEach((p) => {
          const xLabel = p.x;
          const yLabel = p.y;
          p.setState('');
          if (yLabel === ligandIdx) {
            if (xLabel === receptorIdx) {
              p.setState('select');
            }
          }
        });
      }
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 500);
      });
      chart.reflow();
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 500);
      });

      Object.values(dropdowns).forEach((d) => {
        d.$children.forEach((c) => {
          const dropdownItem = c;
          dropdownItem.$el.addEventListener('click', () => {
            selections = [this.activeLigand, this.activeReceptor];
            ligandIdx = this.axisIds.indexOf(this.activeLigand);
            receptorIdx = this.axisIds.indexOf(this.activeReceptor);
            if (!selections.includes(null)) {
              chart.series[0].points.forEach((p) => {
                const xLabel = p.x;
                const yLabel = p.y;
                p.setState('');
                if (yLabel === ligandIdx) {
                  if (xLabel === receptorIdx) {
                    p.select();
                    p.setState('select');
                  }
                }
              });
            }
          });
        });
      });
    },
  },
  computed: {
    axis() {
      const axisLabels = [];
      this.data.axis.forEach(function (e, i) {
        axisLabels[i] = e.label;
      });
      return axisLabels;
    },
    axisIds() {
      const axisIds = [];
      this.data.axis.forEach(function (e, i) {
        axisIds[i] = e.id;
      });
      return axisIds;
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
            allowPointSelect: false,
            animation: false,
            type: 'heatmap',
            data: this.data.data,
            dataLabels: {
              enabled: true,
              color: '#000000',
            },
            borderRadius: 10,
            borderColor: 'white',
            colsize: 0.95,
            rowsize: 0.95,
            marker: {
              states: {
                select: {
                  enabled: true,
                  fillColor: undefined,
                  lineWidth: 3,
                  lineColor: 'red',
                },
              },
            },
          },
        ],
        plotOptions: {
          series: {
            states: {
              hover: {
                enabled: false,
              },
            },
          },
        },
        credits: {
          enabled: false,
        },
      };
    },
  },
};
</script>
