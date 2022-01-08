
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_month.geojson";

// function createMap(earthquakes) {
var earthquakes= new L.LayerGroup();

  // Define streetmap and darkmap layers
  var streetmap = L.tileLayer("https://www.openstreetmap.org/copyright", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 15,
    id: "mapbox.streets",
    accessToken: API_KEY
  });

  var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.dark",
    accessToken: API_KEY
  });
   // Create a baseMaps object to hold the streetmap layer.
   var baseMaps = {
    "Street Map": streetmap
  };

  // Create an overlayMaps object to hold the earthquakes layer.
  var overlayMaps = {
    "Earthquakes": earthquakes
    var myMap = L.map("map", {
        center: [
            51.4780, 0.0015
        ],
        zoom: 15,
        layers: [streetmap, earthquakes]
      });
      streetmap.addTo(myMap)
     
      L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
      }).addTo(myMap);
      