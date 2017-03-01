var express = require('express');
var app = express();
var orderRouter = express.Router();

var Order = require('../client/src/models/sandwich');
var orders = require("../client/src/models/sandwiches");
// var OrderQuery = require("../client/db/orderQuery.js");
// var query = new OrderQuery();

// API index
orderRouter.get('/orders/api', function(req, res) {
  query.allFromAPI(function(results){
    res.json(results);
  })
});

// index
orderRouter.get('/orders', function(req, res) {
  query.allVisited(function(results){
    res.json(results);
  })
});

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
  })
});

//order by id
orderRouter.get('/orders/:id', function(req, res){
  res.json(orders[req.params.id]);
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
