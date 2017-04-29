var map;

function initMap(){
    // initialize map container
    map = L.map('mymap').setView([37.799289, -122.266433], 13);

    // get the stamen toner-lite tiles
    var Stamen_Toner = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> — Map data © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        subdomains: 'abcd',
        minZoom: 0,
        maxZoom: 20,
        ext: 'png'
    });

    // add the tiles to the map
    Stamen_Toner.addTo(map); 

    //disable scroll wheel zoom 
    map.scrollWheelZoom.disable();
}
// call initMap()
initMap();
        