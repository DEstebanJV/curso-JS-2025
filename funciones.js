/* Anatomia de una funcion */

function name(param1, param2) {
    // codigo
}

function aplicacionDeDescuento(precio,  descuento) {
    return precio * (1 - descuento);
}

let precio = 100
let descuento = 0.2
let precioConDescuento = aplicacionDeDescuento(precio, descuento)

console.log(`El precio original de la prenda es de ${precio}
     y el precio con descuento es ${precioConDescuento}`)

/* Definicion de un metodo en un objeto */

let jugador = {
    nombre: "David",
    edad: 25,
    genero: "masculino",
    color: "negro",
    estado: "vivo",
    hablar() {
        console.log("Hola, soy " + this.nombre);
    }
}

jugador.hablar(); //llamado del metodo 