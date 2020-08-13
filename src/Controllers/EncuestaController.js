const Controller = {};
var moment = require('moment'); // require
const express = require('express');//guardar express en una variable de servidor

Controller.GuardarEncuesta = (req, res) => {

    req.getConnection((err, conn) => {
        if (err) {
            console.log("Conexion: " + err)
        }
        
        const data = req.body;//TRAE TODO EL OBJETO
        let Nombre = Object.values(data)[0];//obeter datos de un objeto Folio
        let Nomina = Object.values(data)[1];//obeter datos de un objeto Folio
        let Planta = Object.values(data)[2];//obeter datos de un objeto Folio
        let PreguntaUno = Object.values(data)[3];//obeter datos de un objeto Folio
        let PreguntaDos = Object.values(data)[4];//obeter datos de un objeto Folio
        let PreguntaDosText = Object.values(data)[5];//obeter datos de un objeto Folio
        let PreguntaTres = Object.values(data)[6];//obeter datos de un objeto Folio
        let PreguntaTresText = Object.values(data)[7];//obeter datos de un objeto Folio
        let Tos = Object.values(data)[8];//obeter datos de un objeto Folio
        let Fiebre = Object.values(data)[9];//obeter datos de un objeto Folio
        let Respirar = Object.values(data)[10];//obeter datos de un objeto Folio
        let Gusto = Object.values(data)[11];//obeter datos de un objeto Folio
        let Garganta = Object.values(data)[12];//obeter datos de un objeto Folio
        let Cuerpo = Object.values(data)[13];//obeter datos de un objeto Folio
        let Cabeza = Object.values(data)[14];//obeter datos de un objeto Folio
        let PreguntaCinco = Object.values(data)[15];//obeter datos de un objeto Folio
        let PreguntaCincoText = Object.values(data)[16];//obeter datos de un objeto Folio
        let Aceptable = Object.values(data)[17];//obeter datos de un objeto Folio
        let Declaratoria = Object.values(data)[18];//obeter datos de un objeto Folio
        let PreguntaSeis = Object.values(data)[19];//obeter datos de un objeto FolioPreguntaSeis
        let Area = Object.values(data)[20];//obeter datos de un objeto FolioPreguntaSeis
        let Fecha = Object.values(data)[21];//obeter datos de un objeto FolioPreguntaSeis
        let Horario = Object.values(data)[22];//obeter datos de un objeto FolioPreguntaSeis


        //console.log('Insert todos los datos: ' + 'Nombre' + Nombre + 'Nomina' + Nomina + 'Planta' + Planta + PreguntaUno + PreguntaDos + PreguntaDosText + PreguntaTres + PreguntaTresText +
          //  'Tos' + Tos + 'Fiebre' + Fiebre + 'Respirar' + Respirar + 'Gusto' + Gusto + 'gargant' + Garganta + Cuerpo + 'Cabeza' + Cabeza + Aceptable + Area +Fecha);
        conn.query('INSERT INTO Encuesta(Nombre,Nomina,Planta,PreguntaUno,PreguntaDos,PreguntaDosText,PreguntaTres,PreguntaTresText,Tos,Fiebre,Respirar,Gusto,Garganta,Cuerpo,Cabeza,PreguntaCinco,PreguntaCincoText,Aceptable,Declaratoria,PreguntaSeis,Area,Fecha, Horario)values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [Nombre, Nomina, Planta, PreguntaUno, PreguntaDos, PreguntaDosText, PreguntaTres, PreguntaTresText, Tos, Fiebre, Respirar, Gusto, Garganta, Cuerpo, Cabeza, PreguntaCinco, PreguntaCincoText, Aceptable, Declaratoria, PreguntaSeis, Area,Fecha,Horario], (err, ot) => {
            if (err) {
                res.json("Error json: " + err);
                console.log('Error al registrar despacho de herramienta' + err);
            }
        });
    });
};


Controller.listEncuestaB = (req, res) => {
    //res.send('Metodo Get list');
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM Encuesta WHERE Planta = 'Bravo' order by Aceptable,Nomina", (err, datos) => {
            if (err) {
                res.json(err);
                console.log('Error de lectura');
            }
            let x = JSON.stringify(datos)
            console.log(x);

            res.render('Rep_Gemak.html', {
                data: datos,
            });
        });
    });
};

Controller.listEncuestaM = (req, res) => {
    //res.send('Metodo Get list');
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM Encuesta WHERE Planta = 'Morelos' order by Aceptable,Nomina", (err, datos) => {
            if (err) {
                res.json(err);
                console.log('Error de lectura');
            }
            res.render('Rep_Gemak.html', {
                data: datos,
            });
        });
    });
};

