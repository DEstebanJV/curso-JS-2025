/* Juego de adivinansas */

const numeroSecreto = Math.floor(Math.random() * 10 + 1 );
//navegador
//const numeroDeJugador = parseInt(prompt('Escribe un numero entre 1 y 10'))
//terminal
const numeroDeJugador = parseInt(Math.floor(Math.random() * 10 + 1 ));

console.log('¡Juegando con ' + numeroDeJugador);

if (numeroDeJugador === numeroSecreto) {
    console.log('¡Ganaste!');
}else {
    console.log('¡Perdiste!');
}