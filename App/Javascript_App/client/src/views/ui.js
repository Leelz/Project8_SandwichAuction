var MapWrapper = require("../models/mapWrapper.js");
var Sandwiches = require("../models/sandwiches.js");
var Sandwich = require("../models/sandwich.js");

var UI = function(map){ 
  // var offerButton = document.querySelector("#offer-button");
  // offerButton.onclick = this.handleOfferButton.bind(this);

  this.sandwiches = new Sandwiches();

  this.sandwiches.allOrdered(function(result){
    this.populateOrdersHistory(result);
  }.bind(this));

  this.sandwiches.allFillings(function(result){
    this.renderDropDownList(result);
  }.bind(this));

  this.sandwiches.allBreads(function(result){
    this.renderBreadDropDownList(result);
  }.bind(this));

  var submitButton = document.querySelector("#offer-button");
  submitButton.onclick = this.handleSubmitButton.bind(this);

  var submitCustomSandwichButton = document.querySelector("#custom-sandwich");
  submitCustomSandwichButton.onclick = this.handleCustomSubmit.bind(this);

  var newSandwichButton = document.querySelector("#new-sandwich");
  newSandwichButton.onclick = this.createSandwichForm.bind(this);

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

  renderDropDownList: function(fillingsAPI){
    var fillingSelect = document.querySelector("#filling-selector");
    fillingSelect.innerHTML = ""

    var unselectable = document.createElement("option");
    unselectable.innerText = "Filling:"
    unselectable.disabled = true;
    unselectable.selected = true;
    fillingSelect.appendChild(unselectable);

    for (var object of fillingsAPI){
      var fillingChoice = document.createElement("option");
      fillingChoice.innerText = object.filling;
      fillingSelect.appendChild(fillingChoice);
    }
  },

  renderBreadDropDownList: function(breadsAPI){
    var breadSelect = document.querySelector("#bread-selector");
    breadSelect.innerHTML = ""

    var unselectable = document.createElement("option");
    unselectable.innerText = "Bread:"
    unselectable.disabled = true;
    unselectable.selected = true;
    breadSelect.appendChild(unselectable);

    for (var object of breadsAPI){
      var breadChoice = document.createElement("option");
      breadChoice.innerText = object.name;
      breadSelect.appendChild(breadChoice);
    }
  },

  handleSubmitButton: function() {
    var offer = document.querySelector("#offer").value
    var bread = document.querySelector("#bread-selector").value
    var filling = document.querySelector("#filling-selector").value
    var quantity = document.querySelector("#quantity").value

    var ordersTable = document.getElementById("newOrders");

    var row = ordersTable.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = bread;
    cell2.innerHTML = filling;
    cell3.innerHTML = offer;
    cell4.innerHTML = quantity;

    ordersTable.appendChild(row)
  },

  handleCustomSubmit: function() {
   var offer = document.querySelector("#bread-input").value
   var bread = document.querySelector("#filling-input").value
   var filling = document.querySelector("#offer-input").value
   var quantity = document.querySelector("#bread-input").value
   var date = document.querySelector("#date-input").value

   // var newSandwich = {
   //   bread: bread
   //   filling: filling
   //   offer: offer
   //   quantity: quantity
   //   date: date
   // }

   var sandwiches = new Sandwiches();    
   sandwiches.makePost("/orders", newSandwich, function(data){
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
    quantity.id = "bread-input";
    date.id = "date-input";

    breadHeader.textContent = "Bread:" 
    fillingHeader.textContent = "Offer Price:"
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
  },


}

module.exports = UI;