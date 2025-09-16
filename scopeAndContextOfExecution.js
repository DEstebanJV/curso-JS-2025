/* Contexto de ejecucion  y scope*/
/* Descripcion: 

Un contexto de ejecucion es un ambiente de ejecucion de un programa. 
Es el conjunto de variables, funciones, objetos, etc. que son accesibles en un programa.

Un scope es un ambiente de ejecucion de un bloque de código. 
Es el conjunto de variables, funciones, objetos, etc. que son accesibles dentro de un bloque de código.

*/

/* Existen dos tipos de contexto de ejecucion
1. Global
2 function execution context
*/

//global
var data1 = "hola"; // global

console.log(this);

//function execution context
const data2 = "Hola fuera de la funcion"
function funcion() {
    const data2 = "hola dentro de funcion";
    // debugger verificar el contexto de ejecucion antes de su eliminacion
    console.log(data2)
    console.log(this);
}

funcion();