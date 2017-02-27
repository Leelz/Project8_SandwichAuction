var UI = require("./views/ui");
var MapWrapper = require("./models/MapWrapper.js");

var sandwich = null;

var app = function() {


  //creates the map
  mapDiv = document.querySelector("#mapDiv");
  var centre = {lat: 56, lng: -3 };
  this.map = new MapWrapper(centre, 3);
  this.map.geoLocate();

  var ui = new UI(this.map);
  ui.addHereToDB();

  var nextButton = document.querySelector("#next-button");
  nextButton.style.visibility = "hidden";

  
}

window.onload = app;