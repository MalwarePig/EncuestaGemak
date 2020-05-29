const Controller = {};
var OP = require('../public/js/Funciones.js');
var fun = require('../Functions/ajusteFechas');
const express = require('express');//guardar express en una variable de servidor
var pruebasql = require('../Functions/MySQL');
/////////////////////////////////////////////////////////////////////--------------- ORDENES  ----------------------/////////////////////////////////////////////////////////////////////
/*
Controller.list = (req,res)=> {
    //res.send('Metodo Get list');
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM OT',(err, ot) =>{
            if(err){
                res.json(err);
                console.log('Error de lectura');
            }
            res.render('Ordenes.html', {
                data: ot
            });
        });
    });
};*/

//LLenado manual de orden en Ordenes.html
Controller.save = (req,res) => {

    console.log(req.body);
    var tabla = {
        nombre : req.body.Nombre,
        apellido : req.body.Apellido,
        serie : req.body.Serie,
        estatus : req.body.Estatus,    
        Vencimiento : req.body.vencimiento
    };

  

    req.getConnection((err,conn) => {
        conn.query('INSERT INTO Tarjetas set ? ',[tabla],  (err, ot) =>{
            if(err){
                console.log(err);
            }
           //console.log(ot);
            res.redirect('/home');
        });
    })
  /*console.log(req.body);//se obtienen los datos del formulario a traves del req.body
    res.send('works');*/
}
Controller.sincronizar = (req,res) => {
    const { id } = req.params;
    req.getConnection((err,conn) => {
        res.json({messaje:'Holiii',tarjeta:'sss'});
    })
};
/*
Controller.save = (req,res) => {
    const data = req.body;
    req.getConnection((err,conn) => {
        conn.query('INSERT INTO OT set ?',[data], (err, ot) =>{
           //console.log(ot);
            res.redirect('/Ordenes');
        });
    })
   /* console.log(req.body);//se obtienen los datos del formulario a traves del req.body
    res.send('works');
}*/

Controller.delete = (req,res) => {
    const { id } = req.params;
    req.getConnection((err,conn) => {
        conn.query('DELETE FROM Tarjetas WHERE id = ?',[id], (err, rows) =>{
            res.redirect('/home');
        });
    })
};

Controller.list = (req,res)=> {
    if(req.session.loggedin){
        //res.send('Metodo Get list');
        req.getConnection((err,conn) => {
            conn.query('SELECT * FROM Tarjetas',(err, Tarjetas) =>{
                if(err){
                    res.json(err);
                    console.log('Error de lectura 1 ' + err);
                }
                conn.query('call Estadistica();',true,(err, rows,fields) =>{
                    if(err){
                        res.json(err);
                        console.log('Error de lectura 2');
                    }
                    console.log("Estadisticas seca: "+ Object.values(rows[0][0]));
                    console.log("Estadisticas unitario: " + Object.values(rows[0][0])[0]);
                    var obj = {
                       Activos : Object.values(rows[0][0])[0],//es el campo activos de la consulta de SP
                       Vencidos : Object.values(rows[0][0])[1],//es el campo Vencidos de la consulta de SP
                       Total : Object.values(rows[0][0])[2]//es el campo Total de la consulta de SP
                    }
                    
 
                    console.log("obj: " + Object.values(obj));
                    res.render('index.html', {
                        data: Tarjetas,
                        Estadistica: obj
                    });
                });
            });
        });
    }else{
        res.redirect('/');
    }
};

Controller.listOrdenes = (req,res)=> {
    if(req.session.loggedin){
        //res.send('Metodo Get list');
        req.getConnection((err,conn) => {
            conn.query('SELECT * FROM Tarjetas',(err, tarjetas) =>{
                if(err){
                    res.json(err);
                    console.log('Error de lectura');
                }
                res.render('Ordenes.html', {
                    data: tarjetas,   
                });
            });
        });
    }else{
        res.send('Please login to view this page!');
    }
};

/////////////////////////////////////////////////////////////////////--------------- MAQUINAS ----------------------/////////////////////////////////////////////////////////////////////
/*
router.post('/test', function (req, res, next) {
    db.query("select COLUMN_NAME from INFORMATION_SCHEMA.COLUMNS where TABLE_NAME = 'registros'; ", (error, results, fields) => {
        if (error) throw error;
        db.query("SELECT * FROM registros", (error, resp, fields) => {
            if (error) throw error;
            res.render('test', {
                dataRegistros: resp,
                columnNames: results
            });
        });
    });
});*/
//**********************************************************************************
Controller.listMaquinas = (req,res)=> {
    if(req.session.loggedin){//se verifica si el usuario esta logueado
        //res.send('Metodo Get list');
        req.getConnection((err,conn) => {
            conn.query('SELECT * FROM ControlPlaner',(err, ot) =>{
                if(err){
                    res.json(err);
                    console.log('Error de lectura');
                }
                conn.query("SELECT * FROM Maquinas", [], (err, rows) => {//consulta OT siguienes a pivote [C]
                    if(err){
                    console.log("No funciona sql: " + err);
                    }
                    res.render('Maquinas.html', {
                        data: ot,
                        Maquinas: rows                       
                    });
                });
            });
        });
    }else{
        res.send('Please login to view this page!');
    }
};

//ENVIA INFORMACION A LA PAGINA PARA SER EDITADA
Controller.edit = (req,res)=> {
    const { id } = req.params;//recibir valores del formulario
    var estado = '';
    req.getConnection((err, conn) =>{
        if(err){
            console.log("Tipo de error mysql: " + err);
        }
        conn.query('SELECT Estatus FROM Tarjetas WHERE id = ?', [id], (err, consulta) => {
            if(err){
                console.log("Tipo de error: " + err);
            }
            console.log("Mi objeto: " + Object.values(consulta[0]));
            if(Object.values(consulta[0]) == 'Activo'){
                estado = 'Vencido';
            }else{
                estado = 'Activo';
            }
            console.log("Mi estado: " + estado);
            conn.query("UPDATE Tarjetas SET Estatus = '" + estado + "' WHERE id = ?", [id], (err, ordenes) => {
                if(err){
                    console.log("Tipo de error: " + err);
                }
                res.redirect('/home');
            });
           
        });
    });
};

//ACTUALIZA REGISTROS EN DB
Controller.update = (req,res)=> {
    try{
        //recibir valores del formulario
        const { id } = req.params;
  console.log("este es el id: " + id);
        req.getConnection((err, conn) =>{          
            conn.query("SELECT Estatus FROM tarjetas WHERE id = '"+ id + "'", [], (err, consulta) => {//CONSULTA DE OT REFERENTE A LA ID [A]
                if(err){
                    console.log(err);
                }
                console.log(consulta);
               
            });
        });
    }catch(err){
        console.log("Error: " + err);
        res.redirect('/');
    }
};
    










module.exports = Controller;