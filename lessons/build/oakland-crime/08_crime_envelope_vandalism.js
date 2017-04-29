// call initMap()
initMap();

$.getJSON("../../data/oakland_crime_201501_subset.geojson",{}, function( data ){ 
  // VANDALISM
  var vandalism = [];
  var vehicle = [];
  data.features.forEach(function(d){
    if (d.properties.CType == "VANDALISM"){
        vandalism.push(d);
    } else if (d.properties.CType == "STOLEN VEHICLE"){
        vehicle.push(d);
    }
  });
  var fc_vandalism = turf.featureCollection(vandalism);
  var fc_vehicle = turf.featureCollection(vehicle);
  var ch_vandalism = turf.convex(fc_vandalism);
  var ch_vehicle = turf.convex(fc_vehicle);
  L.geoJson(ch_vandalism, {color:"red"}).addTo(map);
  L.geoJson(ch_vehicle, {color:"green"}).addTo(map);


    var vandalism = [];
  var vehicle = [];
  data.features.forEach(function(d){
    if (d.properties.CType == "VANDALISM"){
        vandalism.push(d);
    } else if (d.properties.CType == "STOLEN VEHICLE"){
        vehicle.push(d);
    }
  });
  var fc_vandalism = turf.featureCollection(vandalism);
  var fc_vehicle = turf.featureCollection(vehicle);
  var ch_vandalism = turf.convex(fc_vandalism);
  var ch_vehicle = turf.convex(fc_vehicle);
  L.geoJson(ch_vandalism, {color:"red"}).addTo(map);
  L.geoJson(ch_vehicle, {color:"green"}).addTo(map);



});
