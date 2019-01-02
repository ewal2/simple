var a = document.querySelector("#a").value;
var b = document.querySelector("#b").value;

function suma() {
  var a = document.querySelector("#a").value;
  var b = document.querySelector("#b").value;
  if(a === "" || b === ""){
    document.querySelector("#wynik").innerHTML = "Prosze uzupelnic obie liczby.";
  } else{
    a = parseFloat(a);
    b = parseFloat(b);
    
    var suma = a + b;
    document.querySelector("#wynik").innerHTML = "Wynik dzialania wynosi: " + suma;
  }
}

function roznica() {
  var a = document.querySelector("#a").value;
  var b = document.querySelector("#b").value;
  if(a === "" || b === ""){
    document.querySelector("#wynik").innerHTML = "Prosze uzupelnic obie liczby.";
  } else{
    a = parseFloat(a);
    b = parseFloat(b);
    
    var roznica = a - b;
    document.querySelector("#wynik").innerHTML = "Wynik dzialania wynosi: " + roznica;
  }
}

function iloczyn() {
  var a = document.querySelector("#a").value;
  var b = document.querySelector("#b").value;
  if(a === "" || b === ""){
    document.querySelector("#wynik").innerHTML = "Prosze uzupelnic obie liczby.";
  } else{
    a = parseFloat(a);
    b = parseFloat(b);
    
    var iloczyn = a * b;
    document.querySelector("#wynik").innerHTML = "Wynik dzialania wynosi: " + iloczyn;
  }
}

function iloraz() {
  var a = document.querySelector("#a").value;
  var b = document.querySelector("#b").value;
  if(a === "" || b === ""){
    document.querySelector("#wynik").innerHTML = "Prosze uzupelnic obie liczby.";
  } else{
    a = parseFloat(a);
    b = parseFloat(b);
    
    if(b === 0){
      document.querySelector("#wynik").innerHTML = "Nie wolno dzielic przez 0.";
    }
    else{
      var iloraz = a / b;
      document.querySelector("#wynik").innerHTML = "Wynik dzialania wynosi: " + iloraz;
    }
  }
}
