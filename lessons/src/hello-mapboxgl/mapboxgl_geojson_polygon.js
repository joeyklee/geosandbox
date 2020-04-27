initMap();

map.on("load", function () {


  const myHeart = turf.polygon([
    [
      [
        -122.25311279296874,
        37.85316995894978
      ],
      [
        -122.26512908935547,
        37.86455455760559
      ],
      [
        -122.28469848632811,
        37.86753594762488
      ],
      [
        -122.30358123779297,
        37.85859141570558
      ],
      [
        -122.3097610473633,
        37.85073017332982
      ],
      [
        -122.3004913330078,
        37.830666652929224
      ],
      [
        -122.28504180908203,
        37.819819234520956
      ],
      [
        -122.2675323486328,
        37.810326435534755
      ],
      [
        -122.25311279296874,
        37.803273851858656
      ],
      [
        -122.24006652832033,
        37.80381638220768
      ],
      [
        -122.22049713134766,
        37.824700770115996
      ],
      [
        -122.20779418945311,
        37.84557924966549
      ],
      [
        -122.20470428466797,
        37.86645181975609
      ],
      [
        -122.21328735351562,
        37.86970415551112
      ],
      [
        -122.23114013671875,
        37.8724143256462
      ],
      [
        -122.24246978759764,
        37.87160128507345
      ],
      [
        -122.25311279296874,
        37.85316995894978
      ]
    ]
  ], {
    name: 'Oakland has heart.'
  });




  map.addSource('myHeart', {
    "type": "geojson",
    "data": myHeart
  });

  map.addLayer({
    "id": "myHeart",
    "type": "fill", // [fill, line, symbol, circle, heatmap, fill-extrusion, raster, hillshade, background]
    "source": "myHeart",
    'layout': {

    },
    'paint': {
      'fill-color': 'red',
      'fill-opacity': 0.8
    }
  });
})