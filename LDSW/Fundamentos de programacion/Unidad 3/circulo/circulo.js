
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 100;

let angulo= 0;

function animacion() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpia el canvas
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, angulo, false); // Dibuja un arco de circunferencia
    ctx.lineWidth = 3; // Ancho de la línea
    ctx.stroke();
    
  angulo += 0.01; // Incrementa el ángulo

  if (angulo < 2 * Math.PI) { 
    requestAnimationFrame(animacion); // Continúa la animación se realiza la llamada a esta función ya que la funcion setInterval() o setTimeout() no son recomendables para animaciones

    }
    else {
        angulo = 0;
        requestAnimationFrame(animacion);
    }
}

animacion();
