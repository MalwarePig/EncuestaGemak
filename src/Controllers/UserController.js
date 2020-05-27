const Controller = {};

/////////////////////////////////////////////////////////////////////--------------- REGISTRO ----------------------/////////////////////////////////////////////////////////////////////
Controller.save = (req,res) => {
    const data = req.body;
    const nombre = req.body.Planta;
    req.getConnection((err,conn) => {

        conn.query('INSERT INTO Usuarios set ?',[data], (err, ot) =>{
            res.redirect('/Signup');
        });
    })
   /* console.log(req.body);//se obtienen los datos del formulario a traves del req.body
    res.send('works');*/
}

/////////////////////////////////////////////////////////////////////--------------- LOGIN ----------------------/////////////////////////////////////////////////////////////////////
Controller.login = (req,res) => {
    //const data = req.body;
    //const nombre = req.body.Planta;
    const username = req.body.username;
    const password = req.body.pass;
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM Usuarios WHERE usuario = ? AND pass = ?',[username, password], (error, results, fields) =>{
            if(error){
                console.log(error);
                res.redirect('/');
                console.log('error en query');
            }
            else if (Object.keys(results).length > 0)//si contiene almenso 1 resultado entra
            {
                const pass = results[0].pass//Obtener contraseña de la consulta
                if(password == pass){//si las contraseñas coinciden entran
                    req.session.loggedin = true;
                    req.session.username = username;
                    res.redirect('/home');
                }else{//si las contraseñas no coinciden
                    console.log('error de contraseña');
                }
            }else //sin resultados
            {
                res.redirect('/');
                console.log('Error usaurio o contraseña');
			}			
			//response.end();
        });        
    })
    console.log(req.body);//se obtienen los datos del formulario a traves del req.body
    //res.send('works');
}





module.exports = Controller;