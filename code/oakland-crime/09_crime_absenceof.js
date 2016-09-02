// call initMap()
initMap();

$.getJSON("../../data/oakland_crime_201501_subset.geojson",{}, function( data ){ 

  var ch = turf.convex(data);
  //console.log(ch);
  var buffered = turf.buffer(data, 0.15, 'kilometers');

  
  var thing = turf.union(buffered.features[0], buffered.features[1]);

  for(var i = 2; i < buffered.features.length; i++){
    thing = turf.union(thing, buffered.features[i]);
  }
  L.geoJson(thing, {style: {"weight":0}}).addTo(map);

});
