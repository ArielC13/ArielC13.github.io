const express = require('express')
const app = express()
const path = require('path')
const port = 3000
app.use(express.json());
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
var fs= require('fs')

let lista_comentarios = []

let Lectura_json = fs.readFileSync('./comentarios.json', {
    encoding: 'utf-8',
    flag: 'r'
})
lista_comentarios = JSON.parse(Lectura_json)

app.get('/mi_ruta', (req,res) => {
    console.log('Entraste a get ruta')
    res.send('Entraste a la ruta "mi_ruta"')
})

app.post('/comentario', (req,res) => {
    console.log(req.body)
    lista_comentarios.push(req.body)
    fs.writeFileSync('./comentarios.json', JSON.stringify(lista_comentarios,null,4), {
        encoding: 'utf-8',
        flag: 'w'
    })
    res.send('Entraste a la ruta comentario')
})

app.get('/comentarios', (req,res) => {
    console.log('Entraste a get comentarios')
    lista_comentarios.push(req.body)
    console.log(lista_comentarios)
    res.send(lista_comentarios)
})

//app.get('/comentario', (req,res) => {
    
//})

app.delete('/comentario', (req,res) => {
    console.log(req.body)
    lista_comentarios.splice(req.body.id,1)
    console.log(lista_comentarios)
    res.send('Borraste un comentario')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})