var pantalla = document.getElementById('pantalla');
var historial = JSON.parse(localStorage.getItem('historial')) || [];

function agregarNumero(numero) {
    pantalla.value += numero;
}

function agregarOperacion(operacion) {
    pantalla.value += ' ' + operacion + ' ';
}

function borrar() {
    pantalla.value = '';
}

function calcular() {
    try {
        var resultado = eval(pantalla.value);
        pantalla.value = resultado;
        guardarEnHistorial(pantalla.value);
    } catch (e) {
        pantalla.value = 'Error';
    }
}

function guardarEnHistorial(operacion) {
    historial.push(operacion);
    localStorage.setItem('historial', JSON.stringify(historial));
    mostrarHistorial();
}

function mostrarHistorial() {
    var listaHistorial = document.getElementById('lista-historial');
    listaHistorial.innerHTML = '';
    historial.forEach(function(item) {
        var li = document.createElement('li');
        li.textContent = item;
        listaHistorial.appendChild(li);
    });
}

function borrarHistorial() {
    historial = [];
    localStorage.setItem('historial', JSON.stringify(historial));
    mostrarHistorial();
}

mostrarHistorial();
