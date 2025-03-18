const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let x = canvas.width / 5; // Posición inicial x de la pelota
let y = canvas.height / 5; // Posición inicial y de la pelota
let dx = 5; // Velocidad en el eje x
let dy = 3; // Velocidad en el eje y
const radio = 20; // Radio de la pelota

function dibujarPelota() {
    ctx.beginPath();
    ctx.arc(x, y, radio, 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
}

function actualizar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpia el canvas

    dibujarPelota();

  // Rebotar en las paredes horizontales
    if (x + dx > canvas.width - radio || x + dx < radio) {
    dx = -dx;
    }

  // Rebotar en las paredes verticales
    if (y + dy > canvas.height - radio || y + dy < radio) {
    dy = -dy;
    }

    x += dx;
    y += dy;

    requestAnimationFrame(actualizar);
}

actualizar();