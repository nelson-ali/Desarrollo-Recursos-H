/*
 *   Oasis - Sistema de Gestión para Recursos Humanos
 *   Empresa Estatal de Transporte por Cable "Mi Teleférico"
 *   Versión:  1.0.0
 *   Usuario Creador: Lic. Javier Loza
 *   Fecha Creación:  26-02-2016
 */
/**
 * Función para cargar los valores respectivos en el modal.
 * @param opcion
 * @param dataRecordRelaboral
 * @param dataRecordTipoDocumento
 * @param dataRecordPresentacionDoc
 */
function cargarModalRegistroEdicion(opcion, dataRecordRelaboral, dataRecordTipoDocumento, dataRecordPresentacionDoc) {
    var idTipoFechaEmiDoc = dataRecordTipoDocumento.id_tipofechaemidoc;
    var fechaInicioOperaciones = "01-01-2014";
    var fechaHoraInicioOperaciones = "2014-04-01 08:00";
    if (opcion == 2) {
        $("#btnGuardarPresentacionDocumento").data("id_presentaciondoc", dataRecordPresentacionDoc.id_presentaciondoc);
    } else $("#btnGuardarPresentacionDocumento").data("id_presentaciondoc", 0);
    var focable = null;
    $("#divDatosAdicionales").hide();
    /**
     * Sector de configuración del selector del emisor.
     */
    if (dataRecordTipoDocumento.id_tipoemisordoc == 1) {
        $("#divEmisor").hide();
    } else {
        $("#divEmisor").show();
        var idEmisor = 0;
        if (dataRecordPresentacionDoc != null) {
            idEmisor = dataRecordPresentacionDoc.id_institucion;
        }
        cargaListaDeEmisores(0, dataRecordTipoDocumento.id_tipoemisordoc, idEmisor);
        focable = $("#lstEmisores");
    }
    $(".divEmision").hide();
    /**
     * Sector de configuración de los datos de emisión del documento.
     */
    switch (idTipoFechaEmiDoc) {
        case 1:
            /*Particionada (Mes/Gestión)*/
            $("#divPart").show();
            var gestionEmi = "";
            var mesEmi = 0;
            if (opcion == 2 && dataRecordPresentacionDoc != null) {
                gestionEmi = dataRecordPresentacionDoc.gestion_emi;
                mesEmi = dataRecordPresentacionDoc.mes_emi;
            }
            cargarTodosLosMeses(mesEmi);
            $("#txtPartGestion").val(gestionEmi);
            if (focable == null) {
                focable = $("#lstPartMes");
            }
            break;
        case 2:
            /*Trimestral (Trimestre/Gestión)*/
            $("#divTrim").show();
            if (focable == null) {
                focable = $("#lstTrimTrimestre");
            }
            var trimEmision = 0;
            var gestionEmi = "";
            if (opcion == 2 && dataRecordPresentacionDoc != null
            ) {
                trimEmision = dataRecordPresentacionDoc.trim_emi;
            }
            cargaListadoTrimestres(opcion, trimEmision);
            if (opcion == 2 && dataRecordPresentacionDoc != null) {
                gestionEmi = dataRecordPresentacionDoc.mes_emi;
            }
            $("#txtTrimGestion").val(gestionEmi);
            $("#lstTrimTrimestre").on("change", function () {
                $("#txtTrimGestion").focus();
            });
            break;
        case 3:
            /*Conjuncionada (Día/Mes/Gestión)*/
            $("#divConj").show();
            var dia = 0;
            var mes = 0;
            var fechaEmision = "";
            if (opcion == 2 && dataRecordPresentacionDoc.dia_emi != null && dataRecordPresentacionDoc.mes_emi != null && dataRecordPresentacionDoc.gestion_emi != null) {
                dia = dataRecordPresentacionDoc.dia_emi + "";
                mes = dataRecordPresentacionDoc.mes_emi + "";
                if (dia.length == 1) {
                    dia = "0" + dia;
                }
                if (mes.length == 1) {
                    mes = "0" + mes;
                }
                fechaEmision = dia + "-" + mes + "-" + dataRecordPresentacionDoc.gestion_emi;
            }
            if (fechaEmision == "")$("#txtConjFechaEmi").val('').datepicker('update');
            else $("#txtConjFechaEmi").datepicker("update", fechaEmision);
            //$("#txtConjFechaEmi").datepicker('setStartDate', fechaInicioOperaciones);
            $("#txtConjFechaEmi").datepicker('setEndDate', "now");
            if (focable == null) {
                focable = $("#txtConjFechaEmi");
            }
            break;
        case 4:
            /*Conjuncionada + Hora (Día/Mes/Gestión Hora)*/
            $("#divConjHora").show();
            var dia = 0;
            var mes = 0;
            var fechaHoraEmision = "";
            if (opcion == 2 && dataRecordPresentacionDoc.dia_emi != null && dataRecordPresentacionDoc.mes_emi != null && dataRecordPresentacionDoc.gestion_emi != null) {
                dia = dataRecordPresentacionDoc.dia_emi + "";
                mes = dataRecordPresentacionDoc.mes_emi + "";
                if (dia.length == 1) {
                    dia = "0" + dia;
                }
                if (mes.length == 1) {
                    mes = "0" + mes;
                }
                fechaHoraEmision = dia + "-" + mes + "-" + dataRecordPresentacionDoc.gestion_emi + " " + dataRecordPresentacionDoc.hora_emi;
            }
            if (focable == null) {
                focable = $("#txtConjFechaHoraEmi");
            }
            $("#txtConjFechaHoraEmi").datetimepicker({
                format: "dd-mm-yyyy hh:ii",
                showMeridian: true,
                startDate: fechaHoraInicioOperaciones,
                endDate: "+0d",
                autoclose: true,
                todayBtn: true
            });
            var objFechaHoraEmision = procesaTextoAFechaHora(fechaHoraEmision, "-");
            $("#txtConjFechaHoraEmi").datetimepicker('update', objFechaHoraEmision);
            break;
        case 5:
            /*Gestión*/
            $("#divGest").show();
            var gestionEmi = "";
            if (opcion == 2 && dataRecordPresentacionDoc.gestion_emi != null) {
                gestionEmi = dataRecordPresentacionDoc.gestion_emi
            }
            $("#txtGestGestion").val(gestionEmi);
            if (focable == null) {
                focable = $("#txtGestGestion");
            }
            break;
    }
    /**
     * Sector para la definición de la fecha de Presentación
     */
    var fechaPres = "";
    if (opcion == 2 && dataRecordPresentacionDoc != null) {
        fechaPres = fechaConvertirAFormato(dataRecordPresentacionDoc.fecha_pres, "-");
    }
    if (fechaPres == "")$("#txtFechaPres").val('').datepicker('update');
    else $("#txtFechaPres").datepicker("update", fechaPres);
    //$("#txtFechaPres").datepicker('setStartDate', fechaInicioOperaciones);
    $("#txtFechaPres").datepicker('setEndDate', "now");
    /**
     * Sector de configuración de los datos adicionales
     */
    $("#divConjuntoDatosAdicionales").hide();
    var columnasAdicionales = "";
    var valoresDeColumnasAdicionales = "";
    var datosAdicionales = dataRecordTipoDocumento.columnas_aux;
    if (datosAdicionales != "" && datosAdicionales != null) {
        $("#divContenidoDatosAdicionales").html("");
        var res = jQuery.parseJSON(datosAdicionales);
        if (res.length > 0) {
            columnasAdicionales = "";
            valoresDeColumnasAdicionales = "";
            var valColAd = "";
            if (opcion == 2 && dataRecordPresentacionDoc != null) {
                valColAd = jQuery.parseJSON(dataRecordPresentacionDoc.columnas_aux);
            }
            $("#divConjuntoDatosAdicionales").show();
            $.each(res, function (key, val) {
                columnasAdicionales += "<div class='form-group divPresDoc' id='divCampoAux" + val.id + "'>";
                var obligatoriedad = " ";
                var claseObligatoriedad = "obl0";
                if (val.obligatoriedad == "SI") {
                    obligatoriedad = " *";
                    claseObligatoriedad = "obl1";
                }
                var nombreColumna = val.nombre;
                nombreColumna = nombreColumna.capitalize();
                var valorCampo = "";
                if (opcion == 2 && dataRecordPresentacionDoc != null && valColAd != null && valColAd[val.id] != undefined) {
                    valorCampo = valColAd[val.id];
                }
                /**
                 * Sector del armado de atributos de los campos auxiliares.
                 */
                switch (val.tipo) {
                    case "TEXTO":
                        columnasAdicionales += "<label class='col-md-4 control-label' for='txtCampoAux" + val.id + "'>" + nombreColumna + obligatoriedad + ":</label>";
                        columnasAdicionales += "<div class='col-md-8' form-group>";
                        columnasAdicionales += "<textarea id='txtCampoAux" + val.id + "' class='form-control' data-id='" + val.id + "' data-nombre='" + val.nombre + "' data-tipo='" + val.tipo + "' data-obligatoriedad='" + val.obligatoriedad + "'";
                        columnasAdicionales += "placeholder='" + nombreColumna + "..'>" + valorCampo + "</textarea>";
                        columnasAdicionales += "<span class='help-block' id='helpErrorTxt" + val.id + "'></span>";
                        columnasAdicionales += "</div></div>";
                        break;
                    case "NUMERO":
                        columnasAdicionales += "<label class='col-md-4 control-label' for='txtNumeroAux" + val.id + "'>" + nombreColumna + obligatoriedad + ":</label>";
                        columnasAdicionales += "<div class='col-md-4' form-group>";
                        columnasAdicionales += "<input type='text' id='txtNumeroAux" + val.id + "' class='form-control' data-id='" + val.id + "' data-nombre='" + val.nombre + "' data-tipo='" + val.tipo + "' data-obligatoriedad='" + val.obligatoriedad + "'";
                        columnasAdicionales += "placeholder='" + nombreColumna + "..' value='" + valorCampo + "'>";
                        columnasAdicionales += "<span class='help-block' id='helpErrorNum" + val.id + "'></span>";
                        columnasAdicionales += "</div></div>";
                        break;
                    case "FECHA":
                        columnasAdicionales += "<label class='col-md-4 control-label' for='txtFechaAux" + val.id + "'>" + nombreColumna + obligatoriedad + ":</label>";
                        columnasAdicionales += "<div class='col-md-4' form-group>";
                        columnasAdicionales += "<input type='text' id='txtFechaAux" + val.id + "' class='form-control input-datepicker-close' data-id='" + val.id + "' data-nombre='" + val.nombre + "' data-tipo='" + val.tipo + "' data-obligatoriedad='" + val.obligatoriedad + "'";
                        columnasAdicionales += "placeholder='dd-mm-aaaa' value='" + valorCampo + "'>";
                        columnasAdicionales += "<span class='help-block' id='helpErrorTxt" + val.id + "'></span>";
                        columnasAdicionales += "</div></div>";
                        break;
                    case "SI/NO":
                        columnasAdicionales += "<label class='col-md-4 control-label' for='chk" + val.id + "'>¿" + nombreColumna + "?" + obligatoriedad + ":</label>";
                        columnasAdicionales += "<div class='col-md-4' form-group>";
                        columnasAdicionales += "<input type='checkbox' name='chk" + val.id + "' id='chk" + val.id + "' data-on-text='SI' data-off-text='NO'>";
                        columnasAdicionales += "<span class='help-block' id='helpErrorChk" + val.id + "'></span>";
                        columnasAdicionales += "</div>";
                        columnasAdicionales += "</div>";
                        break;
                }
            });
            $("#divContenidoDatosAdicionales").html(columnasAdicionales);
            /**
             * Sector de la aplicación de atributos de los campos auxiliares.
             */
            $.each(res, function (key, val) {
                var valorCampo = "";
                if (valColAd != null) {
                    valorCampo = valColAd[val.id]
                }
                if (valorCampo == undefined) {
                    valorCampo = "";
                }
                switch (val.tipo) {
                    case "TEXTO":
                        break;
                    case "NUMERO":
                        break;
                    case "FECHA":
                        $("#txtFechaAux" + val.id).datepicker({
                            format: "dd-mm-yyyy",
                            autoclose: true
                        });
                        break;
                    case "SI/NO":
                        $("#chk" + val.id).bootstrapSwitch();
                        if (valorCampo.toUpperCase() == "SI") {
                            $("#chk" + val.id).bootstrapSwitch("state", true);
                        }
                        break;
                }
            });
        }
    }
    if (dataRecordPresentacionDoc != null) {
        $("#txtObservacion").val(dataRecordPresentacionDoc.presentacionesdoc_observacion);
    }
    if (focable != null) {
        $('#popupNuevoEditarPresentacionDoc').modal('show');
        $('#popupNuevoEditarPresentacionDoc').on('shown.bs.modal', function () {
            var timer = window.setTimeout(function () {
                focable.focus();
            }.bind(this), 300);
        })
    }
}
/**
 * Función para validar el contenido del modal para su registro posterior.
 * @param opcion
 * @param dataRecordRelaboral
 * @param dataRecordTipoDocumento
 * @param dataRecordPresentacionDoc
 */
