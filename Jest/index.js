//npm install jest para poder hacer los test

function suma(numero1, numero2){
    let suma = numero1 + numero2
    return suma
}

function multiplicar(numero1, numero2){
    let multiplicacion = numero1 * numero2
    return multiplicacion
}

function dividir(numero1,numero2){
    let division = numero1 / numero2
    return division
}

function restar(numero1,numero2){
    let resta = numero1 - numero2
    return resta
}

function convertirMayuscula(texto){
    let mayuscula = texto.toUpperCase()
    return mayuscula
}

module.exports = {suma:suma, multiplicar:multiplicar, dividir:dividir, restar:restar, convertirMayuscula:convertirMayuscula}