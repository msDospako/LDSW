
let listaCompra = ["Leche", "huevos", "pan", "yogurt", "frijoles", "pollo", "café", "arroz"];
let listaInvertida = listaCompra.slice().reverse();

// Sustituir elementos
let listaSustituida = listaCompra.slice(); // Crear una copia para no modificar la original

let indiceLeche = listaSustituida.indexOf("Leche");
    if (indiceLeche !== -1) {
        listaSustituida[indiceLeche] = "Leche descremada";
}
let indiceCafe = listaSustituida.indexOf("café");
    if (indiceCafe !== -1) {
        listaSustituida[indiceCafe] = "café descafeinado";
}

// Mostrar las listas
console.log("Lista de compra invertida:", listaInvertida);
console.log("Lista de compra con elementos sustituidos:", listaSustituida);