<?php include("header.php") ?>

<script src="scripts/bisiesto.js"></script>
<link rel="stylesheet" href="css/bisiesto.css">
<div class="container">
    <h1>Ejemplo de Javascript</h1>
    <h2>Años bisiestos</h2>

    <input type="number" id="valor1" placeholder="Año inicial">
    <input type="number" id="valor2" placeholder="Año final">
    <input type="number" id="edad" placeholder="Ingresa tu edad">
    <button onclick="procesar()">Calcular y verificar</button>

    <div id="resultado">Esperando valores...</div>
    <div id="mensaje" class="mensaje"></div> <!-- Div para el mensaje -->

</div>
