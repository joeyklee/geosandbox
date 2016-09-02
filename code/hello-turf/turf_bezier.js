// call initMap()
initMap();

// define a set of latlngs
var latlngs =  [ 
  [-122.29225158691406, 37.805715207044685 ],
  [-122.27886199951173, 37.81086891407298 ],
  [-122.26701736450197, 37.80625771945958 ], 
  [-122.26581573486328, 37.79825525720401 ],
  [-122.27989196777344, 37.802595683318046 ],
  [-122.2649574279785, 37.819276821747295 ],
  [-122.24367141723633, 37.813310018173155 ],
  [-122.24985122680663, 37.824022798368375 ],
  [-122.25843429565428, 37.81303878836988 ],
  [-122.26856231689453, 37.831073400102184 ] 
 ];

// create a geojson line
var line = turf.lineString(latlngs);

// calculate the bezier curves
var curved = turf.bezier(line);

// add them to the map
L.geoJson(line, {color:"red"}).addTo(map);
L.geoJson(curved, {color:"blue"}).addTo(map);
