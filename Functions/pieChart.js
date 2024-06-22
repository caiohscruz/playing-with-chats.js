// Cria um gráfico de pizza com base em uma lista de registros

// Define um tipo para os registros de list
class PieChartRecord {
    constructor(categoryName, value, color) {
        this.categoryName = categoryName;
        this.value = value;
        this.color = color;
    }
}

// Exemplo de uso do tipo PieChartRecord
var list = [
    new PieChartRecord("Despesas Fixas", 10, "#FF6384"),
    new PieChartRecord("Despesas Variáveis", 20, "#36A2EB"),
    new PieChartRecord("Alimentação", 30, "#FFCE56"),
    new PieChartRecord("Transporte", 40, "#4BC0C0"),
    new PieChartRecord("Lazer", 50, "#9966FF"),
    new PieChartRecord("Educação", 60, "#FF9F40"),
    new PieChartRecord("Saúde", 70, "#FF6384"),
    new PieChartRecord("Moradia", 80, "#36A2EB"),
    new PieChartRecord("Investimentos", 90, "#FFCE56"),
    new PieChartRecord("Dívidas", 100, "#4BC0C0"),
    new PieChartRecord("Renda", 110, "#9966FF"),
];

// Restante do código...


function createPieChart(list, canvasId) {
    var ctx = document.getElementById(canvasId).getContext('2d');
    var chart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: list.map(item => item.categoryName),
            datasets: [{
                data: list.map(item => item.value),
                backgroundColor: list.map(item => item.color),
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        },
    });
}