/*
 *   Oasis - Sistema de Gestión para Recursos Humanos
 *   Empresa Estatal de Transporte por Cable "Mi Teleférico"
 *   Versión:  1.0.0
 *   Usuario Creador: Lic. Javier Loza
 *   Fecha Creación:  23-02-2016
 */

function cargarPersonasContactosPresentacionDoc(opcion, idPersona) {
    var sufijo = ""
    if (opcion == 2) {
        sufijo = "TurnAndExcept"
    }
    var ok = $.ajax({
        url: '/relaborales/personascontacto/',
        type: 'POST',
        datatype: 'json',
        async: false,
        data: {id: idPersona},
        success: function (data) {  //alert(data);
            var res = jQuery.parseJSON(data);
            if (res.length > 0) {
                $.each(res, function (key, val) {
                    if (verificarVisibilidad("dtTipoDeDocumento" + sufijo)) {
                        if (val.tipo_documento != null)$("#dtTipoDeDocumento" + sufijo).html(val.tipo_documento + ":");
                        else $("#dtTipoDeDocumento" + sufijo).html("CI:");
                        $("#ddNumeroDeDocumento" + sufijo).html("");
                        $("#ddNumeroDeDocumento" + sufijo).append(val.ci + " " + val.expd);
                        if (val.num_complemento != "" && val.num_complemento != null)
                            $("#ddNumeroDeDocumento" + sufijo).append(" " + val.num_complemento);
                    } else {
                        $("#dtTipoDeDocumento" + sufijo).html("");
                        $("#ddNumeroDeDocumento" + sufijo).html("");
                    }
                    if (verificarVisibilidad("dtNacionalidad" + sufijo)) {
                        $("#ddNacionalidad" + sufijo).html(val.nacionalidad + "&nbsp;");
                    } else {
                        $("#dtNacionalidad" + sufijo).html("");
                        $("#ddNacionalidad" + sufijo).html("");
                    }
                    if (verificarVisibilidad("dtLugarDeNacimiento" + sufijo)) {
                        $("#ddLugarDeNacimiento" + sufijo).html(val.lugar_nac + "&nbsp;");
                    } else {
                        $("#dtLugarDeNacimiento" + sufijo).html("");
                        $("#ddLugarDeNacimiento" + sufijo).html("");
                    }
                    if (verificarVisibilidad("dtFechaDeNacimiento" + sufijo)) {
                        $("#ddFechaDeNacimiento" + sufijo).html(val.fecha_nac + "&nbsp;");
                    } else {
                        $("#dtFechaDeNacimiento" + sufijo).html("");
                        $("#ddFechaDeNacimiento" + sufijo).html("");
                    }
                    if (verificarVisibilidad("dtDireccion" + sufijo)) {
                        $("#ddDireccion" + sufijo).html(val.direccion_dom + "&nbsp;");
                    } else {
                        $("#dtDireccion" + sufijo).html("");
                        $("#ddDireccion" + sufijo).html("");
                    }
                    if (verificarVisibilidad("dtTelefonoFijo" + sufijo)) {
                        $("#ddTelefonoFijo" + sufijo).html(val.telefono_fijo + "&nbsp;");
                    } else {
                        $("#dtTelefonoFijo" + sufijo).html("");
                        $("#ddTelefonoFijo" + sufijo).html("");
                    }
                    if (verificarVisibilidad("dtTelefonoInst" + sufijo)) {
                        $("#ddTelefonoInst" + sufijo).html(val.telefono_inst + "&nbsp;");
                    } else {
                        $("#dtTelefonoInst" + sufijo).html("");
                        $("#ddTelefonoInst" + sufijo).html("");
                    }
                    if (verificarVisibilidad("dtCelularPer" + sufijo)) {
                        $("#ddCelularPer" + sufijo).html(val.celular_per + "&nbsp;");
                    } else {
                        $("#ddCelularPer" + sufijo).html("");
                        $("#dtCelularPer" + sufijo).html("");
                    }
                    if (verificarVisibilidad("dtCelularInst" + sufijo)) {
                        $("#ddCelularInst" + sufijo).html(val.celular_inst + "&nbsp;");
                    } else {
                        $("#dtCelularInst" + sufijo).html("");
                        $("#ddCelularInst" + sufijo).html("");
                    }
                    if (verificarVisibilidad("dtTelefonoFax" + sufijo)) {
                        $("#ddTelefonoFax" + sufijo).html(val.telefono_fax + "&nbsp;");
                    } else {
                        $("#dtTelefonoFax" + sufijo).html(val.telefono_fax + "&nbsp;");
                        $("#ddTelefonoFax" + sufijo).html(val.telefono_fax + "&nbsp;");
                    }
                    if (verificarVisibilidad("dtInternoInst" + sufijo)) {
                        $("#ddInternoInst" + sufijo).html(val.interno_inst + "&nbsp;");
                    } else {
                        $("#dtInternoInst" + sufijo).html("");
                        $("#ddInternoInst" + sufijo).html("");
                    }
                    if (verificarVisibilidad("dtEmailPer" + sufijo)) {
                        $("#ddEmailPer" + sufijo).html(val.e_mail_per + "&nbsp;");
                    } else {
                        $("#dtEmailPer" + sufijo).html("");
                        $("#ddEmailPer" + sufijo).html("");
                    }
                    if (verificarVisibilidad("dtEmailInst" + sufijo)) {
                        $("#ddEmailInst" + sufijo).html(val.e_mail_inst + "&nbsp;");
                    } else {
                        $("#dtEmailInst" + sufijo).html("");
                        $("#ddEmailInst" + sufijo).html("");
                    }
                });
            }
        }, //mostramos el error
        error: function () {
            alert('Se ha producido un error Inesperado');
        }
    });
}
/**
 * Función para evaluar la visibilidad de un campo específico.
 * @param id Identificador del campo a Mostrarse/Ocultarse.
 * @returns {boolean} True: Mostrar; False: No Mostrar
 */
function verificarVisibilidad(id) {
    var ok = true;
    return ok;
}
/**
 * Función para definir la grilla principal (listado) para la gestión de excepciones.
 * @param opcion
 * @param dataRecordRelaboral
 */
function inicializarTabuladorVerticalTiposDocumentos(opcion, dataRecordRelaboral) {
    var sufijo = "";
    if (opcion == 2) {
        sufijo = "Rep";
    }
    var tabuladores = "<div id='divGridTiposDocumentosPresentacionDoc" + sufijo + "'></div>";
    $("#divContenidoTabuladorTiposDocumentos" + sufijo).html("");
    $("#divContenidoTabuladorTiposDocumentos" + sufijo).html(tabuladores);
    $("#divGridDocumentosPresentadosGlobal" + sufijo).hide();
    cargarListaGruposArchivos(opcion);
    definirGrillaParaListaTiposDocumentosPorGrupo(opcion, 1, dataRecordRelaboral);
    $("#divReport").css("height", "1000px");
    $(".liTabVert").off();
    $(".liTabVert").on("click", function () {
        $("#divGridDocumentosPresentadosGlobal" + sufijo).hide();
        var arrIdGrupo = this.id.split("_");
        var idGrupo = arrIdGrupo[1];
        definirGrillaParaListaTiposDocumentosPorGrupo(opcion, idGrupo, dataRecordRelaboral);
    });
}
/**
 * Función para la obtención del listado de grupos de archivos.
 * @param opcion
 * @param idGrupoArchivo
 */
