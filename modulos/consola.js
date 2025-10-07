//VEAMOS lOS USOS DE LA CONSOLA.
console.info('algo');
console.warn('algo');
var tabla ={
    a:1,
    b:2,
    c:'pepe'
}


console.table(tabla);

function funcion1(){
    console.log('Empezamos funcion 1');
     console.group('funcion 1');
     funcion2();
     console.groupEnd('funcion 1');
}
function funcion2(){
    console.log('Empezamos funcion 2');
    console.group('funcion 2');
    console.groupEnd('terminamos funcion 2');
}
funcion1();
//USO DE COUNT PARA CONTAR VECES QUE SE EJECUTA ALGO
console.count('veces');
console.count('veces');
console.count('veces'); 