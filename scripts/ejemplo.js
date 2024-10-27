//console.log("Hello, world")

function sumar(){
    var valor1 = document.getElementById("valor1").value;
    var valor2 = document.getElementById("valor2").value;

    var result = parseFloat(valor1) + parseFloat(valor2);
    document.getElementById("resultadosuma").innerText = "El Resultado de la suma es " + result;

}

function restar(){
    var valor3 = document.getElementById("valor3").value;
    var valor4 = document.getElementById("valor4").value;

    var result = parseFloat(valor3) - parseFloat(valor4);
    document.getElementById("resultadoresta").innerText = "El Resultado de la resta es " + result;

}