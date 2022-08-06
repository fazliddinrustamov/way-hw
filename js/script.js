var elForm = document.querySelector(".way-form");
var elInput = document.querySelector(".way-input");
var elBtn = document.querySelector(".way-btn");
var elScoreList = document.querySelector(".score-result");
var elLiFoot = elScoreList.querySelector(".result-item-foot");
var elLiBike = elScoreList.querySelector(".result-item-bike");
var elLiCar = elScoreList.querySelector(".result-item-car");
var elLiTrain = elScoreList.querySelector(".result-item-train");

var minValue = 0;

var footSpeed = 10;
var bikeSpeed = 20;
var carSpeed = 60;
var trainSpeed = 100;

elForm.addEventListener("submit", function(evt){
  evt.preventDefault()

  elInputValue = Number(elInput.value);
  elInput.value = "";

  var footTime = (elInputValue / footSpeed).toFixed(1);
  var bikeTime = (elInputValue / bikeSpeed).toFixed(1);
  var carTime = (elInputValue / carSpeed).toFixed(1);
  var trainTime = (elInputValue / trainSpeed).toFixed(1);

  if (elInputValue <= minValue) {
    alert("Add positive numbers!")
  } else {
    document.querySelector(".result-item-foot").textContent = `${footTime} hours`;
    document.querySelector(".result-item-bike").textContent = `${bikeTime} hours`;
    document.querySelector(".result-item-car").textContent = `${carTime} hours`;
    document.querySelector(".result-item-train").textContent = `${trainTime} hours`;
  }
})