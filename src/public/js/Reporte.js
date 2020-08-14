//=========================================== BUSCAR TRABAJADORES POR NUMERO DE NOMINA =================================================//
function Tabla() {
    var Planta = window.location.href;
    var condicion = Planta.indexOf("ReporteM");
    let Area = document.getElementById("Area").value;
    var FechaLocal = moment().format("YYYY-MM-DD");
    let Horario = document.getElementById("Horario").value;


    if (condicion > 0) { //si es morelos...
        $.ajax({
            url: "/TablaM/"+ Area + " " + FechaLocal + " " + Horario,
            success: function (data) {

                for (var i = 0; i < data.length; i++) {
                    let Aceptable = data[i].Aceptable;
                    let Nombre = data[i].Nombre;
                    let Nomina = data[i].Nomina;
                    let Planta = data[i].Planta;
                    let Fecha = data[i].Fecha;

                    let Motivo = [];
                    if (Aceptable == "Aceptado") {
                        Arreglo = [Aceptable, Nombre, Nomina, Planta, "N/A", Fecha];
                        var Tabla = document.getElementById('Registros').getElementsByTagName('tbody')[0];
                        // inserta una fila al final de la tabla
                        var newRow = Tabla.insertRow(Tabla.rows.length);
                        for (var x = 0; x < Arreglo.length; x++) {
                            // inserta una celda en el indice 0
                            var newCell = newRow.insertCell(x);
                            newRow.setAttribute("id", "Fila" + i);//se asigna id al incrementar cada fila +1 para contar el encabezado
                            // adjuntar el texto al nodo
                            var newText = document.createTextNode(Arreglo[x]);
                            if (x == 5) {
                                newCell.setAttribute("id", "Fecha" + i);//se asigna id al incrementar cada fila +1 para contar el encabezado
                            }
                            newCell.appendChild(newText);
                        }
                    }//Aceptados
                    if (Aceptable == "Negado") {
                        let Declaratoria = data[i].Declaratoria;
                        let PreguntaUno = data[i].PreguntaUno;
                        let PreguntaDos = data[i].PreguntaDos;
                        let PreguntaDosText = data[i].PreguntaDosText;
                        let PreguntaTres = data[i].PreguntaTres;
                        let PreguntaTresText = data[i].PreguntaTresText;
                        let Tos = data[i].Tos;
                        let Fiebre = data[i].Fiebre;
                        let Respirar = data[i].Respirar;
                        let Gusto = data[i].Gusto;
                        let Garganta = data[i].Garganta;
                        let Cuerpo = data[i].Cuerpo;
                        let Cabeza = data[i].Cabeza;
                        let PreguntaCinco = data[i].PreguntaCinco;
                        let PreguntaCincoText = data[i].PreguntaCincoText;


                        if (Declaratoria == "No") {
                            Motivo.push("Declaracion: " + Declaratoria);
                        }
                        if (PreguntaUno == "Si") {
                            Motivo.push("Contacto con COVID19: " + PreguntaUno);
                        }
                        if (PreguntaDos == "Si") {
                            Motivo.push("Sí viajo: " + PreguntaDosText);
                        }
                        if (PreguntaTres == "Si") {
                            Motivo.push("Sí estuvo en lugar concurrido: " + PreguntaTresText);
                        }
                        if (PreguntaCinco == "Si") {
                            Motivo.push("Sí estuvo en lugar concurrido: " + PreguntaCincoText);
                        }

                        if (Tos == "Si") { Motivo.push("Tos"); }
                        if (Fiebre == "Si") { Motivo.push("Fiebre"); }
                        if (Respirar == "Si") { Motivo.push("Respirar"); }
                        if (Gusto == "Si") { Motivo.push("Perdidad de gusto"); }
                        if (Garganta == "Si") { Motivo.push("Dolor de garganta"); }
                        if (Cuerpo == "Si") { Motivo.push("Dolor de cuerpo"); }
                        if (Cabeza == "Si") { Motivo.push("Dolor inusual de cabeza"); }
                        // alert(Nombre + Motivo.join()+ 'Sintomas ' + Declaratoria+PreguntaUno+PreguntaDos+PreguntaTres+'tos'+Tos+'Fiebre'+Fiebre+'Respirar'+Respirar+'gusto'+Gusto+'Garganta'+Garganta+'cuerpo'+Cuerpo+'cabeza'+Cabeza);

                        Arreglo = [Aceptable, Nombre, Nomina, Planta, Motivo.join(), Fecha];
                        var Tabla = document.getElementById('Registros').getElementsByTagName('tbody')[0];
                        // inserta una fila al final de la tabla
                        var newRow = Tabla.insertRow(Tabla.rows.length);
                        for (var x = 0; x < Arreglo.length; x++) {
                            // inserta una celda en el indice 0
                            var newCell = newRow.insertCell(x);
                            newRow.setAttribute("id", "Fila" + i);//se asigna id al incrementar cada fila +1 para contar el encabezado
                            // adjuntar el texto al nodo
                            var newText = document.createTextNode(Arreglo[x]);
                            if (x == 5) {
                                newCell.setAttribute("id", "Fecha" + i);//se asigna id al incrementar cada fila +1 para contar el encabezado
                            }
                            newCell.appendChild(newText);
                        }
                    }//Aceptados
                    //Preventivo
                    if (Aceptable == "Preventivo") {

                        let Declaratoria = data[i].Declaratoria;
                        let PreguntaUno = data[i].PreguntaUno;
                        let PreguntaDos = data[i].PreguntaDos;
                        let PreguntaDosText = data[i].PreguntaDosText;
                        let PreguntaTres = data[i].PreguntaTres;
                        let PreguntaTresText = data[i].PreguntaTresText;
                        let Tos = data[i].Tos;
                        let Fiebre = data[i].Fiebre;
                        let Respirar = data[i].Respirar;
                        let Gusto = data[i].Gusto;
                        let Garganta = data[i].Garganta;
                        let Cuerpo = data[i].Cuerpo;
                        let Cabeza = data[i].Cabeza;
                        let PreguntaCinco = data[i].PreguntaCinco;
                        let PreguntaCincoText = data[i].PreguntaCincoText;

                        if (Declaratoria == "No") {
                            Motivo.push("Declaracion: " + Declaratoria);
                        }
                        if (PreguntaUno == "Si") {
                            Motivo.push("Contacto con COVID19: " + PreguntaUno);
                        }
                        if (PreguntaDos == "Si") {
                            Motivo.push("Sí viajo: " + PreguntaDosText);
                        }
                        if (PreguntaTres == "Si") {
                            Motivo.push("Sí estuvo en lugar concurrido: " + PreguntaTresText);
                        }
                        if (PreguntaCinco == "Si") {
                            Motivo.push("Sí estuvo en lugar concurrido: " + PreguntaCincoText);
                        }

                        if (Tos == "Si") { Motivo.push("Tos"); }
                        if (Fiebre == "Si") { Motivo.push("Fiebre"); }
                        if (Respirar == "Si") { Motivo.push("Respirar"); }
                        if (Gusto == "Si") { Motivo.push("Perdidad de gusto"); }
                        if (Garganta == "Si") { Motivo.push("Dolor de garganta"); }
                        if (Cuerpo == "Si") { Motivo.push("Dolor de cuerpo"); }
                        if (Cabeza == "Si") { Motivo.push("Dolor inusual de cabeza"); }

                        Arreglo = [Aceptable, Nombre, Nomina, Planta, Motivo.join(), Fecha];
                        var Tabla = document.getElementById('Registros').getElementsByTagName('tbody')[0];
                        // inserta una fila al final de la tabla
                        var newRow = Tabla.insertRow(Tabla.rows.length);
                        for (var x = 0; x < Arreglo.length; x++) {
                            // inserta una celda en el indice 0
                            var newCell = newRow.insertCell(x);
                            newRow.setAttribute("id", "Fila" + i);//se asigna id al incrementar cada fila +1 para contar el encabezado
                            // adjuntar el texto al nodo
                            var newText = document.createTextNode(Arreglo[x]);
                            if (x == 5) {
                                newCell.setAttribute("id", "Fecha" + i);//se asigna id al incrementar cada fila +1 para contar el encabezado
                            }
                            newCell.appendChild(newText);
                        }
                    }//Preventivo
                }//Ciclo de todo los registros
                //Fecha();
                Color();
                Pendientes();
            }//Funcion success
        })
    }//if Morelos
    else {//si es Bravo
        $.ajax({
            url: "/TablaM/"+ Area + " " + FechaLocal,
            success: function (data) {

                for (var i = 0; i < data.length; i++) {
                    let Aceptable = data[i].Aceptable;
                    let Nombre = data[i].Nombre;
                    let Nomina = data[i].Nomina;
                    let Planta = data[i].Planta;
                    let Fecha = data[i].Fecha;

                    let Motivo = [];
                    if (Aceptable == "Aceptado") {
                        Arreglo = [Aceptable, Nombre, Nomina, Planta, "N/A", Fecha];
                        var Tabla = document.getElementById('Registros').getElementsByTagName('tbody')[0];
                        // inserta una fila al final de la tabla
                        var newRow = Tabla.insertRow(Tabla.rows.length);
                        for (var x = 0; x < Arreglo.length; x++) {
                            // inserta una celda en el indice 0
                            var newCell = newRow.insertCell(x);
                            newRow.setAttribute("id", "Fila" + i);//se asigna id al incrementar cada fila +1 para contar el encabezado
                            // adjuntar el texto al nodo
                            var newText = document.createTextNode(Arreglo[x]);
                            if (x == 5) {
                                newCell.setAttribute("id", "Fecha" + i);//se asigna id al incrementar cada fila +1 para contar el encabezado
                            }
                            newCell.appendChild(newText);
                        }
                    }//Aceptados
                    if (Aceptable == "Negado") {
                        let Declaratoria = data[i].Declaratoria;
                        let PreguntaUno = data[i].PreguntaUno;
                        let PreguntaDos = data[i].PreguntaDos;
                        let PreguntaDosText = data[i].PreguntaDosText;
                        let PreguntaTres = data[i].PreguntaTres;
                        let PreguntaTresText = data[i].PreguntaTresText;
                        let Tos = data[i].Tos;
                        let Fiebre = data[i].Fiebre;
                        let Respirar = data[i].Respirar;
                        let Gusto = data[i].Gusto;
                        let Garganta = data[i].Garganta;
                        let Cuerpo = data[i].Cuerpo;
                        let Cabeza = data[i].Cabeza;
                        let PreguntaCinco = data[i].PreguntaCinco;
                        let PreguntaCincoText = data[i].PreguntaCincoText;


                        if (Declaratoria == "No") {
                            Motivo.push("Declaracion: " + Declaratoria);
                        }
                        if (PreguntaUno == "Si") {
                            Motivo.push("Contacto con COVID19: " + PreguntaUno);
                        }
                        if (PreguntaDos == "Si") {
                            Motivo.push("Sí viajo: " + PreguntaDosText);
                        }
                        if (PreguntaTres == "Si") {
                            Motivo.push("Sí estuvo en lugar concurrido: " + PreguntaTresText);
                        }
                        if (PreguntaCinco == "Si") {
                            Motivo.push("Sí estuvo en lugar concurrido: " + PreguntaCincoText);
                        }

                        if (Tos == "Si") { Motivo.push("Tos"); }
                        if (Fiebre == "Si") { Motivo.push("Fiebre"); }
                        if (Respirar == "Si") { Motivo.push("Respirar"); }
                        if (Gusto == "Si") { Motivo.push("Perdidad de gusto"); }
                        if (Garganta == "Si") { Motivo.push("Dolor de garganta"); }
                        if (Cuerpo == "Si") { Motivo.push("Dolor de cuerpo"); }
                        if (Cabeza == "Si") { Motivo.push("Dolor inusual de cabeza"); }
                        // alert(Nombre + Motivo.join()+ 'Sintomas ' + Declaratoria+PreguntaUno+PreguntaDos+PreguntaTres+'tos'+Tos+'Fiebre'+Fiebre+'Respirar'+Respirar+'gusto'+Gusto+'Garganta'+Garganta+'cuerpo'+Cuerpo+'cabeza'+Cabeza);

                        Arreglo = [Aceptable, Nombre, Nomina, Planta, Motivo.join(), Fecha];
                        var Tabla = document.getElementById('Registros').getElementsByTagName('tbody')[0];
                        // inserta una fila al final de la tabla
                        var newRow = Tabla.insertRow(Tabla.rows.length);
                        for (var x = 0; x < Arreglo.length; x++) {
                            // inserta una celda en el indice 0
                            var newCell = newRow.insertCell(x);
                            newRow.setAttribute("id", "Fila" + i);//se asigna id al incrementar cada fila +1 para contar el encabezado
                            // adjuntar el texto al nodo
                            var newText = document.createTextNode(Arreglo[x]);
                            if (x == 5) {
                                newCell.setAttribute("id", "Fecha" + i);//se asigna id al incrementar cada fila +1 para contar el encabezado
                            }
                            newCell.appendChild(newText);
                        }
                    }//Aceptados
                    //Preventivo
                    if (Aceptable == "Preventivo") {

                        let Declaratoria = data[i].Declaratoria;
                        let PreguntaUno = data[i].PreguntaUno;
                        let PreguntaDos = data[i].PreguntaDos;
                        let PreguntaDosText = data[i].PreguntaDosText;
                        let PreguntaTres = data[i].PreguntaTres;
                        let PreguntaTresText = data[i].PreguntaTresText;
                        let Tos = data[i].Tos;
                        let Fiebre = data[i].Fiebre;
                        let Respirar = data[i].Respirar;
                        let Gusto = data[i].Gusto;
                        let Garganta = data[i].Garganta;
                        let Cuerpo = data[i].Cuerpo;
                        let Cabeza = data[i].Cabeza;
                        let PreguntaCinco = data[i].PreguntaCinco;
                        let PreguntaCincoText = data[i].PreguntaCincoText;

                        if (Declaratoria == "No") {
                            Motivo.push("Declaracion: " + Declaratoria);
                        }
                        if (PreguntaUno == "Si") {
                            Motivo.push("Contacto con COVID19: " + PreguntaUno);
                        }
                        if (PreguntaDos == "Si") {
                            Motivo.push("Sí viajo: " + PreguntaDosText);
                        }
                        if (PreguntaTres == "Si") {
                            Motivo.push("Sí estuvo en lugar concurrido: " + PreguntaTresText);
                        }
                        if (PreguntaCinco == "Si") {
                            Motivo.push("Sí estuvo en lugar concurrido: " + PreguntaCincoText);
                        }

                        if (Tos == "Si") { Motivo.push("Tos"); }
                        if (Fiebre == "Si") { Motivo.push("Fiebre"); }
                        if (Respirar == "Si") { Motivo.push("Respirar"); }
                        if (Gusto == "Si") { Motivo.push("Perdidad de gusto"); }
                        if (Garganta == "Si") { Motivo.push("Dolor de garganta"); }
                        if (Cuerpo == "Si") { Motivo.push("Dolor de cuerpo"); }
                        if (Cabeza == "Si") { Motivo.push("Dolor inusual de cabeza"); }

                        Arreglo = [Aceptable, Nombre, Nomina, Planta, Motivo.join(), Fecha];
                        var Tabla = document.getElementById('Registros').getElementsByTagName('tbody')[0];
                        // inserta una fila al final de la tabla
                        var newRow = Tabla.insertRow(Tabla.rows.length);
                        for (var x = 0; x < Arreglo.length; x++) {
                            // inserta una celda en el indice 0
                            var newCell = newRow.insertCell(x);
                            newRow.setAttribute("id", "Fila" + i);//se asigna id al incrementar cada fila +1 para contar el encabezado
                            // adjuntar el texto al nodo
                            var newText = document.createTextNode(Arreglo[x]);
                            if (x == 5) {
                                newCell.setAttribute("id", "Fecha" + i);//se asigna id al incrementar cada fila +1 para contar el encabezado
                            }
                            newCell.appendChild(newText);
                        }
                    }//Preventivo
                }//Ciclo de todo los registros
                //Fecha();
                Color();
                Pendientes();
            }//Funcion success
        })
    }//else Bravo
}

