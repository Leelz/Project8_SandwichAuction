var MapWrapper = require("../models/mapWrapper.js");
var Sandwiches = require("../models/sandwiches.js");

var UI = function(map){ 

  this.sandwiches = new Sandwiches();

  this.sandwiches.allOrdered(function(result){
    this.populateOrdersHistory(result);
  }.bind(this));

  var submitCustomSandwichButton = document.querySelector("#custom-sandwich");
  submitCustomSandwichButton.onclick = this.handleCustomSubmit.bind(this);

  var newSandwichButton = document.querySelector("#new-sandwich");
  newSandwichButton.onclick = this.createSandwichForm.bind(this);
}

UI.prototype = {

  handleCustomSubmit: function() {
   var bread = document.querySelector("#bread-input").value
   var filling = document.querySelector("#filling-input").value
   var price = document.querySelector("#offer-input").value
   var quantity = document.querySelector("#quantity-input").value
   var date = document.querySelector("#date-input").value

   var newSandwich = {
    order: {
         bread: bread,
         filling: filling,
         price: price,
         quantity: quantity,
         date: date
      }
    }

   var sandwiches = new Sandwiches();    
   sandwiches.makePost("http://localhost:5000/orders", newSandwich, function(data){
     console.log(data);
   });
   
  },

  createSandwichForm: function() {

    var fillingFormDiv = document.createElement('fillingFormDiv');
    var breadFormDiv = document.createElement('breadFormDiv');
    var offerFormDiv = document.createElement('offerFormDiv');
    var quantityFormDiv = document.createElement('quantityFormDiv');
    var dateFormDiv = document.createElement('dateFormDiv');

    var breadHeader = document.createElement('h3');
    var fillingHeader = document.createElement('h3');
    var priceHeader = document.createElement('h3');
    var quantityHeader = document.createElement('h3');
    var dateHeader = document.createElement('h3');

    var bread = document.createElement('input');
    var filling = document.createElement('input');
    var price = document.createElement('input');
    var quantity = document.createElement('input');
    var date = document.createElement('input');

    bread.setAttribute('type',"text");
    filling.setAttribute('type',"text");
    price.setAttribute('type',"text");
    quantity.setAttribute('type',"text");
    date.setAttribute('type',"text");

    bread.id = "bread-input";
    filling.id = "filling-input";
    price.id = "offer-input";
    quantity.id = "quantity-input";
    date.id = "date-input";

    breadHeader.textContent = "Bread:" 
    fillingHeader.textContent = "Filling:"
    priceHeader.textContent = "Quantity:" 
    quantityHeader.textContent = "New Offer:"
    dateHeader.textContent = "Today's Date:"

    breadFormDiv.appendChild(breadHeader)
    breadFormDiv.appendChild(bread)
    fillingFormDiv.appendChild(fillingHeader)
    fillingFormDiv.appendChild(filling)
    offerFormDiv.appendChild(priceHeader)
    offerFormDiv.appendChild(price)
    quantityFormDiv.appendChild(quantityHeader)
    quantityFormDiv.appendChild(quantity)
    dateFormDiv.appendChild(dateHeader)
    dateFormDiv.appendChild(date)

    subContainer = document.querySelector("#sub-container")
    topContainer = document.querySelector("#top-container")

    subContainer.appendChild(breadFormDiv);
    subContainer.appendChild(fillingFormDiv);
    subContainer.appendChild(offerFormDiv);
    subContainer.appendChild(quantityFormDiv);
    subContainer.appendChild(dateFormDiv);
  },

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

      sp

          var table = document.getElementById("orderHistory");

          var row = table.insertRow(0);
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);
          var cell4 = row.insertCell(3);
          // var cell5 = row.insertCell(4);

          cell1.innerHTML = bread;
          cell2.innerHTML = filling;
          cell3.innerHTML = price;
          cell4.innerHTML = quantity;
          // cell5.appendChild(button);
          
          table.appendChild(row)
        })
      })
    })
  },

  // handleDeleteButton: function() {
  //   this.sandwiches.makeDeleteRequest("/orders/", function(){
  //     console.log("countriesVisited dropped");
  //   });
  // },


}

module.exports = UI;