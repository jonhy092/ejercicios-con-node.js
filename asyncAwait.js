async function hola (nombre) {
    return new Promise(function(resolve, reject){
        setTimeout (function (){
        console.log("hola,",nombre);
        resolve(nombre);

    },1500);

    })
    
}
// Funcion que habla.
async function hablar (callbackHablar){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
        console.log('bla bla bla bla...');
        resolve(callbackHablar)
        //reject('hay un error')
    },2000);

    })
    

}

async function adios (nombre) {
    return new Promise(function(resolve, reject){
         setTimeout (function(){
        console.log("adios,", nombre);
        resolve(nombre);
    },1000);

    })
   
}
async function main(){
    await hola('jona');
    await hablar();
    await hablar();
    await adios('jona');
    console.log('Termianmos el proceso...')
}
main();
// COMENTARIOS SOBRE ASYNC AWAIT://
// async await es una forma mas facil de manejar las promesas, ya que hace que el codigo sea mas legible y facil de mantener
// async se usa para declarar una funcion asincrona, y await se usa para esperar a que una promesa se resuelva
// en este caso, la funcion main es asincrona, y dentro de ella usamos await para esperar a que cada una de las funciones se resuelvan antes de pasar a la siguiente
// esto hace que el codigo sea mas legible y facil de mantener, ya que no tenemos que usar .then y .catch
// tambien es mas facil de manejar los errores, ya que podemos usar try y catch dentro de la funcion asincrona
// en resumen, async await es una forma mas facil de manejar las promesas y hacer que el codigo sea mas legible y facil de mantener