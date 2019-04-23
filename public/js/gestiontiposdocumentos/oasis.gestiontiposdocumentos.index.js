/*
 *   Oasis - Sistema de Gestión para Recursos Humanos
 *   Empresa Estatal de Transporte por Cable "Mi Teleférico"
 *   Versión:  1.0.0
 *   Usuario Creador: Lic. Javier Loza
 *   Fecha Creación:  31-12-2015
 */
$().ready(function () {

    /**
     * Inicialmente se habilita solo la pestaña del listado
     */
    $('#divTabTiposDocumentos').jqxTabs('theme', 'oasis');
    $('#divTabTiposDocumentos').jqxTabs('enableAt', 0);
    $('#divTabTiposDocumentos').jqxTabs('disableAt', 1);
    $('#divTabTiposDocumentos').jqxTabs('disableAt', 2);

    definirGrillaParaListaTiposDocumentos();

    /**
     * Control sobre el ordenamiento de filas
     */
    $('.sorted_table').sortable({
        containerSelector: 'table',
        itemPath: '> tbody',
        itemSelector: 'tr',
        placeholder: '<tr class="placeholder"/>',
        onDrop: function (e, ui, d, g) {
            ordenaNumeracionCamposAux();
        }
    });
    /**
     * Control ante la solicitud de añadir un nuevo campo auxiliar.
     */
    $(".btnNuevaColumnaAux").on("click", function () {
        $("#txtColumnaAuxCampo").val("");
        $("#divColumnaAuxCampo").removeClass("has-error");
        $("#helpErrorColumnaAuxCampo").html("");

        $("#divColumnaAuxTipoDato").removeClass("has-error");
        $("#helpErrorColumnaAuxTipoDato").html("");

        $("#divColumnaAuxObligatoriedad").removeClass("has-error");
        $("#helpErrorColumnaAuxObligatoriedad").html("");

        /*$("#popupNuevoEditarColumnaAux").modal("show");*/
        cargarTiposDatosCampoAux(0, "");
        cargarTiposObligatoriedadCampoAux(0, "");
        $("#btnGuardarNuevaColumnaAux").show();
        $("#btnGuardarModificacionColumnaAux").hide();
        $('#popupNuevoEditarColumnaAux').modal('show');
        $('#popupNuevoEditarColumnaAux').on('shown.bs.modal', function () {
            $("#txtColumnaAuxCampo").focus();
        })
    });
    /**
     * Control para guardar el valor de un nuevo campo auxiliar.
     */
    $("#btnGuardarNuevaColumnaAux").on("click", function () {
        var ok = true;
        var idTipoDocumento = $("#hdnIdTipoDocumento").val();
        var nombre = $("#hdnColumnaAuxNombre").val();
        $("#divColumnaAuxCampo").removeClass("has-error");
        $("#helpErrorColumnaAuxCampo").html("");
        $("#divColumnaAuxCampo").removeClass("has-error");
        $("#helpErrorColumnaAuxCampo").html("");
        $("#divColumnaAuxTipoDato").removeClass("has-error");
        $("#helpErrorColumnaAuxTipoDato").html("");
        $("#divColumnaAuxObligatoriedad").removeClass("has-error");
        $("#helpErrorColumnaAuxObligatoriedad").html("");

        var enfoque = null;
        var max = obtenerMaximoNumeradorCamposAux();
        var numerador = max + 1;
        var numFila = obtenerNumeroFilasCamposAux() + 1;
        var campoAux = $("#txtColumnaAuxCampo").val().toUpperCase().trim();
        var tipoAux = $("#lstColumnaAuxTipoDato").val().toUpperCase().trim();
        var obligatoriedadAux = $("#lstColumnaAuxObligatoriedad").val().toUpperCase().trim();
        if (campoAux != "" && tipoAux != "-1" && tipoAux != -1 && obligatoriedadAux != "" && obligatoriedadAux != "-1") {
            ok = validarCampoAux(idTipoDocumento, numerador, campoAux, tipoAux, obligatoriedadAux);
            if (ok) {

                var fila = "<tr id='trColumnaAux_" + idTipoDocumento + "_" + numerador + "' data-id_campo='0' class='trColumnaAux'><td>&nbsp;</td>";
                fila += "<td style='text-align:center;' id='tdNumerador_" + idTipoDocumento + "_" + numerador + "' class='tdNumerador'>" + numFila + "</td>";
                fila += "<td style='text-align:center;' id='tdNombre_" + idTipoDocumento + "_" + numerador + "' class='tdNombre'>" + campoAux + "</td>";
                fila += "<td style='text-align:center;' id='tdTipo_" + idTipoDocumento + "_" + numerador + "' class='tdTipo'>" + tipoAux + "</td>";
                fila += "<td style='text-align:center;' id='tdObligatoriedad_" + idTipoDocumento + "_" + numerador + "' class='tdObligatoriedad'>" + obligatoriedadAux + "</td>";
                fila += "<td style='text-align:center;'><button id='btnUpd_" + idTipoDocumento + "_" + numerador + "' class='btnUpd btn btn-sm btn-primary jqx-rc-all jqx-rc-all-bootstrap jqx-button jqx-button-bootstrap jqx-widget jqx-widget-bootstrap jqx-fill-state-normal jqx-fill-state-normal-bootstrap' type='button' title='Modificar registro de control de excepción.' role='button' aria-disabled='false'>";
                fila += "<i class='fa fa-pencil-square fa-2x text-primary' title='Modificar registro.'></i>";
                fila += "</button></td>";

                fila += "<td style='text-align:center;'><button id='btnDel_" + idTipoDocumento + "_" + numerador + "' class='btnDel btn btn-sm btn-primary jqx-rc-all jqx-rc-all-bootstrap jqx-button jqx-button-bootstrap jqx-widget jqx-widget-bootstrap jqx-fill-state-normal jqx-fill-state-normal-bootstrap' type='button' title='Dar de baja registro de control de excepción.' role='button' aria-disabled='false'>";
                fila += "<i class='fa fa-times-circle-o fa-2x text-danger' title='Dar de baja al registro.'></i>";
                fila += "</button></td>";

                fila += "</tr>";
                /**
                 * Definiendo en qué formulario se realiza la adición de la fila (Nuevo o Modificación).
                 * @type {string}
                 */
                var sufijo = "New";
                if (idTipoDocumento > 0) {
                    sufijo = "Edit";
                }
                $("#tbodyColumnasAux" + sufijo).append(fila);
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
                $("#popupNuevoEditarColumnaAux").modal("hide");
            }
            else {
                /**
                 * En caso de que se haya querido duplicar el nombre de una columna.
                 */
                var msje = "Debe modificar el nombre del Campo Auxiliar necesariamente debido a que ya se consider&oacute; un campo con este mismo nombre.";
                $("#divColumnaAuxCampo").addClass("has-error");
                $("#helpErrorColumnaAuxCampo").html(msje);
                if (enfoque == null)enfoque = $("#txtColumnaAuxCampo");
            }
        } else {
            if (campoAux == "") {
                var msje = "Debe registrar el nombre del Campo Auxiliar necesariamente.";
                $("#divColumnaAuxCampo").addClass("has-error");
                $("#helpErrorColumnaAuxCampo").html(msje);
                if (enfoque == null)enfoque = $("#txtColumnaAuxCampo");
            }
            if (tipoAux == "" || tipoAux == "-1" || tipoAux == -1) {
                var msje = "Debe registrar el Tipo de Dato para el Campo Auxiliar necesariamente.";
                $("#divColumnaAuxTipoDato").addClass("has-error");
                $("#helpErrorColumnaAuxTipoDato").html(msje);
                if (enfoque == null)enfoque = $("#lstColumnaAuxTipoDato");
            }
            if (obligatoriedadAux == "" || obligatoriedadAux == "-1" || obligatoriedadAux == -1) {
                var msje = "Debe seleccionar si el Campo Auxiliar es obligatorio o no, necesariamente.";
                $("#divColumnaAuxObligatoriedad").addClass("has-error");
                $("#helpErrorColumnaAuxObligatoriedad").html(msje);
                if (enfoque == null)enfoque = $("#lstColumnaAuxObligatoriedad");
            }
            if (enfoque != null)enfoque.select().focus();
        }

    });
    /**
     * Control sobre la solicitud de guardar la modificación efectuada sobre un campo auxiliar.
     */
    $("#btnGuardarModificacionColumnaAux").on("click", function () {
        var ok = true;
        var idTipoDocumento = $("#hdnIdTipoDocumento").val();
        var numerador = $("#hdnColumnaAuxNumerador").val();
        var nombre = $("#hdnColumnaAuxNombre").val();
        $("#divColumnaAuxCampo").removeClass("has-error");
        $("#helpErrorColumnaAuxCampo").html("");
        $("#divColumnaAuxCampo").removeClass("has-error");
        $("#helpErrorColumnaAuxCampo").html("");
        $("#divColumnaAuxTipoDato").removeClass("has-error");
        $("#helpErrorColumnaAuxTipoDato").html("");
        $("#divColumnaAuxObligatoriedad").removeClass("has-error");
        $("#helpErrorColumnaAuxObligatoriedad").html("");

        var enfoque = null;
        var campoAux = $("#txtColumnaAuxCampo").val().toUpperCase().trim();
        var tipoAux = $("#lstColumnaAuxTipoDato").val().toUpperCase().trim();
        var obligatoriedadAux = $("#lstColumnaAuxObligatoriedad").val().toUpperCase().trim();
        if (campoAux != "" && tipoAux != "-1" && tipoAux != -1 && obligatoriedadAux != "" && obligatoriedadAux != "-1") {
            ok = validarCampoAux(idTipoDocumento, numerador, campoAux, tipoAux, obligatoriedadAux);
            if (ok) {
                $("#tdNombre_" + idTipoDocumento + "_" + numerador).text(campoAux);
                $("#tdTipo_" + idTipoDocumento + "_" + numerador).text(tipoAux);
                $("#tdObligatoriedad_" + idTipoDocumento + "_" + numerador).text(obligatoriedadAux);
                $("#popupNuevoEditarColumnaAux").modal("hide");
            }
            else {
                /**
                 * En caso de que se haya querido duplicar el nombre de una columna.
                 */
                var msje = "Debe modificar el nombre del Campo Auxiliar necesariamente debido a que ya se consider&oacute; un campo con este mismo nombre.";
                $("#divColumnaAuxCampo").addClass("has-error");
                $("#helpErrorColumnaAuxCampo").html(msje);
                if (enfoque == null)enfoque = $("#txtColumnaAuxCampo");
            }
        } else {
            if (campoAux == "") {
                var msje = "Debe registrar el nombre del Campo Auxiliar necesariamente.";
                $("#divColumnaAuxCampo").addClass("has-error");
                $("#helpErrorColumnaAuxCampo").html(msje);
                if (enfoque == null)enfoque = $("#txtColumnaAuxCampo");
            }
            if (tipoAux == "" || tipoAux == "-1" || tipoAux == -1) {
                var msje = "Debe registrar el Tipo de Dato para el Campo Auxiliar necesariamente.";
                $("#divColumnaAuxTipoDato").addClass("has-error");
                $("#helpErrorColumnaAuxTipoDato").html(msje);
                if (enfoque == null)enfoque = $("#lstColumnaAuxTipoDato");
            }
            if (obligatoriedadAux == "" || obligatoriedadAux == "-1" || obligatoriedadAux == -1) {
                var msje = "Debe seleccionar si el Campo Auxiliar es obligatorio o no, necesariamente.";
                $("#divColumnaAuxObligatoriedad").addClass("has-error");
                $("#helpErrorColumnaAuxObligatoriedad").html(msje);
                if (enfoque == null)enfoque = $("#lstColumnaAuxObligatoriedad");
            }
        }
        if (enfoque != null)enfoque.select().focus();
    });
    /**
     * Control del evento de solicitud de guardar el nuevo registro del tipo de documento.
     */
    $("#btnGuardarTipoDocumentoNew").on("click", function () {
        var ok = validaFormularioTipoDocumento(1)
        if (ok) {
            var okk = guardarTipoDocumento(1);
            if (okk) {
                $('#divTabTiposDocumentos').jqxTabs('enableAt', 0);
                $('#divTabTiposDocumentos').jqxTabs('disableAt', 1);
                $('#divTabTiposDocumentos').jqxTabs('disableAt', 2);
                $("#msjs-alert").hide();
            }
        }
    });
    /**
     * Control del evento de solicitud de guardar la modificación del registro del tipo de documento.
     */
    $("#btnGuardarTipoDocumentoEdit").on("click", function () {
        var ok = validaFormularioTipoDocumento(2);
        if (ok) {
            var okk = guardarTipoDocumento(2);
            if (okk) {
                $('#divTabTiposDocumentos').jqxTabs('enableAt', 0);
                $('#divTabTiposDocumentos').jqxTabs('disableAt', 1);
                $('#divTabTiposDocumentos').jqxTabs('disableAt', 2);

                $("#msjs-alert").hide();
            }
        }
    });
    $(".btnCancelarTipoDocumento").click(function () {
        $('#divTabTiposDocumentos').jqxTabs('enableAt', 0);
        $('#divTabTiposDocumentos').jqxTabs('disableAt', 1);
        $('#divTabTiposDocumentos').jqxTabs('disableAt', 2);

        $("#msjs-alert").hide();

    });

    $(".iTipoDocumento").on("click", function () {
        var titulo = "Tipo de Documento";
        var cuerpo = "El nombre del Tipo de Documento.";
        var alerta = "Dato requerido obligatoriamente.";
        despliegaModalInfografia(titulo, cuerpo, alerta);
    });
    /**
     * Control para el despliegue de un modal de infografía.
     */
    $(".iInfografia").on("click", function () {
        var titulo = $("#" + this.id).data("titulo");
        var cuerpo = $("#" + this.id).data("cuerpo");
        var alerta = $("#" + this.id).data("alerta");
        despliegaModalInfografia(titulo, cuerpo, alerta);
    });

    $("#btnExportarExcel").click(function () {
        var items = $("#listBoxTiposDocumentos").jqxListBox('getCheckedItems');
        var numColumnas = 0;
        $.each(items, function (index, value) {
            numColumnas++;
        });
        if (numColumnas > 0) exportarReporte(1);
        else {
            alert("Debe seleccionar al menos una columna para la obtención del reporte solicitado.");
            $("#listBoxTiposDocumentos").focus();
        }
    });
    $("#btnExportarPDF").click(function () {
        var items = $("#listBoxTiposDocumentos").jqxListBox('getCheckedItems');
        var numColumnas = 0;
        $.each(items, function (index, value) {
            numColumnas++;
        });
        if (numColumnas > 0) exportarReporte(2);
        else {
            alert("Debe seleccionar al menos una columna para la obtención del reporte solicitado.");
            $("#listBoxTiposDocumentos").focus();
        }
    });
    $("#chkAllCols").click(function () {
        if (this.checked == true) {
            $("#listBoxTiposDocumentos").jqxListBox('checkAll');
        } else {
            $("#listBoxTiposDocumentos").jqxListBox('uncheckAll');
        }
    });
    $("#liList").click(function () {
        $('#divTabTiposDocumentos').jqxTabs('enableAt', 0);
        $('#divTabTiposDocumentos').jqxTabs('disableAt', 1);
        $('#divTabTiposDocumentos').jqxTabs('disableAt', 2);
    });

    /*
     *   Función para la inserción obligatoria de datos numéricos en los campos de clase.
     */
    $('.numeral').keyup(function (event) {
        if ($(this).val() != '') {
            $(this).val($(this).val().replace(/[^0-9]/g, ""));
        }
    });

    /*
     *   Función para la inserción obligatoria de letras distintas a números en los campos de clase.
     */
    $('.literal').keyup(function (event) {
        if ($(this).val() != '') {
            $(this).val($(this).val().replace(/[^A-Z,a-z,ñ,Ñ, ]/g, ""));
        }
    });
    $("#divMsjeNotificacionError").jqxNotification({
        width: '100%', position: "bottom-right", opacity: 0.9,
        autoOpen: false, animationOpenDelay: 800, autoClose: true, autoCloseDelay: 7000, template: "error"
    });

    $("#divMsjeNotificacionWarning").jqxNotification({
        width: '100%', position: "bottom-right", opacity: 0.9,
        autoOpen: false, animationOpenDelay: 800, autoClose: true, autoCloseDelay: 7000, template: "warning"
    });
    $("#divMsjeNotificacionSuccess").jqxNotification({
        width: '100%', position: "bottom-right", opacity: 0.9,
        autoOpen: false, animationOpenDelay: 800, autoClose: true, autoCloseDelay: 7000, template: "success"
    });

    $(document).keypress(OperaEvento);
    $(document).keyup(OperaEvento);
});
/**
 * Función para definir la grilla principal (listado) para la gestión de excepciones.
 */
