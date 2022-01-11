<template>
  <highchart :options="chartOptions" />
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
  computed: {
    chartOptions() {
      return {
        chart: {
          type: 'scatter',
          zoomType: 'xy',
        },
        title: {
          text: this.title,
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
        plotOptions: {
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
          series: {
            events: {
              click(event) {
                console.log(this.name);
              },
              mouseOver(event) {
                console.log(this.name);
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
