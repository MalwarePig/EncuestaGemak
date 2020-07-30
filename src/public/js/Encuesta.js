function GuardarEncuesta() {
     let Declaratoria = $('input[name="Declaratoria"]:checked').val();
     let PreguntaUno = $('input[name="pregunta1"]:checked').val();
     let PreguntaDos = $('input[name="pregunta2"]:checked').val();
     let PreguntaTres = $('input[name="pregunta3"]:checked').val();
     let PreguntaCinco = $('input[name="pregunta5"]:checked').val();

     var chck_TOS = document.getElementById("cbox1");
     var chck_Fiebre = document.getElementById("cbox2");
     var chck_Respirar = document.getElementById("cbox3");
     var chck_Gusto = document.getElementById("cbox4");
     var chck_Garganta = document.getElementById("cbox5");
     var chck_Cuerpo = document.getElementById("cbox6");
     var chck_Cabeza = document.getElementById("cbox7");
     let Tos = "";
     let Fiebre = "";
     let Respirar = "";
     let Gusto = "";
     let Garganta = "";
     let Cuerpo = "";
     let Cabeza = "";
     let Contador = 0;
     let Acceso = "Aceptado";

     console.log(PreguntaUno, PreguntaDos, PreguntaTres, PreguntaCinco);

     if (PreguntaUno == undefined || PreguntaDos == undefined || PreguntaTres == undefined || PreguntaCinco == undefined || Declaratoria == undefined) {
          Acceso = "Vacio";
     }

     //======================================================================
     if (PreguntaTres == "Si") {
          Acceso = "Preventivo";
     }
     //======================================================================
     if (PreguntaDos == "Si") {
          Acceso = "Preventivo";
     }
     //======================================================================
     if (chck_TOS.checked == true) {
          Acceso = "Negado";
     }
     //======================================================================
     if (chck_Fiebre.checked == true) {
          Acceso = "Negado";
     }
     //======================================================================
     if (chck_Respirar.checked == true) {
          Acceso = "Negado";
     }
     //======================================================================
     if (chck_Gusto.checked == true) {
          Acceso = "Negado";
     }
     //======================================================================
     if (chck_Garganta.checked == true) {
          Acceso = "Negado";
     }
     //======================================================================
     if (chck_Cuerpo.checked == true) {
          Acceso = "Negado";
     }
     //======================================================================
     if (chck_Cabeza.checked == true) {
          Acceso = "Preventivo";
     }
     if (PreguntaUno == "Si") {
          Acceso = "Negado";
     }
     if (PreguntaDos == "Si") {
          Acceso = "Negado";
     }
     if (PreguntaCinco == "Si") {
          Acceso = "Negado";
     }
     var ObjetoTabla = {
          Nombre: document.getElementById("Nombre").value,
          Nomina: document.getElementById("Nomina").value,
          Planta: document.getElementById("Planta").value,
          PreguntaUno: PreguntaUno,
          PreguntaDos: PreguntaDos,
          PreguntaDosText: document.getElementById("pregunta2Text").value,
          PreguntaTres: PreguntaTres,
          PreguntaTresText: document.getElementById("pregunta3Text").value,
          Tos: Tos,
          Fiebre: Fiebre,
          Respirar: Respirar,
          Gusto: Gusto,
          Garganta: Garganta,
          Cuerpo: Cuerpo,
          Cabeza: Cabeza,
          PreguntaCinco: PreguntaCinco,
          PreguntaCincoText: document.getElementById("pregunta5Text").value,
          Acceso: Acceso,
          Declaratoria: Declaratoria
     }


     $.post("/GuardarEncuesta", // url
          { ObjetoTabla }, // data to be submit
          function (objeto, estatus) {// success callback
               //console.log("objeto: " + objeto + "Estatus: " + estatus);
          });

     if (Acceso == "Vacio") {
          $("#myModalVacio").modal();
          //document.getElementById("Formualario").reset();
          //setTimeout("location.reload()", 3000);
     }
     else if (Acceso == "Preventivo" || Declaratoria == "No") {
          $("#myModalPreventivo").modal();

     }
     else if (Acceso == "Negado") {
          $("#myModalNegado").modal();

     } else if (Acceso == "Aceptado") {
          $("#myModalAcceso").modal();

     }
}


 function Reiniciar(){
     document.getElementById("Formualario").reset();
     setTimeout("location.reload()",1000);
}