// create the map
initMap();
// use th
$.getJSON("../../data/swirl.geojson", function(myjson){

	L.geoJson(myjson).addTo(map);

});
