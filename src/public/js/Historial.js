function His_Nomina(){
    let nomina = document.getElementById("Nomina").nodeValue;
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
}