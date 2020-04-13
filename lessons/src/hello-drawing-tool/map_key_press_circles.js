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

function pointsToTin(){
    // create an array to hold our points
    var datapoints = [];
    // loop through the layers of our drawnItems featureGroup
    for (i in drawnItems._layers) {
        // if the drawn items do not have bounds, implying that is is not a polygon,
        // then get the point and push that point to the datapoints list.
        if (!drawnItems._layers[i]._bounds) {
            var coords = drawnItems._layers[i];
            // remember the turf coordinates take lng/lat
            var point = turf.point([coords._latlng.lng, coords._latlng.lat]);
            datapoints.push(point);
        }
    }

    // turn the list of geojson points into a featureCollection()
    var pointCollection = turf.featureCollection(datapoints);
    // turn the line into a bezier
    var xtin = turf.tin(pointCollection);
    // add the bezier line to our "bez" layerGroup we defined above ^^^
    L.geoJson(xtin).addTo(tin);

}

// **************** NEW ************** //
function circlesToCircles(){
    // create an array to hold our points
    var datapoints = [];
    // loop through the layers of our drawnItems featureGroup
    for (i in drawnItems._layers) {
        // if the drawn items do not have bounds, implying that is is not a polygon,
        // then get the point and push that point to the datapoints list.
        // NOW also check if the feature has a radius!
        if (!drawnItems._layers[i]._bounds && drawnItems._layers[i]._mRadius) {
            var coords = drawnItems._layers[i];
            // remember the turf coordinates take lng/lat
            var point = turf.point([coords._latlng.lng, coords._latlng.lat]);
            // now turn that point into an actual circle
            var circle = turf.circle(point, coords._mRadius, 30, "meters");
            datapoints.push(circle);
        }
    }

    // turn the list of geojson points into a featureCollection()
    var circleCollection = turf.featureCollection(datapoints);
    // turn the line into a bezier
    L.geoJson(circleCollection).addTo(circs);
}

// when a key is pressed, fire an event
map.on("keypress", function(e) {
        var keyPressed = e.originalEvent.key;
        console.log("the key pressed is: ", keyPressed);
        if (keyPressed == 1) {
            // call the pointsToBezier()
            pointsToBezier();
        }
        if (keyPressed ==2){
            // call the pointsToTin()
            pointsToTin();
        }
        if (keyPressed ==3){
            // call the pointsToTin()
            circlesToCircles();
        }
});
// ********************************** //