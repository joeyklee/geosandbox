// call initMap()
initMap();


// create some data:
// generate some random point data
var mybbox = [-122.3, 37.77, -122.23,37.84];
var points = turf.random('points', 50, {
  bbox: mybbox
});

// create a "z" value for each point up to 50
points.features.forEach(function(d){
    d.properties.z = ~~(Math.random() * 50);
});


var cellWidth = 0.5;
var units = 'kilometers';
var squareGrid = turf.squareGrid(mybbox, cellWidth, units);

// join the values of the points to the grid
var count = turf.collect(squareGrid, points, "z", "z")

var isoPoints = [];
  count.features.forEach(function(d){
    if(d.properties.z !=0){
    var point = turf.centroid(d);
    point.properties.z = d.properties.z;
    isoPoints.push(point);
    //console.log(d);
    }
  });
  var fc = turf.featureCollection(isoPoints);
  var breaks = [0,5, 10, 15, 20, 25, 30, 50];
  var isolined = turf.isolines(fc, 'z',50, breaks);
  console.log(fc);
  L.geoJson(isolined).addTo(map);

