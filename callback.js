function hola (nombre, miCallback) {
    setTimeout (function (){
        console.log("hola," + nombre);
        miCallback(nombre);

    },1500);
}

function adios (nombre, otroCallback) {
    setTimeout (function(){
        console.log("adios," + nombre);
        otroCallback(nombre);
    },1000);
}
console.log ("iniciando proceso...");
hola("Jona", function(){
    adios("Jona", function(){
        console.log("proceso terminado...");
    })
});
//COMENTRARIOS//
// Callback es una funcion que se pasa como argumento a otra funcion, y se ejecuta despues de que la funcion principal ha terminado su ejecucion,
//  y sirve para evitar que el codigo se ejecute de manera secuencial, y en su lugar, se ejecute de manera asincronica, es decir,
//  que no se bloquee el hilo de ejecucion, y que otras funciones puedan ejecutarse mientras se espera a que la funcion principal termine su ejecucion.
// El problema del callback hell es que el codigo se vuelve dificil de leer y mantener, ya que las funciones se anidan unas dentro de otras,
//  y se pierde la estructura del codigo, y se vuelve dificil de seguir el flujo de ejecucion, y ademas, si se quiere agregar una nueva funcionalidad, 
// se tiene que modificar el codigo existente, lo que puede generar errores y bugs, y ademas, 
// si se quiere cambiar el orden de ejecucion de las funciones, se tiene que modificar todo el codigo, lo que puede generar errores y bugs, y ademas,
//  si se quiere agregar una nueva funcionalidad, se tiene que modificar el codigo existente, lo que puede generar errores y bugs.
// Para evitar el callback hell, se pueden usar promesas o async/await, que son dos formas de manejar la asincronia en javascript,
//  y que permiten escribir codigo mas legible y mantenible, ya que las promesas permiten encadenar las funciones de manera mas clara.    