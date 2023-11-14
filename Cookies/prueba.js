const express = require('express')
const app = express()
const path = require('path')
const port = 3000
app.use(express.json());
var cookieParser = require('cookie-parser')
app.use(cookieParser());

let productos = [];
let animales = [];
let frutas;

app.post('/producto', (req, res) => {
  console.log('entró a POST /producto', req.body );
  let variableProducto = req.body.producto;
  productos.push(variableProducto);
  res.send('Producto creado');

})

app.get('/producto', (req, res) => {
  console.log(productos);
  res.send(productos);
})

app.delete('/producto', (req, res) => {
  let idProducto = req.body.id
  //let variableProducto = req.body.producto;
  productos.splice(idProducto, 1);
  res.send('Producto eliminado');
})


app.post('/animal/:nombre', (req, res) => {
  console.log('entró a POST /animal', req.params.nombre);
  let variableAnimal = req.params.nombre
  animales.push(variableAnimal);
  res.send('Animal agregado a la lista');
})

app.get('/animal', (req, res) => {
  console.log(animales);
  res.send(animales);
})

app.delete('/animal/:id', (req, res) => {
  //let variableAnimal = req.cookies.nombre;
  let idAnimal = req.params.id
  animales.splice(idAnimal, 1);
  res.send('Animal eliminado');
})

app.post('/frutas', (req, res) => {
  console.log('entró a POST /frutas', req.query.fruta);
  frutas = req.query.fruta
  res.send('Fruta agregada a la lista');
})

app.get('/frutas', (req, res) => {
  console.log(frutas);
  res.send(frutas);
})

app.delete('/frutas', (req, res) => {
  let idFruta = req.query.id
  //let variableFruta = req.query.fruta;
  frutas.splice(idFruta, 1);
  res.send('Fruta eliminada');
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})