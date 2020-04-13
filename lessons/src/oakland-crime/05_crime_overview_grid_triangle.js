// call initMap()
initMap();

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
      fillColor: getColor(feature.properties.crimes.length),
      weight: 2,
      opacity: 1,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.7,
    };
  },
  onEachFeature: function(feat, layer){
    if(feat.properties.crimes.length) return layer.bindPopup(`${feat.properties.crimes.length}`);
  }
};

$.getJSON("../../data/oakland_crime_201501_subset.geojson", {}, function (
  data
) {
  var crimeBbox = turf.bbox(data); // returns [ -122.308691, 37.764144, -122.207204, 37.85317 ]
  var cellWidth = 0.5;
  var units = "kilometers";

  var squareGrid = turf.triangleGrid(crimeBbox, cellWidth, units);

  var count = turf.collect(squareGrid, data, "CType", "crimes");
  console.log(count);

  L.geoJson(count, crimeGridStyle).addTo(map);
});
