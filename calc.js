var p1 = document.querySelector(".p1");
var p2 = document.querySelector(".p2");
var plusButton = document.querySelector(".plus");
var minusButton = document.querySelector(".minus");
var multiplyButton = document.querySelector(".multi");
var divideButton = document.querySelector(".divide");
var resetButton = document.querySelector(".reset");
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


multiplyButton.addEventListener("click", function(){
  var p1 = parseInt(document.querySelector(".p1").value);
  var p2 = parseInt(document.querySelector(".p2").value);
  resultDisplay.textContent = p1 * p2;
});


divideButton.addEventListener("click", function(){
  var p1 = parseInt(document.querySelector(".p1").value);
  var p2 = parseInt(document.querySelector(".p2").value);
  resultDisplay.textContent = p1 / p2;
});

resetButton.addEventListener("click", function(){
reset();
});

function reset(){
  p1.value = "";
  p2.value = "";
  resultDisplay.textContent = 0;
}
