const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const colores = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 'silver', 'teal', 'white', 'yellow'];

function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generarColorAleatorio() {
    return colores[generarNumeroAleatorio(0, colores.length - 1)];
}

function dibujarFormaAleatoria() {
    const x = generarNumeroAleatorio(0, canvas.width);
    const y = generarNumeroAleatorio(0, canvas.height);
    const tamaño = generarNumeroAleatorio(10, 100);
    const color = generarColorAleatorio();

    ctx.fillStyle = color;

  const forma = generarNumeroAleatorio(1, 3); // 1: círculo, 2: rectángulo, 3: triángulo

    switch (forma) {
    case 1: // Círculo
        ctx.beginPath();
        ctx.arc(x, y, tamaño / 2, 0, 2 * Math.PI);
        ctx.fill();
    break;
    case 2: // Rectángulo
        ctx.fillRect(x, y, tamaño, tamaño);
    break;
    case 3: // Triángulo
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + tamaño, y + tamaño);
        ctx.lineTo(x - tamaño, y + tamaño);
        ctx.fill();
    break;
    }
}

function generarObraDeArte() {
  const cantidadDeFormas = 20; // Puedes ajustar la cantidad de formas
    for (let i = 0; i < cantidadDeFormas; i++) {
    dibujarFormaAleatoria();
    }
}

generarObraDeArte();