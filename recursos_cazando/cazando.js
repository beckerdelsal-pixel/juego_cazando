
let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

let gatoX =0;
let gatoY =0;
let comidaX=0;
let comidaY=0;

const ALTO_GATO=60;
const ANCHO_GATO=40;
const ALTO_COMIDA=20;
const ANCHO_COMIDA=20;

function graficarGato() {
    ctx.fillStyle = "orange";
    ctx.fillRect(gatoX, gatoY, ANCHO_GATO, ALTO_GATO
    );
}

function graficarComida() {
    ctx.fillStyle = "black";
    ctx.fillRect(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA);
}

function iniciarJuego() {
    gatoX= canvas.width/2;
    gatoY= canvas.height/2;

    graficarGato();
    graficarComida();
}