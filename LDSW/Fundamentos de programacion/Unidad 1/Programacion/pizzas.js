const comanda = pedido(10,2,2,3,1);
let total = comanda.total;
let pA = comanda.pA;
let pB = comanda.pB;
let pC = comanda.pC;
let pD = comanda.pD;
let cupon = comanda.cupon;

function pedido(cupon,pA,pB,pC,pD){

    if((Number.isNaN(pA)) || (pA < 0) || (pA === undefined)){
        pA=0;
    }
    if((Number.isNaN(pB)) || (pB < 0) || (pB === undefined)){
        pB=0;
    }
    if((Number.isNaN(pC)) || (pC < 0) || (pC === undefined)){
        pC=0;
    }
    if((Number.isNaN(pD)) || (pC < 0) || (pD === undefined)){
        pD=0;
    }
    else{
        console.log("Pedido correcto (mensaje de control)");
    }

    var a= 15;
    var b= 20;
    var c= 25;
    var d= 30;
    var total= (a*pA)+(b*pB)+(c*pC)+(d*pD);

    if(cupon== 10){
        total=total-(total*0.10);
    }
    if(cupon== 20){
        total=total-(total*0.20);
    }
    else{
        total=total;
    }
    return {total: total,pA: pA,pB: pB,pC: pC,pD: pD,cupon: cupon};
}

console.log("Para el pedido de:");
if(pA>0){
    console.log(pA + " pizzas de $15");
} 
if(pB>0){ 
    console.log(pB + " pizzas de $20");
}
if(pC>0){
    console.log(pC + " pizzas de $25");
}
if(pD>0){
    console.log(pD + " pizzas de $30");
}

if(cupon==10){
    console.log("Con el cupon de descuento del 10%");
}
if(cupon==20){
    console.log("Con el cupon de descuento del 20%");
}
if(cupon!=10 && cupon!=20)
{
    console.log("Sin cupon de descuento");
}
console.log("El total a pagar es de: $",total);

