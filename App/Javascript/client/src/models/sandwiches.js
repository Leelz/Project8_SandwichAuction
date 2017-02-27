var Sandwich = require("./sandwich");

var Sandwiches = function(){

}

Sandwiches.prototype = {
  makeRequest: function(url, callback){
    var request = new XMLHttpRequest();
    request.open("GET", url, false);
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

  allSandwiches: function(callback){
    var self = this;
    this.makeRequest("http://localhost:3000/sandwiches", function(){
      if(this.status !== 200) return;
      var jsonString = this.responseText;
      var results = JSON.parse(jsonString);
      var sandwichesDB = self.populateSandwichesList(results);
      callback(sandwichesDB);
    })
  },

  allAPI: function(callback){
  var self = this;
    this.makeRequest("http://localhost:3000/sandwiches/api", function() {
      if (this.status !== 200){
        return;
      }
      var jsonString = this.responseText;
      var result = JSON.parse(jsonString);
      callback(result);
    });
  }, 

  populateSandwichesList: function(results){
    var sandwiches = [];
    for (var result of results){
      var sandwich = new Sandwich (result);
    sandwiches.push(sandwich);
    }
    return sandwiches;
  }

}

module.exports = Sandwiches;