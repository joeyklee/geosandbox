let svg;
let basemap;
let covidData;
async function init() {
  const width = 400,
    height = 400;

  const basemapURL =
    "https://gist.githubusercontent.com/joeyklee/2faa602425bcb9c8bbc1a2319190051d/raw/8bdf7afce45fd282b8859a9efe1edffb7a3956ea/nyc_borough_bounds.geojson";

  basemap = await fetch(basemapURL);
  basemap = await basemap.json();

  const covidDataURL =
    "https://gist.githubusercontent.com/joeyklee/72f6c6c618477ed03147f911693adf0b/raw/b587a64c200d491ffecb27a2e421104622965be9/covid-by-boro-20200427.csv";
  covidData = await d3.csv(covidDataURL);

  console.log(covidData);

  // create a feature collection of the boro centers of mass
  let covidCentroids = basemap.features.map((d) => {
    const covidInfo = covidData.find(
      (item) => item.boro_name === d.properties.boro_name
    );
    const c = turf.centerOfMass(d, covidInfo);
    return c;
  });

  covidCentroids = turf.featureCollection(covidCentroids);

  console.log(covidCentroids);
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
    .style("fill", "#C9D1DA")
    .style("stroke", "#FFFFFF")
    .style("stroke-width", "0.5px");

  const scale = d3.scaleLinear().domain([1000, 2500]).range([10, 40]);

  const ridgeLine = d3
    .line()
    .x(function (d) {
      return d.x;
    })
    .y(function (d) {
      return d.y;
    })
    .curve(d3.curveMonotoneX);

  svg
    .append("g")
    .selectAll("g.ridge")
    .data(covidCentroids.features)
    .enter()
    .append("g")
    .attr("transform", (d) => {
      const x = projection(d.geometry.coordinates)[0];
      const y = projection(d.geometry.coordinates)[1];
      return `translate( ${x}, ${y})`;
    })
    .append("path")
    .attr("d", (d) => {
      const data = [
        { x: -5, y: 0 },
        { x: 0, y: -scale(Number(d.properties.Rate_per_100k_people) * 1.5) },
        { x: 5, y: 0 },
      ];
      return ridgeLine(data);
    })
    .style("fill", "red")
    .style("fill-opacity", 0.4)
    .style("stroke", "red")
    .style("stroke-width", 1);
}
init();
