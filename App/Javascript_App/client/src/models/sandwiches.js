var Sandwich = require("./sandwich");

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
console.log("this works")
  this.makeRequest("http://localhost:5000/customers", function() {
    if (this.status !== 200)
      return;      
    var jsonString = this.responseText;
    var result = JSON.parse(jsonString);
    console.log(result)
    callback(result);
  });
}, 

// allAPI: function(callback){
//   var self = this;
//   this.makeRequest("http://localhost:5000/customers", function(){
//     if(this.status !== 200) 
//       return;
//     var jsonString = this.responseText;
//     var results = JSON.parse(jsonString);
//     var sandwichesAPI = self.populateDropDownList(results);
//     callback(countriesAPI);
//   })
// },

// populateDropDownList: function(results){
//   var sandwichFillings = [];
//   for (var result of results){
//     var country = new Country (result);
//   Countries.push(country);
//   }
//   return Countries;
// }


}

module.exports = Sandwiches;