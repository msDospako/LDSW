function dimensiones(a) {                           // Se crea una funcion que recibe un parametro a (lado del cubo)
    var volumen = 0;                                // Se inicializan las variables volumen y area
    var area = 0;
    area =  a * a;                                  // Se calcula el area del cubo
    volumen = a * a * a;                            // Se calcula el volumen del cubo

    return {area: area,                             // Se retorna un objeto con los valores del area y volumen
            volumen: volumen
        }   
    
}
const result = dimensiones(10);                     // 10 es el valor del lado del cubo (parametro que puede cambiar para obtener diferentes resultados)
let area = result.area;                             // Se obtiene el valor del area
let volumen = result.volumen;                       // Se obtiene el valor del volumen
console.log("El area y volumen de un cubo son:");   // Se imprime el resultado
console.log("area =",area);
console.log("volumen =",volumen);