function validarModalRegistroEdicion(opcion, dataRecordRelaboral, dataRecordTipoDocumento, dataRecordPresentacionDoc) {
    var fechaInicioOperaciones = "01-04-2014";
    var idTipoFechaEmiDoc = dataRecordTipoDocumento.id_tipofechaemidoc;
    var idPresentacionDoc = 0;
    var ok = true;
    if (opcion == 2) {
        idPresentacionDoc = $("#btnGuardarPresentacionDocumento").data("id_presentaciondoc");
    }
    var focable = null;
    /**
     * Sector de validación del selector del emisor.
     */
    var idEmisor = 0;
    if (dataRecordTipoDocumento.id_tipoemisordoc != 1 && ($("#lstEmisores").val() == '' || $("#lstEmisores").val() == null)) {

        ok = false;
        var msje = "Debe seleccionar el Emisor necesariamente.";
        $("#divEmisor").addClass("has-error");
        $("#helpErrorEmisor").html(msje);
        if (focable == null) {
            focable = $("#lstEmisores");
        }
    }
    /**
     * Sector de validación de los datos de emisión del documento.
     */
    switch (idTipoFechaEmiDoc) {
        case 1:
            /*Particionada (Mes/Gestión)*/
            var partMesEmi = 0;
            if ($("#lstPartMes").val() != null) {
                partMesEmi = $("#lstPartMes").val();
            }
            if (partMesEmi == 0) {
                ok = false;
                var msje = "Debe seleccionar el mes de emisi&oacute;n necesariamente.";
                $("#divPart").addClass("has-error");
                $("#helpErrorPartMes").html(msje);
                if (focable == null) {
                    focable = $("#lstPartMes");
                }
            }
            var partGestionEmi = 0;
            if ($("#txtPartGestion").val() != null) {
                partGestionEmi = $("#txtPartGestion").val();
            }
            if (partGestionEmi == 0) {
                ok = false;
                var msje = "Debe seleccionar la gesti&oacute;n de emisi&oacute;n necesariamente.";
                $("#divPart").addClass("has-error");
                $("#helpErrorPartGestion").html(msje);
                if (focable == null) {
                    focable = $("#txtPartGestion");
                }
            }
            break;
        case 2:
            /*Trimestral (Trimestre/Gestión)*/
            var trimTrimestre = 0;
            if ($("#lstTrimTrimestre").val() != "" && $("#lstTrimTrimestre").val() != 0) {
                trimTrimestre = $("#lstTrimTrimestre").val();
            }
            if (trimTrimestre == 0) {
                ok = false;
                var msje = "Debe seleccionar el trimestre de emisi&oacute;n necesariamente.";
                $("#divTrim").addClass("has-error");
                $("#helpErrorTrimTrimestre").html(msje);
                if (focable == null) {
                    focable = $("#lstTrimTrimestre");
                }
            }
            var trimGestion = 0;
            if ($("#txtTrimGestion").val() != "" && $("#txtTrimGestion").val() != 0) {
                trimGestion = $("#txtTrimGestion").val();
            }
            if (trimGestion == 0) {
                ok = false;
                var msje = "Debe seleccionar la gesti&oacute;n de emisi&oacute;n necesariamente.";
                $("#divTrim").addClass("has-error");
                $("#helpErrorTrimGestion").html(msje);
                if (focable == null) {
                    focable = $("#txtTrimGestion");
                }
            }
            break;
        case 3:
            /*Conjuncionada (Día/Mes/Gestión)*/
            var conjFechaEmi = "";
            if ($("#txtConjFechaEmi").val() != "" && $("#txtConjFechaEmi").val() != "0") {
                conjFechaEmi = $("#txtConjFechaEmi").val();
            }
            if (conjFechaEmi == "") {
                ok = false;
                var msje = "Debe especificar la Fecha de Emisi&oacute;n necesariamente.";
                $("#divConj").addClass("has-error");
                $("#helpErrorConjFechaEmi").html(msje);
                if (focable == null) {
                    focable = $("#txtConjFechaEmi");
                }
            }
            break;
        case 4:
            /*Conjuncionada + Hora (Día/Mes/Gestión Hora)*/
            var conjFechaHoraEmi = "";
            if ($("#txtConjFechaHoraEmi").val() != "" && $("#txtConjFechaEmi").val() != "0") {
                conjFechaHoraEmi = $("#txtConjFechaHoraEmi").val();
            }
            if (conjFechaHoraEmi == "") {
                ok = false;
                var msje = "Debe especificar la Fecha y Hora de Emisi&oacute;n necesariamente.";
                $("#divConjFechaHoraEmi").addClass("has-error");
                $("#helpErrorConjFechaHoraEmi").html(msje);
                if (focable == null) {
                    focable = $("#txtConjFechaEmi");
                }
            }
            break;
        case 5:
            /*Gestión*/
            var gestGestion = "";
            if ($("#txtGestGestion").val() != "" && $("#txtGestGestion").val() > 0) {
                gestGestion = $("#txtGestGestion").val();
            }
            if (gestGestion == "") {
                ok = false;
                var msje = "Debe especificar la gesti&oacute;n de emisi&oacute;n necesariamente.";
                $("#divGest").addClass("has-error");
                $("#helpErrorGestGestion").html(msje);
                if (focable == null) {
                    focable = $("#txtGestGestion");
                }
            }
            break;
    }
    /**
     * Sector para la validación de la fecha de Presentación.
     */
    var fechaPres = "";
    if ($("#txtFechaPres").val() != "") {
        fechaPres = $("#txtFechaPres").val();
    }
    if (fechaPres == "") {
        ok = false;
        var msje = "Debe especificar la fecha de presentaci&oacute;n del documento necesariamente.";
        $("#divFechaPres").addClass("has-error");
        $("#helpErrorFechaPres").html(msje);
        if (focable == null) {
            focable = $("#txtFechaPres");
        }
    } else {
        switch (idTipoFechaEmiDoc) {
            case 1:
                /*Particionada (Mes/Gestión)*/
                if (partMesEmi > 0 && partGestionEmi > 0) {
                    var arr = fechaPres.split("-");
                    var gesPres = arr[2];
                    var mesPres = arr[1];
                    if (gesPres > partGestionEmi || (gesPres == partGestionEmi && mesPres > partMesEmi)) {
                        ok = false;
                        var msje = "Existe una incongruencia entre el Mes / Gesti&oacute;n de emisi&oacute;n y la fecha de presentaci&oacute;n, verifique los datos.";
                        $("#divPart").addClass("has-error");
                        $("#divFechaPres").addClass("has-error");
                        $("#helpErrorPartMes").html(msje);
                        $("#helpErrorPartGestion").html(msje);
                        $("#helpErrorFechaPres").html(msje);
                        if (focable == null) {
                            focable = $("#lstPartMes");
                        }
                    }
                }
                break;
            case 2:
                /*Trimestral (Trimestre/Gestión)*/
                var mesIniTrim = 0;
                var mesFinTrim = 0;
                if (trimTrimestre > 0 && trimGestion > 0) {
                    trimTrimestre = parseInt(trimTrimestre);
                    trimGestion = parseInt(trimGestion);
                    var arr = fechaPres.split("-");
                    var gesPres = parseInt(arr[2]);
                    var mesPres = parseInt(arr[1]);
                    switch (trimTrimestre) {
                        case 1:
                            mesIniTrim = 1;
                            mesFinTrim = 3;
                            break;
                        case 2:
                            mesIniTrim = 4;
                            mesFinTrim = 6;
                            break;
                        case 3:
                            mesIniTrim = 7;
                            mesFinTrim = 9;
                            break;
                        case 4:
                            mesIniTrim = 10;
                            mesFinTrim = 12;
                            break;
                    }
                    if (gesPres < trimGestion || (gesPres == trimGestion && (mesPres < mesIniTrim || mesPres > mesFinTrim) )) {
                        ok = false;
                        var msje = "Existe una incongruencia entre el Trimestre / Gesti&oacute;n de emisi&oacute;n y la fecha de presentaci&oacute;n, verifique los datos.";
                        $("#divTrim").addClass("has-error");
                        $("#divFechaPres").addClass("has-error");
                        $("#helpErrorTrimTrimestre").html(msje);
                        $("#helpErrorTrimGestion").html(msje);
                        $("#helpErrorFechaPres").html(msje);
                        if (focable == null) {
                            focable = $("#lstTrimTrimestre");
                        }
                    }
                }
                break;
            case 3:
                /*Conjuncionada (Día/Mes/Gestión)*/
                if (conjFechaEmi != "") {
                    var sep = '-';
                    if (procesaTextoAFecha(fechaPres, sep) < procesaTextoAFecha(conjFechaEmi, sep)) {
                        ok = false;
                        var msje = "Existe una incongruencia entre la Fecha de Emisi&oacute;n y la Fecha de Presentaci&oacute;n, verifique los datos.";
                        $("#divConj").addClass("has-error");
                        $("#divFechaPres").addClass("has-error");
                        $("#helpErrorConjFechaEmi").html(msje);
                        $("#helpErrorFechaPres").html(msje);
                        if (focable == null) {
                            focable = $("#txtConjFechaEmi");
                        }
                    }
                }
                break;
            case 4:
                /*Conjuncionada + Hora (Día/Mes/Gestión Hora)*/
                if (conjFechaHoraEmi != "") {
                    var sep = '-';
                    var arrConjFechaEmiAux = conjFechaHoraEmi.split(" ");
                    var conjFechahoraEmiAux = arrConjFechaEmiAux[0];
                    if (procesaTextoAFecha(fechaPres, sep) < procesaTextoAFecha(conjFechahoraEmiAux, sep)) {
                        ok = false;
                        var msje = "Existe una incongruencia entre la Fecha de Emisi&oacute;n y la Fecha de Presentaci&oacute;n, verifique los datos.";
                        $("#divConjHora").addClass("has-error");
                        $("#divFechaPres").addClass("has-error");
                        $("#helpErrorConjFechaHoraEmi").html(msje);
                        $("#helpErrorFechaPres").html(msje);
                        if (focable == null) {
                            focable = $("#txtConjFechaHoraEmi");
                        }
                    }
                }
                break;
            case 5:
                /*Gestión*/
                if (gestGestion != "" && gestGestion > 0) {
                    gestGestion = parseInt(gestGestion);
                    var arr = fechaPres.split("-");
                    var gesPres = parseInt(arr[2]);
                    var mesPres = arr[1];
                    if (gesPres < gestGestion) {
                        ok = false;
                        var msje = "Existe una incongruencia entre la Gesti&oacute;n de Emisi&oacute;n y la Fecha de Presentaci&oacute;n, verifique los datos.";
                        $("#divGest").addClass("has-error");
                        $("#divFechaPres").addClass("has-error");
                        $("#helpErrorGestGestion").html(msje);
                        $("#helpErrorFechaPres").html(msje);
                        if (focable == null) {
                            focable = $("#txtGestGestion");
                        }
                    }
                }
                break;
        }
        /*Si no se hallaron errores en la fecha de presentación se verifica que se encuentre dentro del rango permitido*/
        if (fechaPres != "") {
            var dNow = new Date();
            var fechaActual = dNow.getDate() + '-' + (dNow.getMonth() + 1) + '-' + dNow.getFullYear();
            var sep = "-";
            if (procesaTextoAFecha(fechaPres, sep) > procesaTextoAFecha(fechaActual, sep)) {
                ok = false;
                var msje = "La Fecha de Presentaci&oacute;n no puede ser superior a la fecha actual, corrija el dato.";
                $("#divFechaPres").addClass("has-error");
                $("#helpErrorFechaPres").html(msje);
                if (focable == null) {
                    focable = $("#txtFechaPres");
                }
            }
            /*if (procesaTextoAFecha(fechaPres, sep) < procesaTextoAFecha(fechaInicioOperaciones, sep)) {
             ok = false;
             var msje = "La Fecha de Presentaci&oacute;n no puede ser inferior a la fecha de inicio de operaciones de la empresa, corrija el dato.";
             $("#divFechaPres").addClass("has-error");
             $("#helpErrorFechaPres").html(msje);
             if (focable == null) {
             focable = $("#txtFechaPres");
             }
             }*/
        }
    }

    /**
     * Sector de validación de los datos adicionales
     */
    var datosAdicionales = dataRecordTipoDocumento.columnas_aux;
    if (datosAdicionales != "" && datosAdicionales != null) {
        var res = jQuery.parseJSON(datosAdicionales);
        if (res.length > 0) {
            var nombreColumna = "";
            $.each(res, function (key, val) {
                /**
                 * Sólo se valida los campos adicionales con obligatoriedad
                 */
                if (val.obligatoriedad == "SI") {
                    nombreColumna = val.nombre;
                    nombreColumna = nombreColumna.capitalize();
                    /**
                     * Sector del control de atributos de los campos adicionales.
                     */
                    switch (val.tipo) {
                        case "TEXTO":
                            var valorTexto = $("#txtCampoAux" + val.id).val();
                            if (valorTexto == '') {
                                ok = false;
                                var msje = "Debe registrar el valor para el campo '" + nombreColumna + "' necesariamente.";
                                $("#divCampoAux" + val.id).addClass("has-error");
                                $("#helpErrorTxt" + val.id).html(msje);
                                if (focable == null) {
                                    focable = $("#txtCampoAux" + val.id);
                                }
                            }
                            break;
                        case "NUMERO":
                            var valorNumerico = $("#txtNumeroAux" + val.id).val();
                            if (valorNumerico == '') {
                                ok = false;
                                var msje = "Debe registrar el valor para el campo '" + nombreColumna + "' necesariamente.";
                                $("#divCampoAux" + val.id).addClass("has-error");
                                $("#helpErrorTxt" + val.id).html(msje);
                                if (focable == null) {
                                    focable = $("#txtNumeroAux" + val.id);
                                }
                            }
                            break;
                        case "FECHA":
                            var valorDeFecha = $("#txtFechaAux" + val.id).val();
                            if (valorDeFecha == '') {
                                ok = false;
                                var msje = "Debe registrar la fecha para el campo '" + nombreColumna + "' necesariamente.";
                                $("#divCampoAux" + val.id).addClass("has-error");
                                $("#helpErrorTxt" + val.id).html(msje);
                                if (focable == null) {
                                    focable = $("#txtFechaAux" + val.id);
                                }
                            }
                            break;
                        case "SI/NO":
                            if ($("#chk" + val.id).bootstrapSwitch("state") == undefined) {
                                ok = false;
                                var msje = "Debe seleccionar el valor para el campo '" + nombreColumna + "' necesariamente.";
                                $("#divCampoAux" + val.id).addClass("has-error");
                                $("#helpErrorChk" + val.id).html(msje);
                                if (focable == null) {
                                    focable = $("#chk" + val.id);
                                }
                            }
                            break;
                    }
                }
            });
        }
    }
    if (focable != null) {
        focable.focus();
    }
    return ok;
}
/**
 * Función para el registro o modificación de presentación de documento.
 * @param opcionReporteMultiple
 * @param opcionEdicion
 * @param dataRecordRelaboral
 * @param dataRecordTipoDocumento
 * @param dataRecordPresentacionDoc
 * @returns {boolean}
 */
