initMap();

map.on("load", function(){
	const locationA = turf.point([-122.26100921630858,37.821446448926444], {name: 'Oak', height:20, leafColor:"#d4efdf"});
  const locationB = turf.point([-122.22770690917969,37.79730575499309], {name: 'Pine', height:30, leafColor:"#145a32"});
  const locationC = turf.point([-122.25654602050781,37.766643840752764], {name: 'Willow', height:6, leafColor:"#9ccc65"});


  const myPoints = turf.featureCollection([
    locationA,
    locationB,
    locationC
  ]);


	// Add a single point to the map
	    map.addSource('points', {
	        "type": "geojson",
	        "data": myPoints
	    });

	    map.addLayer({
	        "id": "points",
	        "type": "circle",
	        "source": "points",
	        "paint": {
	            "circle-radius": ['get', 'height'],
	            "circle-color": ['get', 'leafColor']
	        }
	    });
})
