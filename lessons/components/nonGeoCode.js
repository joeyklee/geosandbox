
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