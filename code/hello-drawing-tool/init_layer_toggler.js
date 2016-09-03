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

// **************** NEW ************** //
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

// ********************************** //

