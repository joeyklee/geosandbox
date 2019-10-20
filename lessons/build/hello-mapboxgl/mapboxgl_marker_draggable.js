initMap();


map.on("load", function(){

  const marker = new mapboxgl.Marker({
    draggable: true
    })
    .setLngLat([-122.266433, 37.799289])
    .addTo(map);

    marker.on('dragend', function(){
      const lngLat = marker.getLngLat();
      alert(`marker dragged to: \n longitude: ${lngLat.lng}, latitude: ${lngLat.lat}`)
    });

})


