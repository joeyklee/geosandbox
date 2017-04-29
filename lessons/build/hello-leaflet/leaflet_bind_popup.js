initMap();

var pin;
var ellipse;
var poly;

pin = L.marker([37.79, -122.26]).addTo(map);
ellipse = L.circle([37.79, -122.24], 700, {color:"red"}).addTo(map);
poly = L.polygon([
    [37.82015824048042, -122.28796005249022],
    [37.82524314302978, -122.28195190429686],
    [37.8209718484305, -122.27362632751466],
    [37.815208598896255, -122.27663040161133],
    [37.81432712106107, -122.28641510009766],
    [37.82015824048042, -122.28796005249022]
], {color:"purple"}).addTo(map);

pin.bindPopup("i'm a pin");
ellipse.bindPopup("i'm an circle");
poly.bindPopup("i'm a polygon");
