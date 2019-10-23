initMap();

map.on('load', function(){
let myPoints = [[
  -122.26100921630858,
  37.821446448926444
],
[
  -122.22770690917969,
  37.79730575499309
],
[
  -122.25654602050781,
  37.766643840752764
],
[
  -122.3262405395508,
  37.790523241426946
],
[
  -122.2671890258789,
  37.86645181975609
],
[
  -122.18582153320312,
  37.821446448926444
],
[
  -122.21157073974608,
  37.778584505321376
]];
  
  myPoints = myPoints.map( coords =>  turf.point(coords) );
  myPoints = turf.featureCollection(myPoints);
  
  const myPointsBbox = turf.bbox(myPoints);
  const options = {
    bbox: myPointsBbox
  }
  const voronoiPolygons = turf.voronoi(myPoints,options);

  map.addSource('myVoronoi', {
    "type": "geojson",
    "data": voronoiPolygons
  });

  map.addLayer({
    "id": "myVoronoi",
    "type": "fill", // [fill, line, symbol, circle, heatmap, fill-extrusion, raster, hillshade, background]
    "source": "myVoronoi",
    'layout': {

    },
    'paint': {
      'fill-color': 'orange',
      'fill-opacity': 0.8,
      'fill-outline-color':"black"
    }
  });


});