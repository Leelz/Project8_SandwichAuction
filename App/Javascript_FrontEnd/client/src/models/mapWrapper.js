var MapWrapper = function(coords, zoom) {
  var container = document.querySelector("#mapDiv");
    this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
    });
}

MapWrapper.prototype = {
  addMarker: function(coords){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap,
    });
    console.log("marker added");
    return marker;
  },

 addInfoWindow: function(coords, text) {
   var marker = this.addMarker(coords);
   marker.addListener('click', function() {
     var infoWindow = new google.maps.InfoWindow({
       content: text
     });
     infoWindow.open(this.map, marker); 
   });
 },

  geoLocate: function(){
    navigator.geolocation.getCurrentPosition(function(position) {
      var centre = {lat: position.coords.latitude, lng: position.coords.longitude}; 
      this.googleMap.setCenter(centre); 
      var marker = this.addMarker(centre);

      var infoWindow = new google.maps.InfoWindow({
            content: "<h2>Home</h2>",
          });

      infoWindow.open(this.googleMap, marker);
    }.bind(this));
  }
}

module.exports = MapWrapper;

