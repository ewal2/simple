let a = document.querySelector("#a");
let b = document.querySelector("#b");
let plusButton = document.querySelector(".plus");
let minusButton = document.querySelector(".minus");
let multiplyButton = document.querySelector(".multi");
let divideButton = document.querySelector(".divide");
let resetButton = document.querySelector(".reset");
let resultDisplay = document.querySelector("p span");


plusButton.addEventListener("click", function(){
let a = parseInt(document.querySelector("#a").value);
let b = parseInt(document.querySelector("#b").value); 
resultDisplay.textContent = a + b;
});

minusButton.addEventListener("click", function(){
let a = parseInt(document.querySelector("#a").value);
let b = parseInt(document.querySelector("#b").value);
  resultDisplay.textContent = a - b;
});


multiplyButton.addEventListener("click", function(){
let a = parseInt(document.querySelector("#a").value);
let b = parseInt(document.querySelector("#b").value);
  resultDisplay.textContent = a * b;
});


divideButton.addEventListener("click", function(){
let a = parseInt(document.querySelector("#a").value);
let b = parseInt(document.querySelector("#b").value);
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

