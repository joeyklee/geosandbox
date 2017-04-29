# How to build a lesson component

How it works:

## folder structure
in the `lessons` folder there are 4 folders:
*  `build`: this is where your geo javascript chunks live
*  `components`: this is where your specific `header.html`, `closer.html`, and `main.js` files live for `withCarto`/`withLeaflet`/`withMapboxGL`. 
    -  the `header.html` file defines all the libraries we need to attached to each example
    -  the `closer.html` file defines where the `main.js` file should be read in
    -  `main.js` basically contains the code for setting up the basemap specific to Carto, Leaflet, or MapboxGL.
*  `output`:
    -  this is where all the compiled html files go
*  `data`:
    -  this is where the data for the examples live

## running make
When you run `make.js` you supply:
* the folders in the build & output you will be acting on -- **make sure the names match**
* supply a flag `-withLeaflet` or `-withMapboxGL` or `withCarto` to make sure the correct `header.html`, `closer.html`, and `main.js` are compiled in the `output`

you can run the below in the terminal to produce the correct output:

```
node make.js oakland-crime -withLeaflet
node make.js hello-turf -withLeaflet  
node make.js hello-drawing-tool -withLeaflet
node make.js hello-mapboxgl -withMapboxGL
node make.js hello-leaflet -withLeaflet 
...
```