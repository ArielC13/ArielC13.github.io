//1) Hacer una funcion que recibe 3 parametros y devuelva un valor fijo 123 (numero)

/*function miFuncion (valor1,valor2,valor3){
    return 123;
}
console.log(miFuncion(20,30,40));
*/
//2) Hacer una funcion anonima que reciba 2 numeros y devuelva la resta de los mismos

/*let miResta = function(numero1,numero2){
    return numero1 - numero2
}
console.log(miResta(50,15));
*/

//3) Hacer una funcion anonima que reciba un nombre, una edad y devuelva un texto que sea "Hola,{nombre}, usted tiene {años} años".
//Invocar a la funcion y mostrar resultado en la consola

/*let miFuncion2 = function(nombre,edad){
    console.log('Hola,',nombre,',','usted tiene',edad,'años');
}
miFuncion2('Ariel', 26);
*/
//4) Crear una lista vacia y añadirle 3 textos diferentes (la lista debe tener 3 elementos).
//Mostrar el contenido de la lista en la consola
/*
miLista = [];
miLista.push('Hola');
miLista.push('Perro');
miLista.push('Como estas');
console.log(miLista);
*/

//5) Crear una funcion anonima que reciba un texto y un numero. Debe devolver una lista con N veces el texto que se ingresó.
//Por ejemplo:
//texto = 'pepe'
//numero = 3
//La funcion debe devolver{'pepe','pepe','pepe'}


/*let miFuncion3 = function(texto,numero){
    let miLista2 = [];
    for (let i = 0; i < numero; i++){
        miLista2.push(texto)
   }
    return miLista2;
}

console.log(miFuncion3('Juan', 6));
*/

//6) Crear una funcion que reciba una lista de textos y los muestre uno por uno en la consola.
//Usar la sentencia "forEach"

/*function funcionTextos(){
    let listaTexto = ['juan', 'pepe','pedro','raul','antonio','miguel']
    listaTexto.forEach(function(texto){
        let palabrasSeparadas = texto
        console.log(palabrasSeparadas)
   })
}
funcionTextos();
*/
//7) Crear una funcion que reciba una lista de textos y los muestre uno por uno en la consola.
// Usar la sentencia "for"

/*function funcionTextos2(){
    let listaTexto = ['ariel', 'juan','sandro','miguel','rodrigo']
    for (let i = 0; i < listaTexto.length; i++){
        console.log(listaTexto[i])
    }
}
funcionTextos2();
*/

//8) Crear una funcion que reciba una lista de textos y devuelva una lista
//con todos los textos convertidos a mayuscula
// Nota: usar el metodo .toUpperCase() para convertir un texto a mayuscula

function funcionMayus(){
    listaTexto = ['hola','perro','juan','raul']
    listaTexto.forEach(function(texto){
        let textoMayus = texto.toUpperCase();
        console.log(textoMayus)
});
}
funcionMayus();
