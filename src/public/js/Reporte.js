//=========================================== BUSCAR TRABAJADORES POR NUMERO DE NOMINA =================================================//
function Tabla() {
    var Planta = window.location.href;
    var condicion = Planta.indexOf("ReporteM");
    let Area = document.getElementById("Area").value;
    alert(Area);

    if (condicion > 0) { //si es morelos...
        $.ajax({
            url: "/TablaM/"+Area,
            success: function (data) {

                for (var i = 0; i < data.length; i++) {
                    let Aceptable = data[i].Aceptable;
                    let Nombre = data[i].Nombre;
                    let Nomina = data[i].Nomina;
                    let Planta = data[i].Planta;
                    let Fecha = data[i].Fecha;
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

                        const Motivo = [];
                        if (PreguntaUno == "Si") {
                            Motivo.push("Contacto con COVID19: " + PreguntaUno);
                        }
                        if (PreguntaDos == "Si") {
                            Motivo.push("Sí viajo: " + PreguntaDosText);
                        }
                        if (PreguntaTres == "Si") {
                            Motivo.push("Sí estuvo en lugar concurrido: " + PreguntaTresText);
                        }

                        for (var x = 0; x < 7; x++) {
                            switch (x) {
                                case 1: if (Tos == "Si") { Motivo.push("Tos"); }
                                    break;
                                case 2: if (Fiebre == "Si") { Motivo.push("Fiebre"); }
                                    break;
                                case 3: if (Respirar == "Si") { Motivo.push("Respirar"); }
                                    break;
                                case 4: if (Gusto == "Si") { Motivo.push("Perdidad de gusto"); }
                                    break;
                                case 5: if (Garganta == "Si") { Motivo.push("Dolor de garganta"); }
                                    break;
                                case 6: if (Cuerpo == "Si") { Motivo.push("Dolor de cuerpo"); }
                                    break;
                                case 7: if (Cabeza == "Si") { Motivo.push("Dolor inusual de cabeza"); }
                                    break;
                            }
                        }
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

                        const Motivo = [];
                        if (PreguntaUno == "Si") {
                            Motivo.push("Contacto con COVID19: " + PreguntaUno);
                        }
                        if (PreguntaDos == "Si") {
                            Motivo.push("Sí viajo: " + PreguntaDosText);
                        }
                        if (PreguntaTres == "Si") {
                            Motivo.push("Sí estuvo en lugar concurrido: " + PreguntaTresText);
                        }

                        for (var x = 0; x < 8; x++) {
                            switch (x) {
                                case 1: if (Tos == "Si") { Motivo.push("Tos"); }
                                    break;
                                case 2: if (Fiebre == "Si") { Motivo.push("Fiebre"); }
                                    break;
                                case 3: if (Respirar == "Si") { Motivo.push("Respirar"); }
                                    break;
                                case 4: if (Gusto == "Si") { Motivo.push("Perdidad de gusto"); }
                                    break;
                                case 5: if (Garganta == "Si") { Motivo.push("Dolor de garganta"); }
                                    break;
                                case 6: if (Cuerpo == "Si") { Motivo.push("Dolor de cuerpo"); }
                                    break;
                                case 7: if (Cabeza == "Si") { Motivo.push("Dolor inusual de cabeza"); }
                                    break;
                            }
                        }
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
                Fecha();
                Color();
            }//Funcion success
        })
    }//if Morelos
    else {//si es Bravo
        $.ajax({
            url: '/TablaB',
            success: function (data) {

                for (var i = 0; i < data.length; i++) {
                    let Aceptable = data[i].Aceptable;
                    let Nombre = data[i].Nombre;
                    let Nomina = data[i].Nomina;
                    let Planta = data[i].Planta;
                    let Fecha = data[i].Fecha;
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

                        const Motivo = [];
                        if (PreguntaUno == "Si") {
                            Motivo.push("Contacto con COVID19: " + PreguntaUno);
                        }
                        if (PreguntaDos == "Si") {
                            Motivo.push("Sí viajo: " + PreguntaDosText);
                        }
                        if (PreguntaTres == "Si") {
                            Motivo.push("Sí estuvo en lugar concurrido: " + PreguntaTresText);
                        }

                        for (var x = 0; x < 7; x++) {
                            switch (x) {
                                case 1: if (Tos == "Si") { Motivo.push("Tos"); }
                                    break;
                                case 2: if (Fiebre == "Si") { Motivo.push("Fiebre"); }
                                    break;
                                case 3: if (Respirar == "Si") { Motivo.push("Respirar"); }
                                    break;
                                case 4: if (Gusto == "Si") { Motivo.push("Perdidad de gusto"); }
                                    break;
                                case 5: if (Garganta == "Si") { Motivo.push("Dolor de garganta"); }
                                    break;
                                case 6: if (Cuerpo == "Si") { Motivo.push("Dolor de cuerpo"); }
                                    break;
                                case 7: if (Cabeza == "Si") { Motivo.push("Dolor inusual de cabeza"); }
                                    break;
                            }
                        }
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

                        const Motivo = [];
                        if (PreguntaUno == "Si") {
                            Motivo.push("Contacto con COVID19: " + PreguntaUno);
                        }
                        if (PreguntaDos == "Si") {
                            Motivo.push("Sí viajo: " + PreguntaDosText);
                        }
                        if (PreguntaTres == "Si") {
                            Motivo.push("Sí estuvo en lugar concurrido: " + PreguntaTresText);
                        }

                        for (var x = 0; x < 8; x++) {
                            switch (x) {
                                case 1: if (Tos == "Si") { Motivo.push("Tos"); }
                                    break;
                                case 2: if (Fiebre == "Si") { Motivo.push("Fiebre"); }
                                    break;
                                case 3: if (Respirar == "Si") { Motivo.push("Respirar"); }
                                    break;
                                case 4: if (Gusto == "Si") { Motivo.push("Perdidad de gusto"); }
                                    break;
                                case 5: if (Garganta == "Si") { Motivo.push("Dolor de garganta"); }
                                    break;
                                case 6: if (Cuerpo == "Si") { Motivo.push("Dolor de cuerpo"); }
                                    break;
                                case 7: if (Cabeza == "Si") { Motivo.push("Dolor inusual de cabeza"); }
                                    break;
                            }
                        }
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
                Fecha();
                Color();
            }//Funcion success
        })
    }//else Bravo
}

function Fecha() {
    var tabla = document.getElementById('Registros').getElementsByTagName('tbody')[0];
    var total = tabla.rows.length//Total de filasa
    for (var j = 0; j < total; j++) {//filas
        console.log("Fila: " + j - 1)
        let Fecha = tabla.rows[j].cells[5].childNodes[0].nodeValue;
        document.getElementById("Fecha" + j).innerHTML = moment(Fecha).format('MM/DD/YYYY');
        console.log("Fila " + j - 1)
    }//fin filas
}

function Color() {
    try {
        var tabla = document.getElementById('Registros').getElementsByTagName('tbody')[0];
        var total = tabla.rows.length//Total de filasa
        let Condicion = "";
        for (var j = 0; j < total; j++) {//filas
            Condicion = tabla.rows[j].cells[0].childNodes[0].nodeValue;
            console.log(j + Condicion);
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