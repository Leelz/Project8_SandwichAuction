var Sandwiches = function(){

}

Sandwiches.prototype = {
  makeRequest: function(url, callback) {
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = callback;
    request.send();
  },

  makePost: function(url, newData, callback){
    console.log("makePost started");
    var data = JSON.stringify(newData);
    var request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader("Content-type", "application/json");
    request.onload = callback;
    request.send(data);
  },

  makeDeleteRequest: function(url, callback){
    var request = new XMLHttpRequest();
    request.open("DELETE", url);
    request.setRequestHeader("Content-type", "application/json");
    request.onload = callback;
    request.send();
  },

//rails server -p 5000

allOrdered: function(callback){
var self = this;
  this.makeRequest("http://localhost:5000/orders", function() {
    if (this.status !== 200)
      return;      
    var jsonString = this.responseText;
    var result = JSON.parse(jsonString);
    callback(result);
  });
}, 

allFillings: function(callback){
var self = this;
console.log("this is working")
  this.makeRequest("http://localhost:5000/fillings", function() {
    if (this.status !== 200)
      return;      
    var jsonString = this.responseText;
    var result = JSON.parse(jsonString);
    callback(result);
  });
}, 

allBreads: function(callback){
var self = this;
console.log("this is working")
  this.makeRequest("http://localhost:5000/breads", function() {
    if (this.status !== 200)
      return;      
    var jsonString = this.responseText;
    var result = JSON.parse(jsonString);
    console.log(result)
    callback(result);
  });
},

makeDeleteRequest: function(url, callback){
  var request = new XMLHttpRequest();
  request.open("DELETE", url);
  request.setRequestHeader("Content-type", "application/json");
  request.onload = callback;
  request.send();
}

}

module.exports = Sandwiches;