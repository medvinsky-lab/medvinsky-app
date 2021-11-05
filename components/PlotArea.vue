<template>
    <div>
        <main-card class="h-full">
            <div class="h-full w-full bg-white flex p-2">
                <highchart
                    class="w-full h-4/5 m-auto"
                    :options="chartOptions"
                    :modules="['heatmap', 'data']"
                />
            </div>
        </main-card>
    </div>
</template>

<script>
export default {
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
                    categories: [
                        'Dorsal outer',
                        'Dorsal inner',
                        'Ventral outer',
                        'Ventral inner',
                        'Gonadal epithelium outer',
                        'Gonadal epithelium outer',
                    ],
                    gridLineWidth: 0,
                    lineWidth: 0,
                },
                yAxis: {
                    categories: [
                        'Dorsal outer',
                        'Dorsal inner',
                        'Ventral outer',
                        'Ventral inner',
                        'Gonadal epithelium outer',
                        'Gonadal epithelium outer',
                    ],
                    gridLineWidth: 0,
                    title: null,
                    reversed: true,
                },
                colorAxis: {
                    minColor: '#fff7bc',
                    maxColor: '#d95f0e',
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
                        data: [
                            [0, 0, 10],
                            [0, 1, 19],
                            [0, 2, 8],
                            [0, 3, 24],
                            [0, 4, 67],
                            [0, 5, 18],
                            [1, 0, 92],
                            [1, 1, 58],
                            [1, 2, 78],
                            [1, 3, 117],
                            [1, 4, 48],
                            [1, 5, 39],
                            [2, 0, 35],
                            [2, 1, 15],
                            [2, 2, 123],
                            [2, 3, 64],
                            [2, 4, 52],
                            [2, 5, 52],
                            [3, 0, 72],
                            [3, 1, 132],
                            [3, 2, 114],
                            [3, 3, 19],
                            [3, 4, 16],
                            [3, 5, 32],
                            [4, 0, 38],
                            [4, 1, 5],
                            [4, 2, 8],
                            [4, 3, 117],
                            [4, 4, 115],
                            [4, 5, 99],
                            [5, 0, 88],
                            [5, 1, 32],
                            [5, 2, 12],
                            [5, 3, 6],
                            [5, 4, 120],
                            [5, 5, 5],
                        ],
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