function guardarPresentacionDoc(opcionReporteMultiple,opcionEdicion, dataRecordRelaboral, dataRecordTipoDocumento, dataRecordPresentacionDoc) {
    var sufijo = "";
    if (opcionReporteMultiple == 2) {
        sufijo = "Rep";
    }
    var fechaInicioOperaciones = "01-04-2014";
    var idTipoFechaEmiDoc = dataRecordTipoDocumento.id_tipofechaemidoc;
    var idPresentacionDoc = 0;
    var ok = false;
    if (opcionEdicion == 2) {
        idPresentacionDoc = $("#btnGuardarPresentacionDocumento").data("id_presentaciondoc");
    }
    var idTipoDocumento = dataRecordTipoDocumento.id_tipodocumento;
    var idPersona = dataRecordRelaboral.id_persona;
    var idRelaboral = dataRecordRelaboral.id_relaboral;
    var idInstitucion = 0;
    if (dataRecordTipoDocumento.id_tipoemisordoc != 1) {
        idInstitucion = $("#lstEmisores").val();
    }
    var gestionEmi = 0;
    var trimEmi = 0;
    var mesEmi = 0;
    var diaEmi = 0;
    var horaEmi = '';
    /**
     * Sector de validación de los datos de emisión del documento.
     */
    switch (idTipoFechaEmiDoc) {
        case 1:
            /*Particionada (Mes/Gestión)*/
            mesEmi = $("#lstPartMes").val();
            gestionEmi = $("#txtPartGestion").val();
            break;
        case 2:
            /*Trimestral (Trimestre/Gestión)*/
            trimEmi = $("#lstTrimTrimestre").val();
            gestionEmi = $("#txtTrimGestion").val();
            break;
        case 3:
            /*Conjuncionada (Día/Mes/Gestión)*/
            var conjFechaEmi = $("#txtConjFechaEmi").val();
            var arr = conjFechaEmi.split("-");
            diaEmi = arr[0];
            mesEmi = arr[1];
            gestionEmi = arr[2];
            break;
        case 4:
            /*Conjuncionada + Hora (Día/Mes/Gestión Hora)*/
            var conjFechaHoraEmi = $("#txtConjFechaHoraEmi").val();
            var arr = conjFechaHoraEmi.split("-");
            diaEmi = arr[0];
            mesEmi = arr[1];
            var gestionHora = arr[2];
            var arrHora = gestionHora.split(" ");
            gestionEmi = arrHora[0];
            horaEmi = arrHora[1];
            break;
        case 5:
            /*Gestión*/
            gestionEmi = $("#txtGestGestion").val();
            break;
    }
    var fechaPres = $("#txtFechaPres").val();
    var digital = "";
    var columnasAux = "";
    /**
     * Sector de validación de los datos adicionales
     */
    var datosAdicionales = dataRecordTipoDocumento.columnas_aux;
    if (datosAdicionales != "" && datosAdicionales != null) {
        var res = jQuery.parseJSON(datosAdicionales);
        if (res.length > 0) {
            var columnasAux = "{";
            var nombreColumna = "";
            $.each(res, function (key, val) {
                nombreColumna = val.nombre;
                nombreColumna = nombreColumna.capitalize();
                /**
                 * Sector del control de atributos de los campos adicionales.
                 */
                switch (val.tipo) {
                    case "TEXTO":
                        var valorTexto = $("#txtCampoAux" + val.id).val();
                        columnasAux += "|" + val.id + "|:|" + valorTexto + "|,";
                        break;
                    case "NUMERO":
                        var valorNumerico = $("#txtNumeroAux" + val.id).val();
                        columnasAux += "|" + val.id + "|:|" + valorNumerico + "|,";
                        break;
                    case "FECHA":
                        var valorDeFecha = $("#txtFechaAux" + val.id).val();
                        columnasAux += "|" + val.id + "|:|" + valorDeFecha + "|,";
                        break;
                    case "SI/NO":
                        if ($("#chk" + val.id).bootstrapSwitch("state")) {
                            columnasAux += "|" + val.id + "|:|SI|,";
                        } else  columnasAux += "|" + val.id + "|:|NO|,";
                        break;
                }
            });
            columnasAux += "}";
            columnasAux = columnasAux.replace(",}", "}");
        }
    }
    var observacion = $("#txtObservacion").val();
    if (idTipoDocumento > 0 && idPersona > 0 && idRelaboral > 0) {
        $.ajax({
            url: '/presentacionesdoc/save/',
            type: "POST",
            datatype: 'json',
            async: false,
            cache: false,
            data: {
                id: idPresentacionDoc,
                id_tipodocumento: idTipoDocumento,
                id_persona: idPersona,
                id_relaboral: idRelaboral,
                id_institucion: idInstitucion,
                gestion_emi: gestionEmi,
                trim_emi: trimEmi,
                mes_emi: mesEmi,
                dia_emi: diaEmi,
                hora_emi: horaEmi,
                fecha_pres: fechaPres,
                digital: digital,
                columnas_aux: columnasAux,
                observacion: observacion
            },
            success: function (data) {  //alert(data);
                var res = jQuery.parseJSON(data);
                /**
                 * Si se ha realizado correctamente el registro de la presentación de un documento.
                 */
                $(".msjes").hide();
                if (res.result == 1) {
                    ok = true;
                    $("#divMsjePorSuccess").html("");
                    $("#divMsjePorSuccess").append(res.msj);
                    $("#divMsjeNotificacionSuccess").jqxNotification("open");
                    $("#divGridDocumentosPresentados"+sufijo).jqxGrid("updatebounddata");
                } else if (res.result == 0) {
                    /**
                     * En caso de presentarse un error subsanable
                     */
                    $("#divMsjePorWarning").html("");
                    $("#divMsjePorWarning").append(res.msj);
                    $("#divMsjeNotificacionWarning").jqxNotification("open");
                } else {
                    /**
                     * En caso de haberse presentado un error crítico al momento de registrarse la presentación del documento.
                     */
                    $("#divMsjePorError").html("");
                    $("#divMsjePorError").append(res.msj);
                    $("#divMsjeNotificacionError").jqxNotification("open");
                }

            }, //mostramos el error
            error: function () {
                $("#divMsjePorError").html("");
                $("#divMsjePorError").append("Se ha producido un error Inesperado");
                $("#divMsjeNotificacionError").jqxNotification("open");
            }
        });
    }
    return ok;
}
/**
 * Función para la limpieza del formulario almacenado en el Modal de registro y edición de Presentación Documentos.
 */
