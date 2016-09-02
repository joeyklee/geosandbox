// call initMap()
initMap();

$.getJSON("../../data/oakland_crime_201501_subset.geojson",{}, function( data ){ 
  
  // calculate a tin
    var tin = turf.tin(data, 'crimeCount');
    L.geoJson(tin).addTo(map);
});