function definirGrillaParaListaTiposDocumentos() {
    var source =
    {
        datatype: "json",
        datafields: [
            {name: 'nro_row', type: 'integer'},
            {name: 'id', type: 'integer'},
            {name: 'tipo_documento', type: 'string'},
            {name: 'codigo', type: 'character varying'},
            {name: 'indispensable', type: 'integer'},
            {name: 'indispensable_descripcion', type: 'string'},
            {name: 'id_tipopresdoc', type: 'integer'},
            {name: 'tipo_pres_doc', type: 'string'},
            {name: 'id_periodopresdoc', type: 'integer'},
            {name: 'periodo_pres_doc', type: 'string'},
            {name: 'id_tipoperssoldoc', type: 'integer'},
            {name: 'tipo_pers_sol_doc', type: 'string'},
            {name: 'id_tipoemisordoc', type: 'integer'},
            {name: 'tipo_emisor_doc', type: 'string'},
            {name: 'id_tipofechaemidoc', type: 'integer'},
            {name: 'tipo_fecha_emi_doc', type: 'string'},
            {name: 'hora', type: 'integer'},
            {name: 'hora_descripcion', type: 'string'},
            {name: 'dia', type: 'integer'},
            {name: 'dia_descripcion', type: 'string'},
            {name: 'mes', type: 'integer'},
            {name: 'mes_descripcion', type: 'string'},
            {name: 'trimestre', type: 'integer'},
            {name: 'trimestre_descripcion', type: 'string'},
            {name: 'semestre', type: 'integer'},
            {name: 'semestre_descripcion', type: 'string'},
            {name: 'gestion', type: 'integer'},
            {name: 'gestion_descripcion', type: 'string'},
            {name: 'tipofechaemidoc_descripcion', type: 'string'},
            {name: 'id_genero', type: 'integer'},
            {name: 'genero', type: 'string'},
            {name: 'id_normativamod', type: 'integer'},
            {name: 'normativa_mod', type: 'string'},
            {name: 'nivelsalarial_nivel', type: 'integer'},
            {name: 'nivelsalarial_nivel_denominacion', type: 'string'},
            {name: 'permanente', type: 'integer'},
            {name: 'permanente_descripcion', type: 'string'},
            {name: 'eventual', type: 'integer'},
            {name: 'eventual_descripcion', type: 'string'},
            {name: 'consultor_linea', type: 'integer'},
            {name: 'consultor_linea_descripcion', type: 'string'},
            {name: 'consultor_producto', type: 'integer'},
            {name: 'consultor_producto_descripcion', type: 'string'},
            {name: 'id_grupoarchivo', type: 'integer'},
            {name: 'grupo_archivo', type: 'string'},
            {name: 'ruta_carpeta', type: 'string'},
            {name: 'nombre_carpeta', type: 'string'},
            {name: 'formato_archivo_digital', type: 'string'},
            {name: 'resolucion_archivo_digital', type: 'numeric'},
            {name: 'altura_archivo_digital', type: 'numeric'},
            {name: 'anchura_archivo_digital', type: 'numeric'},
            {name: 'columnas_aux', type: 'string'},
            {name: 'columnas_aux_min', type: 'string'},
            {name: 'fecha_ini', type: 'date'},
            {name: 'fecha_fin', type: 'date'},
            {name: 'fecha_reg', type: 'date'},
            {name: 'observacion', type: 'string'},
            {name: 'estado', type: 'string'},
            {name: 'estado_descripcion', type: 'string'}
        ],
        url: '/gestiontiposdocumentos/list',
        cache: false
    };
    var dataAdapter = new $.jqx.dataAdapter(source);
    cargarRegistrosDeTolerancias();
    function cargarRegistrosDeTolerancias() {
        var theme = prepareSimulator("grid");
        $("#divGridTiposDocumentos").jqxGrid(
            {
                width: '100%',
                height: 560,
                source: dataAdapter,
                sortable: true,
                altRows: true,
                groupable: true,
                columnsresize: true,
                pageable: true,
                pagerMode: 'advanced',
                showfilterrow: true,
                filterable: true,
                pageSize: 10,
                showtoolbar: true,
                autorowheight: true,
                rendertoolbar: function (toolbar) {
                    var me = this;
                    var container = $("<div></div>");
                    toolbar.append(container);
                    container.append("<button id='addexceprowbutton' class='btn btn-sm btn-primary' type='button'><i class='fa fa-plus-square fa-2x text-info' title='Nuevo Registro.'/></i></button>");
                    container.append("<button id='updateexceprowbutton'  class='btn btn-sm btn-primary' type='button' ><i class='fa fa-pencil-square fa-2x text-primary' title='Modificar registro.'/></button>");
                    container.append("<button id='approveexceprowbutton'  class='btn btn-sm btn-primary' type='button' ><i class='fa fa-check-square fa-2x text-success' title='Aprobar Registro'></i></button>");
                    container.append("<button id='deleteexceprowbutton' class='btn btn-sm btn-primary' type='button'><i class='fa fa-minus-square fa-2x text-danger' title='Dar de baja al registro.'/></i></button>");
                    container.append("<button title='Refrescar Grilla' id='refreshbutton' class='btn btn-sm btn-primary' type='button'><i class='fa fa-repeat fa-2x text-default' title='Refrescar grilla.'/></i></button>");
                    container.append("<button title='Desagrupar.' id='cleargroupsrowbutton' class='btn btn-sm btn-primary' type='button'><i class='fa fa-chain-broken fa-2x text-default' title='Desagrupar.'/></i></button>");
                    container.append("<button title='Desfiltrar.' id='clearfiltersrowbutton' class='btn btn-sm btn-primary' type='button'><i class='gi gi-sorting fa-2x text-default' title='Desfiltrar.'/></i></button>");


                    $("#addexceprowbutton").jqxButton();
                    $("#updateexceprowbutton").jqxButton();
                    $("#approveexceprowbutton").jqxButton();
                    $("#deleteexceprowbutton").jqxButton();
                    $("#refreshbutton").jqxButton();
                    $("#cleargroupsrowbutton").jqxButton();
                    $("#clearfiltersrowbutton").jqxButton();

                    $("#hdnIdTipoDocumento").val(0);
                    $("#hdnColumnaAuxNumerador").val(0);
                    $("#hdnColumnaAuxNombre").val("");
                    $("#hdnColumnaAuxTipo").val("");
                    $(".tbodyColumnasAux").html("");

                    /* Registrar nueva excepción */
                    $("#addexceprowbutton").off();
                    $("#addexceprowbutton").on('click', function () {
                        $('#divTabTiposDocumentos').jqxTabs('enableAt', 1);
                        $('#divTabTiposDocumentos').jqxTabs('disableAt', 2);

                        $('#divTabTiposDocumentos').jqxTabs({selectedItem: 1});
                        $("#hdnIdTipoDocumento").val(0);
                        $(".tbodyColumnasAux").html("");
                        limpiarMensajesErrorPorValidacionTiposDocumentos(1);
                        var tipoDocumentoObject = {
                            idTipoDocumento: 0,
                            tipoDocumento: "",
                            codigo: "",
                            indispensable: 0,
                            idTipoPresDoc: 0,
                            idPeriodoPresDoc: 0,
                            idPersSolDoc: 0,
                            idTipoEmisorDoc: 0,
                            idTipoFechaEmiDoc: 0,
                            idGenero: -1,
                            idNormativaMod: 0,
                            nivelNivelSalarial: 0,
                            permanente: 0,
                            eventual: 0,
                            consultorLinea: 0,
                            consultorProducto: 0,
                            idGrupoArchivo: 0,
                            rutaCarpeta: "",
                            nombreCarpeta: "",
                            formatoArchivoDigital: "",
                            resolucionArchivoDigital: 0,
                            alturaArchivoDigital: 0,
                            anchuraArchivoDigital: 0,
                            columnasAux: "",
                            fechaInicio: "",
                            fechaFin: "",
                            fechaReg: "",
                            observacion: ""
                        };
                        inicializaFormularioTipoDocumentoNuevoEditar(1, tipoDocumentoObject);
                    });
                    /* Modificar registro.*/
                    $("#updateexceprowbutton").off();
                    $("#updateexceprowbutton").on('click', function () {
                        var selectedrowindex = $("#divGridTiposDocumentos").jqxGrid('getselectedrowindex');
                        if (selectedrowindex >= 0) {
                            var dataRecord = $('#divGridTiposDocumentos').jqxGrid('getrowdata', selectedrowindex);
                            if (dataRecord != undefined) {
                                /**
                                 * La modificación sólo es admisible si el registro de horario laboral tiene estado EN PROCESO
                                 */
                                if (dataRecord.estado >= 1) {
                                    $('#divTabTiposDocumentos').jqxTabs('disableAt', 1);
                                    $('#divTabTiposDocumentos').jqxTabs('enableAt', 2);

                                    $('#divTabTiposDocumentos').jqxTabs({selectedItem: 2});
                                    $("#hdnIdTipoDocumento").val(dataRecord.id);
                                    $(".tbodyColumnasAux").html("");
                                    limpiarMensajesErrorPorValidacionTiposDocumentos(2);
                                    var tipoDocumentoObject = {
                                        idTipoDocumento: dataRecord.id,
                                        tipoDocumento: dataRecord.tipo_documento,
                                        codigo: dataRecord.codigo,
                                        indispensable: dataRecord.indispensable,
                                        idTipoPresDoc: dataRecord.id_tipopresdoc,
                                        idPeriodoPresDoc: dataRecord.id_periodopresdoc,
                                        idTipoPersSolDoc: dataRecord.id_tipoperssoldoc,
                                        idTipoEmisorDoc: dataRecord.id_tipoemisordoc,
                                        idTipoFechaEmiDoc: dataRecord.id_tipofechaemidoc,
                                        idGenero: dataRecord.id_genero,
                                        idNormativaMod: dataRecord.id_normativamod,
                                        nivelNivelSalarial: dataRecord.nivelsalarial_nivel,
                                        permanente: dataRecord.permanente,
                                        eventual: dataRecord.eventual,
                                        consultorLinea: dataRecord.consultor_linea,
                                        consultorProducto: dataRecord.consultor_producto,
                                        idGrupoArchivo: dataRecord.id_grupoarchivo,
                                        rutaCarpeta: dataRecord.ruta_carpeta,
                                        nombreCarpeta: dataRecord.nombre_carpeta,
                                        formatoArchivoDigital: dataRecord.formato_archivo_digital,
                                        resolucionArchivoDigital: dataRecord.resolucion_archivo_digital,
                                        alturaArchivoDigital: dataRecord.altura_archivo_digital,
                                        anchuraArchivoDigital: dataRecord.anchura_archivo_digital,
                                        columnasAux: dataRecord.columnas_aux,
                                        fechaInicio: dataRecord.fecha_ini,
                                        fechaFin: dataRecord.fecha_fin,
                                        fechaReg: "",
                                        observacion: dataRecord.observacion,
                                        estado: dataRecord.estado
                                    };
                                    inicializaFormularioTipoDocumentoNuevoEditar(2, tipoDocumentoObject);
                                } else {
                                    var msje = "Debe seleccionar un registro en estado EN PROCESO o ACTIVO necesariamente.";
                                    $("#divMsjePorError").html("");
                                    $("#divMsjePorError").append(msje);
                                    $("#divMsjeNotificacionError").jqxNotification("open");
                                }
                            }
                        } else {
                            var msje = "Debe seleccionar un registro necesariamente.";
                            $("#divMsjePorError").html("");
                            $("#divMsjePorError").append(msje);
                            $("#divMsjeNotificacionError").jqxNotification("open");
                        }
                    });
                    /*Aprobar registro.*/
                    $("#approveexceprowbutton").off();
                    $("#approveexceprowbutton").on('click', function () {
                        var selectedrowindex = $("#divGridTiposDocumentos").jqxGrid('getselectedrowindex');
                        if (selectedrowindex >= 0) {
                            var dataRecord = $('#divGridTiposDocumentos').jqxGrid('getrowdata', selectedrowindex);
                            if (dataRecord != undefined) {
                                if (dataRecord.estado == 2) {
                                    if (confirm("¿Esta seguro de aprobar este registro de la Excepci&oacute;n?")) {
                                        aprobarRegistroExcepcion(dataRecord.id);
                                    }
                                } else {
                                    var msje = "Debe seleccionar un registro con estado EN PROCESO para posibilitar la aprobaci&oacute;n del registro";
                                    $("#divMsjePorError").html("");
                                    $("#divMsjePorError").append(msje);
                                    $("#divMsjeNotificacionError").jqxNotification("open");
                                }
                            }
                        } else {
                            var msje = "Debe seleccionar un registro necesariamente.";
                            $("#divMsjePorError").html("");
                            $("#divMsjePorError").append(msje);
                            $("#divMsjeNotificacionError").jqxNotification("open");
                        }
                    });
                    /* Dar de baja un registro.*/
                    $("#deleteexceprowbutton").off();
                    $("#deleteexceprowbutton").on('click', function () {
                        var selectedrowindex = $("#divGridTiposDocumentos").jqxGrid('getselectedrowindex');
                        if (selectedrowindex >= 0) {
                            var dataRecord = $('#divGridTiposDocumentos').jqxGrid('getrowdata', selectedrowindex);
                            if (dataRecord != undefined) {
                                /*
                                 *  Para dar de baja un registro, este debe estar inicialmente en estado ACTIVO
                                 */
                                if (dataRecord.estado >= 1) {
                                    if (confirm("Esta seguro de dar de baja registro de Tipo de Documento?"))
                                        darDeBajaTipoDeDocumento(dataRecord.id);
                                } else {
                                    var msje = "Para dar de baja un registro, este debe estar en estado ACTIVO o EN PROCESO inicialmente.";
                                    $("#divMsjePorError").html("");
                                    $("#divMsjePorError").append(msje);
                                    $("#divMsjeNotificacionError").jqxNotification("open");
                                }
                            }
                        } else {
                            var msje = "Debe seleccionar un registro necesariamente.";
                            $("#divMsjePorError").html("");
                            $("#divMsjePorError").append(msje);
                            $("#divMsjeNotificacionError").jqxNotification("open");
                        }
                    });
                    /**
                     * Refrescar la grilla
                     */
                    $("#refreshbutton").off();
                    $("#refreshbutton").on('click', function () {
                        $("#divGridTiposDocumentos").jqxGrid("updatebounddata");
                    });
                    /**
                     * Desagrupar
                     */
                    $("#cleargroupsrowbutton").off();
                    $("#cleargroupsrowbutton").on('click', function () {
                        $("#divGridTiposDocumentos").jqxGrid('cleargroups');
                    });
                    /**
                     * Desfiltrar
                     */
                    $("#clearfiltersrowbutton").off();
                    $("#clearfiltersrowbutton").on('click', function () {
                        $("#divGridTiposDocumentos").jqxGrid('clearfilters');
                    });
                },
                columns: [
                    {
                        text: 'Nro.',
                        filterable: false,
                        columntype: 'number',
                        pinned: true,
                        width: 40,
                        //cellsalign: 'center',
                        align: 'center',
                        cellsrenderer: rownumberrenderer
                    },
                    {
                        text: 'Estado',
                        filtertype: 'checkedlist',
                        datafield: 'estado_descripcion',
                        pinned: true,
                        width: 90,
                        //cellsalign: 'center',
                        align: 'center',
                        hidden: false,
                        cellclassname: cellclass
                    },
                    {
                        text: 'Tipo Documento',
                        datafield: 'tipo_documento',
                        pinned: true,
                        width: 250,
                        //cellsalign: 'justify',
                        align: 'center',
                        hidden: false
                    },
                    {
                        text: 'C&oacute;digo',
                        datafield: 'codigo',
                        pinned: true,
                        width: 70,
                        //cellsalign: 'center',
                        align: 'center',
                        hidden: false
                    },
                    {
                        text: 'Indispensable',
                        datafield: 'indispensable_descripcion',
                        filtertype: 'checkedlist',
                        width: 70,
                        //cellsalign: 'center',
                        align: 'center',
                        hidden: false
                    },
                    {
                        text: 'Grupo',
                        filtertype: 'checkedlist',
                        datafield: 'grupo_archivo',
                        width: 250,
                        align: 'center',
                        //cellsalign: 'justify',
                        hidden: false
                    },
                    {
                        text: 'Pres. Doc.',
                        filtertype: 'checkedlist',
                        datafield: 'tipo_pres_doc',
                        width: 120,
                        align: 'center',
                       // cellsalign: 'justify',
                        hidden: false
                    },
                    {
                        text: 'Formato',
                        filtertype: 'checkedlist',
                        datafield: 'formato_archivo_digital',
                        width: 80,
                        align: 'center',
                       // cellsalign: 'center',
                        hidden: true
                    },
                    {
                        text: 'Periodo Pres.',
                        filtertype: 'checkedlist',
                        datafield: 'periodo_pres_doc',
                        width: 90,
                       // cellsalign: 'center',
                        align: 'center',
                        hidden: false

                    },
                    {
                        text: 'Persistencia',
                        filtertype: 'checkedlist',
                        datafield: 'tipo_pers_sol_doc',
                        width: 100,
                       /// cellsalign: 'justify',
                        align: 'center',
                        hidden: false

                    },
                    {
                        text: 'Emisores',
                        filtertype: 'checkedlist',
                        datafield: 'tipo_emisor_doc',
                        width: 100,
                       // cellsalign: 'justify',
                        align: 'center',
                        hidden: false
                    },
                    {
                        text: 'Fecha Emisi&oacute;n',
                        filtertype: 'checkedlist',
                        datafield: 'tipo_fecha_emi_doc',
                        width: 120,
                       // cellsalign: 'center',
                        align: 'center',
                        hidden: false
                    },
                    /*{
                     text: 'Hora',
                     filtertype: 'checkedlist',
                     datafield: 'hora_descripcion',
                     width: 50,
                     cellsalign: 'center',
                     align: 'center',
                     hidden: false
                     },
                     {
                     text: 'D&iacute;a',
                     filtertype: 'checkedlist',
                     datafield: 'dia_descripcion',
                     width: 50,
                     cellsalign: 'center',
                     align: 'center',
                     hidden: false
                     },
                     {
                     text: 'Mes',
                     filtertype: 'checkedlist',
                     datafield: 'mes_descripcion',
                     width: 50,
                     cellsalign: 'center',
                     align: 'center',
                     hidden: false
                     },
                     {
                     text: 'Trimestre',
                     filtertype: 'checkedlist',
                     datafield: 'trimestre_descripcion',
                     width: 50,
                     cellsalign: 'center',
                     align: 'center',
                     hidden: false
                     },
                     {
                     text: 'Gesti&oacute;n',
                     filtertype: 'checkedlist',
                     datafield: 'gestion_descripcion',
                     width: 50,
                     cellsalign: 'center',
                     align: 'center',
                     hidden: false
                     },*/
                    {
                        text: 'Formato Fecha Emi.',
                        filtertype: 'checkedlist',
                        datafield: 'tipofechaemidoc_descripcion',
                        width: 150,
                      //  cellsalign: 'center',
                        align: 'center',
                        hidden: false
                    },
                    {
                        text: 'G&eacute;nero',
                        filtertype: 'checkedlist',
                        datafield: 'genero',
                        width: 100,
                        align: 'center',
                       // cellsalign: 'center',
                        hidden: false
                    },
                    {
                        text: 'Normativa',
                        filtertype: 'checkedlist',
                        datafield: 'normativa_mod',
                        width: 150,
                        align: 'center',
                       // cellsalign: 'center',
                        hidden: true
                    },
                    {
                        text: 'Nivel',
                        filtertype: 'checkedlist',
                        datafield: 'nivelsalarial_nivel_denominacion',
                        width: 150,
                        align: 'center',
                     //   cellsalign: 'center',
                        hidden: true
                    },
                    {
                        text: 'Plazo Ind.',
                        filtertype: 'checkedlist',
                        datafield: 'permanente_descripcion',
                        width: 80,
                        align: 'center',
                       // cellsalign: 'center',
                        hidden: false
                    },
                    {
                        text: 'Plazo Fijo',
                        filtertype: 'checkedlist',
                        datafield: 'eventual_descripcion',
                        width: 80,
                        align: 'center',
                     //   cellsalign: 'center',
                        hidden: false
                    },
                    {
                        text: 'C. L&iacute;nea',
                        filtertype: 'checkedlist',
                        datafield: 'consultor_linea_descripcion',
                        width: 80,
                        align: 'center',
                      //  cellsalign: 'center',
                        hidden: false
                    },
                    {
                        text: 'C. Prod.',
                        filtertype: 'checkedlist',
                        datafield: 'consultor_producto_descripcion',
                        width: 80,
                        align: 'center',
                        cellsalign: 'center',
                        hidden: false
                    },
                    {
                        text: 'Ruta',
                        filtertype: 'checkedlist',
                        datafield: 'ruta_carpeta',
                        width: 80,
                        align: 'center',
                     //   cellsalign: 'justify',
                        hidden: true
                    },
                    {
                        text: 'Carpeta',
                        filtertype: 'checkedlist',
                        datafield: 'nombre_carpeta',
                        width: 80,
                        align: 'center',
                      //  cellsalign: 'justify',
                        hidden: true
                    },
                    {
                        text: 'Resoluci&oacute;n',
                        filtertype: 'checkedlist',
                        datafield: 'resolucion_archivo_digital',
                        width: 80,
                        align: 'center',
                     //   cellsalign: 'center',
                        hidden: true
                    },
                    {
                        text: 'Altura',
                        filtertype: 'checkedlist',
                        datafield: 'altura_archivo_digital',
                        width: 80,
                        align: 'center',
                     //   cellsalign: 'center',
                        hidden: true
                    },
                    {
                        text: 'Anchura',
                        filtertype: 'checkedlist',
                        datafield: 'anchura_archivo_digital',
                        width: 80,
                        align: 'center',
                    //    cellsalign: 'center',
                        hidden: true
                    },
                    {
                        text: 'Columnas Aux.',
                        datafield: 'columnas_aux_min',
                        width: 600,
                        align: 'center',
                     //   cellsalign: 'justify',
                        hidden: false
                    },
                    {
                        text: 'Fecha Inicio',
                        datafield: 'fecha_ini',
                        filtertype: 'range',
                        width: 100,
                     //   cellsalign: 'center',
                        cellsformat: 'dd-MM-yyyy',
                        align: 'center',
                        hidden: true
                    },
                    {
                        text: 'Fecha Fin',
                        datafield: 'fecha_fin',
                        filtertype: 'range',
                        width: 100,
                     //   cellsalign: 'center',
                        cellsformat: 'dd-MM-yyyy',
                        align: 'center',
                        hidden: true
                    },
                    {
                        text: 'Observaci&oacute;n',
                        datafield: 'observacion',
                        width: 150,
                        align: 'center',
                        hidden: false
                    },
                ]
            });
        var listSource = [
            {label: 'Estado', value: 'estado_descripcion', checked: true},
            {label: 'Tipo Documento', value: 'tipo_documento', checked: true},
            {label: 'C&oacute;digo', value: 'codigo', checked: true},
            {label: 'Indispensable', value: 'indispensable_descripcion', checked: true},
            {label: 'Pres. Doc.', value: 'tipo_pres_doc', checked: true},
            {label: 'Formato', value: 'formato_archivo_digital', checked: false},
            {label: 'Periodo Pres.', value: 'periodo_pres_doc', checked: true},
            {label: 'Persistencia', value: 'tipo_pers_sol_doc', checked: true},
            {label: 'Emisores', value: 'tipo_emisor_doc', checked: true},
            {label: 'Fecha Emisi&oacute;n', value: 'tipo_fecha_emi_doc', checked: true},
            /*{label: 'Hora', value: 'hora_descripcion', checked: true},
             {label: 'D&iacute;a', value: 'dia_descripcion', checked: true},
             {label: 'Mes', value: 'mes_descripcion', checked: true},
             {label: 'Trimestre', value: 'trimestre_descripcion', checked: true},
             {label: 'Gesti&oacute;n', value: 'gestion_descripcion', checked: true},*/
            {label: 'Formato Fecha Emi.', value: 'tipofechaemidoc_descripcion', checked: true},
            {label: 'G&eacute;nero', value: 'genero', checked: true},
            {label: 'Normativa', value: 'normativa_mod', checked: false},
            {label: 'Nivel', value: 'nivelsalarial_nivel_denominacion', checked: false},
            {label: 'Plazo Ind.', value: 'permanente_descripcion', checked: true},
            {label: 'Plazo Fijo', value: 'eventual_descripcion', checked: true},
            {label: 'C. L&iacute;nea', value: 'consultor_linea_descripcion', checked: true},
            {label: 'C. Prod.', value: 'consultor_producto_descripcion', checked: true},
            {label: 'Grupo', value: 'grupo_archivo', checked: true},
            {label: 'Ruta', value: 'ruta_carpeta', checked: false},
            {label: 'Carpeta', value: 'nombre_carpeta', checked: false},
            {label: 'Resoluci&oacute;n', value: 'resolucion_archivo_digital', checked: false},
            {label: 'Altura', value: 'altura_archivo_digital', checked: false},
            {label: 'Anchura', value: 'anchura_archivo_digital', checked: false},
            {label: 'Columans Aux.', value: 'columnas_aux', checked: true},
            {label: 'Fecha Inicio', value: 'fecha_ini', checked: false},
            {label: 'Fecha Fin', value: 'fecha_fin', checked: false},
            {label: 'Observaci&oacute;n', value: 'observacion', checked: true}
        ];
        $("#listBoxTiposDocumentos").jqxListBox({
            theme: theme,
            source: listSource,
            width: "100%",
            height: 490,
            checkboxes: true
        });
        $("#listBoxTiposDocumentos").on('checkChange', function (event) {
            $("#divGridTiposDocumentos").jqxGrid('beginupdate');
            if (event.args.checked) {
                $("#divGridTiposDocumentos").jqxGrid('showcolumn', event.args.value);
            }
            else {
                $("#divGridTiposDocumentos").jqxGrid('hidecolumn', event.args.value);
            }
            $("#divGridTiposDocumentos").jqxGrid('endupdate');
        });
    }
}
/**
 * Función anónima para enumerar los registros
 * @param row
 * @param columnfield
 * @param value
 * @param defaulthtml
 * @param columnproperties
 * @param rowdata
 * @returns {string}
 */
