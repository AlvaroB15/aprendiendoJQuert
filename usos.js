/* 
    Para poder acceder a los elementos del html, uno deberia usar js, como por ejemplo:
        
*/

function cambio(){
    var text = document.getElementById("parr");
    text.innerHTML = "Cambiado el Parrafo";
}

// con JQuery seria de esta forma, la cual seria mucho ms abreviada, esto es solo un ejm basico, se ahondara mas adelante

function cambio(){
    
}


window.onload = cambio;
