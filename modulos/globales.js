//ENTRAR A LA DOCUMENTACION DE NODEJS
// https://nodejs.org/es/docs/
// https://nodejs.org/api/
// https://nodejs.org/api/globals.html#globals_global


setImmediate(function(){
    console.log('hola');
})
//ejemplos de variables globales en nodejs
console.log(global);// esto muestra todas las variables globales que tiene nodejs


console.log(setInterval);// esto muestra la funcion setInterval.
let i=0;
let intervalo = setInterval(function(){
    console.log('hola');
    if(i===3){
        clearInterval(intervalo);
        
    }
    i++;
},1000);

/* setInterval(function(){
    console.log('hola')
}) */
// global es un objeto que esta disponible en cualquier parte del codigo
// console.log(global);
//nos ayuda a optimizar el rendiminiento de nuestra aplicacion.