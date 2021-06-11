/* var canvas = d3.select("#rect1"); */
var canvas = d3.select("svg");
canvas
  .attr("width", 500)
  .attr("height", 500)
  .attr("transform", "translate(10,10)");

/* Margin */
canvas
  .append("rect")
  .attr("height", 500)
  .attr("width", 500)
  .attr("stroke", "black")
  .attr("stroke-width", 5)
  .style("fill", "none");

/* var rectangle = canvas
  .append("rect")
  .attr("height", 100)
  .attr("width", 50)
  .style("fill", "red");

rectangle.style("fill", "purple"); */

var arc_group = canvas.append("g").attr("transform", "translate(100,100)");

const arc_path = d3
  .arc()
  .innerRadius(80)
  .outerRadius(100)
  .startAngle(0)
  .endAngle(Math.PI * 2 - 1);

arc_group.append("path").attr("d", arc_path);
