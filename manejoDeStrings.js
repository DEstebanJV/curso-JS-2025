let string = string("Hola a todos"); 
let cuerpo1 = "Hola";
let cuerpo2 = "a todos";
let concatenacion = cuerpo1 + " " + cuerpo2;
let concatenacion2 = `${cuerpo1} ${cuerpo2}`;

console.log(concatenacion2)

//Propiedades
/* 
length: devuelve la longitud de la cadena
charAt(index): devuelve el caracter en la posicion especificada
indexOf(string): devuelve la posicion de la primera aparicion de la cadena especificada
lastIndexOf(string): devuelve la posicion de la ultima aparicion de la cadena especificada
substring(inicio, fin): devuelve una parte de la cadena
toLowerCase(): devuelve una copia de la cadena en minusculas
toUpperCase(): devuelve una copia de la cadena en mayusculas
trim(): elimina espacios en blanco al inicio y al final de la cadena
valueOf(): devuelve el valor de la cadena como un objeto
 */
console.log('propiedad length')
console.log(string.length)
console.log('propiedad charAt')
console.log(string.charAt(0))
console.log('propiedad indexOf')
console.log(string.indexOf("a"))
console.log('propiedad lastIndexOf')
console.log(string.lastIndexOf("a"))
console.log('propiedad substring')
console.log(string.substring(0, 5))
console.log('propiedad toLowerCase')
console.log(string.toLowerCase())
console.log('propiedad toUpperCase')
console.log(string.toUpperCase())
console.log('propiedad trim')
console.log(string.trim())
console.log('propiedad valueOf')
console.log(string.valueOf())

