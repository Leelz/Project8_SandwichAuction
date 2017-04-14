var express = require('express');
var app = express();
var orderRouter = express.Router();

var orders = require("../client/src/models/sandwiches");

//add new visited order to notebook
orderRouter.post('/orders', function(req, res) {
  var order = new Order({
    date: req.body.date,
    bread: req.body.bread,
    filling: req.body.filling,
    price: req.body.price,
    quantity: req.body.quantity,
  });
  res.redirect("/orders");
});

//order by id
orderRouter.get('/orders/:id', function(req, res){
  res.json(orders[req.params.id]);
});

//delete order 
orderRouter.delete('/order:id', function(req, res) {
  query.deleteOrder();
  res.json({data: orders});
});


//order update
orderRouter.put('/orders/:id', function(req, res) {
  var order = new Order({
    name: req.body.name,
    country: req.body.country,
    questions: req.body.questions,
    answerText: req.body.answerText,
    image: req.body.image
  });
  orders[req.params.id] = order;
  res.json({data: countries});
});

module.exports = orderRouter;
