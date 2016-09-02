var map;

function initMap() {
    // initialize map container
    map = L.map('mymap').setView([37.799289, -122.266433], 13);

    // get the stamen toner-lite tiles
    var Stamen_Toner = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
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

var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
lineNumbers: false,
matchBrackets: true,
// continueComments: "Enter",
extraKeys: {
    "Ctrl-Q": "toggleComment"
}
});


$(document).ready(function() {
    eval(editor.getValue());

    $('#rerun').click(function() {
        executeCode();
    });

    $("#dl").click(function() {
        var text = $('html')[0].outerHTML;
        var filename = "test";
        var blob = new Blob([text], {
            type: "text/plain;charset=utf-8"
        });
        saveAs(blob, filename + ".html");
    });
})

function executeCode() {
    // geolayers.clearLayers();
    $("#mymap").remove();
    $("#geocontainer").append("<div id='mymap'></div>");
    var newText = editor.getValue();
    console.log(newText);
    eval(newText);
}

function downloadJson(item, outputName){
        var text = JSON.stringify(item.toGeoJSON());
        var blob = new Blob([text], {
            type: "text/plain;charset=utf-8"
        });
        saveAs(blob, outputName);
}