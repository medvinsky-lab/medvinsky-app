<template>
  <div id="cy" ref="cy" class="flex-grow bg-white rounded"></div>
</template>

<script>
import cytoscape from 'cytoscape';
import d3Force from 'cytoscape-d3-force';

cytoscape.use(d3Force);

export default {
  props: {
    plotData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    initPlot() {
      // Initiate interaction plot
      const cy = cytoscape({
        container: this.$refs.cy,
        style: [
          {
            selector: '.show',
            style: {
              label: 'data(score)',
              'text-background-opacity': 1,
              'text-background-shape': 'round-rectangle',
              'text-background-color': '#f2f6fa',
              'text-background-padding': 5,
              'font-weight': 500,
            },
          },
          {
            selector: 'edge',
            style: {
              width: 'mapData(score, 0, 1, 0.2, 20)',
              'line-opacity': 'mapData(score, 0, 1, 0.5, 1)',
              'target-arrow-shape': 'triangle',
              'curve-style': 'bezier',
            },
          },
          {
            selector: 'node',
            style: {
              label: 'data(id)',
              width: 'mapData(dcn, 0, 1, 10, 50)',
              height: 'mapData(dcn, 0, 1, 10, 50)',
            },
          },
        ],
      });

      // Add data
      this.plotData.forEach((d) => {
        cy.add([
          {
            group: 'nodes',
            data: { id: d.ligand, type: 'ligand' },
            style: {
              shape: 'round-triangle',
            },
          },
          {
            group: 'nodes',
            data: { id: d.receptor, type: 'receptor' },
            style: {
              shape: 'circle',
            },
          },
          {
            group: 'edges',
            data: {
              id: d.ligand + d.receptor,
              source: d.ligand,
              target: d.receptor,
              score: Math.round(parseFloat(d.score) * 100) / 100,
            },
          },
        ]);
      });

      // Color top N interactions
      const n = 15;
      cy.edges()
        .sort((a, b) => {
          return b - a;
        })
        .slice(0, n)
        .style({
          'line-color': 'red',
          'target-arrow-color': 'red',
        });

      // Click to show label
      cy.on('click', 'edge', (event) => {
        event.target.toggleClass('show');
      });

      // Calculate node degrees and add as data
      const dcn = cy.elements().degreeCentralityNormalized();
      cy.nodes().forEach((n) => {
        n.data({
          dcn: dcn.degree(n),
        });
      });

      // Run layout
      cy.layout({
        name: 'd3-force',
        fit: false,
        infinite: false,
        linkId: function id(d) {
          return d.id;
        },
        linkDistance: 40,
        manyBodyStrength: -300,
      }).run();
    },
  },
  watch: {
    plotData() {
      this.initPlot();
    },
  },
  mounted() {
    this.initPlot();
  },
};
</script>
