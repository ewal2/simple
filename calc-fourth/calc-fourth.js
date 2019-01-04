document.querySelector(".plus").addEventListener("click", function(){
let a = document.querySelector("#a").value;
let b = document.querySelector("#b").value; 
if(a === "" || b === ""){
  document.querySelector("p span").textContent = "Prosze uzupelnic obie liczby."
}  else {
  a = parseFloat(a);
  b = parseFloat(b);
  document.querySelector("p span").textContent = a + b;  
  }
});

document.querySelector(".minus").addEventListener("click", function(){
let a = document.querySelector("#a").value;
let b = document.querySelector("#b").value; 
if(a === "" || b === ""){
  document.querySelector("p span").textContent = "Prosze uzupelnic obie liczby."
} else{
  a = parseFloat(a);
  b = parseFloat(b);
  document.querySelector("p span").textContent = a - b;
  }
});


document.querySelector(".multi").addEventListener("click", function(){
let a = document.querySelector("#a").value;
let b = document.querySelector("#b").value;
if(a === "" || b === ""){
  document.querySelector("p span").textContent = "Prosze uzupelnic obie liczby."
} else{
  a = parseFloat(a);
  b = parseFloat(b);
  document.querySelector("p span").textContent = a * b;
  }
});


document.querySelector(".divide").addEventListener("click", function(){
let a = document.querySelector("#a").value;
let b = document.querySelector("#b").value;
if(a === "" || b === ""){
  document.querySelector("p span").textContent = "Prosze uzupelnic obie liczby."
} else if(b == 0){
  a = parseInt(a);
  b = parseInt(b);
  document.querySelector("p span").textContent = "Nie wolno dzielic przez 0."  
}
else{
    a = parseFloat(a);
    b = parseFloat(b);
    document.querySelector("p span").textContent = a / b;
}
});

document.querySelector(".reset").addEventListener("click", function(){
reset();
});

function reset(){
  a.value = "";
  b.value = "";
  resultDisplay.textContent = 0;
}

