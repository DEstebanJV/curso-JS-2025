/* Ciclo for of 
este es usado para iterar sobre arrays
y objetos 
por cada elemento de
*/

let list = [1, 2, 3, 4, 5,"pera", "manzana"];

for (let i of list) {
    console.log(i);
}

/* Ciclo for in
este es usado para iterar sobre objetos
y arrays
por cada propiedad de
*/

let lista = {
    "pera": 1,
    "manzana": 2,
    "naranja": 3,
    "uva": 4,
    "mano": 5
}

for (let key in lista) {
    console.log(key);
    console.log(lista[key]);
    console.log(`${key} ${lista[key]}`);

}

/* presentar los datos de la lista */

