//Ejercicio 1

function Suma(Numero1,Numero2,Numero3){
    Suma = Numero1 + Numero2 + Numero3
    return Suma;
}
console.log('El resultado de la suma es: ' + Suma(20,30,50));

//Ejercicio 2

let ListaVacia = [];
ListaVacia.push('Hola');
ListaVacia.push(66);
ListaVacia.push(35);
console.log(ListaVacia);

//Ejercicio 3

let Perro = {
    raza: 'labrador',
    peso: 35,
    edad: 5
}

console.log(Perro);
console.log(Perro.raza);
console.log(Perro.peso);
console.log(Perro.edad);

//Ejercicio 4

let Mascota = {
    tipo: 'gato',
    Hambre: function(despierto){
        if (despierto){
            return 'Pide comida'
        }
        else{
            return 'No pide comida'
        }
    }
}

console.log(Mascota.tipo);
console.log(Mascota.Hambre(true));