var rownumberrenderer = function (row, columnfield, value, defaulthtml, columnproperties, rowdata) {
    var nro = row + 1;
    return "<div align='center'>" + nro + "</div>";
}
/*
 * Función para controlar la ejecución del evento esc con el teclado.
 */
function OperaEvento(evento) {
    if ((evento.type == "keyup" || evento.type == "keydown") && evento.which == "27") {
        $('#divTabTiposDocumentos').jqxTabs('enableAt', 0);
        $('#divTabTiposDocumentos').jqxTabs('disableAt', 1);
        $('#divTabTiposDocumentos').jqxTabs('disableAt', 2);

        /**
         * Saltamos a la pantalla principal en caso de presionarse ESC
         */
        $('#divTabTiposDocumentos').jqxTabs({selectedItem: 0});
    }
}

/**
 * Función anónima para la aplicación de clases a celdas en particular dentro de las grillas.
 * @param row
 * @param columnfield
 * @param value
 * @returns {string}
 * @author JLM
 */
var cellclass = function (row, columnfield, value) {
    if (value == 'ACTIVO') {
        return 'verde';
    }
    else if (value == 'EN PROCESO') {
        return 'amarillo';
    }
    else if (value == 'PASIVO') {
        return 'rojo';
    }
    else return ''
}
/**
 * Función para la definición de la columna en función del valor almacenado en la columna.
 * @param row
 * @param column
 * @param value
 * @param defaultHtml
 * @returns {*}
 */
