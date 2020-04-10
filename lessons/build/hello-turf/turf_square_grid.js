// call initMap()
initMap();

var pointStyle = {
  pointToLayer: function (feature, latlng) {
    return L.circle(latlng);
  },
  style: {
    color: "#ff7800",
    weight: 5,
    opacity: 0.65,
  },
};

function getColor(d) {
  return d > 50
    ? "#800026"
    : d > 30
    ? "#BD0026"
    : d > 25
    ? "#E31A1C"
    : d > 20
    ? "#FC4E2A"
    : d > 15
    ? "#FD8D3C"
    : d > 10
    ? "#FEB24C"
    : d > 5
    ? "#FED976"
    : "#FFEDA0";
}

var crimeGridStyle = {
  style: function style(feature) {
    return {
      fillColor: getColor(feature.properties.z),
      weight: 2,
      opacity: 1,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.7,
    };
  }
};

// create some data:
// generate some random point data
var mybbox = [-122.3, 37.77, -122.23, 37.84];
var points = turf.random("points", 100, {
  bbox: mybbox,
});

// create a "z" value for each point up to 50
points.features.forEach(function (d) {
  d.properties.z = ~~(Math.random() * 50);
});

// show the points on the map
L.geoJson(points, pointStyle).addTo(map);

var cellWidth = 0.5;
var units = "kilometers";
var squareGrid = turf.squareGrid(mybbox, cellWidth, units);

// join the values of the points to the grid
var count = turf.collect(squareGrid, points, "z", "z");
console.log(count);

L.geoJson(count, crimeGridStyle).addTo(map);
