
let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

function graficarGato() {
    ctx.fillStyle = "orange";
    ctx.fillRect(canvas.width/2, canvas.height/2, 40, 60);
}