const express = require('express');//guardar express en una variable de servidor
const router = express.Router(); //usar modulo de router de ex´press
const OTController =  require('../Controllers/OTController');
const UserController = require('../Controllers/UserController');
const cPlanerController = require('../Controllers/cPlanerController');
const VencidasController = require('../Controllers/VencidasController');
const MaquinariaController = require('../Controllers/MaquinariaController');
const EmpleadosController = require('../Controllers/EmpleadosController');
const HorariosController = require('../Controllers/HorariosController');
const GraficaController = require('../Controllers/GraficaController');
/////////////////////////////////////////////////////////////////////////// USUARIOS /////////////////////////////////////////////////////////////////////////////////
//Acceder a login
var reinicio = router.get('/', (req, res) => {
    //res.send('holoo');
    res.render('Login.html');
});

//Iniciar logueo
router.post('/Login', UserController.login);

//Acceder formulario Registrar usuario
router.get('/Signup', (req, res) => {
	if(req.session.loggedin){
		res.render('Signup.html',{title: 'Gemak'});
	}else {
		res.send('Tu sesión expiró!');
	}
	res.end();
});

//Registrar usuario en db
router.post('/AddUser', UserController.save);

/////////////////////////////////////////////////////////////////////////// ENTRAR A HOME ///////////////////////////////////////////////////////////////////////////////
//Carga pagina principal
router.get('/home', OTController.list);


/////////////////////////////////////////////////////////////////////////// ENTRAR A cPlaner /////////////////////////////////////////////////////////////////////////////
router.get('/cPlaner', function(request, response) {
	if (request.session.loggedin) {
        response.render('cPlaner.html',{title: 'Gemak'});
		//response.send('Welcome back, ' + request.session.username + '!');
	} else {
		reinicio;
	}
	response.end();
});

/////////////////////////////////////////////////////////////////////////// ENTRAR A Grafica /////////////////////////////////////////////////////////////////////////////
//Acceder formulario Registrar usuario
/*router.get('/Grafica', (req, res) => {
	if(req.session.loggedin){
		res.render('Grafica.html');
	}else {
		res.send('Tu sesión expiró!');
	}
	res.end();
});
*/
router.get('/Grafica', GraficaController.listGrafica);



router.post('/postCplaner', cPlanerController.saveCP);
/////////////////////////////////////////////////////////////////////////// Maquinas //////////////////////////////////////////////////////////////////////////////////////
router.get('/Maquinas', OTController.listMaquinas);
router.get('/update/:id', OTController.edit);
router.post('/update/:id', OTController.update);

/////////////////////////////////////////////////////////////////////////// ENTRAR A Ordenes ///////////////////////////////////////////////////////////////////////////////
router.get('/Altas', OTController.listOrdenes);
router.post('/addOrden', OTController.save);
router.get('/delete/:id', OTController.delete);
//router.post('/add', OTController.save);

/////////////////////////////////////////////////////////////////////////// ENTRAR A Vencidas //////////////////////////////////////////////////////////////////////////////
router.get('/Vencidas', VencidasController.listVencidas);

/////////////////////////////////////////////////////////////////////////// REGISTRO DE MAQUINARIA CNC /////////////////////////////////////////////////////////////////////
//Acceder formulario Registrar Maquina
router.get('/Alta_Maquina', (req, res) => {
	if(req.session.loggedin){
		res.render('Alta_Maquina.html',{title: 'Gemak'});
	}else {
		res.send('Tu sesión expiró!');
	}
	res.end();
});

//Registrar Maquinas en db
router.post('/AddMaquina', MaquinariaController.save);

/////////////////////////////////////////////////////////////////////////// MENU ADMIN //////////////////////////////////////////////////////////////////////////////
//Acceder Menu admin
router.get('/Admin', (req, res) => {
	if(req.session.loggedin){
		res.render('Admin.html',{title: 'Gemak'});
	}else {
		res.send('Tu sesión expiró!');
	}
	res.end();
});

/////////////////////////////////////////////////////////////////////////// HORARIOS //////////////////////////////////////////////////////////////////////////////
router.get('/Horarios', HorariosController.list);
router.post('/addHorario', HorariosController.update);
/////////////////////////////////////////////////////////////////////////// Empleados //////////////////////////////////////////////////////////////////////////////
/*router.get('/Empleados', (req, res) => {
	if(req.session.loggedin){
		res.render('Empleados.html',{title: 'Gemak'});
	}else {
		res.send('Tu sesión expiró!');
	}
	res.end();
});*/

router.get('/Empleados', EmpleadosController.list);
router.post('/addEmpleados', EmpleadosController.save);
router.get('/deleteEmpleado/:id', EmpleadosController.delete);



module.exports = router;




/*ESTA ES UNA VERSION DIRECTA SIN VERIFICAR LOGIN
router.get('/home', (req, res) => {
    //res.send('holoo');
    res.render('index.html',{title: 'Gemak'});
});*/

/*
router.get('/Maquinas', (req, res) => {
    res.render('Maquinas.html',{title: 'Maquinas'});
});*/

/*
//rutas
app.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname,'/views/index.html'));//Obtiene ruta de este archiv Js + ruta del archivo a mostrar
    //console.log(__dirname);//Muestra ruta generica de archivo que lo ejecuta
    //console.log(path.join(__dirname,'views/index.html'));
    res.render('index',{title: 'Gemak'});
});
*/

