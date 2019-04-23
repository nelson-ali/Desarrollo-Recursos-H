/*
 *   Oasis - Sistema de Gestión para Recursos Humanos
 *   Empresa Estatal de Transporte por Cable "Mi Teleférico"
 *   Versión:  1.0.0
 *   Usuario Creador: Lic. Javier Loza
 *   Fecha Creación:  04-01-2016
 */
/**
 * Función para la inicialización del formulario para el registro y edición de tipos de documentos.
 * @param opcion
 * @param idTipoDocumento
 * @param objTD
 */
function inicializaFormularioTipoDocumentoNuevoEditar(opcion, objTD) {
    var sufijo = "New";
    if (opcion == 2)sufijo = "Edit";
    $("#txtTipoDocumento" + sufijo).val(objTD.tipoDocumento);
    $("#txtCodigo" + sufijo).val(objTD.codigo);
    if (objTD.indispensable == 1) {
        $("#chkIndispensable" + sufijo).bootstrapSwitch("state", true);
    } else $("#chkIndispensable" + sufijo).bootstrapSwitch("state", false);
    cargarGruposArchivos(opcion, objTD.idGrupoArchivo);
    cargarTiposPresentaciones(opcion, objTD.idTipoPresDoc)
    cargarTiposGeneros(opcion, objTD.idGenero);
    cargarPeriodosPresDoc(opcion, objTD.idPeriodoPresDoc);
    cargarTiposPersistenciasSolDoc(opcion, objTD.idTipoPersSolDoc);
    $("#lstPeriodoPresDoc" + sufijo).on("change", function () {
        if (this.value > 0) {
            $("#lstTipoPersSolDoc" + sufijo).prop("selected", "0");
            $("#lstTipoPersSolDoc" + sufijo + " option[value=0]").prop('selected', true);
        }
    });
    $("#lstTipoPersSolDoc" + sufijo).on("change", function () {
        if (this.value > 0) {
            $("#lstPeriodoPresDoc" + sufijo + " option[value=0]").prop('selected', true);
        }
    });
    cargarTiposEmisoresDoc(opcion, objTD.idTipoEmisorDoc);
    var fecha="";
    if(opcion==2){
        /**
         * En caso de necesitarse calcular de acuerdo a la fecha de registro del tipo de documento.
         * @type {string}
         */
        fecha=objTD.fechaReg;
    }
    cargarNivelesSalarialesPorNiveles(opcion, objTD.nivelNivelSalarial,fecha)
    cargarTipoFechaEmiDoc(opcion, objTD.idTipoFechaEmiDoc);
    cargarNormativasMod(opcion, objTD.idNormativaMod);
    cargarFormatosArchivosDigitales(opcion, objTD.formatoArchivoDigital);
    cargarGrillaDeColumnasAuxiliares(opcion, objTD.idTipoDocumento, objTD.columnasAux);
    $("#chkPermanente" + sufijo).bootstrapSwitch();
    $("#chkEventual" + sufijo).bootstrapSwitch();
    $("#chkConsultorLinea" + sufijo).bootstrapSwitch();
    $("#chkConsultorProducto" + sufijo).bootstrapSwitch();

    if (objTD.permanente == 1) {
        $("#chkPermanente" + sufijo).bootstrapSwitch("state", true);
    } else $("#chkPermanente" + sufijo).bootstrapSwitch("state", false);

    if (objTD.eventual == 1) {
        $("#chkEventual" + sufijo).bootstrapSwitch("state", true);
    } else $("#chkEventual" + sufijo).bootstrapSwitch("state", false);

    if (objTD.consultorLinea == 1) {
        $("#chkConsultorLinea" + sufijo).bootstrapSwitch("state", true);
    } else $("#chkConsultorLinea" + sufijo).bootstrapSwitch("state", false);

    if (objTD.consultorProducto == 1) {
        $("#chkConsultorProducto" + sufijo).bootstrapSwitch("state", true);
    } else $("#chkConsultorProducto" + sufijo).bootstrapSwitch("state", false);

    $("#txtRutaCarpeta" + sufijo).val(objTD.rutaCarpeta);
    $("#txtNombreCarpeta" + sufijo).val(objTD.nombreCarpeta);
    $("#txtResolucionArchivoDigital" + sufijo).val(objTD.resolucionArchivoDigital);
    $("#txtAlturaArchivoDigital" + sufijo).val(objTD.alturaArchivoDigital);
    $("#txtAnchuraArchivoDigital" + sufijo).val(objTD.anchuraArchivoDigital);
    $("#txtAlturaArchivoDigital" + sufijo).numeric();
    $("#txtAnchuraArchivoDigital" + sufijo).numeric();
    var fechaIni = "";
    if (objTD.fechaIni != "" && objTD.fechaIni != undefined) {
        fechaIni = fechaConvertirAFormato(objTD.fechaIni, "-");
    }
    var fechaFin = "";
    if (objTD.fechaFin != "" && objTD.fechaFin != undefined) {
        fechaFin = fechaConvertirAFormato(objTD.fechaFin, "-");
    }
    $("#txtFechaIni" + sufijo).val(fechaIni);
    $("#txtFechaFin" + sufijo).val(fechaFin);
    $("#txtObservacion" + sufijo).val(objTD.observacion);

    $("#txtTipoDocumento" + sufijo).focus();
}
/**
 * Función para la obtención del listado de grupos de archivos.
 * @param opcion
 * @param idGrupoArchivo
 */
function cargarGruposArchivos(opcion, idGrupoArchivo) {
    var sufijo = "New";
    if (opcion == 2)sufijo = "Edit";
    var selected = "";
    $("#lstGrupoArchivo" + sufijo).html("");
    $("#lstGrupoArchivo" + sufijo).append("<option value='0'>Seleccionar..</option>");
    $.ajax({
        url: '/gestiontiposdocumentos/listgruposarchivos/',
        type: 'POST',
        datatype: 'json',
        async: false,
        success: function (data) {  //alert(data);
            var res = jQuery.parseJSON(data);
            if (res.length > 0) {
                $.each(res, function (key, val) {
                    if (idGrupoArchivo == val.id_grupoarchivo) {
                        selected = "selected";
                    } else selected = "";
                    $("#lstGrupoArchivo" + sufijo).append("<option value='" + val.id_grupoarchivo + "' " + selected + ">" + val.grupo_archivo + "</option>");
                });
            }
        }, //mostramos el error
        error: function () {
            alert('Se ha producido un error Inesperado');
        }
    });
}
/**
 * Función para la obtención del listado de tipos de presentación para documentos.
 * @param opcion
 * @param idTipoPresDoc
 */
