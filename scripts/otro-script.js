function ejecutar(){
var valor = document.getElementById("valor").value;
var div_elementos = document.getElementById("elemento");

for(let i = 0; 1 < valor; i++){
    div_elementos.innerHTML += '<p>' + i + '</p>';
}

}