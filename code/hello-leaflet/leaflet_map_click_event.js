// create the map
initMap();

map.on("click", function(e){
	console.log(e.latlng.lat, e.latlng.lng);
	L.circle([e.latlng.lat, e.latlng.lng], 200).addTo(map);
})