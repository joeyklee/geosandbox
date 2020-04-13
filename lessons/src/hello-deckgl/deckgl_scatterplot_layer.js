initMap();

map.on("load", () => {

  const myPoints = [
    { coordinates: [0.45, 51.47], rad:10000},
    { coordinates: [0, 0],rad:10000 },
    { coordinates: [-123.1, 49.2],rad:10000 },
  ];

  app.setProps({
    layers: [
      new deck.ScatterplotLayer({
        id: "my-scatterplot",
        data: myPoints,
        pickable: true,
        autoHighlight: true,
        opacity: 1,
        stroked: true,
        filled: true,
        radiusScale: 6,
        radiusMinPixels: 1,
        radiusMaxPixels: 100,
        lineWidthMinPixels: 1,
        getPosition: (d) => d.coordinates,
        getRadius: (d) => d.rad,
        getFillColor: (d) => [255, 140, 0],
        getLineColor: (d) => [0, 0, 0],
      }),
    ],
  });

});
