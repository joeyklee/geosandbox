// call initMap()
initMap();

$.getJSON("../../data/oakland_crime_201501_subset.geojson",{}, function( data ){ 
  console.log(data);
  L.geoJson(data).addTo(map);
});