function cargarTiposPresentaciones(opcion, idTipoPresDoc) {
    var sufijo = "New";
    if (opcion == 2)sufijo = "Edit";
    var selected = "";
    $("#lstTipoPresDoc" + sufijo).html("");
    $("#lstTipoPresDoc" + sufijo).append("<option value='0'>Seleccionar..</option>");
    $.ajax({
        url: '/gestiontiposdocumentos/listtipospresentaciondoc/',
        type: 'POST',
        datatype: 'json',
        async: false,
        success: function (data) {  //alert(data);
            var res = jQuery.parseJSON(data);
            if (res.length > 0) {
                $.each(res, function (key, val) {
                    if (idTipoPresDoc == val.id_tipopresdoc) {
                        selected = "selected";
                    } else selected = "";
                    $("#lstTipoPresDoc" + sufijo).append("<option value='" + val.id_tipopresdoc + "' " + selected + ">" + val.tipo_pres_doc + "</option>");
                });
            }
        }, //mostramos el error
        error: function () {
            alert('Se ha producido un error Inesperado');
        }
    });
}
/**
 * Función para la obtención del listado de tipos de periodos de presentación de documentos.
 * @param opcion
 * @param idPeriodoPresDoc
 */
function cargarPeriodosPresDoc(opcion, idPeriodoPresDoc) {
    var sufijo = "New";
    if (opcion == 2)sufijo = "Edit";
    var selected = "";
    $("#lstPeriodoPresDoc" + sufijo).html("");
    $("#lstPeriodoPresDoc" + sufijo).append("<option value='0'>Seleccionar..</option>");
    $.ajax({
        url: '/gestiontiposdocumentos/listperiodospresdoc/',
        type: 'POST',
        datatype: 'json',
        async: false,
        success: function (data) {  //alert(data);
            var res = jQuery.parseJSON(data);
            if (res.length > 0) {
                $.each(res, function (key, val) {
                    if (idPeriodoPresDoc == val.id_periodopresdoc) {
                        selected = "selected";
                    } else selected = "";
                    $("#lstPeriodoPresDoc" + sufijo).append("<option value='" + val.id_periodopresdoc + "' " + selected + ">" + val.periodo_pres_doc + "</option>");
                });
            }
        }, //mostramos el error
        error: function () {
            alert('Se ha producido un error Inesperado');
        }
    });
}
/**
 * Función para cargar los tipos de persistencia de solicitud de documentación.
 * @param opcion
 * @param idTipoPersSolDoc
 */
function cargarTiposPersistenciasSolDoc(opcion, idTipoPersSolDoc) {
    var sufijo = "New";
    if (opcion == 2)sufijo = "Edit";
    var selected = "";
    $("#lstTipoPersSolDoc" + sufijo).html("");
    $("#lstTipoPersSolDoc" + sufijo).append("<option value='0'>Seleccionar..</option>");
    $.ajax({
        url: '/gestiontiposdocumentos/listtipoperssoldoc/',
        type: 'POST',
        datatype: 'json',
        async: false,
        success: function (data) {  //alert(data);
            var res = jQuery.parseJSON(data);
            if (res.length > 0) {
                $.each(res, function (key, val) {
                    if (idTipoPersSolDoc == val.id_tipoperssoldoc) {
                        selected = "selected";
                    } else selected = "";
                    $("#lstTipoPersSolDoc" + sufijo).append("<option value='" + val.id_tipoperssoldoc + "' " + selected + ">" + val.tipo_pers_sol_doc + "</option>");
                });
            }
        }, //mostramos el error
        error: function () {
            alert('Se ha producido un error Inesperado');
        }
    });
}
/**
 * Función para la obtención del listado de géneros disponibles en el sistema.
 * @param opcion
 * @param idGenero
 */
function cargarTiposGeneros(opcion, idGenero) {
    var sufijo = "New";
    if (opcion == 2)sufijo = "Edit";
    var selected = "";
    $("#lstGenero" + sufijo).html("");
    $("#lstGenero" + sufijo).append("<option value='-1'>Seleccionar..</option>");
    $.ajax({
        url: '/excepciones/listgeneros/',
        type: 'POST',
        datatype: 'json',
        async: false,
        success: function (data) {  //alert(data);
            var res = jQuery.parseJSON(data);
            if (res.length > 0) {
                $.each(res, function (key, val) {
                    if (idGenero == val.id_genero) {
                        selected = "selected";
                    } else selected = "";
                    $("#lstGenero" + sufijo).append("<option value='" + val.id_genero + "' " + selected + ">" + val.genero + "</option>");
                });
            }
        }, //mostramos el error
        error: function () {
            alert('Se ha producido un error Inesperado');
        }
    });
}
/**
 * Función para la obtención de la lista de tipos de emisores de documentos.
 * @param opcion
 * @param idTipoEmisorDoc
 */
function cargarTiposEmisoresDoc(opcion, idTipoEmisorDoc) {
    var sufijo = "New";
    if (opcion == 2)sufijo = "Edit";
    var selected = "";
    $("#lstTipoEmisorDoc" + sufijo).html("");
    $("#lstTipoEmisorDoc" + sufijo).append("<option value='-1'>Seleccionar..</option>");
    $.ajax({
        url: '/gestiontiposdocumentos/listtiposemisoresdoc/',
        type: 'POST',
        datatype: 'json',
        async: false,
        success: function (data) {  //alert(data);
            var res = jQuery.parseJSON(data);
            if (res.length > 0) {
                $.each(res, function (key, val) {
                    if (idTipoEmisorDoc == val.id_tipoemisordoc) {
                        selected = "selected";
                    } else selected = "";
                    $("#lstTipoEmisorDoc" + sufijo).append("<option value='" + val.id_tipoemisordoc + "' " + selected + ">" + val.tipo_emisor_doc + "</option>");
                });
            }
        }, //mostramos el error
        error: function () {
            alert('Se ha producido un error Inesperado');
        }
    });
}
/**
 * Función para la obtención del listado de niveles salariales disponibles.
 * @param opcion
 * @param nivel
 * @param fecha
 */
function cargarNivelesSalarialesPorNiveles(opcion, nivel,fecha) {
    var sufijo = "New";
    if (opcion == 2)sufijo = "Edit";
    var selected = "";
    $("#lstNivelSalarialNivel" + sufijo).html("");
    $("#lstNivelSalarialNivel" + sufijo).append("<option value=''>Seleccionar..</option>");
    $.ajax({
        url: '/gestiontiposdocumentos/listnivelessalarialesporniveles/',
        type: 'POST',
        datatype: 'json',
        async: false,
        data:{fecha:fecha},
        success: function (data) {  //alert(data);
            var res = jQuery.parseJSON(data);
            if (res.length > 0) {
                $.each(res, function (key, val) {
                    if (nivel == val.nivel) {
                        selected = "selected";
                    } else selected = "";
                    $("#lstNivelSalarialNivel" + sufijo).append("<option value='" + val.nivel + "' " + selected + ">" + val.nivel + ": " + val.denominacion + "</option>");
                });
            }
        }, //mostramos el error
        error: function () {
            alert('Se ha producido un error Inesperado');
        }
    });
}
/**
 * Función para la obtención de la lista de tipos de emisores de documentos.
 * @param opcion
 * @param idTipoEmisorDoc
 */
