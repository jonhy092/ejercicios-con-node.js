function hola (nombre) {
    return new Promise(function(resolve, reject){
        setTimeout (function (){
        console.log("hola,",nombre);
        resolve(nombre);

    },1500);

    })
    
}
// Funcion que habla.
function hablar (callbackHablar){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
        console.log('bla bla bla bla...');
        //resolve(callbackHablar)
        reject('hay un error')
    },2000);

    })
    

}

function adios (nombre) {
    return new Promise(function(resolve, reject){
         setTimeout (function(){
        console.log("adios,", nombre);
        resolve(nombre);
    },1000);

    })
   
}


console.log('iniciando el proceso...')
hola('jona')
    .then(hablar)
    .then(adios)
    .then((nombre)=>{
        console.log('terminando el proceso...')
   
    })
     .catch (error =>{
        console.log('error capturado', error)
    })

//COMENTARIOS SOBRE LAS PROMESAS.
//las promesas son sirven para evitar el callback hell, que es cuando tenemos muchas funciones anidadas y se vuelve dificil de leer y mantener
// .then es cuando la promesa se cumple, y .catch es cuando la promesa no se cumple
// en este caso, la funcion hola devuelve una promesa, que cuando se cumple, llama a la funcion hablar, que tambien devuelve una promesa, que cuando se cumple, llama a la funcion adios, que tambien devuelve una promesa, que cuando se cumple, ejecuta el ultimo .then
// si alguna de las promesas no se cumple, se ejecuta el .catch
// esto hace que el codigo sea mas legible y facil de mantener.