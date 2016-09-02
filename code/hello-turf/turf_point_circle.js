// call initMap()
initMap();

// add a marker to the map
var point = turf.point([-122.266433, 37.799289]);

// point to circle
L.geoJson(point, {
    pointToLayer: function(feature, latlng) {
        return L.circle(latlng, 200);
    },
    style: {color: "orange"}
}).addTo(map); 
