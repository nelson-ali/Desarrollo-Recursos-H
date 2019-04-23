function cargarGrillaAsignacionesIndividuales(a,i){var f=a.id,h=a.perfil_laboral,b=a.grupo,m=a.tipo_horario,v=a.tipo_horario_descripcion,e={datatype:"json",datafields:[{name:"nro_row",type:"integer"},{name:"fecha_nac",type:"string"},{name:"edad",type:"integer"},{name:"lugar_nac",type:"integer"},{name:"genero",type:"integer"},{name:"e_civil",type:"integer"},{name:"id_relaboral",type:"integer"},{name:"id_persona",type:"integer"},{name:"tiene_contrato_vigente",type:"integer"},{name:"id_fin_partida",type:"integer"},{name:"finpartida",type:"integer"},{name:"id_ubicacion",type:"string"},{name:"ubicacion",type:"string"},{name:"id_condicion",type:"integer"},{name:"condicion",type:"string"},{name:"tiene_item",type:"integer"},{name:"id_cargo",type:"integer"},{name:"cargo_codigo",type:"string"},{name:"cargo_resolucion_ministerial_id",type:"integer"},{name:"cargo_resolucion_ministerial",type:"string"},{name:"estado",type:"integer"},{name:"estado_descripcion",type:"string"},{name:"nombres",type:"string"},{name:"ci",type:"string"},{name:"expd",type:"string"},{name:"num_complemento",type:"string"},{name:"id_organigrama",type:"integer"},{name:"gerencia_administrativa",type:"string"},{name:"departamento_administrativo",type:"string"},{name:"id_area",type:"integer"},{name:"area",type:"string"},{name:"id_ubicacion",type:"integer"},{name:"num_contrato",type:"string"},{name:"fin_partida",type:"string"},{name:"id_procesocontratacion",type:"integer"},{name:"proceso_codigo",type:"string"},{name:"nivelsalarial",type:"string"},{name:"nivelsalarial_resolucion",type:"string"},{name:"cargo",type:"string"},{name:"sueldo",type:"numeric"},{name:"fecha_ini",type:"date"},{name:"fecha_incor",type:"date"},{name:"fecha_fin",type:"date"},{name:"fecha_baja",type:"date"},{name:"motivo_baja",type:"string"},{name:"observacion",type:"string"},{name:"relaboralperfil_id",type:"integer"},{name:"asignacion_estado",type:"string"},{name:"relaboralperfil_ubicacion_id",type:"integer"},{name:"relaboralperfil_ubicacion",type:"string"},{name:"relaboralperfil_estacion_id",type:"integer"},{name:"relaboralperfil_estacion",type:"string"},{name:"relaboralperfil_fecha_ini",type:"date"},{name:"relaboralperfil_fecha_fin",type:"date"},{name:"relaboralperfil_observacion",type:"string"},{name:"relaboralperfil_estado",type:"integer"},{name:"relaboralperfil_estado_descripcion",type:"string"},{name:"relaboralperfilmaquina_maquina_entrada_id",type:"integer"},{name:"relaboralperfilmaquina_tipo_marcacion_entrada",type:"integer"},{name:"relaboralperfilmaquina_ubicacion_entrada_id",type:"integer"},{name:"relaboralperfilmaquina_ubicacion_entrada",type:"string"},{name:"relaboralperfilmaquina_estacion_entrada_id",type:"integer"},{name:"relaboralperfilmaquina_estacion_entrada",type:"string"},{name:"relaboralperfilmaquina_maquina_salida_id",type:"integer"},{name:"relaboralperfilmaquina_tipo_marcacion_salida",type:"integer"},{name:"relaboralperfilmaquina_ubicacion_salida_id",type:"integer"},{name:"relaboralperfilmaquina_ubicacion_salida",type:"string"},{name:"relaboralperfilmaquina_estacion_salida_id",type:"integer"},{name:"relaboralperfilmaquina_estacion_salida",type:"string"}],url:"/relaboralesperfiles/listsingle?id="+f+"&gestion="+i,cache:!1,root:"Rows",beforeprocessing:function(a){e.totalrecords=a[0].TotalRows},filter:function(){$("#divGrillaAsignacionesIndividuales").jqxGrid("updatebounddata","filter")},sort:function(){$("#divGrillaAsignacionesIndividuales").jqxGrid("updatebounddata","sort")}},n=new $.jqx.dataAdapter(e);!function(){var a=new Array;a=["CONTRATO A PLAZO FIJO","CONTRATO INDEFINIDO","CONSULTOR","DESIGNACION","LIBRE NOMBRADO"],(i<2016||0==i)&&(a.push("PERMANENTE"),a.push("EVENTUAL"));var e=prepareSimulator("grid");$("#divGrillaAsignacionesIndividuales").jqxGrid({theme:e,width:"100%",height:"660px",source:n,sortable:!0,altRows:!0,groupable:!0,columnsresize:!0,pageable:!0,pagerMode:"advanced",pagesize:10,virtualmode:!0,rendergridrows:function(a){return a.data},showfilterrow:!0,filterable:!0,showtoolbar:!0,autorowheight:!0,enablebrowserselection:!0,rendertoolbar:function(a){var e=$("<div></div>");a.append(e),e.append("<button id='addrowbutton' class='btn btn-sm btn-primary' type='button'><i class='fa fa-plus-square fa-2x text-primary' title='Nuevo Registro.'/></i></button>"),e.append("<button id='updaterowbutton'  class='btn btn-sm btn-primary' type='button' ><i class='fa fa-pencil-square fa-2x text-success' title='Modificar registro.'/></button>"),e.append("<button id='deleterowbutton' class='btn btn-sm btn-primary' type='button'><i class='fa fa-minus-square fa-2x text-danger' title='Dar de baja al registro.'/></i></button>"),e.append("<button id='viewrowbutton' class='btn btn-sm btn-primary' type='button'><i class='gi gi-calendar fa-2x text-purple' title='Vista Historial.'/></i></button>"),e.append("<button title='Refrescar Grilla' id='refreshsinglerowbutton' class='btn btn-sm btn-primary' type='button'><i class='fa fa-repeat fa-2x text-default' title='Refrescar grilla.'/></i></button>"),e.append("<button title='Desagrupar.' id='cleargroupssinglerowbutton' class='btn btn-sm btn-primary' type='button'><i class='fa fa-chain-broken fa-2x text-default' title='Desagrupar.'/></i></button>"),e.append("<button title='Desfiltrar.' id='clearfilterssinglerowbutton' class='btn btn-sm btn-primary' type='button'><i class='gi gi-sorting fa-2x text-default' title='Desfiltrar.'/></i></button>"),$("#addrowbutton").jqxButton(),$("#updaterowbutton").jqxButton(),$("#deleterowbutton").jqxButton(),$("#viewrowbutton").jqxButton(),$("#refreshsinglerowbutton").jqxButton(),$("#cleargroupssinglerowbutton").jqxButton(),$("#clearfilterssinglerowbutton").jqxButton(),$("#hdnAccionAsignacionSinglePerfil").val(0),$("#hdnIdRelaboralAsignacionSinglePerfil").val(0),$("#hdnIdPerfilLaboralAsignacionSinglePerfil").val(0),$("#hdnIdRelaboralPerfilAsignacionSinglePerfil").val(0),$("#spanSufijoCalendarioLaboral").html(""),$("#refreshsinglerowbutton").off(),$("#refreshsinglerowbutton").on("click",function(){$("#divGrillaAsignacionesIndividuales").jqxGrid("updatebounddata")}),$("#cleargroupssinglerowbutton").off(),$("#cleargroupssinglerowbutton").on("click",function(){$("#divGrillaAsignacionesIndividuales").jqxGrid("cleargroups")}),$("#clearfilterssinglerowbutton").off(),$("#clearfilterssinglerowbutton").on("click",function(){$("#divGrillaAsignacionesIndividuales").jqxGrid("clearfilters")}),$("#addrowbutton").off(),$("#addrowbutton").on("click",function(){var a=$("#divGrillaAsignacionesIndividuales").jqxGrid("getselectedrowindex");if(0<=a){var e=$("#divGrillaAsignacionesIndividuales").jqxGrid("getrowdata",a);if(null!=e)if(0<=e.estado){$("#hdnAccionAsignacionSinglePerfil").val(1),$("#spanPrefijoFormularioAsignacionSingle").html("Nueva ");var i=fechaConvertirAFormato(e.fecha_ini,"-");null!=e.fecha_incor&&(i=fechaConvertirAFormato(e.fecha_incor,"-"));var n=fechaConvertirAFormato(e.fecha_fin,"-");null!=e.fecha_baja&&e.fecha_baja&&null!=e.fecha_baja&&(n=fechaConvertirAFormato(e.fecha_baja,"-")),generaModalAdicionAsignacionSinglePerfilLaboral(1,e.relaboralperfil_ubicacion_id,e.relaboralperfil_ubicacion_id,e.relaboralperfil_estacion_id,e.relaboralperfil_estacion_id,-1,-1,"","",i,n,""),$("#hdnIdRelaboralAsignacionSinglePerfil").val(e.id_relaboral),$("#hdnIdPerfilLaboralAsignacionSinglePerfil").val(f)}else{var r="";null!=e.relaboralperfil_id&&(r="El registro seleccionado ya tiene una asignaci&oacute;n de Perfil. "),0==e.estado&&(r+="Debe seleccionar un registro en estado ACTIVO o EN PROCESO para poder asignar un Perfil."),$("#divMsjePorError").html(""),$("#divMsjePorError").append(r),$("#divMsjeNotificacionError").jqxNotification("open")}}else{r="Debe seleccionar un registro necesariamente.";$("#divMsjePorError").html(""),$("#divMsjePorError").append(r),$("#divMsjeNotificacionError").jqxNotification("open")}}),$("#updaterowbutton").off(),$("#updaterowbutton").on("click",function(){var a=$("#divGrillaAsignacionesIndividuales").jqxGrid("getselectedrowindex");if(0<=a){var e=$("#divGrillaAsignacionesIndividuales").jqxGrid("getrowdata",a);if(null!=e)if(1==e.relaboralperfil_estado){$("#hdnAccionAsignacionSinglePerfil").val(2),$("#spanPrefijoFormularioAsignacionSingle").html("Modificaci&oacute;n ");var i=fechaConvertirAFormato(e.relaboralperfil_fecha_ini,"-"),n=fechaConvertirAFormato(e.relaboralperfil_fecha_fin,"-"),r=fechaConvertirAFormato(e.fecha_ini,"-");null!=e.fecha_incor&&(r=fechaConvertirAFormato(e.fecha_incor,"-"));var t=fechaConvertirAFormato(e.fecha_fin,"-"),o=e.relaboralperfilmaquina_tipo_marcacion_entrada,l=e.relaboralperfilmaquina_tipo_marcacion_salida,c=e.relaboralperfil_ubicacion_id,s=e.relaboralperfil_ubicacion_id,d=e.relaboralperfil_estacion_id,g=e.relaboralperfil_estacion_id;0<e.relaboralperfilmaquina_ubicacion_entrada_id&&(c=e.relaboralperfilmaquina_ubicacion_entrada_id),0<e.relaboralperfilmaquina_ubicacion_salida_id&&(s=e.relaboralperfilmaquina_ubicacion_salida_id),0<e.relaboralperfilmaquina_estacion_entrada_id&&(d=e.relaboralperfilmaquina_estacion_entrada_id),0<e.relaboralperfilmaquina_estacion_salida_id&&(g=e.relaboralperfilmaquina_estacion_salida_id),generaModalAdicionAsignacionSinglePerfilLaboral(2,c,s,d,g,o,l,i,n,r,t,e.relaboralperfil_observacion),$("#hdnIdRelaboralAsignacionSinglePerfil").val(e.id_relaboral),$("#hdnIdPerfilLaboralAsignacionSinglePerfil").val(f),$("#hdnIdRelaboralPerfilAsignacionSinglePerfil").val(e.relaboralperfil_id)}else{var p="Debe seleccionar un registro que se encuentre 'ASIGNADO' para realizar la modificaci&oacute;n.";$("#divMsjePorError").html(""),$("#divMsjePorError").append(p),$("#divMsjeNotificacionError").jqxNotification("open")}}else{p="Debe seleccionar un registro necesariamente.";$("#divMsjePorError").html(""),$("#divMsjePorError").append(p),$("#divMsjeNotificacionError").jqxNotification("open")}}),$("#deleterowbutton").off(),$("#deleterowbutton").on("click",function(){var a=$("#divGrillaAsignacionesIndividuales").jqxGrid("getselectedrowindex");if(0<=a){var e=$("#divGrillaAsignacionesIndividuales").jqxGrid("getrowdata",a);if(null!=e)if(1==e.relaboralperfil_estado){if(confirm("¿Esta seguro de que desea dar de baja el registro de asignación de Perfil?"))if(bajaRegistroAsignacionPerfilLaboral(e.relaboralperfil_id)){$("#divGrillaAsignacionesIndividuales").jqxGrid("updatebounddata");var i="Baja exitosa del registro.";$("#divMsjeNotificacionSuccess").html(""),$("#divMsjeNotificacionSuccess").append(i),$("#divMsjeNotificacionSuccess").jqxNotification("open")}}else{i="Debe seleccionar un registro que se encuentre 'ASIGNADO' para realizar la modificaci&oacute;n.";$("#divMsjePorError").html(""),$("#divMsjePorError").append(i),$("#divMsjeNotificacionError").jqxNotification("open")}}else{i="Debe seleccionar un registro necesariamente.";$("#divMsjePorError").html(""),$("#divMsjePorError").append(i),$("#divMsjeNotificacionError").jqxNotification("open")}}),$("#viewrowbutton").off(),$("#viewrowbutton").on("click",function(){var a=$("#divGrillaAsignacionesIndividuales").jqxGrid("getselectedrowindex");if(0<=a){var e=$("#divGrillaAsignacionesIndividuales").jqxGrid("getrowdata",a);if(null!=e)if(0<=e.relaboralperfil_id&&null!=e.relaboralperfil_id){$("#jqxTabsAsignacionPerfiles").jqxTabs("enable",1),$("#jqxTabsAsignacionPerfiles").jqxTabs("disableAt",2),$("#jqxTabsAsignacionPerfiles").jqxTabs("disableAt",3),$("#jqxTabsAsignacionPerfiles").jqxTabs("disableAt",4),$("#jqxTabsAsignacionPerfiles").jqxTabs("enableAt",5),$("#jqxTabsAsignacionPerfiles").jqxTabs({selectedItem:5}),$("#ddPerfilLaboralTurn").text(h),""!=b&&null!=b?$("#ddGrupoTurn").text(b):$("#ddGrupoTurn").html("&nbsp;"),$("#ddTipoHorarioTurn").text(v),$("#spanPrefijoCalendarioLaboral").html(""),$("#spanSufijoCalendarioLaboral").html(" Individual");var i=new Date,n=i.getDate(),r=i.getMonth(),t=i.getFullYear(),o="",l="",c=obtenerTodosHorariosRegistradosEnCalendarioPorPerfilYRelaboralParaVerAsignaciones(e.id_relaboral,f,m,!1,o,l,0);$("#calendar").html("");var s="/images/personal/"+e.ci+".jpg";ImageExist(s)||(s="/images/perfil-profesional.jpg");var d='<img height="100" width="100" src="'+s+'"/>';$("#spanFotoAsignacionSingle").html(d),$("#divAsignacionGroup").hide(),$("#divAsignacionSingle").show(),$("#divDatosAsignacionSingle").show(),$("#spanNombreAsignacionSingle").text(e.nombres),$("#spanCargoAsignacionSingle").text(e.cargo),$("#spanGerenciaAsignacionSingle").text(e.gerencia_administrativa),""!=e.departamento_administrativa&&null!=e.departamento_administrativa?($("#hDepartamentoAsignacionSingle").show(),$("#spanDepartamentoAsignacionSingle").text(e.departamento_administrativa)):$("#hDepartamentoAsignacionSingle").hide(),$("#spanCondicionAsignacionSingle").text(e.condicion);var g=(o=(l=o="")!=e.fecha_incor?fechaConvertirAFormato(e.fecha_incor,"-"):fechaConvertirAFormato(e.fecha_ini,"-"))+" AL "+(l=""!=e.fecha_baja?fechaConvertirAFormato(e.fecha_baja,"-"):fechaConvertirAFormato(e.fecha_fin,"-"));$("#spanFechasRelaboralAsignacionSingle").text(g);var p=iniciarCalendarioLaboralPorRelaboralPerfilLaboralParaVerAsignaciones(e.id_relaboral,5,f,m,c,t,r,n);sumarTotalHorasPorSemana(p)}else{var u="Para acceder a la vista de la asignaci&oacute;n de turnos de forma individual el registro debe estar ASIGNADO al menos.";$("#divMsjePorError").html(""),$("#divMsjePorError").append(u),$("#divMsjeNotificacionError").jqxNotification("open")}}else{u="Debe seleccionar un registro necesariamente.";$("#divMsjePorError").html(""),$("#divMsjePorError").append(u),$("#divMsjeNotificacionError").jqxNotification("open")}})},columns:[{text:"Nro.",sortable:!1,filterable:!1,editable:!1,groupable:!1,draggable:!1,resizable:!1,columntype:"number",width:30,cellsalign:"center",align:"center",cellsrenderer:rownumberrenderer,pinned:!0},{text:"Nombres y Apellidos",columntype:"textbox",filtertype:"input",datafield:"nombres",width:215,align:"center",hidden:!1,pinned:!0},{text:"CI",columntype:"textbox",filtertype:"input",datafield:"ci",width:90,cellsalign:"center",align:"center",hidden:!1,pinned:!0},{text:"Exp",filtertype:"checkedlist",filteritems:["LP","OR","PT","CB","CH","TJ","SC","BN","PD"],datafield:"expd",width:40,cellsalign:"center",align:"center",hidden:!1,pinned:!0},{text:"Asignaci&oacute;n",filtertype:"checkedlist",datafield:"relaboralperfil_estado_descripcion",filteritems:["ASIGNADO","SIN ASIGNACION"],width:100,cellsalign:"center",align:"center",hidden:!1,pinned:!0},{text:"Estado",filtertype:"checkedlist",datafield:"estado_descripcion",filteritems:["ACTIVO","PASIVO"],width:80,cellsalign:"center",align:"center",hidden:!1,cellclassname:cellclass},{text:"Asig. Ubicaci&oacute;n",columntype:"textbox",filtertype:"input",datafield:"relaboralperfil_ubicacion",width:100,cellsalign:"center",align:"center",hidden:!1},{text:"Asig. Estaci&oacute;n",columntype:"textbox",filtertype:"input",datafield:"relaboralperfil_estacion",width:100,cellsalign:"center",align:"center",hidden:!1},{text:"Asig. Fecha Ini",datafield:"relaboralperfil_fecha_ini",filtertype:"range",width:90,cellsalign:"center",cellsformat:"dd-MM-yyyy",align:"center",hidden:!1},{text:"Asig. Fecha Fin",datafield:"relaboralperfil_fecha_fin",filtertype:"range",width:90,cellsalign:"center",cellsformat:"dd-MM-yyyy",align:"center",hidden:!1},{text:"Condici&oacute;n",filtertype:"checkedlist",filteritems:a,datafield:"condicion",width:150,cellsalign:"center",align:"center",hidden:!1},{text:"Gerencia",columntype:"textbox",filtertype:"input",datafield:"gerencia_administrativa",width:220,align:"center",hidden:!1},{text:"Departamento",columntype:"textbox",filtertype:"input",datafield:"departamento_administrativo",width:220,align:"center",hidden:!1},{text:"&Aacute;rea",columntype:"textbox",filtertype:"input",datafield:"area",width:220,align:"center",hidden:!1},{text:"Proceso",columntype:"textbox",filtertype:"input",datafield:"proceso_codigo",width:220,cellsalign:"center",align:"center",hidden:!1},{text:"Fuente",columntype:"textbox",filtertype:"input",datafield:"fin_partida",width:220,cellsalign:"center",align:"center",hidden:!1},{text:"Nivel Salarial",columntype:"textbox",filtertype:"input",datafield:"nivelsalarial",width:220,align:"center",hidden:!1},{text:"Cargo",filtertype:"textbox",filtertype:"input",datafield:"cargo",width:215,align:"center",hidden:!1},{text:"Haber",columntype:"textbox",filtertype:"input",datafield:"sueldo",width:100,cellsalign:"right",align:"center",hidden:!1},{text:"Fecha Inicio",datafield:"fecha_ini",filtertype:"range",width:200,cellsalign:"center",cellsformat:"dd-MM-yyyy",align:"center",hidden:!1},{text:"Fecha Incor.",datafield:"fecha_incor",filtertype:"range",width:100,cellsalign:"center",cellsformat:"dd-MM-yyyy",align:"center",hidden:!1},{text:"Fecha Fin",datafield:"fecha_fin",filtertype:"range",width:100,cellsalign:"center",cellsformat:"dd-MM-yyyy",align:"center",hidden:!1},{text:"Fecha Baja",datafield:"fecha_baja",filtertype:"range",width:100,cellsalign:"center",cellsformat:"dd-MM-yyyy",align:"center",hidden:!1},{text:"Motivo Baja",columntype:"textbox",filtertype:"input",datafield:"motivo_baja",width:100,hidden:!1},{text:"Observacion",columntype:"textbox",filtertype:"input",datafield:"observacion",width:100,hidden:!1}]}),$("#lstBoxColumnasDisponibles").jqxListBox({source:[{label:"Ubicaci&oacute;n",value:"relaboralperfil_ubicacion",checked:!0},{label:"Estaci&oacute;n",value:"relaboralperfil_estacion",checked:!0},{label:"Fecha Ini Perfil",value:"relaboralperfil_fecha_ini",checked:!0},{label:"Fecha Fin Perfil",value:"relaboralperfil_fecha_fin",checked:!0},{label:"Nombres y Apellidos",value:"nombres",checked:!0},{label:"CI",value:"ci",checked:!0},{label:"Exp",value:"expd",checked:!0},{label:"Condici&oacute;n",value:"condicion",checked:!0},{label:"Estado",value:"estado_descripcion",checked:!0},{label:"Gerencia",value:"gerencia_administrativa",checked:!0},{label:"Departamento",value:"departamento_administrativo",checked:!0},{label:"&Aacute;rea",value:"area",checked:!0},{label:"proceso",value:"proceso_codigo",checked:!0},{label:"Fuente",value:"fin_partida",checked:!0},{label:"Nivel Salarial",value:"nivelsalarial",checked:!0},{label:"Cargo",value:"cargo",checked:!0},{label:"Haber",value:"sueldo",checked:!0},{label:"Fecha Inicio",value:"fecha_ini",checked:!0},{label:"Fecha Incor.",value:"fecha_incor",checked:!0},{label:"Fecha Fin",value:"fecha_fin",checked:!0},{label:"Fecha Baja",value:"fecha_baja",checked:!0},{label:"Motivo Baja",value:"motivo_baja",checked:!0},{label:"Observacion",value:"observacion",checked:!0}],width:"100%",height:650,checkboxes:!0}),$("#lstBoxColumnasDisponibles").on("checkChange",function(a){$("#divGrillaAsignacionesIndividuales").jqxGrid("beginupdate"),a.args.checked?$("#divGrillaAsignacionesIndividuales").jqxGrid("showcolumn",a.args.value):$("#divGrillaAsignacionesIndividuales").jqxGrid("hidecolumn",a.args.value),$("#divGrillaAsignacionesIndividuales").jqxGrid("endupdate")})}(),new Array}var rownumberrenderer=function(a,e,i,n,r,t){return"<div align='center'>"+(a+1)+"</div>"};function validaFormularioPorRegistroCalendarioLaboral(){return!0}function obtenerFechaDeInicioProximo(a){var i=[];return $.ajax({url:"/perfileslaborales/getfechainiproximo/",type:"POST",datatype:"json",async:!1,cache:!1,data:{id:a},success:function(a){var e=jQuery.parseJSON(a);0<e.length&&$.each(e,function(a,e){i.push({dia:e.dia,mes:e.mes,gestion:e.gestion})})}}),i}function obtenerUltimoDiaMes(a){return $.ajax({url:"/perfileslaborales/getultimafechames/",type:"POST",datatype:"json",async:!1,cache:!1,data:{fecha:a},success:function(a){}}).responseText}function obtenerFechaMenosDias(a,e){var i=a;return 0<e&&(i=$.ajax({url:"/perfileslaborales/getfechamenosdias/",type:"POST",datatype:"json",async:!1,cache:!1,data:{fecha:a,dias:e},success:function(a){}}).responseText),i}function obtenerFechaMasDias(a,e){var i=a;return 0<e&&(i=$.ajax({url:"/perfileslaborales/getfechamasdias/",type:"POST",datatype:"json",async:!1,cache:!1,data:{fecha:a,dias:e},success:function(a){}}).responseText),i}function cargarUbicacionesPrincipalesAsignacionIndividual(a,i){console.log("--\x3e>"+a+":::"+i),null==i&&(i=1);var n="",r="Entrada";2==a&&(r="Salida"),$("#lstUbicaciones"+r+"AsignacionSingle").html(""),$("#lstUbicaciones"+r+"AsignacionSingle").append("<option value='0' data-cant-nodos-hijos='0'>Seleccionar...</option>"),$("#lstUbicaciones"+r+"AsignacionSingle").prop("disabled",!0),0<i&&$.ajax({url:"/ubicaciones/listprincipales/",type:"POST",datatype:"json",async:!1,cache:!1,success:function(a){var e=jQuery.parseJSON(a);0<e.length?($("#lstUbicaciones"+r+"AsignacionSingle").prop("disabled",!1),$.each(e,function(a,e){n=i==e.id?"selected":"",$("#lstUbicaciones"+r+"AsignacionSingle").append("<option value='"+e.id+"' data-cant-nodos-hijos='"+e.cant_nodos_hijos+"' "+n+">"+e.ubicacion+"</option>")})):$("#lstUbicaciones"+r+"AsignacionSingle").prop("disabled",!0)}})}function cargarEstacionesAsignacionIndividual(a,e,i){console.log("--\x3e>"+a+":::"+e+":::"+i),null==e&&(e=1),null==i&&(i=1);var n="Entrada";2==a&&(n="Salida"),$("#lstEstaciones"+n+"AsignacionSingle").html(""),$("#lstEstaciones"+n+"AsignacionSingle").append("<option value='0'>Seleccionar...</option>"),$("#lstEstaciones"+n+"AsignacionSingle").prop("disabled","disabled"),$("#spanAsteriscoEstaciones"+n+"AsignacionSingle").html("");var r="";0<e&&$.ajax({url:"/ubicaciones/listestaciones/",type:"POST",datatype:"json",async:!1,cache:!1,data:{id:e},success:function(a){var e=jQuery.parseJSON(a);0<e.length?($("#lstEstaciones"+n+"AsignacionSingle").prop("disabled",!1),$("#spanAsteriscoEstaciones"+n+"AsignacionSingle").text(" *"),$.each(e,function(a,e){r=i==e.id?"selected":"",$("#lstEstaciones"+n+"AsignacionSingle").append("<option value='"+e.id+"' "+r+">"+e.ubicacion+"</option>")})):$("#lstEstaciones"+n+"AsignacionSingle").prop("disabled","disabled")}})}function generaModalAdicionAsignacionSinglePerfilLaboral(a,e,i,n,r,t,o,l,c,s,d,g){$("#txtFechaIniAsignacionSingle").datepicker("remove"),$("#txtFechaIniAsignacionSingle").datepicker({startDate:s,endDate:d}),$("#txtFechaFinAsignacionSingle").datepicker("remove"),$("#txtFechaFinAsignacionSingle").datepicker({startDate:s,endDate:d}),$("#txtFechaIniAsignacionSingle").data("date-min",s),$("#txtFechaIniAsignacionSingle").data("date-max",d),$("#txtFechaFinAsignacionSingle").data("date-min",s),$("#txtFechaFinAsignacionSingle").data("date-max",d),1==a?($("#lstEstacionesEntradaAsignacionSingle").html(""),$("#lstEstacionesEntradaAsignacionSingle").append("<option value='0'>Seleccionar...</option>"),$("#lstEstacionesEntradaAsignacionSingle").prop("disabled",!0),$("#lstEstacionesSalidaAsignacionSingle").html(""),$("#lstEstacionesEntradaAsignacionSingle").append("<option value='0'>Seleccionar...</option>"),$("#lstEstacionesEntradaAsignacionSingle").prop("disabled",!0),limpiarMensajesErrorPorValidacionAsignacionSinglePerfil(1),cargarUbicacionesPrincipalesAsignacionIndividual(1,e),cargarUbicacionesPrincipalesAsignacionIndividual(2,i),cargarEstacionesAsignacionIndividual(1,e,n),cargarEstacionesAsignacionIndividual(2,i,r),$("#lstUbicacionesEntradaAsignacionSingle").off(),$("#lstUbicacionesEntradaAsignacionSingle").on("change",function(){cargarEstacionesAsignacionIndividual(1,$(this).val(),0)}),$("#lstUbicacionesSalidaAsignacionSingle").off(),$("#lstUbicacionesSalidaAsignacionSingle").on("change",function(){cargarEstacionesAsignacionIndividual(2,$(this).val(),0)}),$("#txtFechaIniAsignacionSingle").val(s),$("#txtFechaFinAsignacionSingle").val(d),cargarTiposMarcaciones(1,t),cargarTiposMarcaciones(2,o),$("#txtObservacionAsignacionSingle").val("")):(limpiarMensajesErrorPorValidacionAsignacionSinglePerfil(2),cargarUbicacionesPrincipalesAsignacionIndividual(1,e),cargarUbicacionesPrincipalesAsignacionIndividual(2,i),cargarEstacionesAsignacionIndividual(1,e,n),cargarEstacionesAsignacionIndividual(2,i,r),$("#lstUbicacionesEntradaAsignacionSingle").off(),$("#lstUbicacionesEntradaAsignacionSingle").on("change",function(){cargarEstacionesAsignacionIndividual(1,$(this).val(),0)}),$("#lstUbicacionesSalidaAsignacionSingle").off(),$("#lstUbicacionesSalidaAsignacionSingle").on("change",function(){cargarEstacionesAsignacionIndividual(2,$(this).val(),0)}),$("#txtFechaIniAsignacionSingle").datepicker("update",l),$("#txtFechaFinAsignacionSingle").datepicker("update",c),cargarTiposMarcaciones(1,t),cargarTiposMarcaciones(2,o),$("#txtObservacionAsignacionSingle").val(g)),$("#popupAsignacionPerfilLaboral").modal("show"),$("#lstUbicacionesEntradaAsignacionSingle").focus()}function validaFormularioAsignacionSinglePerfilLaboral(a,e,i,n,r,t){var o=!0,l=$("#lstUbicacionesEntradaAsignacionSingle").val(),c=$("#lstUbicacionesEntradaAsignacionSingle option:selected").data("cant-nodos-hijos"),s=$("#lstEstacionesEntradaAsignacionSingle").val(),d=$("#lstUbicacionesSalidaAsignacionSingle").val(),g=$("#lstUbicacionesSalidaAsignacionSingle option:selected").data("cant-nodos-hijos"),p=$("#lstEstacionesSalidaAsignacionSingle").val(),u=(r=$("#txtFechaIniAsignacionSingle").val(),t=$("#txtFechaFinAsignacionSingle").val(),$("#lstTiposMarcacionesEntradaAsignacionSingle").val()),f=$("#lstTiposMarcacionesSalidaAsignacionSingle").val();limpiarMensajesErrorPorValidacionAsignacionSinglePerfil(a);var h="";if(l<=0){o=!1;var b="Debe seleccionar la Ubicaci&oacute;n de Entrada para la asignaci&oacute;n necesariamente.";$("#divUbicacionesEntradaAsignacionSingle").addClass("has-error"),$("#helpErrorUbicacionesEntradaAsignacionSingle").html(b),null==h&&(h=$("#LstUbicacionesEntradaAsignacionSingle"))}else 0<c&&s<=0&&(o=!1,b="Debe seleccionar la Estaci&oacute;n de Entrada para la asignaci&oacute;n necesariamente.",$("#divEstacionesEntradaAsignacionSingle").addClass("has-error"),$("#helpErrorEstacionesEntradaAsignacionSingle").html(b),null==h&&(h=$("#LstEstacionesEntradaAsignacionSingle")));if(d<=0?(o=!1,b="Debe seleccionar la Ubicaci&oacute;n de Salida para la asignaci&oacute;n necesariamente.",$("#divUbicacionesSalidaAsignacionSingle").addClass("has-error"),$("#helpErrorUbicacionesSalidaAsignacionSingle").html(b),null==h&&(h=$("#LstUbicacionesSalidaAsignacionSingle"))):0<g&&p<=0&&(o=!1,b="Debe seleccionar la Estaci&oacute;n de Salida para la asignaci&oacute;n necesariamente.",$("#divEstacionesSalidaAsignacionSingle").addClass("has-error"),$("#helpErrorEstacionesSalidaAsignacionSingle").html(b),null==h&&(h=$("#LstEstacionesSalidaAsignacionSingle"))),""==r&&(o=!1,b="Debe seleccionar la Fecha de Inicio para la asignaci&oacute;n necesariamente.",$("#divFechaIniAsignacionSingle").addClass("has-error"),$("#helpErrorFechaIniAsignacionSingle").html(b),null==h&&(h=$("#TxtFechaIniAsignacionSingle"))),""==t&&(o=!1,b="Debe seleccionar la Fecha de Finalizaci&oacute;n para la asignaci&oacute;n necesariamente.",$("#divFechaFinAsignacionSingle").addClass("has-error"),$("#helpErrorFechaFinAsignacionSingle").html(b),null==h&&(h=$("#TxtFechaFinAsignacionSingle"))),""!=r&&""!=t)if(procesaTextoAFecha(r,"-")>procesaTextoAFecha(t,"-"))o=!1,b="La Fecha de Finalizaci&oacute;n debe ser igual o mayor a la Fecha de Inicio.",$("#divFechaIniAsignacionSingle").addClass("has-error"),$("#helpErrorFechaIniAsignacionSingle").html(b),$("#divFechaFinAsignacionSingle").addClass("has-error"),$("#helpErrorFechaFinAsignacionSingle").html(b),null==h&&(h=$("#TxtFechaFinAsignacionSingle"));else{var m=$("#txtFechaIniAsignacionSingle").data("date-min"),v=$("#txtFechaIniAsignacionSingle").data("date-max");procesaTextoAFecha(m,"-")>procesaTextoAFecha(r,"-")&&(o=!1,b="La Fecha de Inicio no puede ser superior a "+m+".",$("#divFechaIniAsignacionSingle").addClass("has-error"),$("#helpErrorFechaIniAsignacionSingle").html(b),null==h&&(h=$("#TxtFechaIniAsignacionSingle"))),procesaTextoAFecha(v,"-")<procesaTextoAFecha(t,"-")&&(o=!1,b="La Fecha de Finalizaci&oacute;n no puede ser superior a "+v+".",$("#divFechaFinAsignacionSingle").addClass("has-error"),$("#helpErrorFechaFinAsignacionSingle").html(b),null==h&&(h=$("#TxtFechaFinAsignacionSingle")))}return(u<0||""==u)&&(o=!1,b="Debe seleccionar donde puede marcar su asistencia necesariamente.",$("#divTiposMarcacionesEntradaAsignacionSingle").addClass("has-error"),$("#helpErrorTiposMarcacionesEntradaAsignacionSingle").html(b),null==h&&(h=$("#sltTiposMarcacionesEntradaAsignacionSingle"))),(f<0||""==f)&&(o=!1,b="Debe seleccionar donde puede marcar su asistencia necesariamente.",$("#divTiposMarcacionesSalidaAsignacionSingle").addClass("has-error"),$("#helpErrorTiposMarcacionesSalidaAsignacionSingle").html(b),null==h&&(h=$("#sltTiposMarcacionesSalidaAsignacionSingle"))),verificaSobrePosicionDePerfiles(e,i,n,l,r,t)&&(o=!1,b="Existe ya un registro de perfil con sobreposici&oacute;n de fechas con el perfil que intenta registrar para esta persona.",$("#divMsjePorError").html(""),$("#divMsjePorError").append(b),$("#divMsjeNotificacionError").jqxNotification("open")),o}function limpiarMensajesErrorPorValidacionAsignacionSinglePerfil(a){var e="";2==a&&(e=""),$("#divUbicacionesEntradaAsignacionSingle"+e).removeClass("has-error"),$("#helpErrorUbicacionesEntradaAsignacionSingle"+e).html(""),$("#divUbicacionesSalidaAsignacionSingle"+e).removeClass("has-error"),$("#helpErrorUbicacionesSalidaAsignacionSingle"+e).html(""),$("#divEstacionesEntradaAsignacionSingle"+e).removeClass("has-error"),$("#helpErrorEstacionesEntradaAsignacionSingle"+e).html(""),$("#divEstacionesSalidaAsignacionSingle"+e).removeClass("has-error"),$("#helpErrorEstacionesSalidaAsignacionSingle"+e).html(""),$("#divFechaIniAsignacionSingle"+e).removeClass("has-error"),$("#helpErrorFechaIniAsignacionSingle"+e).html(""),$("#divFechaFinAsignacionSingle"+e).removeClass("has-error"),$("#helpErrorFechaFinAsignacionSingle"+e).html(""),$("#divTiposMarcacionesEntradaAsignacionSingle"+e).removeClass("has-error"),$("#helpErrorTiposMarcacionesEntradaAsignacionSingle"+e).html(""),$("#divTiposMarcacionesSalidaAsignacionSingle"+e).removeClass("has-error"),$("#helpErrorTiposMarcacionesSalidaAsignacionSingle"+e).html("")}function iniciarCalendarioLaboralPorRelaboralPerfilLaboralParaVerAsignaciones(c,a,s,e,i,n,r,t){e=parseInt(e);var u=[],d=7,o=($(".calendar-events"),"prev,next"),l="year,month,agendaWeek,agendaDay",g=!0,p=!0,f=!0,h=!0;switch(a){case 1:case 2:case 3:switch(e){case 1:case 2:break;case 3:o="",l="year"}break;case 4:break;case 5:f=p=g=!1}switch(e){case 1:case 2:h=!1,d=5}return $("#calendar").fullCalendar({header:{left:o,center:"title",right:l},year:n,month:r,date:t,firstDay:1,weekends:h,editable:g,droppable:p,selectable:f,weekNumbers:!0,weekNumberTitle:"#S",timeFormat:"H(:mm)",drop:function(a,e){var i=$(this).data("eventObject"),n=$.extend({},i);n.start=a,$("#calendar").fullCalendar("renderEvent",n,!0),sumarTotalHorasPorSemana(u)},eventDrop:function(a,e,i,n,r){sumarTotalHorasPorSemana(u)},events:i,eventClick:function(r,a,e){var t=r.className+"",i=t.split("_"),n=i[1];t=i[0];var o=0;null!=r.id&&(o=r.id);var l=fechaConvertirAFormato(r.start,"-"),c=l,s=r.start;null!=r.end&&""!=r.end&&(c=fechaConvertirAFormato(r.end,"-"),s=r.end);var d=r.start,g=s,p=s;$("#txtHorarioFechaIni").datepicker("setDate",r.start),$("#txtHorarioFechaFin").datepicker("setDate",s),$("#txtHorarioFechaIni").datepicker({format:"dd-mm-yyyy",default:r.start,weekStart:1,startDate:d,endDate:g,autoclose:!0}).on("changeDate",function(a){(d=new Date(a.date.valueOf())).setDate(d.getDate(new Date(a.date.valueOf()))),$("#txtHorarioFechaFin").datepicker("setStartDate",d)}),$("#txtHorarioFechaFin").datepicker({default:s,weekStart:1,startDate:d,endDate:p,autoclose:!0}).on("changeDate",function(a){(g=new Date(a.date.valueOf())).setDate(g.getDate(new Date(a.date.valueOf()))),$("#txtHorarioFechaIni").datepicker("setEndDate",g)}),0<n?cargarModalHorario(n)?("b"==t?($("#btnDescartarHorario").hide(),$("#btnGuardarModificacionHorario").hide(),$("#txtHorarioFechaIni").prop("disabled","disabled"),$("#txtHorarioFechaFin").prop("disabled","disabled")):($("#btnDescartarHorario").show(),$("#txtHorarioFechaIni").prop("disabled",!1),$("#txtHorarioFechaFin").prop("disabled",!1)),$("#popupDescripcionHorario").modal("show"),$("#btnDescartarHorario").off(),$("#btnDescartarHorario").on("click",function(){switch(t){case"r":case"d":bajaTurnoEnCalendario(o)&&($("#calendar").fullCalendar("removeEvents",r._id),$("#popupDescripcionHorario").modal("hide"));break;case"n":$("#calendar").fullCalendar("removeEvents",r._id),$("#popupDescripcionHorario").modal("hide")}sumarTotalHorasPorSemana(u)}),$("#btnGuardarModificacionHorario").off(),$("#btnGuardarModificacionHorario").on("click",function(){switch(t){case"r":case"n":if(l!=$("#txtHorarioFechaIni").val()||c!=$("#txtHorarioFechaFin").val()){$("#calendar").fullCalendar("removeEvents",r._id),$("#popupDescripcionHorario").modal("hide");var a=$("#txtHorarioFechaIni").val(),e=$("#txtHorarioFechaFin").val(),i=a.split("-"),n=e.split("-");a=i[2]+"-"+i[1]+"-"+i[0],e=n[2]+"-"+n[1]+"-"+n[0],addEvent={id:r.id,title:r.title,className:r.className,start:a,end:e,color:r.color,editable:!0,hora_entrada:r.hora_entrada,hora_salida:r.hora_salida},$("#calendar").fullCalendar("renderEvent",addEvent,!0)}$("#popupDescripcionHorario").modal("hide")}sumarTotalHorasPorSemana(u)})):alert("Error al determinar los datos del horario."):alert("El registro corresponde a un periodo de descanso")},eventResize:function(a,e,i){sumarTotalHorasPorSemana(u)},viewRender:function(a){switch(a.name){case"month":removerColumnaSumaTotales(),agregarColumnaSumaTotales(d);var t="",o="";u=[];var l=0;$.each(["mon","tue","wed","thu","fri","sat","sun"],function(a,e){l=0,$("td.fc-"+e).map(function(a,e){l++;var i=$(this).data("date"),n=$(this).data("date");if(null!=i){var r=i.split("-");switch(i=r[2]+"-"+r[1]+"-"+r[0],l){case 1:""==t&&(t=i),u.push({semana:1,fecha:i});break;case 2:u.push({semana:2,fecha:i});break;case 3:u.push({semana:3,fecha:i});break;case 4:u.push({semana:4,fecha:i});break;case 5:u.push({semana:5,fecha:i});break;case 6:o=i,u.push({semana:6,fecha:i})}n<$.fullCalendar.formatDate(new Date,"yyyy-MM-dd")&&$(this).css("background-color","silver")}})}),sumarTotalHorasPorSemana(u);var e="",i="",n=$("#calendar").fullCalendar("getDate"),r=(e=fechaConvertirAFormato(n,"-")).split("-");i=obtenerUltimoDiaMes(e="01-"+r[1]+"-"+r[2]),$("#hdnFechaInicialCalendario").val(e),$("#hdnFechaFinalCalendario").val(i),cargarGrillaAsignacionIndividualFechasUbicacionEstacion(s,c,t,o);break;case"agendaWeek":e=$("#calendar").fullCalendar("getView").start,i=obtenerFechaMasDias(e=fechaConvertirAFormato(e,"-"),d-1),$("#hdnFechaInicialCalendario").val(e),$("#hdnFechaFinalCalendario").val(i),cargarGrillaAsignacionIndividualFechasUbicacionEstacion(s,c,e,i);break;case"agendaDay":n=$("#calendar").fullCalendar("getDate"),i=e=fechaConvertirAFormato(n,"-"),$("#hdnFechaInicialCalendario").val(e),$("#hdnFechaFinalCalendario").val(i),cargarGrillaAsignacionIndividualFechasUbicacionEstacion(s,c,e,i)}definirListaAsignados(s,$("#lstUbicacionesPrincipales").val(),$("#lstEstacionesAsignadas").val(),e,i)}}),u}function cargarGrillaAsignacionIndividualFechasUbicacionEstacion(a,e,i,n){0<a&&0<e&&""!=i&&""!=n&&($("#tbody_asignacion_single").html(""),$.ajax({url:"/calendariolaboral/listregisteredbyperfilyrelaboral",type:"POST",datatype:"json",async:!1,cache:!1,data:{id:e,id_perfillaboral:a,fecha_ini:i,fecha_fin:n},success:function(a){var e=jQuery.parseJSON(a),l=1;0<e.length&&$.each(e,function(a,e){var i=e.calendario_fecha_ini.split("-"),n=i[2]+"-"+i[1]+"-"+i[0],r=e.calendario_fecha_fin.split("-"),t=r[2]+"-"+r[1]+"-"+r[0],o="";null!=e.relaboralperfil_estacion&&(o=e.relaboralperfil_estacion),$("#tbody_asignacion_single").append("<tr><td style='text-align: center'>"+l+"</td><td style='text-align: center'>"+n+"</td><td style='text-align: center'>"+t+"</td><td style='text-align: center'>"+e.relaboralperfil_ubicacion+"</td><td style='text-align: center'>"+o+"</td><td style='text-align: center'>"+e.hora_entrada+"</td><td style='text-align: center'>"+e.hora_salida+"</td><td>"+e.relaboralperfil_observacion+"</td></tr>"),l++})}}))}function cargarTiposMarcaciones(a,i){var n="",r="Entrada";2==a&&(r="Salida"),$("#lstTiposMarcaciones"+r+"AsignacionSingle").html(""),$("#lstTiposMarcaciones"+r+"AsignacionSingle").append("<option value='-1' data-cant-nodos-hijos='0'>Seleccionar...</option>"),$("#lstTiposMarcaciones"+r+"AsignacionSingle").prop("disabled",!0),$.ajax({url:"/relaboralesperfiles/listtiposmarcaciones/",type:"POST",datatype:"json",async:!1,cache:!1,success:function(a){var e=jQuery.parseJSON(a);0<e.length?($("#lstTiposMarcaciones"+r+"AsignacionSingle").prop("disabled",!1),$.each(e,function(a,e){n=i==e.tipo_marcacion?"selected":"",$("#lstTiposMarcaciones"+r+"AsignacionSingle").append("<option value='"+e.tipo_marcacion+"' "+n+">"+e.tipo_marcacion_descripcion_html+"</option>")})):$("#lstTiposMarcaciones"+r+"AsignacionSingle").prop("disabled",!0)}})}