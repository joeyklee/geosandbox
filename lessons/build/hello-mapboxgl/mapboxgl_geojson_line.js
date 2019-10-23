initMap();

map.on("load", function () {


  const myLine = turf.lineString([
    [
      -122.26100921630858,
      37.821446448926444
    ],
    [
      -122.22770690917969,
      37.79730575499309
    ],
    [
      -122.25654602050781,
      37.766643840752764
    ],
    [
      -122.3262405395508,
      37.790523241426946
    ],
    [
      -122.2671890258789,
      37.86645181975609
    ],
    [
      -122.18582153320312,
      37.821446448926444
    ],
    [
      -122.21157073974608,
      37.778584505321376
    ]
  ], {
    name: 'The best line in Oakland.'
  });



  // Add a single point to the map
  map.addSource('myLine', {
    "type": "geojson",
    "data": myLine
  });

  map.addLayer({
    "id": "myLine",
    "type": "line",
    "source": "myLine",
    'layout': {
      'line-cap': 'round',
      'line-join': 'round'
      },
    'paint': {
      'line-color': '#ed6498',
      'line-width': 5,
      'line-opacity': .8
      }
  });
})