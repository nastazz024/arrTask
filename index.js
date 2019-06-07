let rawData = [];

const randomArray = (length, max, min) => [...new Array(length)].map(() => Math.floor(Math.random() * (max - min + 1)) + min);

rawData = randomArray(20, 10, 0);

rawData.sort((a, b) => a - b);

rawData.reverse();

const unique = rawData.filter((elem, index, self) => index === self.indexOf(elem));

const getNum = () => Array.apply(null, { length: rawData.length }).map(Number.call, Number);

const Canvas = document.getElementById("arr");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

const Data = {
    labels: getNum(),
    datasets: [{
        label: "Array graph",
        data: unique,
    }]
};

const chartOptions = {
    legend: {
        display: true,
        position: 'top',
        labels: {
            boxWidth: 80,
            fontColor: 'black'
        }
    }
};

const lineChart = new Chart(Canvas, {
    type: 'line',
    data: Data,
    options: chartOptions
});