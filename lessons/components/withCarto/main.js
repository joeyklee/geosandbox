var map;

function initMap() {
  // initialize map container
  map = L.map("mymap").setView([37.799289, -122.266433], 13);

  var tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      'Map tiles and data © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    minZoom: 0,
    maxZoom: 20,
  });

  // add the tiles to the map
  tiles.addTo(map);

  //disable scroll wheel zoom
  map.scrollWheelZoom.disable();
}
