var MapWrapper = require("../models/mapWrapper.js");
var Sandwiches = require("../models/sandwiches.js");
var Sandwich = require("../models/sandwich.js");

var UI = function(map){ 
  // var offerButton = document.querySelector("#offer-button");
  // offerButton.onclick = this.handleOfferButton.bind(this);

  this.sandwiches = new Sandwiches();


//change the following funciton so that it fetches sandwich orders from database
  this.sandwiches.allOrdered(function(result){
    this.populateOrdersHistory(result);
  }.bind(this));
}

UI.prototype = {

  // addSandwichToDb: function(sandwichObject, callback){

  //   var sandwiches = new Sandwiches();

  //   sandwiches.allOrdered(function(previousOrders){
  //     var matches = 0;
  //     var arrayLength = previousOrders.length
  //     for(var order of previousOrders){
  //       if (sandwich.id??? !== sandwichObject.id) {
  //         matches ++;
  //       }
  //     }

  //     if (matches === arrayLength){
  //           // add country to countriesVisited collection in db
  //           var newSandwich = {
  //             name: animalObject.name,
  //             country: animalObject.country,
  //             questions: animalObject.questions,
  //             answerText: animalObject.answerText,
  //             image: animalObject.image,
  //             finishingText: animalObject.finishingText
  //           }
  //           sandwiches.makePost("/animals", newAnimal, function(data){
  //           });
  //         }
  //       }); 
  //   callback(); 
  // },

  // getIndividualOrders: function(orders) {
  //   console.log(orders)
  //   orders.forEach( function(order) {
  //     return order
  //       }
  //     )
  // },


  populateOrdersHistory: function(orders) {

    orders.forEach( function( order ){
      var date = order.date
      var orderedsandwiches = order.orderedsandwiches
      orderedsandwiches.forEach( function( orderedsandwich ) {
        var price = orderedsandwich.sandwich.price
        var quantity = orderedsandwich.sandwich.quantity
        var bread = orderedsandwich.sandwich.bread.name
        var fillingChoicesArray = orderedsandwich.sandwich.fillingchoices
        fillingChoicesArray.forEach( function( fillingchoice ) {
          var filling = fillingchoice.filling.filling
          console.log(filling)

    var table = document.getElementById("orderHistory");

    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = bread;
    cell2.innerHTML = filling;
    cell3.innerHTML = price;
    cell4.innerHTML = quantity;

    table.appendChild(row)
        })
      })
    })
  }
}

module.exports = UI;