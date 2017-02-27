// var MongoClient = require("mongodb").MongoClient;


//Change mongo to the Rails API!!!


// var SandwichQuery = function(){
//   this.url = "http://localhost:5000/customers";
// };

// SandwichQuery.prototype = {
//   allFromAPI: function(onQueryFinished){
//     MongoClient.connect(this.url, function(err, db){
//       var collection = db.collection("sandwiches");
//       console.log(collection);
//       collection.find().toArray(function(err, docs){
//         onQueryFinished(docs);
//       });
//     });
//   },

//   addVisited: function(sandwichToAdd, onQueryFinished){
//     MongoClient.connect(this.url, function(err, db){
//       if(db){
//       var collection = db.collection("sandwichesVisited");
//       collection.insert(sandwichToAdd);
//       collection.find().toArray(function(err, docs){
//         console.log(docs);
//         onQueryFinished(docs);
//       });
//     };
//     });
//   },

//   allVisited: function(onQueryFinished){
//     MongoClient.connect(this.url, function(err, db){
//           var collection = db.collection("sandwichesVisited");
//           console.log("returned from sandwichesVisited DB", collection);
//           collection.find().toArray(function(err, docs){
//             onQueryFinished(docs);
//       });
//     });
//   },

//   deleteVisitedSandwiches: function(){
//     console.log("HIT DELETE VISITED ANIMALS")
//     MongoClient.connect(this.url, function(err, db){
//       if (err){
//         console.log("error returned", err);
//       }else{
//           console.log("NO ERROR IN REQ")
//           var collection = db.collection("sandwichesVisited");
//           collection.drop("sandwichesVisited");
//           db.createCollection("sandwichesVisited");
//         }
//       });
//     }

// };


// module.exports = SandwichQuery;