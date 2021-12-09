<template>
  <div id="cy" ref="cy" class="flex-grow bg-white rounded"></div>
</template>

<script>
import cytoscape from 'cytoscape';
import cola from 'cytoscape-cola';
import d3Force from 'cytoscape-d3-force';

export default {
  async mounted() {
    cytoscape.use(cola);
    cytoscape.use(d3Force);

    const data = await this.$content('test').fetch();
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

    data.body.forEach((d, i) => {
      if (d.score >= 0.1) {
        cy.add([
          {
            group: 'nodes',
            data: { id: d.ligand },
          },
          {
            group: 'nodes',
            data: { id: d.receptor },
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

    const dcn = cy.elements().degreeCentralityNormalized();
    cy.nodes().forEach((n) => {
      n.data({
        dcn: dcn.degree(n),
      });
    });

    // cy.layout({
    //   name: 'cose',
    //   animate: false,
    //   nodeRepulsion: 5000,
    //   gravity: 10,
    // }).run();

    cy.layout({
      name: 'd3-force',
      fit: false,
      infinite: true,
      linkId: function id(d) {
        return d.id;
      },
      linkDistance: 40,
      manyBodyStrength: -300,
    }).run();
  },
};
</script>
