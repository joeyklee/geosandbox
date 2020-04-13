initMap();

map.on("load", function () {


  const popup = new mapboxgl.Popup({ offset: 25 })
                .setText("Hello! I'm a popup. I love you.");

  const marker = new mapboxgl.Marker()
    .setLngLat([-122.266433, 37.799289])
    .setPopup(popup)
    .addTo(map);
  
})