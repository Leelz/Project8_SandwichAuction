var MapWrapper = require("../models/mapWrapper.js");


var UI = function(map){ 
  // document.innerHTML = ""
  var goButton = document.querySelector("#go-button");
  goButton.onclick = this.handleGoButton.bind(this);

  var resetButton = document.querySelector("#reset-button");
  resetButton.onclick = this.handleResetButton.bind(this);

  this.countries = new Countries();
  this.animals = new Animals();

  this.countries.allAPI(function(result){
    this.renderCountriesList(result);
  }.bind(this));


  this.animals.allVisited(function(result){
    this.renderNotebookAnimal(result);
  }.bind(this));
  

}

UI.prototype = {
  addHereToDB: function(){
    var countries = new Countries;
    countries.allVisited(function(countriesVisited){
      if (countriesVisited.length === 0){

        navigator.geolocation.getCurrentPosition(function(position) {
        // add dummy country "here" to countriesVisited collection in db
        var here = {
          name: "here",
          coords: [position.coords.latitude, position.coords.longitude],
          arrivalText: "",
          countryFlag: ""
        }

        countries.makePost("/countries", here, function(data){
        });
      });
      }
    })
  },

  renderCountriesList: function(countriesAPI){
    var countriesSelect = document.querySelector("#selector");
    countriesSelect.innerHTML = ""

    var unselectable = document.createElement("option");
    unselectable.innerText = "Country:"
    unselectable.disabled = true;
    unselectable.selected = true;
    countriesSelect.appendChild(unselectable);

    for (var country of countriesAPI){
      var countryChoice = document.createElement("option");
      countryChoice.innerText = country.name;
      countryChoice.value = JSON.stringify(country);
      countriesSelect.appendChild(countryChoice);
    }
  },

  handleGoButton: function(){
    var selectedCountry = document.querySelector("#selector");
    var countryObject = JSON.parse(selectedCountry.value);
    var self = this;
    attenUI.goButton(countryObject)
    var animals = new Animals();
    var animalObject = null;

    animals.allAPI(function(animalsAPI){ 
      for(var animal of animalsAPI){
        if (animal.country === countryObject.name) {
          animalObject = animal;
        }
      }
    });

    var buttonDiv = document.querySelector("#QButtons");
    buttonDiv.style.visibility = "hidden";

  addAnimalToDb: function(animalObject, callback){
    // var selectedCountry = document.querySelector("#selector");
    // var countryObject = JSON.parse(selectedCountry.value);
    var animals = new Animals();

    var animalObject = animalObject;

    // animals.allAPI(function(animalsAPI){ 
    //   for(var animal of animalsAPI){
    //     if (animal.country === countryObject.name) {
    //       animalObject = animal;
    //     }
    //   }
    // });

    animals.allVisited(function(animalsVisited){
      if (animalsVisited.length === 0){
            // add animal to animalsVisited collection in db
            var newAnimal = {
              name: animalObject.name,
              country: animalObject.country,
              questions: animalObject.questions,
              answerText: animalObject.answerText,
              image: animalObject.image,
              finishingText: animalObject.finishingText
            }

            animals.makePost("/animals", newAnimal, function(data){
              console.log("new animals added to db", newAnimal.name);
            }); 
          }
        });

    animals.allVisited(function(animalsVisited){
      var matches = 0;
      var arrayLength = animalsVisited.length
      for(var animal of animalsVisited){
        if (animal.name !== animalObject.name) {
          matches ++;
        }
      }

      if (matches === arrayLength){
        console.log(animalObject.name + " has been visited before. Not added to DB");
            // add country to countriesVisited collection in db
            var newAnimal = {
              name: animalObject.name,
              country: animalObject.country,
              questions: animalObject.questions,
              answerText: animalObject.answerText,
              image: animalObject.image,
              finishingText: animalObject.finishingText
            }
            animals.makePost("/animals", newAnimal, function(data){
            });
          }
        }); 
    callback(); 
  },

     renderNotebookAnimal: function(animalList){
   // filtering out the unique visited animals for photos (may have been visited more than once).
   var visitedAnimals = [];
   for (var animal of animalList){
    visitedAnimals.push(animal);
  }
  console.log("animals visited", visitedAnimals);

  var filterVisitedAnimals = visitedAnimals.filter(function(animal, index, animalList){
    return visitedAnimals.indexOf(animal) === index;
  });

    //filling the notebook with visitedAnimals images
    var notebookPhotos = document.querySelector("#photosDiv");
    notebookPhotos.innerHTML = "";
    for(var animal of filterVisitedAnimals){
      var animalNote = document.createElement("h5");
      animalNote.innerText = animal.name + "\n";
      var photo = document.createElement("img");
      photo.id = "photo"
      photo.src = animal.image;
      notebookPhotos.appendChild(animalNote);
      animalNote.appendChild(photo);
    }
  },

module.exports = UI;