function cargarTipoFechaEmiDoc(opcion, idTipoFechaEmiDoc) {
    var sufijo = "New";
    if (opcion == 2)sufijo = "Edit";
    var selected = "";
    $("#lstTipoFechaEmiDoc" + sufijo).html("");
    $("#lstTipoFechaEmiDoc" + sufijo).append("<option value='0'>Seleccionar..</option>");
    $.ajax({
        url: '/gestiontiposdocumentos/listtiposfechaemidoc/',
        type: 'POST',
        datatype: 'json',
        async: false,
        success: function (data) {  //alert(data);
            var res = jQuery.parseJSON(data);
            if (res.length > 0) {
                $.each(res, function (key, val) {
                    if (idTipoFechaEmiDoc == val.id) {
                        selected = "selected";
                    } else selected = "";
                    $("#lstTipoFechaEmiDoc" + sufijo).append("<option value='" + val.id + "' " + selected + ">" + val.tipo_fecha_emi_doc + " (" + val.descripcion + ")</option>");
                });
            }
        }, //mostramos el error
        error: function () {
            alert('Se ha producido un error Inesperado');
        }
    });
}
/**
 * Función para la obtención del listado de normativas por modalidad.
 * @param opcion
 * @param idNormativaMod
 */
function cargarNormativasMod(opcion, idNormativaMod) {
    var sufijo = "New";
    if (opcion == 2)sufijo = "Edit";
    var selected = "";
    $("#lstNormativaMod" + sufijo).html("");
    $("#lstNormativaMod" + sufijo).append("<option value='0'>Seleccionar..</option>");
    $.ajax({
        url: '/gestiontiposdocumentos/listnormativasmod/',
        type: 'POST',
        datatype: 'json',
        async: false,
        success: function (data) {  //alert(data);
            var res = jQuery.parseJSON(data);
            if (res.length > 0) {
                $.each(res, function (key, val) {
                    if (idNormativaMod == val.id_normativamod) {
                        selected = "selected";
                    } else selected = "";
                    $("#lstNormativaMod" + sufijo).append("<option value='" + val.id_normativamod + "' " + selected + ">" + val.denominacion + "</option>");
                });
            }
        }, //mostramos el error
        error: function () {
            alert('Se ha producido un error Inesperado');
        }
    });
}
/**
 * Función para la obtención del listado de formatos de archivos digitales disponibles para el almacenamiento en el sistema, en el módulo de Archivo.
 * @param opcion
 * @param formatoArchivoDigital
 */
function cargarFormatosArchivosDigitales(opcion, formatoArchivoDigital) {
    var sufijo = "New";
    if (opcion == 2)sufijo = "Edit";
    var selected = "";
    $("#lstFormatoArchivoDigital" + sufijo).html("");
    $("#lstFormatoArchivoDigital" + sufijo).append("<option value=''>Seleccionar..</option>");
    $.ajax({
        url: '/gestiontiposdocumentos/listformatosarchivosdigitales/',
        type: 'POST',
        datatype: 'json',
        async: false,
        success: function (data) {  //alert(data);
            var res = jQuery.parseJSON(data);
            if (res.length > 0) {
                $.each(res, function (key, val) {
                    if (formatoArchivoDigital == val.formato_archivo_digital) {
                        selected = "selected";
                    } else selected = "";
                    $("#lstFormatoArchivoDigital" + sufijo).append("<option value='" + val.formato_archivo_digital + "' " + selected + ">" + val.formato_archivo_digital + "</option>");
                });
            }
        }, //mostramos el error
        error: function () {
            alert('Se ha producido un error Inesperado');
        }
    });
}
/**
 * Función para la obtención del listado de tipos de campos disponibles para los campos auxiliares.
 * @param opcion
 * @param tipoDato
 */
function cargarTiposDatosCampoAux(opcion, tipoDato) {
    var sufijo = "";
    var selected = "";
    $("#lstColumnaAuxTipoDato" + sufijo).html("");
    $("#lstColumnaAuxTipoDato" + sufijo).append("<option value='-1'>Seleccionar..</option>");
    $.ajax({
        url: '/gestiontiposdocumentos/listtiposdatoscampoaux/',
        type: 'POST',
        datatype: 'json',
        async: false,
        success: function (data) {  //alert(data);
            var res = jQuery.parseJSON(data);
            if (res.length > 0) {
                $.each(res, function (key, val) {
                    if (tipoDato == val.tipo_dato) {
                        selected = "selected";
                    } else selected = "";
                    $("#lstColumnaAuxTipoDato" + sufijo).append("<option value='" + val.tipo_dato + "' " + selected + ">" + val.tipo_dato + "</option>");
                });
            }
        }, //mostramos el error
        error: function () {
            alert('Se ha producido un error Inesperado');
        }
    });
}
/**
 * Función para obtener el listado de opciones para la definición de la obligatoriedad de registro de un campo auxiliar.
 * @param opcion
 * @param obligatoriedad
 */
function cargarTiposObligatoriedadCampoAux(opcion, obligatoriedad) {
    var sufijo = "";
    var selected = "";
    $("#lstColumnaAuxObligatoriedad" + sufijo).html("");
    $("#lstColumnaAuxObligatoriedad" + sufijo).append("<option value=''>Seleccionar..</option>");
    $.ajax({
        url: '/gestiontiposdocumentos/listtiposobligatoriedadcampoaux/',
        type: 'POST',
        datatype: 'json',
        async: false,
        success: function (data) {  //alert(data);
            var res = jQuery.parseJSON(data);
            if (res.length > 0) {
                $.each(res, function (key, val) {
                    if (obligatoriedad == val.obligatoriedad) {
                        selected = "selected";
                    } else selected = "";
                    $("#lstColumnaAuxObligatoriedad" + sufijo).append("<option value='" + val.obligatoriedad + "' " + selected + ">" + val.obligatoriedad + "</option>");
                });
            }
        }, //mostramos el error
        error: function () {
            alert('Se ha producido un error Inesperado');
        }
    });
}
/**
 * Función para la obtención de la lista de columnas auxiliares en el control de tipos de documentos.
 * @param opcion
 * @param idTipoDocumento
 * @param columnasAux
 */
