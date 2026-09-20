
let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;

const ALTO_GATO = 60;
const ANCHO_GATO = 40;
const ALTO_COMIDA = 20;
const ANCHO_COMIDA = 20;

let puntaje = 0;


let tiempo = 10;

let intervalo;

function graficarGato() {

    graficarRectangulo(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, "orange");
}

function graficarComida() {

    graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, "black");
}

function iniciarJuego() {
    gatoX = canvas.width / 2;
    gatoY = canvas.height / 2;
    comidaX = canvas.width - 20;
    comidaY = canvas.height - 20;
    graficarGato();
    graficarComida();
    intervalo = setInterval(restarTiempo, 1000);
}

function graficarRectangulo(x, y, ancho, alto, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
}

function limpiarCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

}

function moverIzquierda() {
    gatoX = gatoX - 10;
    limpiarCanvas();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverDerecha() {
    gatoX = gatoX + 10;
    limpiarCanvas();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverArriba() {
    gatoY = gatoY - 10;
    limpiarCanvas();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverAbajo() {
    gatoY = gatoY + 10;
    limpiarCanvas();
    graficarGato();
    graficarComida();
    detectarColision();
}

function detectarColision() {
    if (gatoX + ANCHO_GATO > comidaX
        && gatoX < comidaX + ANCHO_COMIDA
        && gatoY + ALTO_GATO > comidaY
        && gatoY < comidaY + ALTO_COMIDA) {
        //alert("Has atrapado la comida!!!!!");
        aparecerComida();
        puntaje = puntaje + 1;
        mostrarEnSpan("puntos", puntaje);

        if (puntaje == 6 && tiempo > 0) {
            alert("¡Felicidades! Has ganado el juego.");
            clearInterval(intervalo);
        }

    }
}

function aparecerComida() {
    comidaX = generarAleatorio(0, canvas.width - ANCHO_COMIDA);
    comidaY = generarAleatorio(0, canvas.height - ALTO_COMIDA);
    actualizarJuego();
}

function actualizarJuego() {
    limpiarCanvas();
    graficarGato();
    graficarComida();
    detectarColision();

}

function restarTiempo() {
    tiempo = tiempo - 1;
    mostrarEnSpan("tiempo", tiempo);

    if (tiempo == 0 && puntaje < 6) {
        alert("GAME OVER");
        clearInterval(intervalo);
    }
}

function reiniciarJuego() {
    puntaje = 0;
    tiempo = 10;
    mostrarEnSpan("puntos", puntaje);
    mostrarEnSpan("tiempo", tiempo);
    clearInterval(intervalo);
    iniciarJuego();
    actualizarJuego();
}