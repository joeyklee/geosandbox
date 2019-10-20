initMap();


map.on("load", function(){
	
	var point = turf.point([]);
	console.log(point);


  const marker = new mapboxgl.Marker()
    .setLngLat([-122.266433, 37.799289])
    .addTo(map);

})


