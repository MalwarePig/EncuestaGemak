const Controller = {};
var fun = require('../Functions/FuncionesHorarios');

/////////////////////////////////////////////////////////////////////--------------- REGISTRO ----------------------/////////////////////////////////////////////////////////////////////
Controller.save = (req,res) => {
    const data = req.body;
    req.getConnection((err,conn) => {

        conn.query('INSERT INTO Horarios set ?',[data], (err, ot) =>{
            res.redirect('/Admin');
        });
    })
}

Controller.list = (req,res)=> {
    if(req.session.loggedin){
        req.getConnection((err,conn) => {
            conn.query('SELECT * FROM Maquinas order by Familia',(err, Maquinas) =>{//consulta Maquinas
                if(err){
                    res.json(err);
                    console.log('Error de lectura de Maquinas');
                }
                conn.query("SELECT * FROM Empleados", [], (err, rows) => {//consulta Empleados
                    if(err){
                    console.log("Error en lectura de empleados: " + err);
                    }
                    res.render('Horarios.html', {
                        Data: Maquinas,
                        Empleados: rows                                 
                    });
                });
            });
        });
    }else{
        res.send('Please login to view this page!');
    }
};


//--------------------------------------------------------------------

Controller.update = (req,res) => {
    const data = req.body;
    fun.Funciones(data);
    //console.log(Object.keys(data)[0] + " " + Object.keys(data)[1] + " " + Object.keys(data)[2]);
    /*var inicio = req.body.Inicio;
    var dias = req.body.dias;
    var FechaFin = OP.Funciones.CalcularFechaFin(inicio,dias);
    var tabla = {
        Maquina : req.body.maquina,
        Estatus : req.body.Estatus,
        OT : req.body.OT,
        Parte : req.body.NumPart,
        CantOt : req.body.Cantidad,       
        FechaInicio : req.body.Inicio,
        FechaVenc : req.body.vencimiento,
        FechaProd : FechaFin,
        Dias : req.body.dias 
    };
    req.getConnection((err,conn) => {
        conn.query('INSERT INTO ControlPlaner set ? ',[tabla],  (err, ot) =>{
            if(err){
                console.log(err);
            }
           //console.log(ot);
            res.redirect('/Ordenes');
        });
    })*/
  /*console.log(req.body);//se obtienen los datos del formulario a traves del req.body
    res.send('works');*/
}




module.exports = Controller;