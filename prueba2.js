function SacarRepetidos(miLista = []){
  listaSinRepetidos = []
  miLista.forEach(function(numerosLista){
      if(listaSinRepetidos.includes(numerosLista) == false){
          listaSinRepetidos.push(numerosLista)
      }
      else {

      }
  })
  return listaSinRepetidos
}
console.log(SacarRepetidos([1,2,3,4,5,6,7,7,8,7,9,1,2]));


function contarRepetidos(miLista = [], numero){
  contador = 0;
  miLista.forEach(function(numerosLista){
    if(numero == numerosLista){
      contador++
    }
  })
  return contador
}
console.log(contarRepetidos([1,2,3,4,5,5,5,6,5,2,1,6], 5));

function agrupar(carrito = []){
  resultado = {}
  listaSinRepetidos.forEach(function(numerosLista){
    let cantidad = contarRepetidos(carrito, numerosLista)
    resultado[numerosLista.toString()] = cantidad
  })
  return resultado
}
console.log(agrupar([1,2,3,4,5,6,7,7,8,7,9,1,2]));

