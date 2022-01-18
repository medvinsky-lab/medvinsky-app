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
    selections: {
      type: Array,
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
      const dropDownItemsLigand =
        this.$parent.$parent.$parent.$refs['dropdown-ligand'].$children;
      const dropDownItemsReceptor =
        this.$parent.$parent.$parent.$refs['dropdown-receptor'].$children;

      [dropDownLigand, dropDownReceptor].forEach((e) => {
        e.addEventListener('click', () => {
          chart.series.forEach((s) => {
            s.setState('inactive');
          });
        });
        e.addEventListener('mouseleave', () => {
          chart.series.forEach((s) => {
            s.setState('normal');
          });
        });
      });

      const ids = [];
      this.plotData.forEach((e, i) => {
        ids[i] = e.id;
      });

      [dropDownItemsLigand, dropDownItemsReceptor].forEach((elements) => {
        Array.from(elements).forEach((e) => {
          const seriesId = e.item.id;
          const series = chart.get(seriesId);
          if (ids.includes(seriesId)) {
            e.$el.addEventListener('mouseenter', () => {
              series.setState('hover');
            });
            e.$el.addEventListener('mouseleave', () => {
              series.setState('inactive');
            });
          }
          e.$el.addEventListener('click', () => {
            chart.series.forEach((s) => {
              if (this.selections.includes(s.options.id)) {
                s.points.forEach((p) => {
                  p.setState('select');
                });
              } else if (!this.selections.includes(s.options.id)) {
                s.points.forEach((p) => {
                  p.setState('normal');
                });
              }
            });
          });
        });
      });
      // dropDownItemsLigand.forEach((e) => {
      //   console.log(e.$el);
      // });
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
            allowPointSelect: false,
            states: {
              inactive: {
                enabled: true,
              },
              select: {
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
                  enabled: false,
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