function Fecha() {
    var tabla = document.getElementById('Registros').getElementsByTagName('tbody')[0];
    var total = tabla.rows.length//Total de filasa
    for (var j = 0; j < total; j++) {//filas
        let Fecha =  new Date(tabla.rows[j].cells[5].childNodes[0].nodeValue);
        console.log('Fecha tabla ' + Fecha);
        var dd = Fecha.getDate();
        var mm = Fecha.getMonth() + 1;
        var yyyy = Fecha.getFullYear();
        var HH = Fecha.getHours();
        var mi = Fecha.getMinutes();

        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        var today = dd + '/' + mm + '/' + yyyy;
        document.getElementById("Fecha" + j).innerHTML = today;
        console.log('Fecha Funcion ' + today);
    }//fin filas
}

function Color() {
    try {
        var tabla = document.getElementById('Registros').getElementsByTagName('tbody')[0];
        var total = tabla.rows.length//Total de filasa
        let Condicion = "";
        for (var j = 0; j < total; j++) {//filas
            Condicion = tabla.rows[j].cells[0].childNodes[0].nodeValue;
            if (Condicion == "Aceptado") {
                document.getElementById("Fila" + j).style.backgroundColor = " #b5d687 "; //Verde
            } else if (Condicion == "Negado") {
                document.getElementById("Fila" + j).style.backgroundColor = "#e75c5c"; //Rojo
            } else {
                document.getElementById("Fila" + j).style.backgroundColor = "#ee8018 "; //Naranja
            }
        }//fin filas
    } catch (err) {
        console.log(err);
    }
}

