<template>
  <div>
    <highchart :options="chartOptions" @chartLoaded="chartLoaded" />
  </div>
</template>

<script>
export default {
  props: {
    plotData: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      default: 'Title',
    },
    xAxisTitle: {
      type: String,
      default: 'X',
    },
    yAxisTitle: {
      type: String,
      default: 'Y',
    },
  },
  data() {
    return {
      opacity: 1,
    };
  },
  methods: {
    async chartLoaded(chart) {
      // Need to wait here for DOM updates to take place...
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('Done waiting');
          resolve();
        }, 1000);
      });

      const dropDownLigand =
        this.$parent.$parent.$parent.$refs['dropdown-ligand'].$refs.dropdown;
      const dropDownReceptor =
        this.$parent.$parent.$parent.$refs['dropdown-receptor'].$refs.dropdown;
      const dropDownItems =
        this.$parent.$parent.$parent.$refs['dropdown-ligand'].$children;

      dropDownLigand.addEventListener('click', () => {
        chart.series.forEach((s) => {
          s.setState('inactive');
        });
      });
      dropDownLigand.addEventListener('mouseleave', () => {
        chart.series.forEach((s) => {
          s.setState('');
        });
      });
      dropDownReceptor.addEventListener('click', () => {
        chart.series.forEach((s) => {
          s.setState('inactive');
        });
      });
      dropDownReceptor.addEventListener('mouseleave', () => {
        chart.series.forEach((s) => {
          s.setState('');
        });
      });
      Array.from(dropDownItems).forEach((e) => {
        const seriesId = e.item.id;
        const series = chart.get(seriesId);
        console.log(series);
        e.$el.addEventListener('mouseenter', () => {
          series.setState('hover');
        });
        // e.$el.addEventListener('mouseleave', () => {
        //   series.setState('');
        // });
      });
    },
  },
  computed: {
    chartOptions() {
      // const ctx = this;
      return {
        chart: {
          type: 'scatter',
          zoomType: 'xy',
        },
        xAxis: {
          title: {
            enabled: true,
            text: this.xAxisTitle,
          },
          lineWidth: 0,
          tickWidth: 0,
          labels: {
            enabled: false,
          },
        },
        yAxis: {
          title: {
            enabled: true,
            text: this.yAxisTitle,
          },
          gridLineWidth: 0,
          labels: {
            enabled: false,
          },
        },
        title: {
          text: this.title,
        },
        plotOptions: {
          series: {
            states: {
              inactive: {
                enabled: true,
              },
            },
          },
          scatter: {
            marker: {
              symbol: 'circle',
              radius: 2,
              states: {
                hover: {
                  enabled: true,
                  lineColor: 'rgb(100,100,100)',
                },
              },
            },
          },
        },
        series: this.plotData,
        credits: {
          enabled: false,
        },
        tooltip: {
          enabled: true,
          formatter() {
            return 'Cluster <b>' + this.series.name + '</b>';
          },
        },
      };
    },
  },
};
</script>