function cargarGrillaDeColumnasAuxiliares(opcion, idTipoDocumento, columnasAux) {
    var sufijo = "New";
    if (opcion == 2)sufijo = "Edit";
    var selected = "";
    $("#tbodyColumnasAux" + sufijo).html("");
    var grilla = "";
    if (columnasAux != "" && columnasAux != null) {
        var res = jQuery.parseJSON(columnasAux);
        if (res.length > 0) {
            var numerador = 0;
            $.each(res, function (key, val) {
                numerador++;
                grilla += "<tr id='trColumnaAux_" + idTipoDocumento + "_" + numerador + "' data-id_campo='" + val.id + "' class='trColumnaAux'><td>&nbsp;</td>";
                grilla += "<td style='text-align:center;' id='tdNumerador_" + idTipoDocumento + "_" + numerador + "' class='tdNumerador'>" + numerador + "</td>";
                grilla += "<td style='text-align:center;' id='tdNombre_" + idTipoDocumento + "_" + numerador + "' class='tdNombre'>" + val.nombre + "</td>";
                grilla += "<td style='text-align:center;' id='tdTipo_" + idTipoDocumento + "_" + numerador + "' class='tdTipo'>" + val.tipo + "</td>";
                grilla += "<td style='text-align:center;' id='tdObligatoriedad_" + idTipoDocumento + "_" + numerador + "' class='tdObligatorierdad'>" + val.obligatoriedad + "</td>";
                grilla += "<td style='text-align:center;'><button id='btnUpd_" + idTipoDocumento + "_" + numerador + "' class='btnUpd btn btn-sm btn-primary jqx-rc-all jqx-rc-all-bootstrap jqx-button jqx-button-bootstrap jqx-widget jqx-widget-bootstrap jqx-fill-state-normal jqx-fill-state-normal-bootstrap' type='button' title='Modificar registro de control de excepción.' role='button' aria-disabled='false'>";
                grilla += "<i class='fa fa-pencil-square fa-2x text-primary' title='Modificar registro.'></i>";
                grilla += "</button></td>";

                grilla += "<td style='text-align:center;'><button id='btnDel_" + idTipoDocumento + "_" + numerador + "' class='btnDel btn btn-sm btn-primary jqx-rc-all jqx-rc-all-bootstrap jqx-button jqx-button-bootstrap jqx-widget jqx-widget-bootstrap jqx-fill-state-normal jqx-fill-state-normal-bootstrap' type='button' title='Dar de baja registro de control de excepción.' role='button' aria-disabled='false'>";
                grilla += "<i class='fa fa-times-circle-o fa-2x text-danger' title='Dar de baja al registro.'></i>";
                grilla += "</button></td>";

                grilla += "</tr>";
            });
            $("#tbodyColumnasAux" + sufijo).append(grilla);
            /**
             * En caso de activarse una solicitud de modificación de un campo auxiliar.
             */
            $(".btnUpd").off();
            $(".btnUpd").on("click", function () {
                var idTd = this.id;
                var arrId = idTd.split("_");
                var idTipoDocumento = arrId[1];
                var numerador = arrId[2];
                var nombre = $("#tdNombre_" + idTipoDocumento + "_" + numerador).text();
                var tipo = $("#tdTipo_" + idTipoDocumento + "_" + numerador).text();
                var obligatoriedad = $("#tdObligatoriedad_" + idTipoDocumento + "_" + numerador).text();
                $("#hdnIdTipoDocumento").val(idTipoDocumento);
                $("#hdnColumnaAuxNumerador").val(numerador);
                $("#hdnColumnaAuxNombre").val(nombre);
                $("#hdnColumnaAuxTipo").val(tipo);
                $("#hdnColumnaAuxObligatoriedad").val(obligatoriedad);

                $("#divColumnaAuxCampo").removeClass("has-error");
                $("#helpErrorColumnaAuxCampo").html("");

                $("#divColumnaAuxTipoDato").removeClass("has-error");
                $("#helpErrorColumnaAuxTipoDato").html("");

                $("#divColumnaAuxObligatoriedad").removeClass("has-error");
                $("#helpErrorColumnaAuxObligatoriedad").html("");

                $("#txtColumnaAuxCampo").val(nombre);
                cargarTiposDatosCampoAux(0, tipo);
                cargarTiposObligatoriedadCampoAux(0, obligatoriedad);
                $("#btnGuardarNuevaColumnaAux").hide();
                $("#btnGuardarModificacionColumnaAux").show();
                $("#popupNuevoEditarColumnaAux").modal("show");
                $("#txtColumnaAuxCampo").focus();
            });
            $(".btnDel").off();
            $(".btnDel").on("click", function () {
                if (confirm("¿Esta seguro de que desea que esta columna se elimine?")) {
                    var idTd = this.id;
                    var arrId = idTd.split("_");
                    var idTipoDocumento = arrId[1];
                    var numerador = arrId[2];
                    $("#trColumnaAux_" + idTipoDocumento + "_" + numerador).remove();
                    ordenaNumeracionCamposAux();
                }
            });
        }
    }
}
/**
 * Función para validar el campo auxiliar.
 * @param idTipoDocumento
 * @param numerador
 * @param campo
 * @param tipo
 * @param obligatoriedad
 */
function validarCampoAux(idTipoDocumento, numerador, campo, tipo, obligatoriedad) {
    /**
     * Si el registro es nuevo
     */
    var nombresAux = [];
    $('.trColumnaAux').each(function (key, element) {
        var idTd = this.id;
        var arrId = idTd.split("_");
        var idTipoDocumento = arrId[1];
        var numeradorAux = arrId[2];
        var nombreAux = $("#tdNombre_" + idTipoDocumento + "_" + numeradorAux).text();
        nombresAux[numeradorAux] = nombreAux.toUpperCase().trim();
    });
    var num = jQuery.inArray(campo.toUpperCase().trim(), nombresAux)
    if (num != numerador && num > 0) {
        return false;
    }
    return true;
}
/**
 * Formulario para la validación de lo datos enviados para el registro de un tipo de documento.
 * @author JLM
 * @returns {boolean}
 */
