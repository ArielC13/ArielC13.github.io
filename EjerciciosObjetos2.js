//1)
/*{
	nombre =  "pepe",
  miLista = [
  	'hola',
    'que',
    'tal'
  ],
  otraLista = [
  	{
			username: 'bruno123',
      hash: 'x1f00Z19L3lgnaBeY01Afc',
      email: 'brunito@gmail.com'
    },
    {
			username: 'ariel123',
      hash: 'V41f09c1223lgnaBeY01Af7',
      email: 'ariel@gmail.com'
    }
  ],
  mercados = {
  	subastas:[],
    ventas: [
    	{},{},{}
    ]
  }
}

console.log(nombre);
console.log(miLista);
console.log(miLista[0]);
console.log(miLista[1]);
console.log(miLista[2]);
console.log(otraLista);
console.log(otraLista[0]);
console.log(otraLista[0].username);
console.log(otraLista[0].hash);
console.log(otraLista[0].email);
console.log(otraLista[1]);
console.log(otraLista[1].username);
console.log(otraLista[1].hash);
console.log(otraLista[1].email);
console.log(mercados);
console.log(mercados.subastas);
console.log(mercados.ventas);
console.log(mercados.ventas[0]);
console.log(mercados.ventas[1]);
console.log(mercados.ventas[2]);

*/

//2) 
fakeDB = {
  bruno_web: {
      productos: [
        {
          nombre: 'producto bruno', precio: 12331.85, stock:{local_1: 11, local_5: 0}
        }
      ]
  },
  ariel123:{
      productos: [
        {
          nombre: 'producto de ariel', precio: 12331.85, stock:{local_4: 12, local_15: 44}
        }
      ]
  },
  fatima123:{
      productos: [
        {
          nombre: 'producto fatima123', precio: 12331.85, stock:{local_4: 11, local_2: 15}
        }
      ]
  },
  magali123:{
      productos: [
        {
          nombre: 'producto de magali123',precio: 12331.85, stock:{local_3: 11, local_44: 13 }
        }
      ]
  }
}
console.log(fakeDB);
console.log(fakeDB.ariel123);
console.log(fakeDB.ariel123.productos);
console.log(fakeDB.ariel123.productos[0].nombre);
console.log(fakeDB.ariel123.productos[0].precio);
console.log(fakeDB.ariel123.productos[0].stock);
console.log(fakeDB.ariel123.productos[0].stock.local_4);
console.log(fakeDB.ariel123.productos[0].stock.local_15);


fakeDB.ariel123.productos.push({
  nombre: 'Televisor', precio: 50000, stock:{local_4: 400}, local_15: 450
});

fakeDB.ariel123.productos.push({
  nombre: 'PS4', precio: 600000, stock:{local_4: 1000}, local_15: 920
});

fakeDB.ariel123.productos.push({
  nombre: 'Licuadora', precio: 11000, stock:{local_4: 150}, local_15: 200
});


console.log(fakeDB.ariel123.productos);

fakeDB.ariel123.productos.splice(1,1);

console.log(fakeDB.ariel123.productos);