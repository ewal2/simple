let plusButton = document.querySelector(".plus");
let minusButton = document.querySelector(".minus");
let multiplyButton = document.querySelector(".multi");
let divideButton = document.querySelector(".divide");
let resetButton = document.querySelector(".reset");
let resultDisplay = document.querySelector("p span");


// parseFloat DRY

plusButton.addEventListener("click", function(){
let a = document.querySelector("#a").value;
let b = document.querySelector("#b").value; 
if(a === "" || b === ""){
  resultDisplay.textContent = "Prosze uzupelnic obie liczby."
}  else {
  a = parseFloat(a);
  b = parseFloat(b);
  resultDisplay.textContent = a + b;  
  }
});

minusButton.addEventListener("click", function(){
let a = document.querySelector("#a").value;
let b = document.querySelector("#b").value; 
if(a === "" || b === ""){
  resultDisplay.textContent = "Prosze uzupelnic obie liczby."
} else{
  a = parseFloat(a);
  b = parseFloat(b);
  resultDisplay.textContent = a - b;
  }
});


multiplyButton.addEventListener("click", function(){
let a = document.querySelector("#a").value;
let b = document.querySelector("#b").value;
if(a === "" || b === ""){
  resultDisplay.textContent = "Prosze uzupelnic obie liczby."
} else{
  a = parseFloat(a);
  b = parseFloat(b);
  resultDisplay.textContent = a * b;
  }
});


divideButton.addEventListener("click", function(){
let a = document.querySelector("#a").value;
let b = document.querySelector("#b").value;
if(a === "" || b === ""){
  resultDisplay.textContent = "Prosze uzupelnic obie liczby."
} else if(b == 0){
  a = parseInt(a);
  b = parseInt(b);
  resultDisplay.textContent = "Nie wolno dzielic przez 0."  
}
else{
    a = parseFloat(a);
    b = parseFloat(b);
    resultDisplay.textContent = a / b;
}
});

resetButton.addEventListener("click", function(){
reset();
});

function reset(){
  a.value = "";
  b.value = "";
  resultDisplay.textContent = 0;
}

