const express = require('express');
const morgan = require('morgan');//ver las peticiones
const app = express();//servidor
const path = require('path');//Traba con directorios identificando el SO // \\
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const session = require('express-session');


//Configuracion Servidor
app.set('port',process.env.PORT || 3000)//asignar puerto, si lo da el So que lo tome, sino el 3000
app.set('views',path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);//usara el motor ejs para archivos html
app.set('view engine', 'ejs');//motor de plantillas, permite ejecutar javascript y traducirlo a html

//middlewares //Funciones que se ejecutan antes que lleguen a las rutas
app.use(express.json());//Acceder a la informacion de jason
app.use(morgan('dev'));//muestra los mensajes en consola de las cargas y peticiones
app.use(myConnection(mysql,{
     host:'bpui8m1t3pulemi4dlfv-mysql.services.clever-cloud.com',
     user: 'u7xoomeqcazzaq57',
     password: 'nciIFmnLngqjuKcoB5LW',
     port: 3306,
     database: 'bpui8m1t3pulemi4dlfv'
}, 'single'))

app.use(session({
     secret: 'keyboard cat',
     resave: false,
     saveUninitialized: true
 }))

app.use(express.urlencoded({extended: false}));//para que el servidor entienda los datos del navegador al hacer un guardado de formulario



//routes o urls
app.use(require('./routes/rutas.js'));//usar las rutas


//Escuchando el servidor
app.listen(app.get('port'),() => {
     console.log('server',app.get('port'));
});

//file statics
app.use(express.static(path.join(__dirname, 'public')));//para archivos como imagenes,css,javascript

