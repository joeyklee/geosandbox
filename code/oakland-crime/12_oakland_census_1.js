// call initMap()
initMap();

// get color depending on population density value
function getColor(d) {
    return d > 1000 ? '#800026' :
           d > 500  ? '#BD0026' :
           d > 200  ? '#E31A1C' :
           d > 100  ? '#FC4E2A' :
           d > 50   ? '#FD8D3C' :
           d > 20   ? '#FEB24C' :
           d > 10   ? '#FED976' :
                      '#FFEDA0';
}

function style(feature) {
    return {
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7,
        fillColor: getColor(feature.properties.POP_DENSIT)
    };
}

$.getJSON("../data/oakland_census_2010_blocks_wgs.geojson",{}, function( data ){ 
  console.log(data);
  L.geoJson(data, {
    style: style
  }).addTo(map);
});
