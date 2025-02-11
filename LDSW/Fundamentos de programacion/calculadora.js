function calculadora(num1, num2, operacion) {

    var d = 0;

    if (operacion == "suma"){
        d = num1 + num2;
        console.log("suma =", d);
    }

    if (operacion == "resta"){
        d = num1 - num2;
        console.log("resta =", d);
    }
    
    if (operacion == "multiplicacion"){
        d = num1 * num2;
        console.log("multiplicacion =", d);
    }

    if (operacion == "division"){
        if ((num2 == 0) || (num2 === undefined) || (num2 === NaN)){
            console.log("No se puede dividir por 0");
            return;
        }
        else{
        d = num1 / num2;
        console.log("division =", d);
        }
    }
}

// Ejemplo de variables uso de funcion en calculadora

const num1 = 10;
const num2 = 1;
let operacion = "multiplicacion"; 
const resultados = calculadora(num1, num2, operacion)
