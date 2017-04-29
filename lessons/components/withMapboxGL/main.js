var map;

function initMap() {
    // initialize map container
    mapboxgl.accessToken = 'pk.eyJ1Ijoiam9leWtsZWUiLCJhIjoiMlRDV2lCSSJ9.ZmGAJU54Pa-z8KvwoVXVBw';
    map = new mapboxgl.Map({
        container: 'mymap',
         center: [-122.266433, 37.799289],
		  zoom: 10,
		  hash: true,
        style: 'mapbox://styles/mapbox/streets-v9'
    });
}
