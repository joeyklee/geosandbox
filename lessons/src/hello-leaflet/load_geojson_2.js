// create the map
initMap();
// use th
d3.json("../../data/swirl.geojson", function(myjson){

	L.geoJson(myjson).addTo(map);

});
