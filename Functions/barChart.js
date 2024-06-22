// Define a type for the data records
class BarChartRecord {
    constructor(label, value, color) {
        this.label = label;
        this.value = value;
        this.color = color;
    }
}

function generateBarChart(data, eixoXLabel, eixoYLabel, graphicName, canvasId) {
    // Get the canvas element
    var canvas = document.getElementById(canvasId);

    // Create the chart
    var chart = new Chart(canvas, {
        type: 'bar',
        data: {
            labels: data.map(obj => obj.label),
            datasets: [{
                label: graphicName,
                data: data.map(obj => obj.value),
                backgroundColor: data.map(obj => obj.color),
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: eixoXLabel
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: eixoYLabel
                    }
                }
            }
        }
    });
}
