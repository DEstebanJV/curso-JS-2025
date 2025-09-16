/* un closure es una funcion que tiene acceso a variables de su entorno de ejecucion 
incluso despues de que esa funcion haya terminado de ejecutarse

ambito lexico: cada vez que se declara una funcion, crea su propio ambito lexico y puede acceder a las 
variables dentro de ese ambito y a las variables en ambito superiores
*/

function crearCajaDeAhorro(){
    let ahorro = 0

    return function incrementarahorro(agregarDinero)  {
        ingreso = agregarDinero
        ahorro += agregarDinero
        console.log(`Tienes ahora en tu caja de ahorro ${ahorro} ingresaste ${ingreso}`)
    }
}

const Micaja = crearCajaDeAhorro()

Micaja(10)
Micaja(20)
Micaja(30)
Micaja(40)

/* Ej 2 */