function limpiarModalRegistroEdicion(opcion) {
    $(".divPresDoc").removeClass("has-error");
    $(".help-block").text("");
}
/**
 * Función para la obtención del listado de emisores.
 * @param opcion
 * @param idEmisor
 * @param idTipoEmisorDoc
 */
function cargaListaDeEmisores(opcion, idTipoEmisorDoc, idEmisor) {
    var sufijo = "";
    var selected = "";
    $("#lstEmisores" + sufijo).html("");
    $("#lstEmisores" + sufijo).prop("disabled", true);
    $.ajax({
        url: '/presentacionesdoc/listemisores/',
        type: "POST",
        datatype: 'json',
        data: {id_tipoemisordoc: idTipoEmisorDoc},
        async: false,
        cache: false,
        success: function (data) {  //alert(data);
            var res = jQuery.parseJSON(data);
            if (res.length > 0) {
                /*if (opcion == 2 || res.length > 1) {
                 $("#lstEmisores" + sufijo).append("<option value=''>Seleccionar..</option>");
                 }*/
                $("#lstEmisores" + sufijo).append("<option value=''>Seleccionar..</option>");
                $("#lstEmisores" + sufijo).prop("disabled", false);
                $.each(res, function (key, val) {
                    if (idEmisor == val.id) {
                        selected = "selected";
                    } else selected = "";
                    $("#lstEmisores" + sufijo).append("<option value='" + val.id + "' " + selected + ">" + val.razon_social + "</option>");
                });
            }
        }, //mostramos el error
        error: function () {
            $("#divMsjePorError").html("");
            $("#divMsjePorError").append("Se ha producido un error Inesperado");
            $("#divMsjeNotificacionError").jqxNotification("open");
        }
    });
}
/**
 * Función para la obtención del listado de trimestres.
 * @param opcion
 * @param trimEmision
 */
