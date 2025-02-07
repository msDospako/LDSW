function series(a,b) {                           

    for (let i = a; i < 100;i+=b) {               
        
        console.log(i);                         
    }                           

    return {a: a,                             
            b: b
        }   
    
}
const result = series(0,2);                     
let inicio = result.a;                             
let incremento = result.b; 

console.log("Esta es la serie");
console.log("que inicia en =",inicio);
console.log("con incrementos de =",incremento);
console.log("y termina antes de llegar a 100");
