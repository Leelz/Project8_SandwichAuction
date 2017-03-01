var UI = require("./views/ui");
var MapWrapper = require("./models/mapWrapper.js");

var app = function() {

  // creates the map
  mapDiv = document.querySelector("#mapDiv");
  var centre = {lat: 56, lng: -3 };
  var peppers = {lat: 55.9461747, lng: -3.201239}
  var alexanders = {lat: 55.9461243, lng: -3.2037087}
  var philpotts = {lat: 55.9447575, lng: -3.2069157}
  this.map = new MapWrapper(centre, 15);
  this.map.addInfoWindow(peppers, "Peppers");
  this.map.addInfoWindow(alexanders, "Alexanders");
  this.map.addInfoWindow(philpotts, "Philpotts");
  this.map.geoLocate();

  var ui = new UI(this.map);

}

window.onload = app;