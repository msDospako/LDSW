var miArreglo = [101,102,103,104,105,106];
var numero= 5;           
console.log("El arreglo inicial es: ", miArreglo);             // Se imprime el valor del arreglo inicial
console.log("El numero a sumar a cada elemento es: ", numero); // Se imprime el valor del numero a sumar a cada elemento

arreglo(miArreglo,numero);                                     // Se llama a la funcion y se le pasan los parametros

function arreglo(a,b) {                                        // Se define la funcion que recibe un arreglo y un numero
    for (let i = 0; i < a.length; i++) {                       // Se recorre el arreglo                          
        console.log("El elemento numero ",i,"del arreglo es ",a[i]);      
        a[i] = a[i] + b;
        console.log("     su valor posterior a la suma de ",b , "es ",a[i])                  // Se imprime cada elemento del arreglo
    }

    return {a: a
        }   
    
}





