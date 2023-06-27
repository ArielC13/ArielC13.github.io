//Ejercicio 1

/*let verduleria = {
    categoria: 'frutas',
    variedadFrutas: 6,
    listaFrutas: ['manzana','banana','pera','mango','durazno','kiwi'],
    inventario: function(){
        console.log('Inventario de frutas realizado');
    },
    sumaManzanas: function(verdes,rojas){
        return verdes + rojas
    }
}

console.log(verduleria.categoria);
console.log(verduleria.variedadFrutas);
console.log(verduleria.listaFrutas);
verduleria.inventario();
console.log(verduleria.sumaManzanas(300,400));
*/

//Ejercicio 2

/*function funcionPersonas(){

    Personas = {
        nombre: '',
        apellido: '',
        nacionalidad: '',
        edad: 0
}

class classPersonas{
    constructor (newNombre,newApellido,newNacionalidad,newEdad){
    this.nombre = newNombre;
    this.apellido = newApellido;
    this.nacionalidad = newNacionalidad;
    this.edad = newEdad;
    }
}


let listaPersonas = [];
for (let i = 0; i < 1; i++){
    listaPersonas.push(new classPersonas('Pedro','Fernandez','argentina',20)),
    listaPersonas.push(new classPersonas('Raul','Rodriguez','argentina',45)),
    listaPersonas.push(new classPersonas('Lucia','Romero','peruana',18)),
    listaPersonas.push(new classPersonas('Luis','Sanchez','mexicano',45))
}
return listaPersonas;

}

console.log(funcionPersonas());
*/

//Ejercicio 3

/*function funcionFutbol(){
    
    Futbol = {
        nombre: '',
        equipo: '',
        puntaje: 0

}


class classFutbol{
    constructor (newNombre,newEquipo,newPuntaje){
    this.nombre = newNombre;
    this.equipo = newEquipo;
    this.puntaje = newPuntaje;
    }
}


let equiposFutbol = [];
for (let i = 0; i < 1; i++){
    equiposFutbol.push(new classFutbol('Juan','River Plate', 55)),
    equiposFutbol.push(new classFutbol('Julian','Boca Juniors', 30)),
    equiposFutbol.push(new classFutbol('Pedro','Lanus', 15)),
    equiposFutbol.push(new classFutbol('Fabian','Racing', 52)),
    equiposFutbol.sort((function(a,b){return a.puntaje - b.puntaje}))
    }
    
return equiposFutbol;
}

console.log(funcionFutbol());
*/

//Ejercicio 4

let equiposFiltrados = [];
function funcionFutbol(filtroEquipo){
    
    Futbol = {
        nombre: '',
        equipo: '',
        puntaje: 0

}


class classFutbol{
    constructor (newNombre,newEquipo,newPuntaje){
    this.nombre = newNombre;
    this.equipo = newEquipo;
    this.puntaje = newPuntaje;
    }
}


let equiposFutbol = [];
for (let i = 0; i < 1; i++){
    equiposFutbol.push(new classFutbol('Juan','River Plate', 55)),
    equiposFutbol.push(new classFutbol('Julian','Boca Juniors', 30)),
    equiposFutbol.push(new classFutbol('Julian','Boca Juniors', 30)),
    equiposFutbol.push(new classFutbol('Julian','Boca Juniors', 30)),
    equiposFutbol.push(new classFutbol('Pedro','Lanus', 15)),
    equiposFutbol.push(new classFutbol('Fabian','Racing', 52))
    if(equiposFutbol[i] == 'Racing'){
        equiposFiltrados.push(equiposFutbol[i]);
    }

}
return equiposFiltrados;

}

console.log(funcionFutbol('Racing'));
