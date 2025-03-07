// Arreglo vacío inicial
let estacionamiento = [];

// Agregar vehículos al estacionamiento
estacionamiento.push("Rojo", "Gris", "Azul", "Amarillo", "Verde");

// Imprimir la lista de vehículos
console.log("Lista de vehículos en el estacionamiento:");
for (let i = 0; i < estacionamiento.length; i++) {
    console.log(`Posición ${i + 1}: ${estacionamiento[i]}`);
}
console.log(`Total de vehículos: ${estacionamiento.length}`);

// Agregar un vehículo blanco
estacionamiento.push("Blanco");

// Imprimir la lista actualizada
console.log("\nLista de vehículos actualizada:");
for (let i = 0; i < estacionamiento.length; i++) {
    console.log(`Posición ${i + 1}: ${estacionamiento[i]}`);
}
console.log(`Total de vehículos: ${estacionamiento.length}`);

// Sustituir el vehículo azul por uno negro, eliminar el rojo y mover los vehículos
let indiceAzul = estacionamiento.indexOf("Azul");
if (indiceAzul !== -1) {
    estacionamiento[indiceAzul] = "Negro";
}
let indiceRojo = estacionamiento.indexOf("Rojo");
if (indiceRojo !== -1) {
    estacionamiento.splice(indiceRojo, 1);
}

// Imprimir la lista actualizada
console.log("\nLista de vehículos actualizada:");
for (let i = 0; i < estacionamiento.length; i++) {
    console.log(`Posición ${i + 1}: ${estacionamiento[i]}`);
}
console.log(`Total de vehículos: ${estacionamiento.length}`);

// Eliminar el último elemento
estacionamiento.pop();

// Imprimir la lista actualizada
console.log("\nLista de vehículos actualizada:");
for (let i = 0; i < estacionamiento.length; i++) {
    console.log(`Posición ${i + 1}: ${estacionamiento[i]}`);
}
console.log(`Total de vehículos: ${estacionamiento.length}`);

// Encontrar la posición del vehículo amarillo
let posicionAmarillo = estacionamiento.indexOf("Amarillo");
if (posicionAmarillo !== -1) {
    console.log(`\nEl vehículo Amarillo se encuentra en la posición ${posicionAmarillo + 1}.`);
} else {
    console.log("\nEl vehículo Amarillo no se encuentra en el estacionamiento.");
}

// Función para buscar un vehículo
function buscarVehiculo(vehiculo) {
    let encontrado = false;
    let posicion = -1;
    for (let i = 0; i < estacionamiento.length; i++) {
        if (estacionamiento[i] === vehiculo) {
            encontrado = true;
            posicion = i + 1;
    break;
    }
    }
    if (encontrado) {
        console.log(`\nEl vehículo ${vehiculo} se encuentra en la posición ${posicion}.`);
    } 
    else {
        console.log(`\nEl vehículo ${vehiculo} no se encuentra en el estacionamiento.`);
    }
}

// Comprobar si el auto amarillo sigue en su puesto
buscarVehiculo("Amarillo");