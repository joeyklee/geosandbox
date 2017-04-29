var fs = require('fs');

var header = fs.readFileSync("components/" + "header.html", 'utf8');
var closer = fs.readFileSync("components/" + "closer.html", 'utf8');

function createLessons(ipath, opath) {
    var lessons;

    // get the lessons 
    lessons = fs.readdirSync(ipath+"/");
    lessons.forEach(function(file) {
        if (file != ".DS_Store") {
            var codeChunk = fs.readFileSync(ipath+"/" + file, 'utf8');
            
            var output = header + codeChunk + closer;
            console.log(output);
            var ofile = opath+"/" + file.substring(0, file.length - 3) + ".html";
            fs.writeFileSync(ofile, output)
        }
    })
}

createLessons(process.argv[2], process.argv[3]);