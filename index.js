let rawData = [];

let randomArray = (length, max, min) => [...new Array(length)].map(() => Math.floor(Math.random() * (max - min + 1)) + min);

rawData = randomArray(20, 10, 0);

rawData.sort(function (a, b) {
    return a - b;
});

rawData.reverse();

var unique = rawData.filter(function (elem, index, self) {
    return index === self.indexOf(elem);
});

getNum = () => {
    return Array.apply(null, { length: rawData.length }).map(Number.call, Number)
}

var Canvas = document.getElementById("arr");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var Data = {
    labels: getNum(),
    datasets: [{
        label: "Array graph",
        data: unique,
    }]
};

var chartOptions = {
    legend: {
        display: true,
        position: 'top',
        labels: {
            boxWidth: 80,
            fontColor: 'black'
        }
    }
};

var lineChart = new Chart(Canvas, {
    type: 'line',
    data: Data,
    options: chartOptions
});