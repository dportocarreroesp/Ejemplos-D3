// javascript
var data = [
  { platform: "Android", percentage: 40.11 },
  { platform: "Windows", percentage: 36.69 },
  { platform: "iOS", percentage: 13.06 },
];

var svgWidth = 500,
  svgHeight = 300,
  radius = Math.min(svgWidth, svgHeight) / 2;
var svg = d3.select("svg").attr("width", svgWidth).attr("height", svgHeight);

// Paleta de colores
var color = d3.scaleOrdinal(d3.schemeCategory10);

// Creamos un grupo de elementos para que contenga el pie chart
var g = svg
  .append("g")
  .attr("transform", "translate(" + radius + "," + radius + ")");

// Función que recibe un arreglo de datos, y te devuelve los startAngle y endAngle
var pie = d3.pie().value(function (d) {
  return d.percentage;
});

var arc = g.selectAll("arc").data(pie(data)).enter().append("g");
console.log(pie(data));

var path = d3.arc().outerRadius(radius).innerRadius(0);

arc
  .append("path")
  .attr("d", path)
  .attr("fill", function (d) {
    return color(d.data.percentage);
  });

var label = d3.arc().outerRadius(radius).innerRadius(0);

arc
  .append("text")
  .attr("transform", function (d) {
    return "translate(" + label.centroid(d) + ")";
  })
  .attr("text-anchor", "middle")
  .text(function (d) {
    return d.data.platform + ":" + d.data.percentage + "%";
  });
