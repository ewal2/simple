var a = document.querySelector("#a");
var b = document.querySelector("#b");
var plusButton = document.querySelector(".plus");
var minusButton = document.querySelector(".minus");
var multiplyButton = document.querySelector(".multi");
var divideButton = document.querySelector(".divide");
var resetButton = document.querySelector(".reset");
var resultDisplay = document.querySelector("p span");


plusButton.addEventListener("click", function(){
  var a = parseInt(document.querySelector("#a").value);
  var b = parseInt(document.querySelector("#b").value);
  resultDisplay.textContent = a + b;
});

minusButton.addEventListener("click", function(){
  var a = parseInt(document.querySelector("#a").value);
  var b = parseInt(document.querySelector("#b").value);
  resultDisplay.textContent = a - b;
});


multiplyButton.addEventListener("click", function(){
  var a = parseInt(document.querySelector("#a").value);
  var b = parseInt(document.querySelector("#b").value);
  resultDisplay.textContent = a * b;
});


divideButton.addEventListener("click", function(){
  var a = parseInt(document.querySelector("#a").value);
  var b = parseInt(document.querySelector("#b").value);;
  resultDisplay.textContent = a / b;
});

resetButton.addEventListener("click", function(){
reset();
});

function reset(){
  a.value = "";
  b.value = "";
  resultDisplay.textContent = 0;
}