function validaFormularioTipoDocumento(opcion) {
    var ok = true;
    var msje = "";
    $(".msjs-alert").hide();
    var sufijo = "New";
    if (opcion == 2) {
        sufijo = "Edit";
    }
    limpiarMensajesErrorPorValidacionTiposDocumentos(opcion);
    var enfoque = null;

    var txtTipoDocumento = $("#txtTipoDocumento" + sufijo);
    var divTipoDocumento = $("#divTipoDocumento" + sufijo);
    var helpErrorTipoDocumento = $("#helpErrorTipoDocumento" + sufijo);
    var tipoDocumento = $("#txtTipoDocumento" + sufijo).val();

    var lstGrupoArchivo = $("#lstGrupoArchivo" + sufijo);
    var divGrupoArchivo = $("#divGrupoArchivo" + sufijo);
    var helpErrorGrupoArchivo = $("#helpErrorGrupoArchivo" + sufijo);
    var grupoArchivo = $("#lstGrupoArchivo" + sufijo).val();

    var txtCodigo = $("#txtCodigo" + sufijo);
    var divCodigo = $("#divCodigo" + sufijo);
    var helpErrorCodigo = $("#helpErrorCodigo" + sufijo);
    var codigo = $("#txtCodigo" + sufijo).val();

    var lstTipoPresDoc = $("#lstTipoPresDoc" + sufijo);
    var divTipoPresDoc = $("#divTipoPresDoc" + sufijo);
    var helpErrorTipoPresDoc = $("#helpErrorTipoPresDoc" + sufijo);
    var tipoPresDoc = $("#lstTipoPresDoc" + sufijo).val();

    var lstTipoEmisorDoc = $("#lstTipoEmisorDoc" + sufijo);
    var divTipoEmisorDoc = $("#divTipoEmisorDoc" + sufijo);
    var helpErrorTipoEmisorDoc = $("#helpErrorTipoEmisorDoc" + sufijo);
    var tipoEmisorDoc = $("#lstTipoEmisorDoc" + sufijo).val();

    var lstPeriodoPresDoc = $("#lstPeriodoPresDoc" + sufijo);
    var divPeriodoPresDoc = $("#divPeriodoPresDoc" + sufijo);
    var helpErrorPeriodoPresDoc = $("#helpErrorPeriodoPresDoc" + sufijo);
    var periodoPresDoc = $("#lstPeriodoPresDoc" + sufijo).val();

    var lstGenero = $("#lstGenero" + sufijo);
    var divGenero = $("#divGenero" + sufijo);
    var helpErrorGenero = $("#helpErrorGenero" + sufijo);
    var genero = $("#lstGenero" + sufijo).val();

    var lstTipoPersSolDoc = $("#lstTipoPersSolDoc" + sufijo);
    var divTipoPersSolDoc = $("#divTipoPersSolDoc" + sufijo);
    var helpErrorTipoPersSolDoc = $("#helpErrorTipoPersSolDoc" + sufijo);
    var tipoPersSolDoc = $("#lstTipoPersSolDoc" + sufijo).val();

    var lstTipoFechaEmiDoc = $("#lstTipoFechaEmiDoc" + sufijo);
    var divTipoFechaEmiDoc = $("#divTipoFechaEmiDoc" + sufijo);
    var helpErrorTipoFechaEmiDoc = $("#helpErrorTipoFechaEmiDoc" + sufijo);
    var tipoFechaEmiDoc = $("#lstTipoFechaEmiDoc" + sufijo).val();

    var chkPermanente = $("#chkPermanente" + sufijo);
    var divPermanente = $("#divPermanente" + sufijo);
    var helpErrorPermanente = $("#helpErrorPermanente" + sufijo);
    var permanente = "0";
    if ($("#chkPermanente" + sufijo).bootstrapSwitch("state")) {
        permanente = "1";
    }

    var chkEventual = $("#chkEventual" + sufijo);
    var divEventual = $("#divEventual" + sufijo);
    var helpErrorEventual = $("#helpErrorEventual" + sufijo);
    var eventual = "0";
    if ($("#chkEventual" + sufijo).bootstrapSwitch("state")) {
        eventual = "1";
    }

    var chkConsultorLinea = $("#chkConsultorLinea" + sufijo);
    var divConsultorLinea = $("#divConsultorLinea" + sufijo);
    var helpErrorConsultorLinea = $("#helpErrorConsultorLinea" + sufijo);
    var consultorLinea = "0";
    if ($("#chkConsultorLinea" + sufijo).bootstrapSwitch("state")) {
        consultorLinea = "1";
    }

    var chkConsultorProducto = $("#chkConsultorProducto" + sufijo);
    var divConsultorProducto = $("#divConsultorProducto" + sufijo);
    var helpErrorConsultorProducto = $("#helpErrorConsultorProducto" + sufijo);
    var consultorProducto = "0";
    if ($("#chkConsultorProducto" + sufijo).bootstrapSwitch("state")) {
        consultorProducto = "1";
    }

    var txtRutaCarpeta = $("#txtRutaCarpeta" + sufijo);
    var divRutaCarpeta = $("#divRutaCarpeta" + sufijo);
    var helpErrorRutaCarpeta = $("#helpErrorRutaCarpeta" + sufijo);
    var rutaCarpeta = $("#txtRutaCarpeta" + sufijo).val();

    var lstFormatoArchivoDigital = $("#lstFormatoArchivoDigital" + sufijo);
    var divFormatoArchivoDigital = $("#divFormatoArchivoDigital" + sufijo);
    var helpErrorFormatoArchivoDigital = $("#helpErrorFormatoArchivoDigital" + sufijo);
    var formatoArchivoDigital = $("#lstFormatoArchivoDigital" + sufijo).val();

    var txtAlturaArchivoDigital = $("#txtAlturaArchivoDigital" + sufijo);
    var divAlturaArchivoDigital = $("#divAlturaArchivoDigital" + sufijo);
    var helpErrorAlturaArchivoDigital = $("#helpErrorAlturaArchivoDigital" + sufijo);
    var alturaArchivoDigital = $("#txtAlturaArchivoDigital" + sufijo).val();

    var txtNombreCarpeta = $("#txtNombreCarpeta" + sufijo);
    var divNombreCarpeta = $("#divNombreCarpeta" + sufijo);
    var helpErrorNombreCarpeta = $("#helpErrorNombreCarpeta" + sufijo);
    var nombreCarpeta = $("#txtNombreCarpeta" + sufijo).val();

    var txtResolucionArchivoDigital = $("#txtResolucionArchivoDigital" + sufijo);
    var divResolucionArchivoDigital = $("#divResolucionArchivoDigital" + sufijo);
    var helpErrorResolucionArchivoDigital = $("#helpErrorResolucionArchivoDigital" + sufijo);
    var resolucionArchivoDigital = $("#txtResolucionArchivoDigital" + sufijo).val();

    var txtAnchuraArchivoDigital = $("#txtAnchuraArchivoDigital" + sufijo);
    var divAnchuraArchivoDigital = $("#divAnchuraArchivoDigital" + sufijo);
    var helpErrorAnchuraArchivoDigital = $("#helpErrorAnchuraArchivoDigital" + sufijo);
    var anchuraArchivoDigital = $("#txtAnchuraArchivoDigital" + sufijo).val();

    var txtFechaIni = $("#txtFechaIni" + sufijo);
    var divFechaIni = $("#divFechaIni" + sufijo);
    var helpErrorFechaIni = $("#helpErrorFechaIni" + sufijo);
    var fechaIni = $("#txtFechaIni" + sufijo).val();

    var txtFechaFin = $("#txtFechaFin" + sufijo);
    var divFechaFin = $("#divFechaFin" + sufijo);
    var helpErrorFechaFin = $("#helpErrorFechaFin" + sufijo);
    var fechaFin = $("#txtFechaFin" + sufijo).val();

    var txtObservacion = $("#txtObservacion" + sufijo);
    var divObservacion = $("#divObservacion" + sufijo);
    var helpErrorObservacion = $("#helpErrorObservacion" + sufijo);
    var observacion = $("#txtObservacion" + sufijo).val();

    if (tipoDocumento == '') {
        ok = false;
        var msje = "Debe introducir el nombre del tipo de documento.";
        divTipoDocumento.addClass("has-error");
        helpErrorTipoDocumento.html(msje);
        if (enfoque == null)enfoque = txtTipoDocumento;
    }
    if (codigo == '') {
        ok = false;
        var msje = "Debe registrar el c&oacute;digo a usarse para el tipo de documento.";
        divCodigo.addClass("has-error");
        helpErrorCodigo.html(msje);
        if (enfoque == null)enfoque = txtCodigo;
    }
    if (grupoArchivo == '' || grupoArchivo == 0) {
        ok = false;
        var msje = "Debe seleccionar el grupo al cual corresponde el tipo de documento.";
        divGrupoArchivo.addClass("has-error");
        helpErrorGrupoArchivo.html(msje);
        if (enfoque == null)enfoque = lstGrupoArchivo;
    }
    if (tipoPresDoc == '' || tipoPresDoc == 0) {
        ok = false;
        var msje = "Debe seleccionar el tipo de presentaci&oacute;n necesariamente.";
        divTipoPresDoc.addClass("has-error");
        helpErrorTipoPresDoc.html(msje);
        if (enfoque == null)enfoque = lstTipoPresDoc;
    }
    if (tipoEmisorDoc == '' || tipoEmisorDoc == -1) {
        ok = false;
        var msje = "Debe seleccionar los tipos de emisores necesariamente.";
        divTipoEmisorDoc.addClass("has-error");
        helpErrorTipoEmisorDoc.html(msje);
        if (enfoque == null)enfoque = lstTipoEmisorDoc;
    }
    /**
     * Un tipo de documento se puede controlar por periodo de presentación o por persistencia, pero no por ambos.
     */
    if ((periodoPresDoc == '' || periodoPresDoc == 0) && (tipoPersSolDoc == '' || tipoPersSolDoc == 0)) {
        var msje = "Debe seleccionar el periodo de presentaci&oacute;n o el tipo de persistencia necesariamente.";
        divPeriodoPresDoc.addClass("has-error");
        helpErrorPeriodoPresDoc.html(msje);
        if (enfoque == null)enfoque = lstPeriodoPresDoc;
        msje = "Debe seleccionar el periodo de presentaci&oacute;n o el tipo de persistencia necesariamente.";
        divTipoPersSolDoc.addClass("has-error");
        helpErrorTipoPersSolDoc.html(msje);
    } else {
        if ((periodoPresDoc != '' && periodoPresDoc != 0) && (tipoPersSolDoc != '' && tipoPersSolDoc != 0)) {
            ok = false;
            var msje = "S&oacute;lo debe seleccionar el periodo de presentaci&oacute;n o s&oacute;lo el tipo de persistencia, no ambos.";
            divPeriodoPresDoc.addClass("has-error");
            helpErrorPeriodoPresDoc.html(msje);
            if (enfoque == null)enfoque = lstPeriodoPresDoc;
            msje = "S&oacute;lo debe seleccionar el periodo de presentaci&oacute;n o s&oacute;lo el tipo de persistencia, no ambos.";
            divTipoPersSolDoc.addClass("has-error");
            helpErrorTipoPersSolDoc.html(msje);
        }
    }
    if (genero < 0 || genero == '') {
        ok = false;
        var msje = "Debe seleccionar un g&eacute;nero o si es indistinto necesariamente.";
        divGenero.addClass("has-error");
        helpErrorGenero.html(msje);
        if (enfoque == null)enfoque = lstGenero;
    }

    if (tipoFechaEmiDoc == '' || tipoFechaEmiDoc == 0) {
        ok = false;
        var msje = "Debe seleccionar el tipo de fecha de emisi&oacute;n.";
        divTipoFechaEmiDoc.addClass("has-error");
        helpErrorTipoFechaEmiDoc.html(msje);
        if (enfoque == null)enfoque = lstTipoFechaEmiDoc;
    }
    var swCondicion = 0;
    if (permanente == '' || permanente == undefined) {
        ok = false;
        var msje = "Debe definir si el tipo de documento se aplica a personal de Plazo Indefinido o no.";
        divPermanente.addClass("has-error");
        helpErrorPermanente.html(msje);
        if (enfoque == null)enfoque = chkPermanente;
    }
    if (eventual == '' || eventual == undefined) {
        ok = false;
        swCondicion = 1;
        var msje = "Debe definir si el tipo de documento se aplica a personal de Plazo Fijo o no.";
        divEventual.addClass("has-error");
        helpErrorEventual.html(msje);
        if (enfoque == null)enfoque = chkEventual;
    }
    if (consultorLinea == '' || consultorLinea == undefined) {
        ok = false;
        swCondicion = 1;
        var msje = "Debe definir si el tipo de documento se aplica a personal Consultor de L&iacute;nea o no.";
        divConsultorLinea.addClass("has-error");
        helpErrorConsultorLinea.html(msje);
        if (enfoque == null)enfoque = chkConsultorLinea;
    }
    if (consultorProducto == '' || consultorProducto == undefined) {
        ok = false;
        swCondicion = 1;
        var msje = "Debe definir si el tipo de documento se aplica a personal Consultor por Producto o no.";
        divConsultorProducto.addClass("has-error");
        helpErrorConsultorProducto.html(msje);
        if (enfoque == null)enfoque = chkConsultorProducto;
    }
    if (permanente == "1" || eventual == "1" || consultorLinea == "1" || consultorProducto == "1")swCondicion = 1;
    /**
     * En caso de que no se haya seleccionado ninguna condición para la aplicación del documento.
     */
    if (swCondicion == 0) {
        ok = false;
        var msje = "Debe seleccionar la aplicaci&oacute;n del documento al menos a uno de los tipos de condici&oacute;n disponibles.";
        divPermanente.addClass("has-error");
        helpErrorPermanente.html(msje);

        divEventual.addClass("has-error");
        helpErrorEventual.html(msje);

        divConsultorLinea.addClass("has-error");
        helpErrorConsultorLinea.html(msje);

        divConsultorProducto.addClass("has-error");
        helpErrorConsultorProducto.html(msje);

        if (enfoque == null)enfoque = chkPermanente;
    }
    /**
     * Espacio para el control de los datos referentes a documentos digitalizados.
     */
    /*if (rutaCarpeta == '') {
     ok = false;
     var msje = "Debe registrar la direcci&oacute; de almacenamiento de la carpeta que almacenar&aacute; los documentos digitales correspondientes a este tipo de documento.";
     divRutaCarpeta.addClass("has-error");
     helpErrorRutaCarpeta.html(msje);
     if (enfoque == null)enfoque = txtRutaCarpeta;
     }
     if (formatoArchivoDigital == '') {
     ok = false;
     var msje = "Debe seleccionar el formato digital en el cual se almacenar&aacute;n los documentos digitales.";
     divFormatoArchivoDigital.addClass("has-error");
     helpErrorFormatoArchivoDigital.html(msje);
     if (enfoque == null)enfoque = lstFormatoArchivoDigital;
     }
     if (alturaArchivoDigital == '' || alturaArchivoDigital == 0) {
     ok = false;
     var msje = "Debe definir la altura para el despliegue del documento digital.";
     divAlturaArchivoDigital.addClass("has-error");
     helpErrorAlturaArchivoDigital.html(msje);
     if (enfoque == null)enfoque = txtAlturaArchivoDigital;
     }
     if (nombreCarpeta == '') {
     ok = false;
     var msje = "Debe introducir el nombre de la carpeta de almacenamiento para los documentos digitales.";
     divNombreCarpeta.addClass("has-error");
     helpErrorNombreCarpeta.html(msje);
     if (enfoque == null)enfoque = txtNombreCarpeta;
     }
     if (resolucionArchivoDigital == '' || resolucionArchivoDigital == 0) {
     ok = false;
     var msje = "Debe definir la resoluci&oacute;n aplicada en el escan&eacute;o de un documento de estas caracter&iacute;sticas.";
     divResolucionArchivoDigital.addClass("has-error");
     helpErrorResolucionArchivoDigital.html(msje);
     if (enfoque == null)enfoque = txtResolucionArchivoDigital;
     }
     if (anchuraArchivoDigital == '' || anchuraArchivoDigital == 0) {
     ok = false;
     var msje = "Debe definir la anchura para el despliegue del documento digital.";
     divAnchuraArchivoDigital.addClass("has-error");
     helpErrorAnchuraArchivoDigital.html(msje);
     if (enfoque == null)enfoque = txtAnchuraArchivoDigital;
     }*/
    if (enfoque != null) {
        enfoque.focus();
    }
    return ok;
}
/**
 * Función para la limpieza de los mensajes de error debido a la validación del formulario.
 * @opción Variable que identifica a que tipo de formulario se aplica la función.
 */
