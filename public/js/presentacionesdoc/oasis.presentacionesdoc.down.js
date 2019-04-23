/*
 *   Oasis - Sistema de Gestión para Recursos Humanos
 *   Empresa Estatal de Transporte por Cable "Mi Teleférico"
 *   Versión:  1.0.0
 *   Usuario Creador: Lic. Javier Loza
 *   Fecha Creación:  09-03-2016
 */
/**
 * Función registrar la baja de un registro de presentación de un documento.
 */
function darDeBajaPresentacionDoc(idPresentacionDoc) {
    var ok = true;
    if (idPresentacionDoc > 0) {
        var ok = $.ajax({
            url: '/presentacionesdoc/del/',
            type: 'POST',
            datatype: 'json',
            async: false,
            data: {id: idPresentacionDoc},
            success: function (data) {  //alert(data);
                var res = jQuery.parseJSON(data);
                /**
                 * Si se ha realizado correctamente la baja del registro de presentación de un documento..
                 */
                $(".msjes").hide();
                if (res.result == 1) {
                    $("#divMsjePorSuccess").html("");
                    $("#divMsjePorSuccess").append(res.msj);
                    $("#divMsjeNotificacionSuccess").jqxNotification("open");
                    $("#divGridDocumentosPresentados").jqxGrid("updatebounddata");
                } else if (res.result == 0) {
                    /**
                     * En caso de haberse presentado un error al momento de registrar la baja por inconsistencia de datos.
                     */
                    $("#divMsjePorWarning").html("");
                    $("#divMsjePorWarning").append(res.msj);
                    $("#divMsjeNotificacionWarning").jqxNotification("open");
                } else {
                    /**
                     * En caso de haberse presentado un error crítico al momento de registrarse la baja (Error de conexión)
                     */
                    $("#divMsjePorError").html("");
                    $("#divMsjePorError").append(res.msj);
                    $("#divMsjeNotificacionError").jqxNotification("open");
                }

            }, //mostramos el error
            error: function () {
                alert('Se ha producido un error Inesperado');
            }
        });
    } else {
        ok = false;
    }
    return ok;
}
/**
 * Funcion para la eliminación de un registro de Control de Excepción.
 * @param idControlExcepcion
 * @returns {boolean}
 */
function eliminarControlExcepcion(idControlExcepcion) {
    var ok = true;
    if (idControlExcepcion > 0) {
        var ok = $.ajax({
            url: '/controlexcepciones/del/',
            type: 'POST',
            datatype: 'json',
            async: false,
            data: {id: idControlExcepcion},
            success: function (data) {  //alert(data);
                var res = jQuery.parseJSON(data);
                /**
                 * Si se ha realizado correctamente el registro de baja del control de excepción.
                 */
                $(".msjes").hide();
                if (res.result == 1) {
                    $("#divMsjePorSuccess").html("");
                    $("#divMsjePorSuccess").append(res.msj);
                    $("#divMsjeNotificacionSuccess").jqxNotification("open");
                    $("#divGridControlExcepciones").jqxGrid("updatebounddata");
                } else if (res.result == 0) {
                    /**
                     * En caso de haberse presentado un error al momento de registrar la baja por inconsistencia de datos.
                     */
                    $("#divMsjePorWarning").html("");
                    $("#divMsjePorWarning").append(res.msj);
                    $("#divMsjeNotificacionWarning").jqxNotification("open");
                } else {
                    /**
                     * En caso de haberse presentado un error crítico al momento de registrarse la baja (Error de conexión)
                     */
                    $("#divMsjePorError").html("");
                    $("#divMsjePorError").append(res.msj);
                    $("#divMsjeNotificacionError").jqxNotification("open");
                }

            }, //mostramos el error
            error: function () {
                alert('Se ha producido un error Inesperado');
            }
        });
    } else {
        ok = false;
    }
    return ok;
}
/**
 * Función para la verificación de un determinado permiso.
 * @param opcion
 * @returns {number}
 */
function verificaPermiso(id) {
    var resultado = 0;
    if (id > 0) {
        $.ajax({
            url: '/controlexcepciones/verify/',
            type: 'POST',
            datatype: 'json',
            async: false,
            data: {id: id},
            success: function (data) {  //alert(data);
                resultado = jQuery.parseJSON(data);
            }, //mostramos el error
            error: function () {
                return -1;
            }
        });
    } else {
        resultado = null;
    }
    return resultado;
}