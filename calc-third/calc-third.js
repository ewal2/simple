
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
     
          document.querySelector("#wynik").innerHTML = "Wynik dzialania wynosi: " + (a + b);

      break;
        
      case 2: 
     
          document.querySelector("#wynik").innerHTML = "Wynik dzialania wynosi: " + (a - b);

      break;
        
      case 3: 
     
          document.querySelector("#wynik").innerHTML = "Wynik dzialania wynosi: " + (a * b);

      break;
        
      case 4: 

        if(b === 0){
            document.querySelector("#wynik").innerHTML = "Nie wolno dzielic przez 0.";
        }
        else{
           
            document.querySelector("#wynik").innerHTML = "Wynik dzialania wynosi: " + (a / b);
        }
        
      break;
        
    }
  }
}
