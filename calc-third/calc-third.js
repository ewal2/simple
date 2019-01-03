
function oblicz(dzialanie) {
  var a = document.querySelector("#a").value;
  var b = document.querySelector("#b").value;
  if(a === "" || b === ""){
    document.querySelector("#wynik").innerHTML = "Prosze uzupelnic obie liczby.";
  } else{
    a = parseFloat(a);
    b = parseFloat(b);
    
    switch(dzialanie){
      case 1: 
     
      var suma = a + b;
      document.querySelector("#wynik").innerHTML = "Wynik dzialania wynosi: " + suma;

      break;
    }
    
    
  }
}