function limpiarMensajesErrorPorValidacionTiposDocumentos(opcion) {
    var sufijo = "New";
    if (opcion == 2)sufijo = "Edit";
    $("#divTipoDocumento" + sufijo).removeClass("has-error");
    $("#helpErrorTipoDocumento" + sufijo).html("");
    $("#divCodigo" + sufijo).removeClass("has-error");
    $("#helpErrorCodigo" + sufijo).html("");
    $("#divTipoPresDoc" + sufijo).removeClass("has-error");
    $("#helpErrorTipoPresDoc" + sufijo).html("");
    $("#divPeriodoPresDoc" + sufijo).removeClass("has-error");
    $("#helpErrorPeriodoPresDoc" + sufijo).html("");
    $("#divTipoPersSolDoc" + sufijo).removeClass("has-error");
    $("#helpErrorTipoPersSolDoc" + sufijo).html("");
    $("#divGenero" + sufijo).removeClass("has-error");
    $("#helpErrorGenero" + sufijo).html("");
    $("#divTipoEmisorDoc" + sufijo).removeClass("has-error");
    $("#helpErrorTipoEmisorDoc" + sufijo).html("");
    $("#divGrupoArchivo" + sufijo).removeClass("has-error");
    $("#helpErrorGrupoArchivo" + sufijo).html("");
    $("#divTipoFechaEmiDoc" + sufijo).removeClass("has-error");
    $("#helpErrorTipoFechaEmiDoc" + sufijo).html("");
    $("#divNormativaMod" + sufijo).removeClass("has-error");
    $("#helpErrorNormativaMod" + sufijo).html("");
    $("#divPermanente" + sufijo).removeClass("has-error");
    $("#helpErrorPermanente" + sufijo).html("");
    $("#divEventual" + sufijo).removeClass("has-error");
    $("#helpErrorEventual" + sufijo).html("");
    $("#divConsultorLinea" + sufijo).removeClass("has-error");
    $("#helpErrorConsultorLinea" + sufijo).html("");
    $("#divConsultorProducto" + sufijo).removeClass("has-error");
    $("#helpErrorConsultorProducto" + sufijo).html("");
    $("#divRutaCarpeta" + sufijo).removeClass("has-error");
    $("#helpErrorRutaCarpeta" + sufijo).html("");
    $("#divNombreCarpeta" + sufijo).removeClass("has-error");
    $("#helpErrorNombreCarpeta" + sufijo).html("");
    $("#divFormatoArchivoDigital" + sufijo).removeClass("has-error");
    $("#helpErrorFormatoArchivoDigital" + sufijo).html("");
    $("#divResolucionArchivoDigital" + sufijo).removeClass("has-error");
    $("#helpErrorResolucionArchivoDigital" + sufijo).html("");
    $("#divAlturaArchivoDigital" + sufijo).removeClass("has-error");
    $("#helpErrorAlturaArchivoDigital" + sufijo).html("");
    $("#divAnchuraArchivoDigital" + sufijo).removeClass("has-error");
    $("#helpErrorAnchuraArchivoDigital" + sufijo).html("");
    $("#divFechaIni" + sufijo).removeClass("has-error");
    $("#helpErrorFechaIni" + sufijo).html("");
    $("#divFechaFin" + sufijo).removeClass("has-error");
    $("#helpErrorFechaFin" + sufijo).html("");
}
/**
 * Función para guardar el registro del tipo de documento.
 * @returns {boolean}
 */