function cargarListaGruposArchivos(opcion) {
    var lista = "";
    var sw = false;
    var sufijo = "";
    if (opcion == 2) {
        sufijo = "Rep";
    }
    var clsActivo = "active";
    $("#ulGruposArchivos" + sufijo).html("")
    lista = "<li id='li_00' class='principal'><a href='#' data-toggle='tab' id='aPrincipal'>Tipos de Documentos por Grupos</a></li>";
    $.ajax({
        url: '/gestiontiposdocumentos/listgruposarchivos/',
        type: 'POST',
        datatype: 'json',
        async: false,
        success: function (data) {  //alert(data);
            var res = jQuery.parseJSON(data);
            if (res.length > 0) {
                $.each(res, function (key, val) {
                    if (sw == true)clsActivo = "";
                    var ordenador = val.ordenador;
                    if (ordenador.length == 1) {
                        ordenador = "0" + ordenador;
                    }
                    lista += "<li id='li_" + val.id_grupoarchivo + "' class='" + clsActivo + " liTabVert'><a href='#' data-toggle='tab' id='a_li_" + val.id_grupoarchivo + "'>" + ordenador + ". " + val.grupo_archivo_resumido + "</a></li>";
                    sw = true;
                });
                lista += "</ul>";
                $("#ulGruposArchivos" + sufijo).append(lista)
            }
        }, //mostramos el error
        error: function () {
            alert('Se ha producido un error Inesperado al cargar la lista de grupos');
        }
    });
}
/**
 * Función para la obtención del listado de tipos de documentos habilitados para el registro por parte de la persona.
 * @param idGrupo
 * @param sufijoGrupo
 * @param dataRecordRelaboral
 */
function definirGrillaParaListaTiposDocumentosPorGrupo(opcion, idGrupo, dataRecordRelaboral) {
    var sufijoGrupo = "";
    if (opcion == 2) {
        sufijoGrupo = "Rep";
    }
    var idRelaboral = 0;
    if (dataRecordRelaboral != null) {
        idRelaboral = dataRecordRelaboral.id_relaboral;
    }
    $("#divGridTiposDocumentosPresentacionDoc" + sufijoGrupo).jqxGrid('clearselection');
    var source =
    {
        datatype: "json",
        datafields: [
            {name: 'nro_row', type: 'integer'},
            {name: 'id_tipodocumento', type: 'integer'},
            {name: 'tipo_documento', type: 'string'},
            {name: 'codigo', type: 'character varying'},
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
            {name: 'gestion', type: 'integer'},
            {name: 'gestion_descripcion', type: 'string'},
            {name: 'tipofechaemidoc_descripcion', type: 'string'},
            {name: 'id_genero', type: 'integer'},
            {name: 'genero', type: 'string'},
            {name: 'id_normativamod', type: 'integer'},
            {name: 'normativa_mod', type: 'string'},
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
            {name: 'observacion', type: 'string'},
            {name: 'estado', type: 'string'},
            {name: 'estado_descripcion', type: 'string'}
        ],
        url: '/gestiontiposdocumentos/listbygroup?id_grupo=' + idGrupo + '&id_relaboral=' + idRelaboral,
        cache: false
    };

    var dataAdapter = new $.jqx.dataAdapter(source);
    cargarRegistrosDeTiposDeDocumentos();
    function cargarRegistrosDeTiposDeDocumentos() {
        var theme = prepareSimulator("grid");
        $("#divGridTiposDocumentosPresentacionDoc" + sufijoGrupo).jqxGrid(
            {
                theme: theme,
                width: '100%',
                height: 500,
                source: dataAdapter,
                sortable: true,
                altRows: true,
                columnsresize: true,
                pageable: true,
                pagerMode: 'advanced',
                showfilterrow: true,
                filterable: true,
                autorowheight: true,
                columns: [
                    {
                        text: 'Nro.',
                        filterable: false,
                        columntype: 'number',
                        pinned: true,
                        width: 40,
                        cellsalign: 'center',
                        align: 'center',
                        cellsrenderer: rownumberrenderer
                    },
                    {
                        text: 'Tipo Documento',
                        datafield: 'tipo_documento',
                        pinned: true,
                        width: 200,
                        cellsalign: 'justify',
                        align: 'center',
                        hidden: false
                    },
                    {
                        text: 'C&oacute;digo',
                        datafield: 'codigo',
                        pinned: true,
                        width: 70,
                        cellsalign: 'center',
                        align: 'center',
                        hidden: false
                    },
                    {
                        text: 'Pres. Doc.',
                        filtertype: 'checkedlist',
                        datafield: 'tipo_pres_doc',
                        width: 120,
                        align: 'center',
                        cellsalign: 'justify',
                        hidden: false
                    },
                    {
                        text: 'Formato',
                        filtertype: 'checkedlist',
                        datafield: 'formato_archivo_digital',
                        width: 80,
                        align: 'center',
                        cellsalign: 'center',
                        hidden: false
                    },
                    {
                        text: 'Periodo Pres.',
                        filtertype: 'checkedlist',
                        datafield: 'periodo_pres_doc',
                        width: 90,
                        cellsalign: 'center',
                        align: 'center',
                        hidden: false

                    },
                    {
                        text: 'Persistencia',
                        filtertype: 'checkedlist',
                        datafield: 'tipo_pers_sol_doc',
                        width: 100,
                        cellsalign: 'justify',
                        align: 'center',
                        hidden: false

                    },
                    {
                        text: 'Emisores',
                        filtertype: 'checkedlist',
                        datafield: 'tipo_emisor_doc',
                        width: 100,
                        cellsalign: 'justify',
                        align: 'center',
                        hidden: false
                    },
                    /*{
                     text: 'Fecha Emisi&oacute;n',
                     filtertype: 'checkedlist',
                     datafield: 'tipo_fecha_emi_doc',
                     width: 120,
                     cellsalign: 'center',
                     align: 'center',
                     hidden: false
                     },*/
                    {
                        text: 'Formato Fecha Emi.',
                        filtertype: 'checkedlist',
                        datafield: 'tipofechaemidoc_descripcion',
                        width: 150,
                        cellsalign: 'center',
                        align: 'center',
                        hidden: false
                    },
                    {
                        text: 'G&eacute;nero',
                        filtertype: 'checkedlist',
                        datafield: 'genero',
                        width: 100,
                        align: 'center',
                        cellsalign: 'center',
                        hidden: false
                    },
                    {
                        text: 'Normativa',
                        filtertype: 'checkedlist',
                        datafield: 'normativa_mod',
                        width: 150,
                        align: 'center',
                        cellsalign: 'center',
                        hidden: false
                    },
                    {
                        text: 'Plazo Ind.',
                        filtertype: 'checkedlist',
                        datafield: 'permanente_descripcion',
                        width: 80,
                        align: 'center',
                        cellsalign: 'center',
                        hidden: false
                    },
                    {
                        text: 'Plazo Fijo',
                        filtertype: 'checkedlist',
                        datafield: 'eventual_descripcion',
                        width: 80,
                        align: 'center',
                        cellsalign: 'center',
                        hidden: false
                    },
                    {
                        text: 'C. L&iacute;nea',
                        filtertype: 'checkedlist',
                        datafield: 'consultor_linea_descripcion',
                        width: 80,
                        align: 'center',
                        cellsalign: 'center',
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
                        text: 'Grupo',
                        filtertype: 'checkedlist',
                        datafield: 'grupo_archivo',
                        width: 150,
                        align: 'center',
                        cellsalign: 'justify',
                        hidden: false
                    },
                    {
                        text: 'Ruta',
                        filtertype: 'checkedlist',
                        datafield: 'ruta_carpeta',
                        width: 80,
                        align: 'center',
                        cellsalign: 'justify',
                        hidden: true
                    },
                    {
                        text: 'Columnas Aux.',
                        datafield: 'columnas_aux_min',
                        width: 500,
                        align: 'center',
                        cellsalign: 'justify',
                        hidden: false
                    },
                    {
                        text: 'Fecha Inicio',
                        datafield: 'fecha_ini',
                        filtertype: 'range',
                        width: 100,
                        cellsalign: 'center',
                        cellsformat: 'dd-MM-yyyy',
                        align: 'center',
                        hidden: false
                    },
                    {
                        text: 'Fecha Fin',
                        datafield: 'fecha_fin',
                        filtertype: 'range',
                        width: 100,
                        cellsalign: 'center',
                        cellsformat: 'dd-MM-yyyy',
                        align: 'center',
                        hidden: false
                    },
                    {
                        text: 'Observaci&oacute;n',
                        datafield: 'observacion',
                        width: 100,
                        align: 'center',
                        hidden: false
                    },
                ]
            });
        $("#divGridTiposDocumentosPresentacionDoc" + sufijoGrupo).off();
        $("#divGridTiposDocumentosPresentacionDoc" + sufijoGrupo).on('bindingcomplete', function () {

        });
        $("#divGridTiposDocumentosPresentacionDoc" + sufijoGrupo).on('rowdoubleclick', function (event) {
            $("#divGridDocumentosPresentadosGlobal").hide();
            var formato = "";
            var args = event.args;
            var dataRecordTipoDocumento = $("#divGridTiposDocumentosPresentacionDoc" + sufijoGrupo).jqxGrid('getrowdata', args.rowindex);
            var nombreTipoDocumentoMasFormatoArchivoDigital = dataRecordTipoDocumento.tipo_documento;
            if (dataRecordTipoDocumento.formato_archivo_digital != null && dataRecordTipoDocumento.formato_archivo_digital != '') {
                formato = dataRecordTipoDocumento.formato_archivo_digital;
                formato = formato.toLowerCase()
                nombreTipoDocumentoMasFormatoArchivoDigital += "&nbsp;&nbsp;<span class='label label-info'><i class='hi hi-paperclip'></i> Archivo digital en formato: " + formato + "</span>";
            }
            $("#h2NombreTipoDocumento" + sufijoGrupo).html(nombreTipoDocumentoMasFormatoArchivoDigital);
            cargarGrillaPresentacionDoc(opcion, idGrupo, dataRecordRelaboral, dataRecordTipoDocumento, formato);
        });
        $("#divGridTiposDocumentosPresentacionDoc" + sufijoGrupo).on('rowselect', function (event) {
            $("#divGridDocumentosPresentadosGlobal").hide();
        });
    }
}
/**
 * Función para la obtención del listado de documentos presentados por parte de una persona de acuerdo al contrato y tipo de documento seleccionado.
 * @param opcion
 * @param idGrupo
 * @param dataRecordRelaboral
 * @param dataRecordTipoDocumento
 */
