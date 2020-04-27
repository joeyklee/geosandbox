let svg;
let basemap;

async function init() {
  const width = 400,
    height = 400;

  const basemapURL =
    "https://gist.githubusercontent.com/joeyklee/2faa602425bcb9c8bbc1a2319190051d/raw/8bdf7afce45fd282b8859a9efe1edffb7a3956ea/nyc_borough_bounds.geojson";

  basemap = await fetch(basemapURL);
  basemap = await basemap.json();

  svg = d3
    .select("#mymap")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("background-color", "#F9F9F9");

  const projection = d3
    .geoAlbers()
    .center([0, 40.714666])
    .rotate([73.947008, 0])
    .scale(40000)
    .translate([width / 2, height / 2]);

  const geoPath = d3.geoPath().projection(projection);

  svg
    .append("g")
    .selectAll("path")
    .data(basemap.features)
    .enter()
    .append("path")
    .attr("d", geoPath)
    .attr("class", "borough")
    .style("fill", (d) => {
      switch (d.properties.boro_name) {
        case "Manhattan":
          return "#FF80CC";
        case "Bronx":
          return "#9EEBCF";
        case "Staten Island":
          return "#FBF1A9";
        case "Queens":
          return "#96CCFF";
        case "Brooklyn":
            return "#A463F2";
      }
    })
    .style("stroke", "#FFFFFF")
    .style("stroke-width", "0.5px");
}
init();
