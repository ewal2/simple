
var plusButton = document.querySelector(".plus");
var minusButton = document.querySelector(".minus");
var multiplyButton = document.querySelector(".multi");
var divideButton = document.querySelector(".divide");
var resultDisplay = document.querySelector("p span");
var resetButton = document.querySelector(".reset");



plusButton.addEventListener("click", function(){
  var p1 = parseInt(document.querySelector(".p1").value);
  var p2 = parseInt(document.querySelector(".p2").value);
  resultDisplay.textContent = p1 + p2;
});

minusButton.addEventListener("click", function(){
  var p1 = parseInt(document.querySelector(".p1").value);
  var p2 = parseInt(document.querySelector(".p2").value);
  resultDisplay.textContent = p1 - p2;
});
