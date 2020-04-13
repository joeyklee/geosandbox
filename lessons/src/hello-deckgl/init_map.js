let map;
let app;

function initMap() {
  const INITIAL_VIEW_STATE = {
    latitude: 51.47,
    longitude: 0.45,
    zoom: 4,
    bearing: 0,
    pitch: 30,
  };

  // Set your mapbox token here
  mapboxgl.accessToken =
    "pk.eyJ1Ijoiam9leWtsZWUiLCJhIjoiMlRDV2lCSSJ9.ZmGAJU54Pa-z8KvwoVXVBw";

  map = new mapboxgl.Map({
    container: "mymap",
    style: "mapbox://styles/mapbox/light-v9",
    // Note: deck.gl will be in charge of interaction and event handling
    interactive: true,
    center: [INITIAL_VIEW_STATE.longitude, INITIAL_VIEW_STATE.latitude],
    zoom: INITIAL_VIEW_STATE.zoom,
    bearing: INITIAL_VIEW_STATE.bearing,
    pitch: INITIAL_VIEW_STATE.pitch,
  });

  app = new deck.Deck({
    canvas: "deck-canvas",
    width: "100%",
    height: "100%",
    initialViewState: INITIAL_VIEW_STATE,
    controller: true,
    onViewStateChange: ({ viewState }) => {
      map.jumpTo({
        center: [viewState.longitude, viewState.latitude],
        zoom: viewState.zoom,
        bearing: viewState.bearing,
        pitch: viewState.pitch,
      });
    },
  });
}
initMap();