function Modal() {
    $("#ModalSection").modal();
    //document.getElementById("Formualario").reset();
    //setTimeout("location.reload()", 3000);
}

function Excel() {
    var table = document.getElementById("Registros");
    var total = table.rows.length;//Total de filas
    console.log(total);
    var tabla = document.getElementById("Registros");
    var wb = XLSX.utils.table_to_book(tabla, { sheet: "Reporte" });
    var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'binary' });
    function s2ab(s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    }
    saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), 'Reporte_Covid.xlsx');
}

function Pendientes() {

    var url = window.location.href;
    var Condicion = url.indexOf("ReporteM");
    var Planta = "";
    var tabla = document.getElementById("Registros");
    var total = tabla.rows.length//Total de filas
    let Area = document.getElementById("Area").value;
    if (Condicion > 0) {
        Planta = "Morelos";
        $.ajax({
            url: '/PendientesMorelos/' + Area,
            success: function (data) {

                for (var j = 0; j < data.length; j++) {
                    var existencia = false;
                    var Nombre = data[j].Nombre;
                    var Nomina = data[j].Nomina;
                    var Planta = data[j].Planta;
                    for (var i = 1; i <= total - 1; i++) {
                        if (tabla.rows[i].cells[2].childNodes[0].nodeValue == Nomina) {
                            existencia = true;
                        }
                    }// i Tabla
                    if (existencia == false) {
                        //alert('falta' + Nomina)
                        Arreglo = ['Sin registro', Nombre, Nomina, Planta, '-', '-'];
                        var Tabla = document.getElementById('Registros').getElementsByTagName('tbody')[0];
                        // inserta una fila al final de la tabla
                        var newRow = Tabla.insertRow(Tabla.rows.length);
                        for (var x = 0; x < Arreglo.length; x++) {
                            // inserta una celda en el indice 0
                            var newCell = newRow.insertCell(x);
                            newRow.setAttribute("id", "Fila" + j);//se asigna id al incrementar cada fila +1 para contar el encabezado
                            // adjuntar el texto al nodo
                            var newText = document.createTextNode(Arreglo[x]);
                            if (x == 5) {
                                newCell.setAttribute("id", "Fecha" + i);//se asigna id al incrementar cada fila +1 para contar el encabezado
                            }
                            newCell.appendChild(newText);
                            newCell.style.backgroundColor = "#a9a5a4  "; //gris
                        }
                    }
                }// j data
            }
        })
    } else {
        Planta = "Bravo"
        $.ajax({
            url: '/PendientesBravo/' + Area,
            success: function (data) {

                for (var j = 0; j < data.length; j++) {
                    var existencia = false;
                    var Nombre = data[j].Nombre;
                    var Nomina = data[j].Nomina;
                    var Planta = data[j].Planta;
                    for (var i = 1; i <= total - 1; i++) {
                        if (tabla.rows[i].cells[2].childNodes[0].nodeValue == Nomina) {
                            existencia = true;
                        }
                    }// i Tabla
                    if (existencia == false) {
                        //alert('falta' + Nomina)
                        Arreglo = ['Sin registro', Nombre, Nomina, Planta, '-', '-'];
                        var Tabla = document.getElementById('Registros').getElementsByTagName('tbody')[0];
                        // inserta una fila al final de la tabla
                        var newRow = Tabla.insertRow(Tabla.rows.length);
                        for (var x = 0; x < Arreglo.length; x++) {
                            // inserta una celda en el indice 0
                            var newCell = newRow.insertCell(x);
                            newRow.setAttribute("id", "Fila" + j);//se asigna id al incrementar cada fila +1 para contar el encabezado
                            // adjuntar el texto al nodo
                            var newText = document.createTextNode(Arreglo[x]);
                            if (x == 5) {
                                newCell.setAttribute("id", "Fecha" + i);//se asigna id al incrementar cada fila +1 para contar el encabezado
                            }
                            newCell.appendChild(newText);
                            newCell.style.backgroundColor = "#a9a5a4  "; //gris
                        }
                    }
                }// j data
            }
        })
    }
    //alert("Pendientes: " + total + 'Nomina'+tabla.rows[1].cells[2].childNodes[0].nodeValue);
}

/*==========================================    FORMTATO DE FECHA    ==========================================================================
===============================================================================================================================================*/
function FormtatoFechas(Fecha) {
    var today = new Date(Fecha);
    var dd = today.getDate();
    var mm = today.getMonth();
    var yyyy = today.getFullYear();
    var HH = today.getHours();
    var mi = today.getMinutes();

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    var today = dd + '/' + mm + '/' + yyyy;
    return today;
}