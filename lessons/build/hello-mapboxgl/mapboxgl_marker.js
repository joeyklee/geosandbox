initMap();


map.on("load", function(){

  const marker = new mapboxgl.Marker()
    .setLngLat([-122.266433, 37.799289])
    .addTo(map);

})


