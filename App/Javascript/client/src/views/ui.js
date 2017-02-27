// var MapWrapper = require("../models/mapWrapper.js");


var UI = function(map){ 
  // var offerButton = document.querySelector("#offer-button");
  // offerButton.onclick = this.handleOfferButton.bind(this);

  this.sandwiches = new Sandwiches();


//change the following funciton so that it fetches sandwich orders from database
  this.sandwiches.allAPI(function(result){
    this.renderSandwichesList(result);
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

  renderPreviousOrders: function(orderList){
    console.log(orderList)
    var options = orderList.filling.map(function(filling, index){
             return <tr key={index}>{filling}</tr>})

    var options2 = orderList.bread.map(function(bread, index){
             return <tr>{bread}</tr>})

    var options3 = orderList.price.map(function(price, index){
             return <tr>{price}</tr>})

    var options4 = orderList.quantity.map(function(quantity, index){
             return <tr>{quantity}</tr>})
    
      if (!orderList.players) {
        return <h4>No sandwiches</h4>
      }
      return (
        <div>
          <table>
            <tr>
              <th>Filling</th>
              <th>Bread</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
            <tr>
            <td>
              {options}
            </td>
            <td>
              {options2}
            </td>
            <td>
              {options3}
            </td>
            <td>
              {options4}
            </td>
            </tr>
          </table>
        </div>
    );
  };

}

module.exports = UI;