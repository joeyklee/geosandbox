initMap();

const data = [
  {coordinates:[0,0]}
];

const scatterplot = new deck.ScatterplotLayer({
  id: 'scatterplot-layer',
  data,
  pickable: true,
  opacity: 1,
  stroked: true,
  filled: true,
  radiusScale: 6,
  radiusMinPixels: 1,
  radiusMaxPixels: 100,
  lineWidthMinPixels: 1,
  getPosition: d => d.coordinates,
  getRadius: d => Math.sqrt(1000000),
  getFillColor: d => [255, 140, 0],
  getLineColor: d => [0, 0, 0],
  onHover: ({object, x, y}) => {
    const tooltip = `null island`;
    /* Update tooltip
      http://deck.gl/#/documentation/developer-guide/adding-interactivity?section=example-display-a-tooltip-for-hovered-object
    */
  }
})

const layers = [
  scatterplot
]

app.setProps({layers});

// app.setProps([layer]);