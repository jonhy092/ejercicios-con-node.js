function hola (nombre, miCallback) {
    setTimeout (function (){
        console.log("hola," + nombre);
        miCallback(nombre);

    },1500);
}
// Funcion que habla.
function hablar (callbackHablar){
    setTimeout(function(){
        console.log('bla bla bla bla...');
        callbackHablar(); //llamamos a la funcion callback
    },1000);

}
// funcion conversadora//
function conversacion(nombre, veces, callback){
    if (veces > 0){
        hablar(function (){
            conversacion(nombre, --veces, callback);
        })
    }else {
        adios(nombre, callback);
    }
    
}


function adios (nombre, otroCallback) {
    setTimeout (function(){
        console.log("adios," + nombre);
        otroCallback(nombre);
    },1000);
}

//callback correcto, funcion principal//
console.log('iniciando proceso..');
hola('jona', function(nombre){// recursividad, llamamos a la funcion conversacion//
    conversacion(nombre,3, function(){
        console.log('proceso terminado..');
    });
})
// la recursividad es cuando una funcion se llama a si misma, en este caso, 
// la funcion conversacion se llama a si misma hasta que la condicion de veces sea 0, y luego llama a adios
// la recursividad sirve para evitar el callback hell, que es cuando tenemos muchas funciones anidadas y se vuelve dificil de leer y mantener
// en este caso, la funcion conversacion llama a hablar, que a su vez llama a conversacion, hasta que veces es 0, y luego llama a adios
// esto hace que el codigo sea mas legible y facil de mantener.

//FUNCION PRINCIPAL...ESTO ES UN CALLBACK HELL ANIDADO, QUEDA MUY MAL, Y TRAE PROBLEMAS DE MANTENIMIENTO

/* console.log ("iniciando proceso...");
hola("Jona", function(nombre){
    hablar(function(){
        hablar(function(){
            adios("Jona", function(){
                console.log("proceso terminado...");
            });

        });
    });
}); *///llamamos a la funcion hablar, que a su vez llama a otra funcion hablar, y luego llama a adios, y luego al callback final

//VAMOS A REACOMODAR ESTO PARA QUE QUEDE MAS ORDENADO
//USANDO FUNCIONES NOMBRADAS...

