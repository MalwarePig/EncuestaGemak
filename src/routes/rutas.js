const express = require('express');//guardar express en una variable de servidor
const router = express.Router(); //usar modulo de router de ex´press
const UserController = require('../Controllers/UserController');
const cPlanerController = require('../Controllers/cPlanerController');
const EncuestaController = require('../Controllers/EncuestaController');

/////////////////////////////////////////////////////////////////////////// USUARIOS /////////////////////////////////////////////////////////////////////////////////
//Acceder a login
var reinicio = router.get('/EncuestaMorelos', (req, res) => {
    //res.send('holoo');
    res.render('index.html');
});

var reinicio = router.get('/EncuestaBravo', (req, res) => {
    //res.send('holoo');
    res.render('index.html');
});


//Iniciar logueo
router.post('/Login', UserController.login);


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

router.post('/postCplaner', cPlanerController.saveCP);

 
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


/////////////////////////////////////////////////////////////////////////// MENU ADMIN //////////////////////////////////////////////////////////////////////////////
//Guardar Encuesta
router.post('/GuardarEncuesta', EncuestaController.GuardarEncuesta);
router.get('/TablaM:Area', EncuestaController.TablaM);
router.get('/TablaB:Area', EncuestaController.TablaB);
router.get('/ReporteM', (req, res) => {
    //res.send('holoo');
    res.render('Rep_Gemak.html');
});
router.get('/ReporteB', (req, res) => {
    //res.send('holoo');
    res.render('Rep_Gemak.html');
});




module.exports = router;
