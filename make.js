var fs = require('fs');

var componentPath;


if(process.argv[3] === "-withLeaflet"){
    componentPath = "lessons/components/withLeaflet/"
}
if(process.argv[3] === "-withMapboxGL"){
    componentPath = "lessons/components/withMapboxGL/"
}
if(process.argv[3] === "-withCarto"){
    componentPath = "lessons/components/withCarto/"
}

var header = fs.readFileSync(componentPath + "header.html", 'utf8');
var closer = fs.readFileSync(componentPath + "closer.html", 'utf8');

function createLessons(iopath) {
    var ipath = "lessons/build/" + iopath + "/";
    var opath = "lessons/output/" + iopath + "/";
    var lessons;

    // get the lessons 
    lessons = fs.readdirSync(ipath);
    lessons.forEach(function(file) {
        if (file != ".DS_Store") {
            var codeChunk = fs.readFileSync(ipath + file, 'utf8');
            
            var output = header + codeChunk + closer;
            console.log(output);
            var ofile = opath + file.substring(0, file.length - 3) + ".html";
            fs.writeFileSync(ofile, output)
        }
    })
}

createLessons(process.argv[2]);