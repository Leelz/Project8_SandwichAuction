var UI = require("./views/ui");
// var MapWrapper = require("./models/MapWrapper.js");

var app = function() {

  //creates the map
  // mapDiv = document.querySelector("#mapDiv");
  // var centre = {lat: 56, lng: -3 };
  // this.map = new MapWrapper(centre, 3);
  // this.map.geoLocate();

  // var ui = new UI(this.map);
  // ui.addHereToDB();

  var ui = new UI();
  
}

window.onload = app;