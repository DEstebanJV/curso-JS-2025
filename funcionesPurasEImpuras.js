//Funciones puras
/* Funciones puras son funciones que no modifican el estado de la aplicacion 
siempre produce el mismo resultado
*/

function suma(a, b) {
    return a + b;
}

// funciones impuras
/* Funciones impuras son funciones que modifican el estado de la aplicacion
pueden producir resultados diferentes dependiendo del estado de la aplicacion
*/

let contador = 0;
function incrementarContador() {
     contador += 1
    return contador;
}

console.log(incrementarContador())
console.log(incrementarContador())

