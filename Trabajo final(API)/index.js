const express = require('express')
const app = express()
const path = require('path')
const port = 3000
app.use(express.json());
var cookieParser = require('cookie-parser')
app.use(cookieParser());

comentarios = [];
cometarioSeparado = [];

app.post('/comentario', (req,res) =>{
    comentarios.push(req.body)
    res.send('Comentario enviado');
})

app.get('/comentarios',(req,res)=>{
    console.log(comentarios);
    res.send(comentarios);
})

app.delete('/comentario',(req,res)=>{
    comentarios.splice(req.query.id, 1);
    res.send('Comentario eliminado');
})

app.get('/comentario/:id',(req,res)=>{
    console.log(comentarios[req.params.id]);
    res.send(comentarios[req.params.id]);
})

app.post('/login', (req,res) =>{
    res.cookie('userID:', req.body.userID)
    res.send('Cookies are set')
})

app.get('/cookies', (req,res) => {
    console.log(req.cookies);
    res.send(req.cookies);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})