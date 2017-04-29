initMap();

// Initialise the FeatureGroup to store editable layers
var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

// Initialise the draw control and pass it the FeatureGroup of editable layers
var drawControl = new L.Control.Draw({
    edit: {
        featureGroup: drawnItems
    }
});
map.addControl(drawControl);


// and keep the drawn items on the map
map.on('draw:created', function(e) {
    var type = e.layerType,
        layer = e.layer;

    if (type === 'marker') {
        layer.bindPopup('A popup!');
    }

    drawnItems.addLayer(layer);
});

// Create a few layer groups
var tin = new L.layerGroup();
var bez = new L.layerGroup();
var circs = new L.layerGroup();
var ch = new L.layerGroup();

// throw all those layer groups into a json object
var overlayMaps = {
    "tin": tin,
    "bezier": bez,
    "circle": circs,
    "convex hull": ch
};

// feed those overlay maps into the leaflet layer toggler
L.control.layers(null, overlayMaps).addTo(map);


// **************** NEW ************** //
function pointsToBezier(){
    // create an array to hold our points
    var datapoints = [];
    // loop through the layers of our drawnItems featureGroup
    for (i in drawnItems._layers) {
        // if the drawn items do not have bounds, implying that is is not a polygon,
        // then get the point and push that point to the datapoints list.
        if (!drawnItems._layers[i]._bounds) {
            var coords = drawnItems._layers[i];
            // remember the turf coordinates take lng/lat
            var point = [coords._latlng.lng, coords._latlng.lat];
            datapoints.push(point);
        }
    }

    // turn the list of coordinates into a lineString()
    var line = turf.lineString(datapoints);
    // turn the line into a bezier
    var bline = turf.bezier(line);
    // add the bezier line to our "bez" layerGroup we defined above ^^^
    L.geoJson(bline).addTo(bez);
}
// when a key is pressed, fire an event
map.on("keypress", function(e) {
        var keyPressed = e.originalEvent.key;
        console.log("the key pressed is: ", keyPressed);
        if (keyPressed == 1) {
            // call the pointsToBezier()
            pointsToBezier();
        }
});
// ********************************** //