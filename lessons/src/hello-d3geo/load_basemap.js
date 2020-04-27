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

}
init();