function actualizarReloj() {
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
    const horaActual = `${horas}:${minutos}:${segundos}`;
    document.getElementById('reloj').textContent = horaActual;
}

actualizarReloj(); // Actualizar el reloj inmediatamente al cargar la página
setInterval(actualizarReloj, 1000); // Actualizar cada segundo