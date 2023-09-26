function buscarRepetidos(miLista = [], numero){
    lista2 = []
    let contador = 0
    miLista.forEach(function(prueba){
        if(numero == prueba){
            contador++
        }
        else{
            
        }
    })
    return contador
}
console.log(buscarRepetidos([1,2,3,4,5,6,7,8,7,7], 7));






















/*let lista1 = [11011,11012,11013,11011,11014,11011]
let numerosRepetidos = []
//array1.forEach((element) => console.log(element));
lista1.forEach(function(numero){
    if(numerosRepetidos.includes(numero)){
  	console.log("Ya esta en la lista")	
  }
  else{
  numerosRepetidos.push(numero);
  
  }
//numerosRepetidos[numero] = (numerosRepetidos[numero] || 0) + 1;
})
console.log(numerosRepetidos)
*/