function guardarTipoDocumento(opcion) {
    var ok = false;
    var idTipoDocumento = 0;
    var sufijo = "New";
    if (opcion == 2) {
        idTipoDocumento = $("#hdnIdTipoDocumento").val();
        sufijo = "Edit";
    }
    var tipoDocumento = $("#txtTipoDocumento" + sufijo).val();
    var codigo = $("#txtCodigo" + sufijo).val();
    var grupoArchivo = $("#lstGrupoArchivo" + sufijo).val();
    var tipoPresDoc = $("#lstTipoPresDoc" + sufijo).val();
    var tipoEmisorDoc = $("#lstTipoEmisorDoc" + sufijo).val();
    var normativaMod = $("#lstNormativaMod" + sufijo).val();
    var nivelSalarialNivel = $("#lstNivelSalarialNivel" + sufijo).val();
    var periodoPresDoc = $("#lstPeriodoPresDoc" + sufijo).val();
    var genero = $("#lstGenero" + sufijo).val();
    var tipoPersSolDoc = $("#lstTipoPersSolDoc" + sufijo).val();
    var tipoFechaEmiDoc = $("#lstTipoFechaEmiDoc" + sufijo).val();

    var indispensable = "0";
    if ($("#chkIndispensable" + sufijo).bootstrapSwitch("state")) {
        indispensable = "1";
    }

    var permanente = "0";
    if ($("#chkPermanente" + sufijo).bootstrapSwitch("state")) {
        permanente = "1";
    }

    var eventual = "0";
    if ($("#chkEventual" + sufijo).bootstrapSwitch("state")) {
        eventual = "1";
    }

    var consultorLinea = "0";
    if ($("#chkConsultorLinea" + sufijo).bootstrapSwitch("state")) {
        consultorLinea = "1";
    }

    var consultorProducto = "0";
    if ($("#chkConsultorProducto" + sufijo).bootstrapSwitch("state")) {
        consultorProducto = "1";
    }
    var rutaCarpeta = $("#txtRutaCarpeta" + sufijo).val();
    var formatoArchivoDigital = $("#lstFormatoArchivoDigital" + sufijo).val();
    var alturaArchivoDigital = $("#txtAlturaArchivoDigital" + sufijo).val();
    var nombreCarpeta = $("#txtNombreCarpeta" + sufijo).val();
    var resolucionArchivoDigital = $("#txtResolucionArchivoDigital" + sufijo).val();
    var anchuraArchivoDigital = $("#txtAnchuraArchivoDigital" + sufijo).val();

    var fechaIni = $("#txtFechaIni" + sufijo).val();
    var fechaFin = $("#txtFechaFin" + sufijo).val();

    var columnasAux = defineRepresentacionColumnasAuxiliares()
    var observacion = $("#txtObservacion" + sufijo).val();
    if (tipoDocumento != '') {
        $.ajax({
            url: '/gestiontiposdocumentos/save/',
            type: "POST",
            datatype: 'json',
            async: false,
            cache: false,
            data: {
                id: idTipoDocumento,
                tipo_documento: tipoDocumento,
                codigo: codigo,
                indispensable:indispensable,
                grupoarchivo_id: grupoArchivo,
                tipopresdoc_id: tipoPresDoc,
                tipoemisordoc_id: tipoEmisorDoc,
                normativamod_id: normativaMod,
                nivelsalarial_nivel:nivelSalarialNivel,
                periodopresdoc_id: periodoPresDoc,
                genero_id: genero,
                tipoperssoldoc_id: tipoPersSolDoc,
                tipofechaemidoc_id: tipoFechaEmiDoc,
                permanente: permanente,
                eventual: eventual,
                consultor_linea: consultorLinea,
                consultor_producto: consultorProducto,
                ruta_carpeta: rutaCarpeta,
                nombre_carpeta: nombreCarpeta,
                altura_archivo_digital: alturaArchivoDigital,
                anchura_archivo_digital: anchuraArchivoDigital,
                formato_archivo_digital: formatoArchivoDigital,
                resolucion_archivo_digital: resolucionArchivoDigital,
                fecha_ini: fechaIni,
                fecha_fin: fechaFin,
                columnas_aux: columnasAux,
                observacion: observacion
            },
            success: function (data) {  //alert(data);
                var res = jQuery.parseJSON(data);
                /**
                 * Si se ha realizado correctamente el registro de tipo de documento.
                 */
                $(".msjes").hide();
                if (res.result == 1) {
                    ok = true;
                    $("#divMsjePorSuccess").html("");
                    $("#divMsjePorSuccess").append(res.msj);
                    $("#divMsjeNotificacionSuccess").jqxNotification("open");
                    $("#divGridTiposDocumentos").jqxGrid("updatebounddata");
                } else if (res.result == 0) {
                    /**
                     * En caso de presentarse un error subsanable.
                     */
                    $("#divMsjePorWarning").html("");
                    $("#divMsjePorWarning").append(res.msj);
                    $("#divMsjeNotificacionWarning").jqxNotification("open");
                } else {
                    /**
                     * En caso de haberse presentado un error crítico al momento de registrarse el tipo de documento.
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
 * Función para la obtención de la representación en formato json de los campos/columnas auxiliares.
 * @returns {string}
 */
function defineRepresentacionColumnasAuxiliares() {
    var columnasAux = '';
    var numerador = 0;
    var idCampoMax = obtenerMaximoIdCampoCamposAux() + 1;
    $('.trColumnaAux').each(function (key, element) {
        var idTd = this.id;
        var arrId = idTd.split("_");
        var idTipoDocumento = arrId[1];
        var numeradorAux = arrId[2];
        var nombre = $("#tdNombre_" + idTipoDocumento + "_" + numeradorAux).text();
        var tipo = $("#tdTipo_" + idTipoDocumento + "_" + numeradorAux).text();
        var obligatoriedad = $("#tdObligatoriedad_" + idTipoDocumento + "_" + numeradorAux).text();
        var idCampo = $(this).data("id_campo");
        if (idCampo == 0) {
            idCampo = idCampoMax;
            idCampoMax++;
        }
        if (numerador == 0) {
            columnasAux = '[';
        }
        numerador++;
        columnasAux += '{"ordenador":"' + numerador + '","id":"' + idCampo + '","nombre":"' + nombre + '","tipo":"' + tipo + '","obligatoriedad":"' + obligatoriedad + '"}';
        columnasAux += ',';

    });
    if (columnasAux != "") {
        columnasAux += ']';
        columnasAux = columnasAux.replace(",]", "]");
    }
    return columnasAux;
}
/**
 * Función para inicializar los datos referentes a la duración.
 * @param opcion
 * @param cantidad
 * @param unidad
 * @param fraccionamiento
 */
function inicializarDatosDuracion(opcion, cantidad, unidad, fraccionamiento) {
    var sufijo = "New";
    if (opcion == 2)sufijo = "Edit";
    $("#txtCantidad" + sufijo).val(cantidad);
    cargarTiposUnidades(opcion, unidad);
    var idMinima = 0;
    if (opcion == 2 && cantidad > 0 && cantidad != null) {
        var arrUnidades = ["VEZ", "MINUTO", "HORA", "DIA", "SEMANA", "MES", "SEMESTRE", "AÑO"];
        if (unidad != "") {
            var idClave = $.inArray(unidad, arrUnidades);
            idMinima = idClave + 1;
        }
        cargarTiposFraccionamientos(opcion, idMinima, fraccionamiento);
        defineDuracionEnTexto(opcion);
    } else {
        cargarTiposFraccionamientos(opcion, idMinima, fraccionamiento);
        defineDuracionEnTexto(opcion);
    }
    $("#lstUnidad" + sufijo).off();
    $("#lstUnidad" + sufijo).on("change", function () {
        /**
         * Se aplica el uso del idMinima a objeto de obtener para fraccionamiento sólo aquellos valores superiores
         * al seleccionado considerando la unidad. Siendo que contienen los mismos valores.
         * @type {*|jQuery}
         */
        idMinima = $("#lstUnidad" + sufijo + " option:selected").data("id-unidad");
        cargarTiposFraccionamientos(opcion, idMinima, fraccionamiento);
        defineDuracionEnTexto(opcion);
    });
    $("#txtCantidad" + sufijo + ",#lstUnidad" + sufijo + ",#lstFraccionamiento" + sufijo).on("change", function () {
        defineDuracionEnTexto(opcion);
    });
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