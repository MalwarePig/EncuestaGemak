function ValorX(){
  
}

var CalcularFechaFin = function (inicio, horas ){

    var h  = Number(horas);
    var newdate = new Date(inicio);
    console.log("Fecha Original: " + inicio +"Fecha inicial: " + newdate + " Mas "+ horas + " horas");
    newdate.setDate((Number(newdate.getHours()) + h));
    console.log("Fecha final: " + newdate);
    return FormtatoFechas(newdate);
}

function FormtatoFechas(fecha){
    var today = new Date(fecha); 
    var dd = today.getDate(); 
    var mm = today.getMonth() + 1; 
    var yyyy = today.getFullYear(); 
    if (dd < 10) { 
        dd = '0' + dd; 
    }
    if (mm < 10) { 
        mm = '0' + mm; 
    } 
    var today =  yyyy+ '/' + mm + '/' + dd; 
    return today;
}

  
var Funciones = {
    CalcularFechaFin
};

module.exports.Funciones = Funciones;