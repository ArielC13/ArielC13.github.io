const express = require('express')
const app = express()
const path = require('path')
const port = 3000
app.use(express.json());
var cookieParser = require('cookie-parser');
const { log } = require('console');
app.use(cookieParser());

fakeDB = {
    bruno_web: {
        productos: [
        	{
        		nombre: 'producto bruno', precio: 12331.85, stock:58
          }
        ],
        password: 'Contraseña1234'
    },
    ariel123:{
        productos: [
        	{
        		nombre: 'producto de ariel', precio: 12331.85, stock:58
          }
        ],
        password: 'Contraseña1313'
    },
    fatima123:{
        productos: [
        	{
        		nombre: 'producto fatima123', precio: 12331.85, stock:58
          }
        ],
        password: 'Contraseña555'
    },
    magali123:{
        productos: [
        	{
        		nombre: 'producto de magali123',precio: 12331.85, stock:58
          }
        ],
        password: 'Contraseña1111'
    },
    juan123: {
        productos: [

        ],
        password: ""
    }
}

app.get('/', (req, res) => { // devolver todos los productos
    console.log('entró a GET /')
    res.send('funciona ok!');
})

app.get('/set_cookie',function(req, res){
    var cookie_name = 'username'
    res.cookie(cookie_name , 'magali123').send('Cookie is set');
});

app.get('/read_cookie',function(req, res){
    console.log("Cookies :  ", req.cookies);
    res.send(req.cookies);
});

app.post('/login',function(req, res){
    console.log('Usuario recibido:', req.body.username);
    if(fakeDB[req.body.username].password == req.body.password){
        res.cookie('username' , req.body.username);
        res.send('Cookie is set');
    }
    else{
        console.log('Error de autenticación')
        res.send('El usuario o la contraseña son incorrectos')
    }
})

function middlewareAutenticacion(req, res, next){
    console.log('Este es el middleware!');
    console.log('Usuario en la cookie:', req.cookies.username);
    if(req.cookies.username == undefined ){
       res.send('No estás autenticado.')
    }
    else {
        next();
    }
}

app.post('/user', function(req,res){
    let nuevaContrasena = req.body.password
    let nombreUsuario = req.body.username
    let nuevosProductos = req.body.productos
    //console.log(req.body.password);
    fakeDB[nombreUsuario].productos.push(nuevosProductos)
    fakeDB[nombreUsuario].password = nuevaContrasena
    //fakeDB[nombreUsuario].password.push(nuevaContrasena)
    console.log(fakeDB);
    console.log(fakeDB[nombreUsuario]);
    res.send(fakeDB);

})

// endpoint que necesita autenticación
app.get('/seguro', middlewareAutenticacion ,(req, res, next) => { // devolver todos los productos
    console.log('entró a GET /seguro')
    res.send(`Endpoint seguro. Usuario: ${req.cookies.username}`);
})

app.get('/productos',middlewareAutenticacion ,(req, res, next) => { // devolver todos los productos
    console.log('entró a GET /productos')

    let nombreUsuario = req.cookies.username;
    // mandarle la variable con todos los productos.
    //res.send( fakeDB.nombreUsuario.productos );
    res.send( fakeDB[nombreUsuario].productos);
})


app.post('/producto',middlewareAutenticacion ,(req,res, next)=>{   // POST /producto  -> crear producto nuevo
    console.log('entró a POST /producto', req.body );

    let nombreUsuario = req.cookies.username;
    fakeDB.nombreUsuario.productos.push(req.body);
    //productos.push( req.body );
    res.send(`Producto creado en el usuario ${nombreUsuario}`);
})

app.delete('/producto/:indice',middlewareAutenticacion ,(req,res, next)=>{   // POST /producto  -> crear producto nuevo
    console.log('entró a DELETE /producto', req.body );

    let nombreUsuario = req.cookies.username;
    
    fakeDB.nombreUsuario.productos.splice(req.params.indice, 1);
    
    res.send(`Producto creado en el usuario ${nombreUsuario}`);
})

////////////////////////////////////////////`
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})