function cargarGrillaPresentacionDoc(opcion, idGrupo, dataRecordRelaboral, dataRecordTipoDocumento, formato) {
    var sufijoGrupo = "";
    if (opcion == 2) {
        sufijoGrupo = "Rep";
    }
    var idTipoDocumento = dataRecordTipoDocumento.id_tipodocumento;
    var idRelaboral = 0;
    var idPersona = 0;
    if (dataRecordRelaboral != null) {
        idRelaboral = dataRecordRelaboral.id_relaboral;
        idPersona = dataRecordRelaboral.id_persona;
    }
    $("#divGridDocumentosPresentados" + sufijoGrupo).show();
    $("#divGridDocumentosPresentados" + sufijoGrupo).jqxGrid('clear');
    $("#divGridDocumentosPresentadosGlobal" + sufijoGrupo).show();
    var datafields = [
        {name: 'nro_row', type: 'integer'},
        {name: 'id_presentaciondoc', type: 'integer'},
        {name: 'id_tipodocumento', type: 'integer'},
        {name: 'id_persona', type: 'integer'},
        {name: 'id_relaboral', type: 'integer'},
        {name: 'gestion_emi', type: 'integer'},
        {name: 'trim_emi', type: 'integer'},
        {name: 'trim_emi_descripcion', type: 'string'},
        {name: 'mes_emi', type: 'integer'},
        {name: 'mes_emi_descripcion', type: 'string'},
        {name: 'dia_emi', type: 'integer'},
        {name: 'dia_emi_descripcion', type: 'integer'},
        {name: 'hora_emi', type: 'time'},
        {name: 'fecha_pres', type: 'date'},
        {name: 'fecha_emi', type: 'datetime'},
        {name: 'id_institucion', type: 'integer'},
        {name: 'institucion', type: 'string'},
        {name: 'columnas_aux', type: 'text'},
        {name: 'formato_archivo_digital', type: 'text'},
        {name: 'digital', type: 'text'},
        {name: 'observacion', type: 'string'},
        {name: 'estado', type: 'integer'},
        {name: 'estado_descripcion', type: 'string'},
        {name: 'presentacionesdoc_estado', type: 'integer'}
    ];
    var columns = [
        {
            text: 'Nro.',
            sortable: false,
            filterable: false,
            editable: false,
            groupable: false,
            draggable: false,
            resizable: false,
            pinned: true,
            columntype: 'number',
            width: 50,
            cellsalign: 'center',
            align: 'center',
            cellsrenderer: rownumberrenderer
        }];
    /**
     * Si el detalle corresponde al modo grupal se muestran los datos del contrato de la persona
     */
    if (opcion == 2) {
        datafields.push(
            {name: 'fecha_nac', type: 'string'},
            {name: 'edad', type: 'integer'},
            {name: 'lugar_nac', type: 'integer'},
            {name: 'genero', type: 'integer'},
            {name: 'e_civil', type: 'integer'},
            {name: 'tiene_contrato_vigente', type: 'integer'},
            {name: 'id_fin_partida', type: 'integer'},
            {name: 'finpartida', type: 'string'},
            {name: 'ubicacion', type: 'string'},
            {name: 'id_condicion', type: 'integer'},
            {name: 'condicion', type: 'string'},
            {name: 'item', type: 'integer'},
            {name: 'tiene_item', type: 'integer'},
            {name: 'id_cargo', type: 'integer'},
            {name: 'cargo_codigo', type: 'string'},
            {name: 'cargo_resolucion_ministerial_id', type: 'integer'},
            {name: 'cargo_resolucion_ministerial', type: 'string'},
            {name: 'relaboral_estado', type: 'integer'},
            {name: 'relaboral_estado_descripcion', type: 'string'},
            {name: 'nombres', type: 'string'},
            {name: 'ci', type: 'string'},
            {name: 'expd', type: 'string'},
            /*{name: 'num_complemento', type: 'string'},*/
            {name: 'id_organigrama', type: 'integer'},
            {name: 'gerencia_administrativa', type: 'string'},
            {name: 'departamento_administrativo', type: 'string'},
            {name: 'id_area', type: 'integer'},
            {name: 'area', type: 'string'},
            {name: 'id_ubicacion', type: 'integer'},
            {name: 'ubicacion', type: 'string'},
            {name: 'num_contrato', type: 'string'},
            {name: 'fin_partida', type: 'string'},
            {name: 'partida', type: 'integer'},
            {name: 'id_procesocontratacion', type: 'integer'},
            {name: 'proceso_codigo', type: 'string'},
            {name: 'nivelsalarial', type: 'string'},
            {name: 'nivelsalarial_resolucion', type: 'string'},
            {name: 'cargo', type: 'string'},
            {name: 'sueldo', type: 'numeric'},
            {name: 'fecha_ini', type: 'date'},
            {name: 'fecha_incor', type: 'date'},
            {name: 'fecha_fin', type: 'date'},
            {name: 'fecha_baja', type: 'date'},
            {name: 'motivo_baja', type: 'string'},
            {name: 'relaboral_previo_id', type: 'integer'},
            {name: 'relaboral_observacion', type: 'string'},
            {name: 'fecha_ing', type: 'date'}
        );
    }
    if (formato != "" && formato != null) {
        //if (dataRecordTipoDocumento.formato_archivo_digital != null && dataRecordTipoDocumento.formato_archivo_digital != '' && dataRecordTipoDocumento.formato_archivo_digital != undefined) {
        columns.push({
            text: 'Archivo',
            datafield: 'digital',
            //columngroup: 'DatosPresentacionDoc',
            cellsrenderer: function (rowline) {
                ctrlrow = rowline
                var dataRecordPresentacionDocAux = $("#divGridDocumentosPresentados" + sufijoGrupo).jqxGrid('getrowdata', ctrlrow);
                var formato = dataRecordPresentacionDocAux.formato_archivo_digital.toLowerCase();
                var digital = dataRecordPresentacionDocAux.digital;
                if (digital != null && digital != '' && digital != undefined) {
                    var idPersona = dataRecordPresentacionDocAux.id_persona;
                    var idRelaboral = dataRecordPresentacionDocAux.id_relaboral;
                    var idTipoDocumento = dataRecordPresentacionDocAux.id_tipodocumento;
                    var idPresentacionDoc = dataRecordPresentacionDocAux.id_presentaciondoc;
                    /**
                     * Se agrega un control en caso de cambiarse los iconos de las imagenes
                     * @type {number}
                     */
                    var numRam = Math.floor((Math.random() * 100) + 1);
                    switch (formato) {
                        case "pdf":
                            return '<div style="margin:4px;float:left"><img onclick="mostrarArchivoDigital(' + idPersona + ',' + idRelaboral + ',' + idTipoDocumento + ',' + idPresentacionDoc + ');" width="30px" height="30px" id="' + idPresentacionDoc + '" src="./images/iconPdf.png?' + numRam + '" alt="Ver archivo PDF." title="Ver archivo PDF."/></div>';
                            break;
                        case "jpeg":
                        case "jpg":
                            return '<di style="margin:4px;float:left"><img onclick="mostrarArchivoDigital(' + idPersona + ',' + idRelaboral + ',' + idTipoDocumento + ',' + idPresentacionDoc + ');" width="30px" height="30px" id="' + idPresentacionDoc + '" src="./images/iconJpeg.png?' + numRam + '" alt="Ver archivo JPG." title="Ver archivo JPG."/></div>';
                        case "gif":
                            return '<div style="margin:4px;float:left"><img onclick="mostrarArchivoDigital(' + idPersona + ',' + idRelaboral + ',' + idTipoDocumento + ',' + idPresentacionDoc + ');" width="30px" height="30px" id="' + idPresentacionDoc + '" src="./images/iconGif.png?' + numRam + '" alt="Ver archivo GIF." title="Ver archivo GIF."/></div>';
                            break;
                        case "png":
                            return '<div style="margin:4px;float:left"><img onclick="mostrarArchivoDigital(' + idPersona + ',' + idRelaboral + ',' + idTipoDocumento + ',' + idPresentacionDoc + ');" width="30px" height="30px" id="' + idPresentacionDoc + '" src="./images/iconPng.png?' + numRam + '" alt="Ver archivo PNG." title="Ver archivo PNG."/></div>';
                            break;
                        case "txt":
                            return '<div style="margin:4px;float:left"><img onclick="mostrarArchivoDigital(' + idPersona + ',' + idRelaboral + ',' + idTipoDocumento + ',' + idPresentacionDoc + ');" width="30px" height="30px" id="' + idPresentacionDoc + '" src="./images/iconTxt.png?' + numRam + '" alt="Ver archivo TXT." title="Ver archivo TXT."/></div>';
                            break;
                        default:
                            return '<div style="margin:4px;float:left"><img onclick="mostrarArchivoDigital(' + idPersona + ',' + idRelaboral + ',' + idTipoDocumento + ',' + idPresentacionDoc + ');" width="30px" height="30px" id="' + idPresentacionDoc + '" src="./images/iconImage.png?' + numRam + '" alt="Ver archivo imagen." title="Ver archivo imagen."/></div>';
                    }
                    return "";
                }
                else return "";
            },
            width: 30,
            cellsalign: 'center',
            align: 'center',
            hidden: false
        });
    }
    if (opcion == 2) {
        columns.push(
            {
                text: 'Nombres y Apellidos',
                columntype: 'textbox',
                filtertype: 'input',
                datafield: 'nombres',
                pinned: true,
                width: 215,
                align: 'center',
                hidden: false
            },
            {
                text: 'CI',
                columntype: 'textbox',
                filtertype: 'input',
                datafield: 'ci',
                pinned: true,
                width: 90,
                cellsalign: 'center',
                align: 'center',
                hidden: false
            },
            {
                text: 'Exp',
                filtertype: 'checkedlist',
                datafield: 'expd',
                pinned: true,
                width: 40,
                cellsalign: 'center',
                align: 'center',
                hidden: false
            }
        );
    }
    columns.push(
        {
            text: 'Emisor',
            datafield: 'institucion',
            columngroup: 'DatosPresentacionDoc',
            columntype: 'textbox',
            filtertype: 'input',
            width: 200,
            cellsalign: 'center',
            align: 'center',
            hidden: false
        });
    /**
     * Sector para la especificación de columnas de acuerdo al tipo de fecha de emisión.
     */
    switch (dataRecordTipoDocumento.id_tipofechaemidoc) {
        case 1:/*Particionada: Mes / Gestión */
            columns.push({
                text: 'Gesti&oacute;n',
                datafield: 'gestion_emi',
                columngroup: 'DatosPresentacionDoc',
                columntype: 'textbox',
                filtertype: 'input',
                width: 100,
                cellsalign: 'center',
                align: 'center',
                hidden: false
            });
            columns.push({
                text: 'Mes',
                datafield: 'mes_emi_descripcion',
                columngroup: 'DatosPresentacionDoc',
                columntype: 'textbox',
                filtertype: 'input',
                width: 100,
                cellsalign: 'center',
                align: 'center',
                hidden: false
            });
            break;
        case 2:/*Trimestral: Trimestre / Gestión */
            columns.push({
                text: 'Gesti&oacute;n',
                datafield: 'gestion_emi',
                columngroup: 'DatosPresentacionDoc',
                columntype: 'textbox',
                filtertype: 'input',
                width: 100,
                cellsalign: 'center',
                align: 'center',
                hidden: false
            });
            columns.push({
                text: 'Trimestre',
                datafield: 'trim_emi_descripcion',
                columngroup: 'DatosPresentacionDoc',
                columntype: 'textbox',
                filtertype: 'input',
                width: 100,
                cellsalign: 'center',
                align: 'center',
                hidden: false
            });
            break;
        case 3:/*Conjuncionada: Día/ Mes/ Gestión */
            columns.push({
                text: 'Fecha Emisi&oacute;n',
                datafield: 'fecha_emi',
                columngroup: 'DatosPresentacionDoc',
                filtertype: 'range',
                width: 100,
                cellsalign: 'center',
                cellsformat: 'dd-MM-yyyy',
                align: 'center',
                hidden: false
            });
            break;
        case 4:/*Consjuncionada con hora: Día / Mes / Gestión Hora */
            columns.push({
                text: 'Fecha Emisi&oacute;n',
                datafield: 'fecha_emi',
                columngroup: 'DatosPresentacionDoc',
                filtertype: 'range',
                width: 100,
                cellsalign: 'center',
                cellsformat: 'dd-MM-yyyy',
                align: 'center',
                hidden: false
            });
            break;
        case 5:/*Gestión*/
            columns.push({
                text: 'Gesti&oacute;n',
                datafield: 'gestion_emi',
                columngroup: 'DatosPresentacionDoc',
                columntype: 'textbox',
                filtertype: 'input',
                width: 100,
                cellsalign: 'center',
                align: 'center',
                hidden: false
            });
            break;

    }
    columns.push({
        text: 'Fecha Pres.',
        datafield: 'fecha_pres',
        columngroup: 'DatosPresentacionDoc',
        filtertype: 'range',
        width: 100,
        cellsalign: 'center',
        cellsformat: 'dd-MM-yyyy',
        align: 'center',
        hidden: false
    });

    var datosAdicionales = dataRecordTipoDocumento.columnas_aux;
    if (datosAdicionales != "" && datosAdicionales != null) {

        var res = jQuery.parseJSON(datosAdicionales);
        if (res.length > 0) {
            $.each(res, function (key, val) {
                var nombreColumna = val.nombre;
                nombreColumna = nombreColumna.capitalize();
                /**
                 * Sector del armado de atributos de los campos auxiliares.
                 */
                var sourceColumn = "" + val.id + "";
                datafields.push({name: "" + val.id + "", type: 'string'});
                switch (val.tipo) {
                    case "TEXTO":
                        columns.push({
                            text: nombreColumna,
                            datafield: sourceColumn,
                            columngroup: 'DatosPresentacionDoc',
                            width: 100,
                            columntype: 'textbox',
                            filtertype: 'input',
                            cellsalign: 'center',
                            align: 'center'
                        });
                        break;
                    case "NUMERO":
                        columns.push({
                            text: nombreColumna,
                            datafield: sourceColumn,
                            columngroup: 'DatosPresentacionDoc',
                            width: 100,
                            columntype: 'textbox',
                            filtertype: 'input',
                            cellsalign: 'center',
                            align: 'center'
                        });
                        break;
                    case "FECHA":
                        columns.push({
                            text: nombreColumna,
                            datafield: sourceColumn,
                            columngroup: 'DatosPresentacionDoc',
                            width: 250,
                            filtertype: 'range',
                            width: 100,
                            cellsalign: 'center',
                            cellsformat: 'dd-MM-yyyy',
                            align: 'center'
                        });
                        break;
                    case "SI/NO":
                        columns.push({
                            text: nombreColumna,
                            datafield: sourceColumn,
                            columngroup: 'DatosPresentacionDoc',
                            width: 100,
                            columntype: 'textbox',
                            filtertype: 'input',
                            cellsalign: 'center',
                            align: 'center'
                        });
                        break;
                }
            });
        }
    }

    datafields.push({name: 'presentacionesdoc_observacion', type: 'string'});
    columns.push({
        text: 'Observaci&oacute;n Pres.',
        columntype: 'textbox',
        filtertype: 'input',
        datafield: 'presentacionesdoc_observacion',
        columngroup: 'DatosPresentacionDoc',
        align: 'center',
        width: 250,
        hidden: false
    });
    if (opcion == 2) {
        columns.push(
            {
                text: 'Estado Contrato',
                filtertype: 'checkedlist',
                datafield: 'relaboral_estado_descripcion',
                columngroup: 'DatosRelaborales',
                width: 120,
                cellsalign: 'center',
                align: 'center',
                hidden: false,
                cellclassname: cellclass
            },
            {
                text: 'Ubicaci&oacute;n',
                filtertype: 'checkedlist',
                datafield: 'ubicacion',
                columngroup: 'DatosRelaborales',
                width: 150,
                cellsalign: 'center',
                align: 'center',
                hidden: false
            },
            {
                text: 'Condici&oacute;n',
                filtertype: 'checkedlist',
                datafield: 'condicion',
                columngroup: 'DatosRelaborales',
                width: 150,
                cellsalign: 'center',
                align: 'center',
                hidden: false
            },
            {
                text: 'Gerencia',
                filtertype: 'checkedlist',
                datafield: 'gerencia_administrativa',
                columngroup: 'DatosRelaborales',
                width: 220,
                align: 'center',
                hidden: false
            },
            {
                text: 'Departamento',
                filtertype: 'checkedlist',
                datafield: 'departamento_administrativo',
                columngroup: 'DatosRelaborales',
                width: 220,
                align: 'center',
                hidden: false
            },
            {
                text: '&Aacute;rea',
                filtertype: 'checkedlist',
                datafield: 'area',
                columngroup: 'DatosRelaborales',
                width: 220,
                align: 'center',
                hidden: false
            },
            {
                text: 'Proceso',
                filtertype: 'checkedlist',
                datafield: 'proceso_codigo',
                columngroup: 'DatosRelaborales',
                width: 220,
                cellsalign: 'center',
                align: 'center',
                hidden: false
            },
            {
                text: 'Fuente',
                filtertype: 'checkedlist',
                datafield: 'fin_partida',
                columngroup: 'DatosRelaborales',
                width: 220,
                cellsalign: 'center',
                align: 'center',
                hidden: false
            },
            {
                text: 'Nivel Salarial',
                filtertype: 'checkedlist',
                datafield: 'nivelsalarial',
                columngroup: 'DatosRelaborales',
                width: 220,
                align: 'center',
                hidden: false
            },
            {
                text: 'Cargo',
                columntype: 'textbox',
                filtertype: 'input',
                datafield: 'cargo',
                columngroup: 'DatosRelaborales',
                width: 215,
                align: 'center',
                hidden: false
            },
            {
                text: 'Haber',
                filtertype: 'checkedlist',
                datafield: 'sueldo',
                columngroup: 'DatosRelaborales',
                width: 100,
                cellsalign: 'right',
                align: 'center',
                hidden: false
            },
            {
                text: 'Fecha Ingreso',
                datafield: 'fecha_ing',
                columngroup: 'DatosRelaborales',
                filtertype: 'range',
                width: 100,
                cellsalign: 'center',
                cellsformat: 'dd-MM-yyyy',
                align: 'center',
                hidden: false
            },
            {
                text: 'Fecha Inicio',
                datafield: 'fecha_ini',
                columngroup: 'DatosRelaborales',
                filtertype: 'range',
                width: 100,
                cellsalign: 'center',
                cellsformat: 'dd-MM-yyyy',
                align: 'center',
                hidden: false
            },
            {
                text: 'Fecha Incor.',
                datafield: 'fecha_incor',
                columngroup: 'DatosRelaborales',
                filtertype: 'range',
                width: 100,
                cellsalign: 'center',
                cellsformat: 'dd-MM-yyyy',
                align: 'center',
                hidden: false
            },
            {
                text: 'Fecha Fin',
                datafield: 'fecha_fin',
                columngroup: 'DatosRelaborales',
                filtertype: 'range',
                width: 100,
                cellsalign: 'center',
                cellsformat: 'dd-MM-yyyy',
                align: 'center',
                hidden: false
            },
            {
                text: 'Fecha Baja',
                datafield: 'fecha_baja',
                columngroup: 'DatosRelaborales',
                filtertype: 'range',
                width: 100,
                cellsalign: 'center',
                cellsformat: 'dd-MM-yyyy',
                align: 'center',
                hidden: false
            },
            {text: 'Motivo Baja', datafield: 'motivo_baja', columngroup: 'DatosRelaborales', width: 100, hidden: false},
            {
                text: 'Observaci&oacute;n Contrato',
                datafield: 'relaboral_observacion',
                columngroup: 'DatosRelaborales',
                align: 'center',
                width: 150,
                hidden: false
            }
        );
    }
    var source =
    {
        datatype: "json",
        datafields: datafields,
        url: '/presentacionesdoc/listpres?id_tipodocumento=' + idTipoDocumento + '&id_relaboral=' + idRelaboral + '&id_persona=' + idPersona + "&opcion=" + opcion,
        cache: false
    };
    var dataAdapter = new $.jqx.dataAdapter(source);
    cargarRegistroDePresentacionDeTipoDeDocumento();
    function cargarRegistroDePresentacionDeTipoDeDocumento() {
        var theme = prepareSimulator("grid");
        $("#divGridDocumentosPresentados" + sufijoGrupo).jqxGrid(
            {
                theme: theme,
                width: '100%',
                height: '100%',
                source: dataAdapter,
                sortable: true,
                altRows: true,
                columnsresize: true,
                pageable: true,
                pagerMode: 'advanced',
                showfilterrow: true,
                filterable: true,
                showtoolbar: true,
                autorowheight: true,
                rendertoolbar: function (toolbar) {
                    var me = this;
                    var container = $("<div></div>");
                    toolbar.append(container);
                    if (opcion == 1) {
                        container.append("<button title='Nuevo Registro.' id='addrowbutton" + sufijoGrupo + "' class='btn btn-sm btn-primary' type='button'><i class='fa fa-plus-square fa-2x text-info' title='Nuevo Registro.'/></i></button>");
                    }
                    container.append("<button title='Editar Registro' id='updaterowbutton" + sufijoGrupo + "'  class='btn btn-sm btn-primary' type='button' ><i class='fa fa-pencil-square fa-2x text-primary' title='Modificar registro.'/></button>");
                    container.append("<button title='Baja Registro' id='deleterowbutton" + sufijoGrupo + "' class='btn btn-sm btn-primary' type='button'><i class='fa fa-minus-square fa-2x text-danger' title='Dar de baja al registro.'/></i></button>");
                    /**
                     * Sólo es admisible el uso de botones de carga de imagenes en caso de que se haya configurado el tipo de archivo (Gestión de Tipos de Documentos).
                     */
                    if (formato.trim() != "") {
                        container.append("<button title='Adjuntar Archivo' id='uploadrowbutton" + sufijoGrupo + "'  class='btn btn-sm btn-primary' type='button' ><i class='hi hi-paperclip fa-2x text-info' title='Adjuntar Archivo'></i></button>");
                     }
                    container.append("<button title='Refrescar Grilla' id='refreshrowbutton" + sufijoGrupo + "' class='btn btn-sm btn-primary' type='button'><i class='fa fa-repeat fa-2x text-default' title='Refrescar grilla.'/></i></button>");
                    $("#refreshrowbutton" + sufijoGrupo).jqxButton();
                    if (opcion == 1) {
                        $("#addrowbutton" + sufijoGrupo).jqxButton();
                    }
                    if (formato.trim() != "") {
                        $("#uploadrowbutton" + sufijoGrupo).show();
                        $("#uploadrowbutton" + sufijoGrupo).jqxButton();
                    }
                    else {
                        $("#uploadrowbutton" + sufijoGrupo).hide();
                    }
                    $("#updaterowbutton" + sufijoGrupo).jqxButton();
                    $("#deleterowbutton" + sufijoGrupo).jqxButton();
                    /**
                     * Refrescar la grilla
                     */
                    $("#refreshrowbutton" + sufijoGrupo).off();
                    $("#refreshrowbutton" + sufijoGrupo).on('click', function () {
                        $("#divGridDocumentosPresentados" + sufijoGrupo).jqxGrid('updatebounddata');
                    });
                    /**
                     * Desagrupar
                     */
                    $("#cleargroupsrowbutton" + sufijoGrupo).off();
                    $("#cleargroupsrowbutton" + sufijoGrupo).on('click', function () {
                        $('#divGridDocumentosPresentados' + sufijoGrupo).jqxGrid('cleargroups');
                    });
                    /**
                     * Desfiltrar
                     */
                    $("#clearfiltersrowbutton" + sufijoGrupo).off();
                    $("#clearfiltersrowbutton" + sufijoGrupo).on('click', function () {
                        $("#divGridDocumentosPresentados" + sufijoGrupo).jqxGrid('clearfilters');
                    });
                    $("#hdnIdPresentacionDoc").val(0);

                    /* Refrescar grilla.*/
                    $("#refreshrowbutton" + sufijoGrupo).off();
                    $("#refreshrowbutton" + sufijoGrupo).on('click', function () {
                        $("#divGridDocumentosPresentados" + sufijoGrupo).jqxGrid('updatebounddata');
                    });
                    /* Desfiltrar columnas.*/
                    $("#clearfiltersrowbutton" + sufijoGrupo).off();
                    $("#clearfiltersrowbutton" + sufijoGrupo).on('click', function () {
                        $("#divGridDocumentosPresentados" + sufijoGrupo).jqxGrid('clearfilters');
                    });
                    if (opcion == 1) {
                        /* Registrar nuevo documento sólo aplicable desde el modo individual.*/
                        $("#addrowbutton" + sufijoGrupo).off();
                        $("#addrowbutton" + sufijoGrupo).on('click', function () {
                            $('#popupNuevoEditarPresentacionDoc').modal('show');
                            $("#divTituloModal").html("Nuevo Registro");
                            $("#divNombreDelTipoDeDocumento").html(dataRecordTipoDocumento.tipo_documento);
                            $("#txtObservacion").val("");
                            limpiarModalRegistroEdicion(1);
                            cargarModalRegistroEdicion(1, dataRecordRelaboral, dataRecordTipoDocumento, null);
                            $("#btnGuardarPresentacionDocumento" + sufijoGrupo).off();
                            $("#btnGuardarPresentacionDocumento" + sufijoGrupo).on("click", function () {
                                limpiarModalRegistroEdicion(1);
                                var ok = validarModalRegistroEdicion(1, dataRecordRelaboral, dataRecordTipoDocumento, null);
                                if (ok) {
                                    var ok1 = guardarPresentacionDoc(opcion, 1, dataRecordRelaboral, dataRecordTipoDocumento, null);
                                    if (ok1) {
                                        $('#popupNuevoEditarPresentacionDoc').modal('hide');
                                    }
                                }
                            });
                        });
                    }
                    /* Modificar registro.*/
                    $("#updaterowbutton" + sufijoGrupo).off();
                    $("#updaterowbutton" + sufijoGrupo).on('click', function () {
                        var selectedrowindex = $("#divGridDocumentosPresentados" + sufijoGrupo).jqxGrid('getselectedrowindex');
                        if (selectedrowindex >= 0) {
                            var dataRecordPresentacionDoc = $("#divGridDocumentosPresentados" + sufijoGrupo).jqxGrid('getrowdata', selectedrowindex);
                            if (dataRecordPresentacionDoc != undefined) {
                                $("#divTituloModal").html("Modificaci&oacute;n de Documento");
                                $("#divNombreDelTipoDeDocumento").html(dataRecordTipoDocumento.tipo_documento);
                                $("#txtObservacion").val("");
                                limpiarModalRegistroEdicion(2);
                                cargarModalRegistroEdicion(2, dataRecordRelaboral, dataRecordTipoDocumento, dataRecordPresentacionDoc);
                            } else {
                                var msje = "Debe seleccionar un registro necesariamente.";
                                $("#divMsjePorError").html("");
                                $("#divMsjePorError").append(msje);
                                $("#divMsjeNotificacionError").jqxNotification("open");
                            }
                            $("#btnGuardarPresentacionDocumento").off();
                            $("#btnGuardarPresentacionDocumento").on("click", function () {
                                limpiarModalRegistroEdicion(2);
                                /**
                                 * En caso de que se esté ingresando para registro de modo grupal donde no se ha escogido un contrato en particular
                                 */
                                if (opcion == 2 && dataRecordRelaboral == null) {
                                    dataRecordRelaboral = ({
                                        id_relaboral: dataRecordPresentacionDoc.id_relaboral,
                                        id_persona: dataRecordPresentacionDoc.id_persona
                                    });
                                }
                                var ok = validarModalRegistroEdicion(2, dataRecordRelaboral, dataRecordTipoDocumento, dataRecordPresentacionDoc);
                                if (ok) {
                                    var ok1 = guardarPresentacionDoc(opcion, 2, dataRecordRelaboral, dataRecordTipoDocumento, null);
                                    if (ok1) {
                                        $('#popupNuevoEditarPresentacionDoc').modal('hide');
                                    }
                                }
                            });
                        } else {
                            var msje = "Debe seleccionar un registro necesariamente.";
                            $("#divMsjePorError").html("");
                            $("#divMsjePorError").append(msje);
                            $("#divMsjeNotificacionError").jqxNotification("open");
                        }
                    });
                    /* Dar de baja un registro.*/
                    $("#deleterowbutton" + sufijoGrupo).off();
                    $("#deleterowbutton" + sufijoGrupo).on('click', function () {
                        var selectedrowindex = $("#divGridDocumentosPresentados" + sufijoGrupo).jqxGrid('getselectedrowindex');
                        if (selectedrowindex >= 0) {
                            var dataRecordPresentacionDoc = $("#divGridDocumentosPresentados" + sufijoGrupo).jqxGrid('getrowdata', selectedrowindex);
                            if (dataRecordPresentacionDoc != undefined) {
                                alert(dataRecordPresentacionDoc.presentacionesdoc_estado+":"+dataRecordPresentacionDoc.id_presentaciondoc);
                                if (dataRecordPresentacionDoc.presentacionesdoc_estado >= 1) {
                                    if (confirm("¿Está seguro de dar de baja registro de presentación del documento?"))
                                        darDeBajaPresentacionDoc(dataRecordPresentacionDoc.id_presentaciondoc);
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
                    /*Subir archivo adjunto*/
                    $("#uploadrowbutton" + sufijoGrupo).off();
                    $("#uploadrowbutton" + sufijoGrupo).on('click', function () {
                        var tamanoMaximoArchivo=8388608;
                        if($("#hdnMaxFileSize").val()!=null&&$("#hdnMaxFileSize").val()!=undefined){
                            tamanoMaximoArchivo=parseInt($("#hdnMaxFileSize").val());
                        }
                        var maxFilseSize = $("#hdnMaxFileSize").val();
                        var selectedrowindex = $("#divGridDocumentosPresentados" + sufijoGrupo).jqxGrid('getselectedrowindex');
                        if (selectedrowindex >= 0) {
                            var dataRecordPresentacionDoc = $("#divGridDocumentosPresentados" + sufijoGrupo).jqxGrid('getrowdata', selectedrowindex);
                            if (dataRecordPresentacionDoc != undefined) {
                                if (dataRecordTipoDocumento.formato_archivo_digital != null && dataRecordTipoDocumento.formato_archivo_digital != '') {
                                    var formatoArchivoDigital = dataRecordTipoDocumento.formato_archivo_digital;
                                    formatoArchivoDigital = formatoArchivoDigital.toLowerCase();
                                    $("#h4NombreModalSubirArchivos").text("Carga de archivos en formato " + formatoArchivoDigital);
                                    $("#divModalBody").html("");
                                    $("#divModalBody").html("<input id='fileToUpd' name='files[]' type='file' multiple>");
                                    $("#fileToUpd").fileinput({
                                        language: 'es',
                                        uploadUrl: "presentacionesdoc/setarchivo/",
                                        uploadAsync: true,
                                        browseLabel: 'Seleccione el archivo...',
                                        cache: false,
                                        maxFileCount: 1,
                                        maxFileSize: tamanoMaximoArchivo,
                                        allowedFileExtensions: [formatoArchivoDigital],
                                        uploadExtraData: function () {
                                            return {
                                                id_relaboral: dataRecordPresentacionDoc.id_relaboral,
                                                id_persona: dataRecordPresentacionDoc.id_persona,
                                                id_tipodocumento: dataRecordPresentacionDoc.id_tipodocumento,
                                                id_presentaciondoc: dataRecordPresentacionDoc.id_presentaciondoc
                                            };
                                        }
                                    }).on('fileuploaded', function (event, data, previewId, index) {
                                        var form = data.form, files = data.files, extra = data.extra,
                                            res = data.response, reader = data.reader;
                                        if (res.result == 1) {
                                            $("#popupSubirArchivo").modal("hide");
                                            $("#divMsjePorSuccess").html("");
                                            $("#divMsjePorSuccess").append(res.msj);
                                            $("#divMsjeNotificacionSuccess").jqxNotification("open");
                                            $("#divGridDocumentosPresentados" + sufijoGrupo).jqxGrid("updatebounddata");
                                        } else if (res.result == 0) {
                                            $("#divMsjePorWarning").html("");
                                            $("#divMsjePorWarning").append(res.msj);
                                            $("#divMsjeNotificacionWarning").jqxNotification("open");
                                        } else {
                                            $("#divMsjePorError").html("");
                                            $("#divMsjePorError").append(res.msj);
                                            $("#divMsjeNotificacionError").jqxNotification("open");
                                        }
                                    });
                                    $("#popupSubirArchivo").modal("show");
                                }
                                else {
                                    var msje = "La configuraci&oacute;n del tipo de documento no admite un tipo especifico de archivo a adjuntarse, cont&aacute;ctese con el Administrador.";
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
                    /*Ver archivo adjunto.*/
                    $("#viewrowbutton" + sufijoGrupo).off();
                    $("#viewrowbutton" + sufijoGrupo).on('click', function () {
                        var selectedrowindex = $("#divGridDocumentosPresentados" + sufijoGrupo).jqxGrid('getselectedrowindex');
                        if (selectedrowindex >= 0) {
                            var dataRecordPresentacionDoc = $("#divGridDocumentosPresentados" + sufijoGrupo).jqxGrid('getrowdata', selectedrowindex);
                            if (dataRecordPresentacionDoc != undefined) {
                                var ok = obtieneArchivoParaMostrar(dataRecordRelaboral.id_relaboral, dataRecordRelaboral.id_persona, dataRecordTipoDocumento.id_tipodocumento, dataRecordPresentacionDoc.id_presentaciondoc);
                                if (ok) {
                                    $("#popupMostrarArchivo").modal("show");
                                    $("#btnEliminarArchivo").off();
                                    $("#btnEliminarArchivo").on("click", function () {
                                        if (confirm("¿Esta segur@ de que desea eliminar el archivo digital?")) {
                                            var okDel = eliminaArchivo(opcion, dataRecordRelaboral.id_relaboral, dataRecordRelaboral.id_persona, dataRecordTipoDocumento.id_tipodocumento, dataRecordPresentacionDoc.id_presentaciondoc);
                                            if (okDel) {
                                                $("#popupMostrarArchivo").modal("hide");
                                            }
                                        }
                                    });
                                } else {
                                    var msje = "No se hall&oacute; ning&uacute;n documento digital para el registro.";
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
                }

                ,
                columns: columns,
                columngroups: [
                    {text: 'Datos Personales', align: 'center', name: 'DatosPersonales'},
                    {text: 'Datos Presentaci&oacute;n', align: 'center', name: 'DatosPresentacionDoc'},
                    {text: 'Datos Contrato', align: 'center', name: 'DatosRelaborales'}
                ]
            }
        );
        $("#divGridDocumentosPresentados" + sufijoGrupo).off();
        $("#divGridDocumentosPresentados" + sufijoGrupo).on('bindingcomplete', function () {
            if (opcion == 2) {
                $("#btnVolverDesdeReport").focus();
            } else $("#btnVolverDesdeFolder").focus();
        });
    }
}
/**
 * Función para la obtención del listado de grupos de tipos de documentos.
 */
function obtenerNombresDeGruposDeTiposDeDocumentos() {
    $.ajax({
        url: '/presentacionesdoc/grupoarchivos/',
        type: 'POST',
        datatype: 'json',
        async: false,
        success: function (data) {  //alert(data);
            var res = jQuery.parseJSON(data);
            if (res.length > 0) {
                var contador = 1;
                $.each(res, function (key, val) {
                    $("#liGrupo" + contador).html(val.grupo_html);
                    $("#liGrupo" + contador).attr("data-id_grupo", val.id);
                    contador++;
                });
            }
        }, //mostramos el error
        error: function () {
            alert('Se ha producido un error Inesperado');
        }
    });
}
/**
 * Función para obtener el nombre de un archivo de acuerdo a la configuración predispuesta.
 * @param idRelaboral
 * @param idPersona
 * @param idTipodocumento
 * @param idPresentaciondoc
 */
function obtieneArchivoParaMostrar(idRelaboral, idPersona, idTipodocumento, idPresentaciondoc) {
    $("#divMostrarArchivo").html("");
    var ok = false;
    $.ajax({
        url: '/presentacionesdoc/getarchivo/',
        type: 'POST',
        cache: false,
        datatype: 'json',
        async: false,
        data: {
            id_relaboral: idRelaboral,
            id_persona: idPersona,
            id_tipodocumento: idTipodocumento,
            id_presentaciondoc: idPresentaciondoc
        },
        success: function (data) {
            var res = jQuery.parseJSON(data);
            if (res.result == 1) {
                $("#divMostrarArchivo").html("");
                $("#divMostrarArchivo").html(res.html);
                ok = true;
            }
        }
        , //mostramos el error
        error: function () {
            alert('Se ha producido un error Inesperado');
        }
    });
    return ok;
}
/**
 * Función para la eliminación de un archivo digital en particular.
 * @param idRelaboral
 * @param idPersona
 * @param idTipodocumento
 * @param idPresentaciondoc
 * @returns {boolean}
 */
function eliminaArchivo(opcion, idRelaboral, idPersona, idTipodocumento, idPresentaciondoc) {
    var sufijo = "";
    if (opcion == 2) {
        sufijo = "Rep";
    }
    $("divMostrarArchivo").html("");
    var ok = false;
    $.ajax({
        url: '/presentacionesdoc/delarchivo/',
        type: 'POST',
        datatype: 'json',
        async: false,
        data: {
            id_relaboral: idRelaboral,
            id_persona: idPersona,
            id_tipodocumento: idTipodocumento,
            id_presentaciondoc: idPresentaciondoc
        },
        success: function (data) {
            var res = jQuery.parseJSON(data);
            if (res.result == 1) {
                ok = true;
                $("#divMsjePorSuccess").html("");
                $("#divMsjePorSuccess").append(res.msj);
                $("#divMsjeNotificacionSuccess").jqxNotification("open");
                $("#divGridDocumentosPresentados" + sufijo).jqxGrid("updatebounddata");
            } else {
                $("#divMsjePorError").html("");
                $("#divMsjePorError").append(res.msj);
                $("#divMsjeNotificacionError").jqxNotification("open");
            }
        }
        , //mostramos el error
        error: function () {
            alert('Se ha producido un error Inesperado');
        }
    });
    return ok;
}
/**
 * Función para mostrar un archivo digital.
 * @param idPersona
 * @param idRelaboral
 * @param idTipoDocumento
 * @param idPresentacionDoc
 */
function mostrarArchivoDigital(idPersona, idRelaboral, idTipoDocumento, idPresentacionDoc) {
    if (idPersona > 0 && idRelaboral > 0 && idTipoDocumento > 0 && idPresentacionDoc > 0) {
        var ok = obtieneArchivoParaMostrar(idRelaboral, idPersona, idTipoDocumento, idPresentacionDoc);
        if (ok) {
            $("#popupMostrarArchivo").modal("show");
            $("#btnEliminarArchivo").off();
            $("#btnEliminarArchivo").on("click", function () {
                if (confirm("¿Esta segur@ de que desea eliminar el archivo digital?")) {
                    var okDel = eliminaArchivo(0, idRelaboral, idPersona, idTipoDocumento, idPresentacionDoc);
                    if (okDel) {
                        $("#popupMostrarArchivo").modal("hide");
                    }
                }
            });
        } else {
            var msje = "No se hall&oacute; ning&uacute;n documento digital para el registro.";
            $("#divMsjePorError").html("");
            $("#divMsjePorError").append(msje);
            $("#divMsjeNotificacionError").jqxNotification("open");
        }
    }
}
