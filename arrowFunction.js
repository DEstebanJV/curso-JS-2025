/* arrow function */

const persona = {
    name: "ben",
    messageWithTradicionalFunction: function (message){
        console.log(`${this.name} and message ${message}`);
    },
    messageWithArrowFunction: (message) => {
        console.log(`${persona.name} and message ${message}`);
    }
}

persona.messageWithTradicionalFunction("hola");
persona.messageWithArrowFunction("hola con arrow function");


/* Arrow function as a parameter return implicitly 
si es solo un parametro no necesita parentecis*/
let comida = alimento => alimento

console.log(comida("manzana"))

