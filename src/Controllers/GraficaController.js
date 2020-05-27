const Controller = {};
const express = require('express');//guardar express en una variable de servidor
var pruebasql = require('../Functions/MySQL');
/////////////////////////////////////////////////////////////////////---------------    Grafica   ----------------------/////////////////////////////////////////////////////////////////////


Controller.listGrafica = (req,res)=> {
    if(req.session.loggedin){
        //res.send('Metodo Get list');
        req.getConnection((err,conn) => {
        conn.query('call Estadistica();',true,(err, rows,fields) =>{
            if(err){
                res.json(err);
                console.log('Error de lectura');
            }
            console.log("Estadisticas seca: "+ Object.values(rows[0][0]));
            console.log("Estadisticas unitario: " + Object.values(rows[0][0])[0]);
            var obj = {
               Activos : Object.values(rows[0][0])[0],//es el campo activos de la consulta de SP
               Vencidos : Object.values(rows[0][0])[1],//es el campo Vencidos de la consulta de SP
               Total : Object.values(rows[0][0])[2]//es el campo Total de la consulta de SP
            }

            console.log("obj: " + Object.values(obj));
            res.render('Grafica.html', {
                Estadistica: obj
            });
        });
    });
    }else{
        res.send('Please login to view this page!');
    }
};






module.exports = Controller;