function cargaListadoTrimestres(opcion, trimEmision) {
    var sufijo = "";
    var selected = "";
    $("#lstTrimTrimestre" + sufijo).html("");
    $("#lstTrimTrimestre" + sufijo).append("<option value=''>Seleccionar..</option>");
    $("#lstTrimTrimestre" + sufijo).prop("disabled", true);
    var listado = ["1er. Trimestre", "2do. Trimestre", "3er. Trimestre", "4to. Trimestre"];
    $("#lstTrimTrimestre" + sufijo).prop("disabled", false);
    $.each(listado, function (key, val) {
        var id = key + 1;
        if (trimEmision == id) {
            selected = "selected";
        } else selected = "";
        $("#lstTrimTrimestre" + sufijo).append("<option value='" + id + "' " + selected + ">" + val + "</option>");
    });
}
/**
 * Función para cargar todos los meses.
 * @param mesPrefijado
 */
function cargarTodosLosMeses(mesPrefijado) {
    $("#lstPartMes").html("");
    $("#lstPartMes").append("<option value=''>Seleccionar</option>");
    $("#lstPartMes").prop("disabled", false);
    var selected = "";
    if (mesPrefijado >= 0) {
        var lista = "";
        var selected = "";
        var meses = ["", "ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];
        for (var i = 1; i <= 12; i++) {
            selected = "";
            if (mesPrefijado == i) {
                selected = "selected";
            }
            lista += "<option value='" + i + "' " + selected + ">" + meses[i] + "</option>";
        }
    }
    if (lista != '')$("#lstPartMes").append(lista);
    else $("#lstPartMes").prop("disabled", true);
}
/**
 * Función para la obtención de la fecha enviada como parámetro en formato dd-mm-yyyy
 * @param fecha
 * @returns {string}
 */
function fechaConvertirAFormato(fecha, separador) {
    if (separador == '')separador = '-';
    var formattedDate = fecha;
    var d = formattedDate.getDate();
    var m = formattedDate.getMonth();
    m += 1;  // Los meses en JavaScript son 0-11
    var y = formattedDate.getFullYear();
    var ceroDia = "";
    var ceroMes = "";
    if (d < 10)ceroDia = "0";
    if (m < 10)ceroMes = "0";
    var fechaResultado = ceroDia + d + separador + ceroMes + m + separador + y;
    return fechaResultado;
}
/**
 * Función para convertir un texto con el formato dd-MM-yyyy al formato MM/dd/yyyy
 * @param date Cadena con la fecha
 * @param sep Separador
 * @returns {number}
 */
function procesaTextoAFecha(date, sep) {
    var parts = date.split(sep);
    var date = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
    return date;
}
/**
 * Función para convertir una cadena al formato de fecha y hora.
 * @param date
 * @param sep
 * @returns {Date}
 */
function procesaTextoAFechaHora(date, sep) {
    var parts = date.split(sep);
    var hora = parts[2].split(" ");
    var date = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
    return date;
}