var cellsrenderer = function (row, column, value, defaultHtml) {
    var element = $(defaultHtml);
    element.css({'background-color': value});
    return element[0].outerHTML;
    return defaultHtml;
}
/**
 * Función para ordenar la numeración de filas en la grilla de campos auxiliares.
 */
function ordenaNumeracionCamposAux() {
    var contador = 1;
    $(".tdNumerador").each(function (index) {
        $(this).text(contador);
        contador++;
    });
}
/**
 * Función para obtener el máximo numerador de filas en la grilla de campos auxiliares en base al id.
 */
function obtenerMaximoNumeradorCamposAux() {
    var max = null;
    $(".tdNumerador").each(function (index) {
        var idTd = this.id;
        var arrId = idTd.split("_");
        var numerador = parseInt(arrId[2]);
        if ((max === null) || (numerador > max)) {
            max = numerador;
        }
    });
    return max;
}
/**
 * Función para obtener el máximo id de campo auxiliar.
 * @returns {*}
 */
function obtenerMaximoIdCampoCamposAux() {
    var max = null;
    $(".trColumnaAux").each(function (index) {
        var idCampo = $(this).data("id_campo");
        if ((max === null) || (idCampo > max)) {
            max = idCampo;
        }
    });
    return max;
}
/**
 * Función para obtener el número de filas.
 */
function obtenerNumeroFilasCamposAux() {
    var contador = 0;
    $(".tdNumerador").each(function (index) {
        contador++;
    });
    return contador;
}
/**
 * Función para la definición y despliegue de mensaje infográfico.
 * @param titulo
 * @param cuerpo
 * @param alerta
 */
function despliegaModalInfografia(titulo, cuerpo, alerta) {
    $("#h4Title").html(titulo);
    var body = "<p>" + cuerpo + "</p>";
    if (alerta != '') {
        body += "<p class='text-warning'><small>Dato requerido obligatoriamente.</small></p>";
    }
    $("#divModalBody").html(body);
    $("#divModalInfografia").modal('show');
}