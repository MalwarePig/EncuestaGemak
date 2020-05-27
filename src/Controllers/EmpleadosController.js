const Controller = {};
const express = require('express');//guardar express en una variable de servidor

Controller.list = (req,res)=> {
    if(req.session.loggedin){
        //res.send('Metodo Get list');
        req.getConnection((err,conn) => {
            conn.query('SELECT * FROM Empleados',(err, Empleados) =>{
                if(err){
                    res.json("Error json: " + err);
                    console.log('Error de lectura');
                }
                res.render('Empleados.html', {
                    data: Empleados,
                });
            });
        });
    }else{
        res.send('Please login to view this page!');
    }
};


Controller.save = (req,res) => {
    const data = req.body;
    const nombre = req.body.Planta;
    console.log(data);
    req.getConnection((err,conn) => {

        conn.query('INSERT INTO Empleados set ?',[data], (err, ot) =>{
            res.redirect('/Empleados');
        });
    })
}


Controller.delete = (req,res) => {
    const { id } = req.params;
    req.getConnection((err,conn) => {
        conn.query('DELETE FROM Empleados WHERE id = ?',[id], (err, rows) =>{
            res.redirect('/Empleados');
        });
    })
};



module.exports = Controller;