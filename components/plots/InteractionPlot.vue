<template>
  <div id="cy" ref="cy" class="flex-grow bg-white rounded"></div>
</template>

<script>
import cytoscape from 'cytoscape';
import d3Force from 'cytoscape-d3-force';

export default {
  async mounted() {
    cytoscape.use(d3Force);

    // Retrieve data
    const data = await this.$content('test').fetch();

    // Initiate interaction plot
    const cy = cytoscape({
      container: this.$refs.cy,
      style: [
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
            'text-valign': 'top',
          },
        },
      ],
    });

    // Add data
    data.body.forEach((d, i) => {
      if (d.score >= 0.01) {
        cy.add([
          {
            group: 'nodes',
            data: { id: d.ligand, type: 'ligand' },
          },
          {
            group: 'nodes',
            data: { id: d.receptor, type: 'receptor' },
          },
          {
            group: 'edges',
            data: {
              id: d.ligand + d.receptor,
              source: d.ligand,
              target: d.receptor,
              score: parseFloat(d.score),
            },
          },
        ]);
      }
    });

    // Color top N interactions
    const n = 15;
    cy.edges()
      .sort((a, b) => {
        return b - a;
      })
      .slice(0, n)
      .style({
        'line-color': '#10b981',
        'target-arrow-color': '#10b981',
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
};
</script>
