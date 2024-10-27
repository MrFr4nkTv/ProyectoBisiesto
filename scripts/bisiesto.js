function procesar() {
    var valor1 = document.getElementById("valor1").value;
    var valor2 = document.getElementById("valor2").value;
    var edad = document.getElementById("edad").value;
    var resultado = document.getElementById("resultado");

    valor1 = parseInt(valor1);
    valor2 = parseInt(valor2);
    edad = parseInt(edad); 

    if (!valor1 || !valor2 || !edad) {
        alert("Por favor, ingresa un intervalo de años y tu edad.");
        return;
    }

    if (edad > 100) {
        alert("Por favor, ingresa una edad válida (no más de 100 años).");
        return;
    }

    var anioNacimiento = new Date().getFullYear() - edad;
    var mensajeBisiesto = ""; 

    if ((anioNacimiento % 4 == 0 && anioNacimiento % 100 != 0) || (anioNacimiento % 400 == 0)) {
        mensajeBisiesto = "Naciste en año bisiesto";
    } else {
        mensajeBisiesto = "No naciste en año bisiesto";
    }

    alert(mensajeBisiesto);

    generarListaAnios(valor1, valor2, anioNacimiento);
}

function generarListaAnios(valor1, valor2, anioNacimiento) {
    var listaanio = ""; 
    var resultado = document.getElementById("resultado");

    for (var anio = valor1; anio <= valor2; anio++) {
        if ((anio % 4 == 0 && anio % 100 != 0) || (anio % 400 == 0)) {
          
            if (anio === anioNacimiento) {
                listaanio += "<p class='nacimiento'>" + anio + " - Naciste en este año y es bisiesto</p>";
            } else {
                listaanio += "<p class='bisiesto'>" + anio + "</p>";
            }
        } else {
            if (anio === anioNacimiento) {
                listaanio += "<p class='nacimiento'>" + anio + " - Naciste en este año y no es bisiesto</p>";
            } else {
                listaanio += "<p>" + anio + "</p>";
            }
        }
    }


    resultado.innerHTML = listaanio;
}
