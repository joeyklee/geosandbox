initMap();

map.on("load", function(){
	
	var point = turf.point([-122.266433, 37.799289]);
	console.log(point);


	// Add a single point to the map
	    map.addSource('point', {
	        "type": "geojson",
	        "data": point
	    });

	    map.addLayer({
	        "id": "point",
	        "type": "circle",
	        "source": "point",
	        "paint": {
	            "circle-radius": 10,
	            "circle-color": "#3887be"
	        }
	    });
})
