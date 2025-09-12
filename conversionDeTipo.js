/* Conversion de tipo */

// String
var nombre = "David";

//number
var numero1 = 25

//boolean
var esMaleo = true;

//undefined
var nombre;

//null
var nombre = null;

/* Conversion explicita */

let booleano = Boolean(esMaleo);
let numero = Number(numero1);
let string = String(numero1);

let suma = Number(numero1) + Boolean(esMaleo);

console.log(suma);

/* Ejercicio 1 */

const num1 = '123'
const numConverted = parseInt(num1)

console.log(typeof num1)
console.log(typeof numConverted)