// call initMap()
initMap();

$.getJSON("../../data/oakland_crime_201501_subset.geojson", {}, function (
  data
) {
  var crimeBbox = turf.bbox(data); // returns [ -122.308691, 37.764144, -122.207204, 37.85317 ]
  var cellWidth = 0.5;
  var units = "kilometers";

  var hexGrid = turf.hexGrid(crimeBbox, cellWidth, units);

  var count = turf.collect(hexGrid, data, "CType", "crimes");
  //console.log(count);

  var isoPoints = [];
  count.features.forEach(function (d) {
    if (d.properties.crimes.length != 0) {
      var point = turf.centroid(d);
      point.properties.crimeCount = d.properties.crimes.length;
      isoPoints.push(point);
      //console.log(d);
    }
  });
  var fc = turf.featureCollection(isoPoints);
  var breaks = [0, 5, 10, 15, 20, 25, 30, 50];
  var isolined = turf.isolines(fc, "crimeCount", 50, breaks);
  console.log(fc);
  L.geoJson(isolined).addTo(map);
});