Controller.TablaM = (req, res) => {
    //res.send('Metodo Get list');
    req.getConnection((err, conn) => {
        const { Variable } = req.params;
        Area = Variable.split(' ')[0]; // "Fecha"
        fecha = Variable.split(' ')[1]; // "Fecha"
        Horario = Variable.split(' ')[2]; // "Fecha"
        console.log(Variable + ' consulta ' +fecha + " " + Area+ " "+ Horario);

        if (err) {
            console.log("Conexion: " + err)
        }
        if (Area == 'Morelos') {
            conn.query("SELECT * FROM Encuesta WHERE Planta = 'Morelos' and Fecha = '"+ fecha +"' and Horario ='" + Horario +"' order by Aceptable,Nomina", (err, data) => {
                if (err) {
                    res.json("Error json: " + err);
                    console.log('Error de lectura');
                }
                //console.log(data)
                res.json(data);
            });
        } else if (Area == 'Bravo') {
            conn.query("SELECT * FROM Encuesta WHERE Planta = 'Bravo' and Fecha ='"+ fecha +"' and Horario ='" + Horario +"' order by Aceptable,Nomina", (err, data) => {
                if (err) {
                    res.json("Error json: " + err);
                    //console.log('Error de lectura');
                }
                console.log(data)
                res.json(data);
            });
        } else {
            conn.query("SELECT * FROM Encuesta WHERE Planta = 'Morelos' and Fecha = '"+ fecha +"' AND Area = '" + Area + "' and Horario ='" + Horario +"' order by Aceptable,Nomina", (err, data) => {
                if (err) {
                    res.json("Error json: " + err);
                    console.log('Error de lectura');
                }
                //console.log(data)
                res.json(data);
            });
        }
    });
};

Controller.TablaB = (req, res) => {
    //res.send('Metodo Get list');
    req.getConnection((err, conn) => {
        const { Variable } = req.params;
        Area = Variable.split(' ')[0]; // "Fecha"
        fecha = Variable.split(' ')[1]; // "Fecha"
        Horario = Variable.split(' ')[2]; // "Fecha"
        console.log(Variable + ' consulta ' +fecha + " " + Area+ " "+ Horario);

        if (err) {
            console.log("Conexion: " + err)
        }
        if (Area == 'Morelos') {
            conn.query("SELECT * FROM Encuesta WHERE Planta = 'Morelos' and Fecha = '"+ fecha +"' and Horario ='" + Horario +"' order by Aceptable,Nomina", (err, data) => {
                if (err) {
                    res.json("Error json: " + err);
                    console.log('Error de lectura');
                }
                console.log(data)
                res.json(data);
            });
        } else if (Area == 'Bravo') {
            conn.query("SELECT * FROM Encuesta WHERE Planta = 'Bravo' and Fecha = '"+ fecha +"' and Horario ='" + Horario +"' order by Aceptable,Nomina", (err, data) => {
                if (err) {
                    res.json("Error json: " + err);
                    console.log('Error de lectura');
                }
                console.log(data)
                res.json(data);
            });
        } else {
            conn.query("SELECT * FROM Encuesta WHERE Planta = 'Bravo' and Fecha = '"+ fecha +"' AND Area = '" + Area + "' and Horario ='" + Horario +"' order by Aceptable,Nomina", (err, data) => {
                if (err) {
                    res.json("Error json: " + err);
                    console.log('Error de lectura');
                }
                console.log(data)
                res.json(data);
            });
        }
    });
};

Controller.AreaM = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            console.log("Conexion: " + err)
        }
        const { Nomina } = req.params;
        conn.query("SELECT Area from Pivote Where Planta = 'Morelos' AND Nomina = '" + Nomina + "'", (err, Area) => {
            if (err) {
                res.json("Error json: " + err);
                console.log('Error de lectura');
            }
            console.log(Area);
            res.json(Area);
        });
    });
};

Controller.AreaB = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            console.log("Conexion: " + err)
        }
        const { Nomina } = req.params;
        conn.query("SELECT Area from Pivote Where Planta = 'Bravo' AND  Nomina = '" + Nomina + "'", (err, Area) => {
            if (err) {
                res.json("Error json: " + err);
                console.log('Error de lectura');
            }
            console.log(Area);
            res.json(Area);
        });
    });
};

Controller.PendientesMorelos = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            console.log("Conexion: " + err)
        }
        const { Area } = req.params;
        if (Area == 'Morelos') {
            conn.query("SELECT * from Pivote Where Planta = 'Morelos' order by Nomina", (err, Area) => {
                if (err) {
                    res.json("Error json: " + err);
                    console.log('Error de lectura');
                }
                console.log(Area);
                res.json(Area);
            });
        } else if (Area == 'Bravo') {
            conn.query("SELECT * from Pivote Where Planta = 'Bravo' order by Nomina", (err, Area) => {
                if (err) {
                    res.json("Error json: " + err);
                    console.log('Error de lectura');
                }
                console.log(Area);
                res.json(Area);
            });
        } else {
            conn.query("SELECT * from Pivote Where Planta = 'Morelos' AND Area = '" + Area + " 'order by Nomina", (err, Area) => {
                if (err) {
                    res.json("Error json: " + err);
                    console.log('Error de lectura');
                }
                console.log(Area);
                res.json(Area);
            });
        }
    });
};

Controller.PendientesBravo = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            console.log("Conexion: " + err)
        }
        const { Area } = req.params;
        if (Area == 'Morelos') {
            conn.query("SELECT * from Pivote Where Planta = 'Morelos' order by Nomina", (err, Area) => {
                if (err) {
                    res.json("Error json: " + err);
                    console.log('Error de lectura');
                }
                console.log(Area);
                res.json(Area);
            });
        } else if (Area == 'Bravo') {
            conn.query("SELECT * from Pivote Where Planta = 'Bravo' order by Nomina", (err, Area) => {
                if (err) {
                    res.json("Error json: " + err);
                    console.log('Error de lectura');
                }
                console.log(Area);
                res.json(Area);
            });
        } else {
            conn.query("SELECT * from Pivote Where Planta = 'Bravo' AND Area = '" + Area + "' order by Nomina", (err, Area) => {
                if (err) {
                    res.json("Error json: " + err);
                    console.log('Error de lectura');
                }
                console.log(Area);
                res.json(Area);
            });
        }
    });
};


module.exports = Controller;