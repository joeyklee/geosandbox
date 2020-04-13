// call initMap()
initMap();

var pointStyle = {
  pointToLayer: function (feature, latlng) {
    return L.circle(latlng);
  },
  style: {
    color: "#ff7800",
    weight: 5,
    opacity: 0.65,
  },
};

$.getJSON("../../data/oakland_crime_201501_subset.geojson", {}, function (
  data
) {
  console.log(data);
  L.geoJson(data, pointStyle).addTo(map);
});
