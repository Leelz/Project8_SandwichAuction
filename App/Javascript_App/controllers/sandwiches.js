var express = require('express');
var app = express();
var customerRouter = express.Router();

var Customer = require('../client/src/models/sandwich');
var customers = require("../client/src/models/sandwiches");
// var CustomerQuery = require("../client/db/customerQuery.js");
// var query = new CustomerQuery();

// API index
customerRouter.get('/customers/api', function(req, res) {
  query.allFromAPI(function(results){
    res.json(results);
  })
});

// index
customerRouter.get('/customers', function(req, res) {
  query.allVisited(function(results){
    res.json(results);
  })
});

//add new visited customer to notebook
customerRouter.post('/customers', function(req, res) {
  var customer = new Customer({
    name: req.body.name,
    country: req.body.country,
    questions: req.body.questions,
    answerText: req.body.answerText,
    image: req.body.image,
    finishingText: req.body.finishingText
  });
  query.addVisited(customer, function(results){
    // res.json(results);
    res.redirect("/");
  })
});

//delete visited customers to reset the app
customerRouter.delete('/customers', function(req, res) {
  query.deleteVisitedCustomers();
  res.json({data: customers});
});


//--------may not need to use the following functions:

//customer by id
customerRouter.get('/customers/:id', function(req, res){
  res.json(customers[req.params.id]);
});


//customer update
customerRouter.put('/customers/:id', function(req, res) {
  var customer = new Customer({
    name: req.body.name,
    country: req.body.country,
    questions: req.body.questions,
    answerText: req.body.answerText,
    image: req.body.image
  });
  customers[req.params.id] = customer;
  res.json({data: countries});
});


//delete specific customer
customerRouter.delete('/customers/:id', function(req, res) {
  countries.splice(req.params.id, 1);
  res.json({data: countries});
});


module.exports = customerRouter;
