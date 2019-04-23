function definirGrillaParaListaFeriados(){var i=new $.jqx.dataAdapter({datatype:"json",datafields:[{name:"nro_row",type:"integer"},{name:"id",type:"integer"},{name:"feriado",type:"string"},{name:"descripcion",type:"string"},{name:"regional_id",type:"integer"},{name:"regional",type:"string"},{name:"horario_discontinuo",type:"integer"},{name:"horario_discontinuo_descripcion",type:"string"},{name:"horario_continuo",type:"integer"},{name:"horario_continuo_descripcion",type:"string"},{name:"horario_multiple",type:"integer"},{name:"horario_multiple_descripcion",type:"string"},{name:"cantidad_dias",type:"integer"},{name:"repetitivo",type:"integer"},{name:"repetitivo_descripcion",type:"string"},{name:"dia",type:"integer"},{name:"mes",type:"integer"},{name:"mes_nombre",type:"string"},{name:"gestion",type:"integer"},{name:"observacion",type:"string"},{name:"estado",type:"integer"},{name:"estado_descripcion",type:"string"}],url:"/feriados/list",cache:!1});!function(){var e=prepareSimulator("grid");$("#divGridFeriados").jqxGrid({theme:e,width:"100%",height:"500px",source:i,sortable:!0,altRows:!0,groupable:!0,columnsresize:!0,pageable:!0,pagerMode:"advanced",showfilterrow:!0,filterable:!0,showtoolbar:!0,autorowheight:!0,enablebrowserselection:!0,rendertoolbar:function(e){var i=$("<div></div>");e.append(i),i.append("<button id='addrowbutton' class='btn btn-sm btn-primary' type='button'><i class='fa fa-plus-square fa-2x text-primary' title='Nuevo Registro.'/></i></button>"),i.append("<button id='approverowbutton'  class='btn btn-sm btn-primary' type='button' ><i class='fa fa-check-square fa-2x text-info' title='Aprobar registro'></i></button>"),i.append("<button id='updaterowbutton'  class='btn btn-sm btn-primary' type='button' ><i class='fa fa-pencil-square fa-2x text-success' title='Modificar registro.'/></button>"),i.append("<button id='deleterowbutton' class='btn btn-sm btn-primary' type='button'><i class='fa fa-minus-square fa-2x text-danger' title='Dar de baja al registro.'/></i></button>"),i.append("<button id='calendarrowbutton' class='btn btn-sm btn-primary' type='button'><i class='gi gi-calendar fa-2x text-purple' title='Vista Historial.'/></i></button>"),i.append("<button title='Refrescar Grilla' id='refreshbutton' class='btn btn-sm btn-primary' type='button'><i class='fa fa-repeat fa-2x text-default' title='Refrescar grilla.'/></i></button>"),i.append("<button title='Desagrupar.' id='cleargroupsrowbutton' class='btn btn-sm btn-primary' type='button'><i class='fa fa-chain-broken fa-2x text-default' title='Desagrupar.'/></i></button>"),i.append("<button title='Desfiltrar.' id='clearfiltersrowbutton' class='btn btn-sm btn-primary' type='button'><i class='gi gi-sorting fa-2x text-default' title='Desfiltrar.'/></i></button>"),$("#addrowbutton").jqxButton(),$("#approverowbutton").jqxButton(),$("#updaterowbutton").jqxButton(),$("#deleterowbutton").jqxButton(),$("#calendarrowbutton").jqxButton(),$("#refreshbutton").jqxButton(),$("#cleargroupsrowbutton").jqxButton(),$("#clearfiltersrowbutton").jqxButton(),$("#refreshbutton").off(),$("#refreshbutton").on("click",function(){$("#divGridFeriados").jqxGrid("updatebounddata")}),$("#cleargroupsrowbutton").off(),$("#cleargroupsrowbutton").on("click",function(){$("#divGridFeriados").jqxGrid("cleargroups")}),$("#clearfiltersrowbutton").off(),$("#clearfiltersrowbutton").on("click",function(){$("#divGridFeriados").jqxGrid("clearfilters")}),$("#addrowbutton").off(),$("#addrowbutton").on("click",function(){$("#divTabFeriados").jqxTabs("enableAt",1),$("#divTabFeriados").jqxTabs("disableAt",2),$("#divTabFeriados").jqxTabs("disableAt",3),$("#divTabFeriados").jqxTabs({selectedItem:1}),inicializaFormularioNuevoEditar(1,0),listarCantidadDias(1,0),listaMesesEnCadaGestion(1,0),$("#lstMesNew").off(),$("#lstMesNew").on("change",function(){listaDiasEnCadaMes(1,$(this).val(),0)}),inicializarCamposParaNuevoRegistroFeriado(1),limpiarMensajesErrorPorValidacionFeriado("New"),$("#txtFechaEspecificaNew").datepicker("hide"),$("#txtFeriadoNew").focus()}),$("#approverowbutton").off(),$("#approverowbutton").on("click",function(){var e=$("#divGridFeriados").jqxGrid("getselectedrowindex");if(0<=e){var i=$("#divGridFeriados").jqxGrid("getrowdata",e);if(null!=i)if(2==i.estado)confirm("¿Esta seguro de aprobar este registro de feriado?")&&aprobarRegistroFeriado(i.id);else{var a="Debe seleccionar un registro con estado EN PROCESO para posibilitar la aprobaci&oacute;n del registro";$("#divMsjePorError").html(""),$("#divMsjePorError").append(a),$("#divMsjeNotificacionError").jqxNotification("open")}}else{var a="Debe seleccionar un registro necesariamente.";$("#divMsjePorError").html(""),$("#divMsjePorError").append(a),$("#divMsjeNotificacionError").jqxNotification("open")}}),$("#updaterowbutton").off(),$("#updaterowbutton").on("click",function(){var e=$("#divGridFeriados").jqxGrid("getselectedrowindex");if(0<=e){var i=$("#divGridFeriados").jqxGrid("getrowdata",e);if(null!=i)if($("#hdnIdFeriadoEditar").val(i.id),1<=i.estado){if($("#divTabFeriados").jqxTabs("enableAt",0),$("#divTabFeriados").jqxTabs("disableAt",1),$("#divTabFeriados").jqxTabs("enableAt",2),$("#divTabFeriados").jqxTabs("disableAt",3),$("#divTabFeriados").jqxTabs({selectedItem:2}),limpiarMensajesErrorPorValidacionFeriado("Editar"),inicializarCamposParaNuevoRegistroFeriado(2),inicializaFormularioNuevoEditar(2,i.repetitivo),$("#txtFeriadoEditar").val(i.feriado),$("#txtDescripcionEditar").val(i.descripcion),$("#hdnIdFeriadoEditar").val(i.id),1==i.horario_discontinuo?$("#chkHorariosDiscontinuosEditar").bootstrapSwitch("state",!0):$("#chkHorariosDiscontinuosEditar").bootstrapSwitch("state",!1),1==i.horario_continuo?$("#chkHorariosContinuosEditar").bootstrapSwitch("state",!0):$("#chkHorariosContinuosEditar").bootstrapSwitch("state",!1),1==i.horario_multiple?$("#chkHorariosMultiplesEditar").bootstrapSwitch("state",!0):$("#chkHorariosMultiplesEditar").bootstrapSwitch("state",!1),listarCantidadDias(2,i.cantidad_dias),$("#txtFechaEspecificaEditar").datepicker("hide"),1==i.repetitivo)listaMesesEnCadaGestion(2,i.mes),listaDiasEnCadaMes(2,i.mes,i.dia);else{listaMesesEnCadaGestion(2,0),listaDiasEnCadaMes(2,0,0);var a=i.dia+"",t=i.mes+"",o=i.gestion+"";1==a.length&&(a="0"+a),1==t.length&&(t="0"+t);var r=a+"-"+t+"-"+o;$("#txtFechaEspecificaEditar").datepicker("update",r)}$("#lstMesEditar").off(),$("#lstMesEditar").on("change",function(){listaDiasEnCadaMes(2,$(this).val(),i.dia)}),$("#txtFeriadoEditar").focus()}else{var n="Debe seleccionar un registro en estado EN PROCESO o ACTIVO necesariamente.";$("#divMsjePorError").html(""),$("#divMsjePorError").append(n),$("#divMsjeNotificacionError").jqxNotification("open")}}else{var n="Debe seleccionar un registro necesariamente.";$("#divMsjePorError").html(""),$("#divMsjePorError").append(n),$("#divMsjeNotificacionError").jqxNotification("open")}}),$("#deleterowbutton").off(),$("#deleterowbutton").on("click",function(){var e=$("#divGridFeriados").jqxGrid("getselectedrowindex");if(0<=e){var i=$("#divGridFeriados").jqxGrid("getrowdata",e);if(null!=i)if(1<=i.estado)confirm("Esta seguro de dar de baja registro de feriado?")&&darDeBajaFeriado(i.id);else{var a="Para dar de baja un registro, este debe estar en estado ACTIVO o EN PROCESO inicialmente.";$("#divMsjePorError").html(""),$("#divMsjePorError").append(a),$("#divMsjeNotificacionError").jqxNotification("open")}}else{var a="Debe seleccionar un registro necesariamente.";$("#divMsjePorError").html(""),$("#divMsjePorError").append(a),$("#divMsjeNotificacionError").jqxNotification("open")}}),$("#calendarrowbutton").off(),$("#calendarrowbutton").on("click",function(){var e=new Date,i=e.getDate(),a=e.getMonth(),t=e.getFullYear();$("#calendar").html("");$("#divTabFeriados").jqxTabs("enableAt",0),$("#divTabFeriados").jqxTabs("disableAt",1),$("#divTabFeriados").jqxTabs("disableAt",2),$("#divTabFeriados").jqxTabs("enableAt",3),$("#divTabFeriados").jqxTabs({selectedItem:3}),iniciarCalendarioLaboralConFeriados([],t,a,i)})},columns:[{text:"Nro.",filterable:!1,columntype:"number",width:40,cellsalign:"center",align:"center",cellsrenderer:rownumberrenderer},{text:"Estado",filtertype:"checkedlist",datafield:"estado_descripcion",filteritems:["ACTIVO","EN PROCESO"],width:90,cellsalign:"center",align:"center",hidden:!1,cellclassname:cellclass},{text:"Feriado",columntype:"textbox",filtertype:"input",datafield:"feriado",width:150,align:"center",cellsalign:"center",hidden:!1},{text:"Discontinuos",filtertype:"checkedlist",datafield:"horario_discontinuo_descripcion",width:90,columngroup:"TiposHorarios",align:"center",cellsalign:"center",hidden:!1},{text:"Continuos",filtertype:"checkedlist",datafield:"horario_continuo_descripcion",width:80,columngroup:"TiposHorarios",align:"center",cellsalign:"center",hidden:!1},{text:"Multiples",filtertype:"checkedlist",datafield:"horario_multiple_descripcion",width:80,columngroup:"TiposHorarios",align:"center",cellsalign:"center",hidden:!1},{text:"# D&iacute;as",filtertype:"checkedlist",datafield:"cantidad_dias",width:50,align:"center",cellsalign:"center",hidden:!1},{text:"Repetitivo",filtertype:"checkedlist",datafield:"repetitivo_descripcion",width:150,align:"center",cellsalign:"center",hidden:!1},{text:"D&iacute;a",filtertype:"checkedlist",datafield:"dia",width:50,columngroup:"Temporalidad",cellsalign:"center",align:"center",hidden:!1},{text:"Mes",filtertype:"checkedlist",datafield:"mes_nombre",width:100,columngroup:"Temporalidad",cellsalign:"center",align:"center",hidden:!1},{text:"A&ntilde;o",filtertype:"checkedlist",datafield:"gestion",width:50,columngroup:"Temporalidad",cellsalign:"center",align:"center",hidden:!1},{text:"Observaci&oacute;n",columntype:"textbox",filtertype:"input",datafield:"observacion",width:150,align:"center",hidden:!1}],columngroups:[{text:"Tipos de Horario",align:"center",name:"TiposHorarios"},{text:"Temporalidad",align:"center",name:"Temporalidad"}]});$("#jqxlistbox").jqxListBox({source:[{label:"Estado",value:"estado_descripcion",checked:!0},{label:"Feriado",value:"feriado",checked:!0},{label:"H. Discontinuos",value:"horario_discontinuo_descripcion",checked:!0},{label:"H. Continuos",value:"horario_continuo_descripcion",checked:!0},{label:"H. Multiples",value:"horario_multiple_descripcion",checked:!0},{label:"Cantidad D&iacute;as",value:"cantidad_dias",checked:!0},{label:"Repetitivo",value:"repetitivo_descripcion",checked:!0},{label:"Observaci&oacute;n",value:"observacion",checked:!0}],width:"100%",height:430,checkboxes:!0}),$("#jqxlistbox").on("checkChange",function(e){$("#divGridFeriados").jqxGrid("beginupdate"),e.args.checked?$("#divGridFeriados").jqxGrid("showcolumn",e.args.value):$("#divGridFeriados").jqxGrid("hidecolumn",e.args.value),$("#divGridFeriados").jqxGrid("endupdate")})}()}$().ready(function(){$("#divTabFeriados").jqxTabs("theme","oasis"),$("#divTabFeriados").jqxTabs("enableAt",0),$("#divTabFeriados").jqxTabs("disableAt",1),$("#divTabFeriados").jqxTabs("disableAt",2),$("#divTabFeriados").jqxTabs("disableAt",3),definirGrillaParaListaFeriados(),$("#btnGuardarFeriadoNew").off(),$("#btnGuardarFeriadoNew").on("click",function(){validaFormularioFeriado(1)&&(guardaFeriado(1)&&($("#divTabFeriados").jqxTabs("enableAt",0),$("#divTabFeriados").jqxTabs("disableAt",1),$("#divTabFeriados").jqxTabs("disableAt",2),$("#divTabFeriados").jqxTabs("disableAt",3),$("#msjs-alert").hide()))}),$("#btnGuardarFeriadoEditar").off(),$("#btnGuardarFeriadoEditar").on("click",function(){validaFormularioFeriado(2)&&(guardaFeriado(2)&&($("#divTabFeriados").jqxTabs("enableAt",0),$("#divTabFeriados").jqxTabs("disableAt",1),$("#divTabFeriados").jqxTabs("disableAt",2),$("#divTabFeriados").jqxTabs("disableAt",3),$("#msjs-alert").hide()))}),$("#btnCancelarFeriadoEditar,#btnCancelarFeriadoNew").click(function(){$("#divTabFeriados").jqxTabs("enableAt",0),$("#divTabFeriados").jqxTabs("disableAt",1),$("#divTabFeriados").jqxTabs("disableAt",2),$("#divTabFeriados").jqxTabs("disableAt",3),$("#msjs-alert").hide()}),$("#btnExportarExcel").click(function(){var e=$("#jqxlistbox").jqxListBox("getCheckedItems"),a=0;$.each(e,function(e,i){a++}),0<a?exportarReporte(1):(alert("Debe seleccionar al menos una columna para la obtención del reporte solicitado."),$("#jqxlistbox").focus())}),$("#btnExportarPDF").click(function(){var e=$("#jqxlistbox").jqxListBox("getCheckedItems"),a=0;$.each(e,function(e,i){a++}),0<a?exportarReporte(2):(alert("Debe seleccionar al menos una columna para la obtención del reporte solicitado."),$("#jqxlistbox").focus())}),$("#btnImprimirCalendario").on("click",function(){$("#page-content").printArea({mode:"popup",popClose:!1})}),$("#chkAllCols").click(function(){1==this.checked?$("#jqxlistbox").jqxListBox("checkAll"):$("#jqxlistbox").jqxListBox("uncheckAll")}),$("#liList").click(function(){$("#btnCancelarFeriadoNuevo").click(),$("#btnCancelarFeriadoEditar").click()}),$(".numeral").keyup(function(e){""!=$(this).val()&&$(this).val($(this).val().replace(/[^0-9]/g,""))}),$(".literal").keyup(function(e){""!=$(this).val()&&$(this).val($(this).val().replace(/[^A-Z,a-z,ñ,Ñ, ]/g,""))}),$("#divMsjeNotificacionError").jqxNotification({width:"100%",position:"bottom-right",opacity:.9,autoOpen:!1,animationOpenDelay:800,autoClose:!0,autoCloseDelay:7e3,template:"error"}),$("#divMsjeNotificacionWarning").jqxNotification({width:"100%",position:"bottom-right",opacity:.9,autoOpen:!1,animationOpenDelay:800,autoClose:!0,autoCloseDelay:7e3,template:"warning"}),$("#divMsjeNotificacionSuccess").jqxNotification({width:"100%",position:"bottom-right",opacity:.9,autoOpen:!1,animationOpenDelay:800,autoClose:!0,autoCloseDelay:7e3,template:"success"}),$(document).keypress(OperaEvento),$(document).keyup(OperaEvento)});var rownumberrenderer=function(e,i,a,t,o,r){return"<div align='center'>"+(e+1)+"</div>"};function OperaEvento(e){"keyup"!=e.type&&"keydown"!=e.type||"27"!=e.which||($("#divTabFeriados").jqxTabs("enableAt",0),$("#divTabFeriados").jqxTabs("disableAt",1),$("#divTabFeriados").jqxTabs("disableAt",2),$("#divTabFeriados").jqxTabs("disableAt",3),$("#divTabFeriados").jqxTabs({selectedItem:0}))}var cellclass=function(e,i,a){return"ACTIVO"==a?"verde":"EN PROCESO"==a?"amarillo":"PASIVO"==a?"rojo":""};function inicializaFormularioNuevoEditar(e,i){var a="New";2==e&&(a="Editar"),$("#chkHorariosDiscontinuos"+a).bootstrapSwitch(),$("#chkHorariosContinuos"+a).bootstrapSwitch(),$("#chkHorariosMultiples"+a).bootstrapSwitch(),$("#chkRepetitivo"+a).bootstrapSwitch("destroy"),$("#chkRepetitivo"+a).off(),$("#chkRepetitivo"+a).bootstrapSwitch(),$("#txtDia"+a).val(""),$("#txtMes"+a).val(""),$("#txtFechaEspecifica"+a).val("").datepicker("update"),0==i?($("#chkRepetitivo"+a).bootstrapSwitch("state",!1),$("#divDia"+a).hide(),$("#divMes"+a).hide(),$("#divFecha"+a).show(),$("#divFechaEspecifica"+a).show(),$("#txtFechaEspecifica"+a).focus()):($("#chkRepetitivo"+a).bootstrapSwitch("state",!0),$("#divDia"+a).show(),$("#divMes"+a).show(),$("#divFecha"+a).hide(),$("#divFechaEspecifica"+a).hide(),$("#txtDia"+a).focus()),$("#chkRepetitivo"+a).on("switchChange.bootstrapSwitch",function(e,i){i?($("#divDia"+a).show(),$("#divMes"+a).show(),$("#divFechaEspecifica"+a).hide(),$("#txtFechaEspecifica"+a).focusout(),$("#txtDia"+a).focus()):($("#divDia"+a).hide(),$("#divMes"+a).hide(),$("#divFechaEspecifica"+a).show(),$("#txtDia"+a).focusout(),$("#txtFechaEspecifica"+a).focus())})}function listarCantidadDias(e,a){var t="New";2==e&&(t="Editar");var o="";if($("#lstCantidadDias"+t).html(""),$("#lstCantidadDias"+t).append("<option value='0'>Cantidad de D&iacute;as...</option>"),0<=a)for(i=1;i<=10;i++)o=i==a?"selected":"",$("#lstCantidadDias"+t).append("<option value='"+i+"' "+o+">"+i+" D&iacute;a (s)</option>")}function listaMesesEnCadaGestion(e,t){var o="New";2==e&&(o="Editar");var r="";$("#lstMes"+o).html(""),$("#lstMes"+o).append("<option value='0'>Mes en cada a&ntilde;o</option>"),0<=t&&$.each(["ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"],function(e,i){var a=e+1;r=a==t?"selected":"",$("#lstMes"+o).append("<option value='"+a+"' "+r+">"+i+"</option>")})}function listaDiasEnCadaMes(e,a,t){var o="New";2==e&&(o="Editar");var r="",n="";if(0<a&&(n="de "+["ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"][a-1]),$("#lstDia"+o).html(""),$("#lstDia"+o).append("<option value='0'>D&iacute;as en el mes "+n+"</option>"),$("#lstDia"+o).prop("disabled",!0),0<a&&0<=t){$("#lstDia"+o).prop("disabled",!1);var s=[31,28,31,30,31,30,31,31,30,31,30,31][a-1];for(i=1;i<=s;i++)r=i==t?"selected":"",$("#lstDia"+o).append("<option value='"+i+"' "+r+">"+i+"</option>")}}