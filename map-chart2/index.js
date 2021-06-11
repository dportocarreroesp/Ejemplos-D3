var svg = d3.select("svg");
var width = svg.attr("width");
var height = svg.attr("height");
svg
  .append("rect")
  .attr("width", "100%")
  .attr("height", "100%")
  .attr("fill", "grey");

var projection = d3
  .geoMercator()
  .scale(width * 90)
  .center([-87.6298, 41.8781])
  .translate([width / 2, height / 2.5]);

d3.queue()
  .defer(d3.json, "/Boundaries - Wards (2015-).geojson")
  .await(function (error, datageo) {
    if (error) {
      console.error("Error: " + error);
    } else {
      drawMap(datageo);
    }
  });
var path = d3.geoPath(projection);

function drawMap(datageo) {
  var enterNodes = svg
    .append("g")
    .selectAll("path")
    .data(datageo.features)
    .enter()
    .append("path")
    .attr("fill", "black")
    .attr("d", (d) => {
      return path(d);
    })
    .style("stroke", "white")
    .style("stroke-width", 1.2)
    .on("mouseover", function (d) {
      /* console.log(d); */
      d3.select(this).style("cursor", "pointer").attr("fill", "blue");
    })
    .on("mouseout", function (d) {
      d3.select(this).attr("fill", "black");
    })
    .on("click", function (d) {
      d3.select("p").text(
        "Ward " + d.properties.ward + ": " + d.properties.shape_area
      );
    });
}
