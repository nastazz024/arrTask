let rawData = [];

let randomArray = (length, max, min) => [...new Array(length)].map(() => Math.floor(Math.random() * (max - min + 1)) + min);

rawData = randomArray(20, 5, 0);

getNum = () => {
    return Array.apply(null, { length: rawData.length }).map(Number.call, Number)
}

var speedCanvas = document.getElementById("arr");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var speedData = {
    labels: getNum(),
    datasets: [{
        label: "Array graph",
        data: rawData,
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

var lineChart = new Chart(speedCanvas, {
    type: 'line',
    data: speedData,
    options: chartOptions
});

/*
let size = 2;
for (let i = 0; i <Math.ceil(rawData.length/size); i++){
    rawData[i] = Object.assign({}, rawData.slice( (i*size), (i*size) + size ));
}
console.log(rawData)



var height = 500,
    width = 500,
    margin = 30,
    data = [];

// создание объекта svg
var svg = d3.select("body").append("svg")
    .attr("class", "axis")
    .attr("width", width)
    .attr("height", height);

// длина оси X= ширина контейнера svg - отступ слева и справа
var xAxisLength = width - 2 * margin;

// длина оси Y = высота контейнера svg - отступ сверху и снизу
var yAxisLength = height - 2 * margin;

// функция интерполяции значений на ось Х
var scaleX = d3.scale.linear()
    .domain([0, 100])
    .range([0, xAxisLength]);

// функция интерполяции значений на ось Y
var scaleY = d3.scale.linear()
    .domain([100, 0])
    .range([0, yAxisLength]);
// масштабирование реальных данных в данные для нашей координатной системы
for (i = 0; i < rawData.length; i++)
    data.push({ x: scaleX(rawData[i].x) + margin, y: scaleY(rawData[i].y) + margin });

// создаем ось X
var xAxis = d3.svg.axis()
    .scale(scaleX)
    .orient("bottom");
// создаем ось Y
var yAxis = d3.svg.axis()
    .scale(scaleY)
    .orient("left");

// отрисовка оси Х
svg.append("g")
    .attr("class", "x-axis")
    .attr("transform",  // сдвиг оси вниз и вправо
        "translate(" + margin + "," + (height - margin) + ")")
    .call(xAxis);

// отрисовка оси Y
svg.append("g")
    .attr("class", "y-axis")
    .attr("transform", // сдвиг оси вниз и вправо на margin
        "translate(" + margin + "," + margin + ")")
    .call(yAxis);

// создаем набор вертикальных линий для сетки
d3.selectAll("g.x-axis g.tick")
    .append("line")
    .classed("grid-line", true)
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", 0)
    .attr("y2", - (yAxisLength));

// рисуем горизонтальные линии координатной сетки
d3.selectAll("g.y-axis g.tick")
    .append("line")
    .classed("grid-line", true)
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", xAxisLength)
    .attr("y2", 0);

// функция, создающая по массиву точек линии
var line = d3.svg.line()
    .x(function (d) { return d.x; })
    .y(function (d) { return d.y; });
// добавляем путь
svg.append("g").append("path")
    .attr("d", line(data))
    .style("stroke", "steelblue")
    .style("stroke-width", 2);*/