function cargarGestionesRelaborales(t){var i="";$("#lstGestion").html(""),$("#lstGestion").append("<option value='0'>TODAS</option>"),$.ajax({url:"/relaborales/getgestionesrelaborales/",type:"POST",datatype:"json",async:!1,cache:!1,success:function(e){var a=jQuery.parseJSON(e);$.each(a,function(e,a){i=t==a?"selected":"",$("#lstGestion").append("<option value='"+a+"' "+i+">"+a+"</option>")})},error:function(){alert("Se ha producido un error Inesperado")}})}function definirGrillaParaListaRelaborales(e,a){var t,i,n,r,o,d,l,s,c={datatype:"json",datafields:[{name:"nro_row",type:"integer"},{name:"fecha_nac",type:"string"},{name:"edad",type:"integer"},{name:"lugar_nac",type:"integer"},{name:"genero",type:"integer"},{name:"fecha_cumple",type:"date"},{name:"fecha_nac",type:"date"},{name:"e_civil",type:"integer"},{name:"id_relaboral",type:"integer"},{name:"id_persona",type:"integer"},{name:"tiene_contrato_vigente",type:"integer"},{name:"tiene_contrato_vigente_descripcion",type:"string"},{name:"id_fin_partida",type:"integer"},{name:"finpartida",type:"string"},{name:"id_condicion",type:"integer"},{name:"condicion",type:"string"},{name:"tiene_item",type:"integer"},{name:"id_cargo",type:"integer"},{name:"cargo_codigo",type:"string"},{name:"cargo_resolucion_ministerial_id",type:"integer"},{name:"cargo_resolucion_ministerial",type:"string"},{name:"estado",type:"integer"},{name:"estado_descripcion",type:"string"},{name:"nombres",type:"string"},{name:"ci",type:"string"},{name:"expd",type:"string"},{name:"num_complemento",type:"string"},{name:"id_organigrama",type:"integer"},{name:"id_gerencia_administrativa",type:"integer"},{name:"gerencia_administrativa",type:"string"},{name:"departamento_administrativo",type:"string"},{name:"id_area",type:"integer"},{name:"area",type:"string"},{name:"id_ubicacion",type:"integer"},{name:"ubicacion",type:"string"},{name:"num_contrato",type:"string"},{name:"fin_partida",type:"string"},{name:"id_procesocontratacion",type:"integer"},{name:"proceso_codigo",type:"string"},{name:"nivelsalarial",type:"string"},{name:"nivelsalarial_resolucion",type:"string"},{name:"cargo",type:"string"},{name:"cargo_gestion",type:"integer"},{name:"cargo_correlativo",type:"string"},{name:"sueldo",type:"numeric"},{name:"fecha_ini",type:"date"},{name:"fecha_incor",type:"date"},{name:"fecha_fin",type:"date"},{name:"fecha_baja",type:"date"},{name:"motivo_baja",type:"string"},{name:"relaboral_previo_id",type:"integer"},{name:"observacion",type:"string"},{name:"fecha_ing",type:"date"},{name:"antiguedad",type:"string"}],url:"/relaborales/listpaged?opcion=1&gestion="+e,cache:!1,root:"Rows",beforeprocessing:function(e){c.totalrecords=e[0].TotalRows},filter:function(){$("#jqxgrid").jqxGrid("updatebounddata","filter")},sort:function(){$("#jqxgrid").jqxGrid("updatebounddata","sort")}},b=new $.jqx.dataAdapter(c);t=obtenerFiltrables(e),i=t.expds,n=t.sueldos,r=t.gerencias,o=t.condiciones,d=t.departamentos,l=t.ubicaciones,s=t.edades,$("#jqxgrid").jqxGrid({width:"100%",height:600,source:b,sortable:!0,altRows:!0,groupable:!0,columnsresize:!0,pageable:!0,pagerMode:"advanced",pagesize:10,virtualmode:!0,rendergridrows:function(e){return e.data},showfilterrow:!0,filterable:!0,showtoolbar:!0,autorowheight:!0,enablebrowserselection:!0,rendertoolbar:function(e){var a=$("<div></div>");e.append(a),a.append("<button title='Nuevo registro.' id='addnewrowbutton' class='btn btn-sm btn-primary' type='button'><i class='fa fa-plus-square fa-2x text-primary' title='Nuevo Registro.'/></i></button>"),a.append("<button title='Modificar registro.' id='updaterowbutton'  class='btn btn-sm btn-primary' type='button' ><i class='fa fa-pencil-square fa-2x text-info' title='Modificar registro.'/></button>"),a.append("<button title='Dar de baja al registro.' id='deleterowbutton' class='btn btn-sm btn-primary' type='button'><i class='fa fa-minus-square fa-2x text-danger' title='Dar de baja al registro.'/></i></button>"),a.append("<button title='Movilidad de Personal.' id='moverowbutton' class='btn btn-sm btn-primary' type='button'><i class='fa fa-tag fa-2x text-warning' title='Movilidad de Personal.'/></i></button>"),a.append("<button title='Vista Historial.' id='viewrowbutton' class='btn btn-sm btn-primary' type='button'><i class='gi gi-nameplate_alt fa-2x text-purple' title='Vista Historial.'/></i></button>"),a.append("<button title='Exportar a Excel.' id='exportexcelrowbutton' class='btn btn-sm btn-primary' type='button'><i class='fi fi-xls fa-2x text-success' title='Exportar a Excel.'/></i></button>"),a.append("<button title='Exportar a PDF.' id='exportpdfrowbutton' class='btn btn-sm btn-primary' type='button'><i class='fi fi-pdf fa-2x text-danger' title='Exportar a PDF.'/></i></button>"),a.append("<button title='Refrescar Grilla' id='refreshbutton' class='btn btn-sm btn-primary' type='button'><i class='fa fa-repeat fa-2x text-default' title='Refrescar grilla.'/></i></button>"),a.append("<button title='Desagrupar.' id='cleargroupsrowbutton' class='btn btn-sm btn-primary' type='button'><i class='fa fa-chain-broken fa-2x text-default' title='Desagrupar.'/></i></button>"),a.append("<button title='Desfiltrar.' id='clearfiltersrowbutton' class='btn btn-sm btn-primary' type='button'><i class='gi gi-sorting fa-2x text-default' title='Desfiltrar.'/></i></button>"),$("#addnewrowbutton").jqxButton(),$("#updaterowbutton").jqxButton(),$("#deleterowbutton").jqxButton(),$("#moverowbutton").jqxButton(),$("#viewrowbutton").jqxButton(),$("#refreshbutton").jqxButton(),$("#cleargroupsrowbutton").jqxButton(),$("#clearfiltersrowbutton").jqxButton(),$("#exportexcelrowbutton").jqxButton(),$("#exportpdfrowbutton").jqxButton(),$("#refreshbutton").off(),$("#refreshbutton").on("click",function(){$("#jqxgrid").jqxGrid("updatebounddata")}),$("#cleargroupsrowbutton").off(),$("#cleargroupsrowbutton").on("click",function(){$("#jqxgrid").jqxGrid("cleargroups")}),$("#clearfiltersrowbutton").off(),$("#clearfiltersrowbutton").on("click",function(){$("#jqxgrid").jqxGrid("clearfilters")}),$("#exportexcelrowbutton").off(),$("#exportexcelrowbutton").on("click",function(){exportarReporte(1)}),$("#exportpdfrowbutton").off(),$("#exportpdfrowbutton").on("click",function(){exportarReporte(2)}),$("#addnewrowbutton").off(),$("#addnewrowbutton").on("click",function(){$("#formNuevo")[0].reset();var e=$("#jqxgrid").jqxGrid("getselectedrowindex");if(0<=e){var a=$("#jqxgrid").jqxGrid("getrowdata",e);if(null!=a)if(0<a.id_persona)if(0==a.tiene_contrato_vigente||-1==a.tiene_contrato_vigente){limpiarFormularioNuevoRegistro(1),limpiarMensajesErrorPorValidacionNuevoRegistro(),$("#hdnIdRelaboralEditar").val(a.id_relaboral),$("#hdnIdPersonaSeleccionada").val(a.id_persona),$("#NombreParaNuevoRegistro").html(a.nombres),$("#CorreoPersonal").html(""),$("#hdnIdCondicionNuevaSeleccionada").val(0),$("#divAreas").hide(),$("#divItems").hide(),$("#divFechasFin").hide(),$("#divNumContratos").hide(),$(".msjs-alert").hide(),$("#divProcesos").hide(),$("#txtNumContrato").val(""),$("#lstUbicaciones").val("");var t=obtenerRutaFoto(a.ci,a.num_complemento);$("#imgFotoPerfilNuevo").attr("src",t),$("#tr_cargo_seleccionado").html("<td style='height: 120px;' colspan='11'>&nbsp;</td>"),$("#btnGuardarNuevo").off(),$("#btnGuardarNuevo").on("click",function(){var e=validaFormularioPorNuevoRegistro();if(e){var a=guardarNuevoRegistro();if($("#jqxTabs").jqxTabs("enableAt",0),$("#jqxTabs").jqxTabs("disableAt",1),null!=a&&0<a){var t=new Date,i=parseInt(t.getFullYear().toString()),n=$("#FechaIncor").jqxDateTimeInput("getText"),r=n.split("-"),o=parseInt(r[2]);if(i==o){var d=defineListaDestinatarios(a);d&&(CKEDITOR.instances.txtEditorMensaje&&CKEDITOR.instances.txtEditorMensaje.destroy(),$("#txtEditorMensaje").val(""),CKEDITOR.replace("txtEditorMensaje",{customConfig:"config.min.js",on:{instanceReady:function(e){CKEDITOR.instances.txtEditorMensaje.focus()}}}),CKEDITOR.add,$("#popupMensajeNuevaIncorporacion").off(),$("#popupMensajeNuevaIncorporacion").modal("show"),$("#btnEnviarMensaje").off(),$("#btnEnviarMensaje").on("click",function(){var e=enviarMensajePorOperacion(a,1);e&&$("#popupMensajeNuevaIncorporacion").modal("hide")}))}}}}),$("#jqxTabs").jqxTabs("enableAt",1),$("#jqxTabs").jqxTabs("disableAt",2),$("#jqxTabs").jqxTabs("disableAt",3),$("#jqxTabs").jqxTabs("disableAt",4),$("#jqxTabs").jqxTabs("disableAt",5),$("#jqxTabs").jqxTabs({selectedItem:1}),$("#btnBuscarCargo").click()}else{var i="La persona seleccionada tiene actualmente un registro en estado "+a.estado_descripcion+" de relaci&oacute;n laboral por lo que no se le puede asignar otro.";$("#divMsjePorError").html(""),$("#divMsjePorError").append(i),$("#divMsjeNotificacionError").jqxNotification("open")}else alert("no se encuentra id persona")}else{var i="Debe seleccionar un registro necesariamente.";$("#divMsjePorError").html(""),$("#divMsjePorError").append(i),$("#divMsjeNotificacionError").jqxNotification("open")}}),$("#updaterowbutton").off(),$("#updaterowbutton").on("click",function(){var e=$("#jqxgrid").jqxGrid("getselectedrowindex");if(0<=e){var a=$("#jqxgrid").jqxGrid("getrowdata",e);if(null!=a){var t=a.id_relaboral;if(null!=a.estado&&0<=a.estado){switch($("#jqxTabs").jqxTabs("enableAt",0),$("#jqxTabs").jqxTabs("disableAt",1),$("#jqxTabs").jqxTabs("enableAt",2),$("#jqxTabs").jqxTabs("disableAt",3),$("#jqxTabs").jqxTabs("disableAt",4),$("#jqxTabs").jqxTabs("disableAt",5),$("#jqxTabs").jqxTabs({selectedItem:2}),limpiarFormularioNuevoRegistro(2),$("#hdnIdRelaboralEditar").val(t),$("#hdnIdPersonaSeleccionadaEditar").val(a.id_persona),$("#NombreParaEditarRegistro").html(a.nombres),$("#hdnIdCondicionEditableSeleccionada").val(a.id_condicion),$("#hdnIdUbicacionEditar").val(a.id_ubicacion),$("#hdnIdProcesoEditar").val(a.id_procesocontratacion),$("#FechaIniEditar").jqxDateTimeInput({value:a.fecha_ini,enableBrowserBoundsDetection:!1,height:24,formatString:"dd-MM-yyyy"}),$("#FechaIncorEditar").jqxDateTimeInput({value:a.fecha_incor,enableBrowserBoundsDetection:!1,height:24,formatString:"dd-MM-yyyy"}),a.tiene_item){case 1:$("#divFechasFinEditar").hide();break;case 0:$("#FechaFinEditar").jqxDateTimeInput({value:a.fecha_fin,enableBrowserBoundsDetection:!1,height:24,formatString:"dd-MM-yyyy"})}$("#hdnFechaFinEditar").val(a.fecha_fin),$("#txtNumContratoEditar").val(a.num_contrato),$("#divItemsEditar").hide(),$("#divNumContratosEditar").hide(),$(".msjs-alert").hide(),$("#helpErrorUbicacionesEditar").html(""),$("#helpErrorProcesosEditar").html(""),$("#helpErrorCategoriasEditar").html(""),$("#helpErrorFechasIniEditar").html(""),$("#helpErrorFechasIncorEditar").html(""),$("#helpErrorFechasFinEditar").html(""),$("#divUbicacionesEditar").removeClass("has-error"),$("#divProcesosEditar").removeClass("has-error"),$("#divCategoriasEditar").removeClass("has-error"),$("#divAreas").hide(),$("#divFechasIniEditar").removeClass("has-error"),$("#divFechasIncorEditar").removeClass("has-error"),$("#divFechasFinEditar").removeClass("has-error"),$("#tr_cargo_seleccionado_editar").html(""),null!=a.observacion?$("#txtObservacionEditar").text(a.observacion):$("#txtObservacionEditar").text("");var i=obtenerRutaFoto(a.ci,a.num_complemento);$("#imgFotoPerfilEditar").attr("src",i),cargarProcesosParaEditar(a.id_condicion,a.id_procesocontratacion);var n=0;null!=a.id_ubicacion&&(n=a.id_ubicacion),cargarUbicacionesParaEditar(n),agregarCargoSeleccionadoEnGrillaParaEditar(1,a)}else{var r="Debe seleccionar un registro con estado EN PROCESO o ACTIVO para posibilitar la modificaci&oacute;n del registro";$("#divMsjePorError").html(""),$("#divMsjePorError").append(r),$("#divMsjeNotificacionError").jqxNotification("open")}}}else{var r="Debe seleccionar un registro necesariamente.";$("#divMsjePorError").html(""),$("#divMsjePorError").append(r),$("#divMsjeNotificacionError").jqxNotification("open")}}),$("#deleterowbutton").off(),$("#deleterowbutton").on("click",function(){var e=$("#jqxgrid").jqxGrid("getselectedrowindex");if(0<=e){var a=$("#jqxgrid").jqxGrid("getrowdata",e);if(null!=a){var t=a.id_relaboral;if(1==a.estado){$("#jqxTabs").jqxTabs("enableAt",0),$("#jqxTabs").jqxTabs("disableAt",1),$("#jqxTabs").jqxTabs("disableAt",2),$("#jqxTabs").jqxTabs("enableAt",3),$("#jqxTabs").jqxTabs("disableAt",4),$("#jqxTabs").jqxTabs("disableAt",5),$("#jqxTabs").jqxTabs({selectedItem:3}),$("#hdnIdRelaboralBaja").val(t),$("#NombreParaBajaRegistro").html(a.nombres),$("#hdnIdCondicionSeleccionadaBaja").val(a.id_condicion),$("#txtFechaIniBaja").jqxDateTimeInput({disabled:!0,value:a.fecha_ini,enableBrowserBoundsDetection:!0,height:24,formatString:"dd-MM-yyyy"}),$("#txtFechaIncorBaja").jqxDateTimeInput({disabled:!0,value:a.fecha_incor,enableBrowserBoundsDetection:!0,height:24,formatString:"dd-MM-yyyy"}),$("#txtFechaFinBaja").jqxDateTimeInput({disabled:!0,value:a.fecha_fin,enableBrowserBoundsDetection:!0,height:24,formatString:"dd-MM-yyyy"}),$("#txtFechaRenBaja").jqxDateTimeInput({value:a.fecha_fin,enableBrowserBoundsDetection:!0,height:24,formatString:"dd-MM-yyyy"}),$("#txtFechaAceptaRenBaja").jqxDateTimeInput({value:a.fecha_fin,enableBrowserBoundsDetection:!0,height:24,formatString:"dd-MM-yyyy"}),$("#txtFechaAgraServBaja").jqxDateTimeInput({value:a.fecha_fin,enableBrowserBoundsDetection:!0,height:24,formatString:"dd-MM-yyyy"}),$("#txtFechaBaja").jqxDateTimeInput({value:a.fecha_fin,enableBrowserBoundsDetection:!0,height:24,formatString:"dd-MM-yyyy"}),$(".msjs-alert").hide(),$("#divFechasRenBaja").hide(),$("#divFechasAceptaRenBaja").hide(),$("#divFechasAgraServBaja").hide(),$("#txtObservacionBaja").val(a.observacion),$("#divMsjeError").hide(),$("#tr_cargo_seleccionado_baja").html(""),$("#lstMotivosBajas").focus(),$("#hdnFechaRenBaja").val(0),$("#hdnFechaAceptaRenBaja").val(0),$("#hdnFechaAgraServBaja").val(0),agregarCargoSeleccionadoEnGrillaParaBaja(a),cargarMotivosBajas(0,a.id_condicion);var i=obtenerRutaFoto(a.ci,a.num_complemento);$("#imgFotoPerfilBaja").attr("src",i),$("#btnGuardarBaja").off(),$("#btnGuardarBaja").on("click",function(){var e=validaFormularioPorBajaRegistro();e&&guardarRegistroBaja(a)})}else{var n="Para dar de baja un registro, este debe estar en estado ACTIVO inicialmente.";$("#divMsjePorError").html(""),$("#divMsjePorError").append(n),$("#divMsjeNotificacionError").jqxNotification("open")}}}else{var n="Debe seleccionar un registro necesariamente.";$("#divMsjePorError").html(""),$("#divMsjePorError").append(n),$("#divMsjeNotificacionError").jqxNotification("open")}}),$("#moverowbutton").off(),$("#moverowbutton").on("click",function(){var e=$("#jqxgrid").jqxGrid("getselectedrowindex");if(0<=e){var a=$("#jqxgrid").jqxGrid("getrowdata",e);if(null!=a)if(a.id_relaboral,$(".msjs-alert").hide(),$("#hdnIdPersonaHistorialMovimiento").val(a.id_persona),$("#NombreParaMoverRegistro").html(a.nombres),1<=a.tiene_contrato_vigente){$("#jqxTabs").jqxTabs("enableAt",0),$("#jqxTabs").jqxTabs("disableAt",1),$("#jqxTabs").jqxTabs("disableAt",2),$("#jqxTabs").jqxTabs("disableAt",3),$("#jqxTabs").jqxTabs("enableAt",4),$("#jqxTabs").jqxTabs("disableAt",5),$("#jqxTabs").jqxTabs({selectedItem:4}),cargarGrillaMovilidad(a.id_relaboral,a.id_gerencia_administrativa);var t=obtenerRutaFoto(a.ci,a.num_complemento);$("#imgFotoPerfilMover").attr("src",t)}else{var i="Para acceder a la asignación de Movilidad Funcionaria, el estado de registro de Relación Laboral debe tener un estado ACTIVO.";$("#divMsjePorError").html(""),$("#divMsjePorError").append(i),$("#divMsjeNotificacionError").jqxNotification("open")}}else{var i="Debe seleccionar un registro necesariamente.";$("#divMsjePorError").html(""),$("#divMsjePorError").append(i),$("#divMsjeNotificacionError").jqxNotification("open")}}),$("#viewrowbutton").off(),$("#viewrowbutton").on("click",function(){var e=$("#jqxgrid").jqxGrid("getselectedrowindex");if(0<=e){var a=$("#jqxgrid").jqxGrid("getrowdata",e);if(null!=a){var t=a.id_relaboral;if($(".msjs-alert").hide(),$("#hdnIdPersonaHistorial").val(a.id_persona),0<=a.tiene_contrato_vigente){$("#jqxTabs").jqxTabs("enableAt",0),$("#jqxTabs").jqxTabs("disableAt",1),$("#jqxTabs").jqxTabs("disableAt",2),$("#jqxTabs").jqxTabs("disableAt",3),$("#jqxTabs").jqxTabs("disableAt",4),$("#jqxTabs").jqxTabs("enableAt",5),$("#jqxTabs").jqxTabs({selectedItem:5}),$("#tabFichaPersonal").jqxTabs({theme:"oasis",width:"100%",height:"100%",position:"top"}),$("#tabFichaPersonal").jqxTabs({selectedItem:0}),$("#ddNombres").html(a.nombres);var i=obtenerRutaFoto(a.ci,a.num_complemento);$("#imgFotoPerfilContactoPer").attr("src",i),$("#imgFotoPerfilContactoInst").attr("src",i),$("#imgFotoPerfil").attr("src",i),cargarPersonasContactos(a.id_persona),$("#hdnIdRelaboralVista").val(t),$("#hdnSwPrimeraVistaHistorial").val(0),cargarGestionesHistorialRelaboral(a.id_persona),cargarHistorialRelacionLaboral(a.id_persona,0,1),$("#divContent_"+a.id_relaboral).focus().select()}else{var n="Para acceder a la vista del registro, la persona debe haber tenido al menos un registro de relaci&oacute,n laboral que implica un estado ACTIVO o PASIVO.";$("#divMsjePorError").html(""),$("#divMsjePorError").append(n),$("#divMsjeNotificacionError").jqxNotification("open")}}}else{var n="Debe seleccionar un registro necesariamente.";$("#divMsjePorError").html(""),$("#divMsjePorError").append(n),$("#divMsjeNotificacionError").jqxNotification("open")}}),$("#btnBuscarCargo").off(),$("#btnBuscarCargo").on("click",function(){$("#divContenedorGrillaParaSeleccionarCargo").html("<div id='divGrillaParaSeleccionarCargo'></div>"),$("#popupGrillaCargo").modal("show"),definirGrillaParaSeleccionarCargoAcefalo(0,"",t)}),$("#btnBuscarCargoEditar").off(),$("#btnBuscarCargoEditar").on("click",function(){$("#divContenedorGrillaParaSeleccionarCargo").html("<div id='divGrillaParaSeleccionarCargo'></div>"),$("#popupGrillaCargo").modal("show"),definirGrillaParaSeleccionarCargoAcefaloParaEditar(0,"",t)})},columns:[{text:"Nro.",sortable:!1,filterable:!1,editable:!1,groupable:!1,draggable:!1,resizable:!1,columntype:"number",pinned:!0,width:50,cellsalign:"center",align:"center",cellsrenderer:rownumberrenderer},{text:"Nombres y Apellidos",columntype:"textbox",filtertype:"input",datafield:"nombres",pinned:!0,width:215,align:"center",hidden:a.hdnNombres.hidden},{text:"CI",columntype:"textbox",filtertype:"input",datafield:"ci",pinned:!0,width:90,cellsalign:"center",align:"center",hidden:a.hdnCi.hidden},{text:"Expd",filtertype:"checkedlist",datafield:"expd",filteritems:i,pinned:!0,width:40,cellsalign:"center",align:"center",hidden:a.hdnExpd.hidden},{text:"Genero",filtertype:"checkedlist",datafield:"genero",filteritems:["F","M"],pinned:!1,width:40,cellsalign:"center",align:"center",hidden:a.hdnGenero.hidden},{text:"Edad",filtertype:"checkedlist",datafield:"edad",filteritems:s,width:40,cellsalign:"center",align:"center",hidden:a.hdnEdad.hidden},{text:"Fecha Nac",datafield:"fecha_nac",filtertype:"range",width:100,cellsalign:"center",cellsformat:"dd-MM-yyyy",align:"center",hidden:a.hdnFechaNac.hidden},{text:"Fecha Cumple",datafield:"fecha_cumple",filtertype:"range",width:100,cellsalign:"center",cellsformat:"dd-MM-yyyy",align:"center",hidden:a.hdnFechaCumple.hidden},{text:"Estado",filtertype:"checkedlist",datafield:"estado_descripcion",filteritems:["ACTIVO","PASIVO",""],width:100,cellsalign:"center",align:"center",hidden:a.hdnEstadoDescripcion.hidden,cellclassname:cellclass},{text:"Activo",filtertype:"checkedlist",datafield:"tiene_contrato_vigente_descripcion",filteritems:["SI","NO",""],width:50,cellsalign:"center",align:"center",hidden:a.hdnActivo.hidden,cellclassname:cellclass},{text:"Ubicaci&oacute;n",filtertype:"checkedlist",filteritems:l,datafield:"ubicacion",width:150,cellsalign:"center",align:"center",hidden:a.hdnUbicacion.hidden},{text:"Condici&oacute;n",columntype:"textbox",filtertype:"checkedlist",datafield:"condicion",filteritems:o,width:150,cellsalign:"center",align:"center",hidden:a.hdnCondicion.hidden},{text:"Gerencia",filtertype:"checkedlist",datafield:"gerencia_administrativa",filteritems:r,width:220,align:"center",hidden:a.hdnGerencia.hidden},{text:"Departamento",filtertype:"checkedlist",datafield:"departamento_administrativo",filteritems:d,width:220,align:"center",hidden:a.hdnDepartamento.hidden},{text:"&Aacute;rea",columntype:"textbox",filtertype:"input",datafield:"area",width:220,align:"center",hidden:a.hdnArea.hidden},{text:"Proceso",columntype:"textbox",filtertype:"input",datafield:"proceso_codigo",width:220,cellsalign:"center",align:"center",hidden:a.hdnProcesoContratacion.hidden},{text:"Fuente",columntype:"textbox",filtertype:"input",datafield:"fin_partida",width:220,cellsalign:"center",align:"center",hidden:a.hdnFuente.hidden},{text:"Nivel Salarial",columntype:"textbox",filtertype:"input",datafield:"nivelsalarial",width:220,align:"center",hidden:a.hdnNivelSalarial.hidden},{text:"Cargo",columntype:"textbox",filtertype:"input",datafield:"cargo",width:215,align:"center",hidden:a.hdnCargo.hidden},{text:"Haber",filtertype:"checkedlist",filteritems:n,datafield:"sueldo",width:100,cellsalign:"right",align:"center",hidden:a.hdnHaber.hidden},{text:"Fecha Ingreso",datafield:"fecha_ing",filtertype:"range",width:100,cellsalign:"center",cellsformat:"dd-MM-yyyy",align:"center",hidden:a.hdnFechaIng.hidden},{text:"Fecha Inicio",datafield:"fecha_ini",filtertype:"range",width:100,cellsalign:"center",cellsformat:"dd-MM-yyyy",align:"center",hidden:a.hdnFechaIni.hidden},{text:"Fecha Incor.",datafield:"fecha_incor",filtertype:"range",width:100,cellsalign:"center",cellsformat:"dd-MM-yyyy",align:"center",hidden:a.hdnFechaIncor.hidden},{text:"Fecha Fin",datafield:"fecha_fin",filtertype:"range",width:100,cellsalign:"center",cellsformat:"dd-MM-yyyy",align:"center",hidden:a.hdnFechaFin.hidden},{text:"Fecha Baja",datafield:"fecha_baja",filtertype:"range",width:100,cellsalign:"center",cellsformat:"dd-MM-yyyy",align:"center",hidden:a.hdnFechaBaja.hidden},{text:"Motivo Baja",columntype:"textbox",filtertype:"input",datafield:"motivo_baja",width:100,hidden:a.hdnMotivoBaja.hidden},{text:"Antiguedad",columntype:"textbox",filtertype:"input",datafield:"antiguedad",filterable:!1,width:100,align:"center",hidden:a.hdnAntiguedad.hidden},{text:"Observacion",columntype:"textbox",filtertype:"input",datafield:"observacion",width:100,hidden:a.hdnObservacion.hidden}]})}$().ready(function(){$("#jqxTabs").jqxTabs("theme","oasis"),$("#jqxTabs").jqxTabs("enableAt",1),$("#jqxTabs").jqxTabs("disableAt",1),$("#jqxTabs").jqxTabs("disableAt",2),$("#jqxTabs").jqxTabs("disableAt",3),$("#jqxTabs").jqxTabs("disableAt",4),$("#jqxTabs").jqxTabs("disableAt",5),$("#HistorialSplitter").jqxSplitter({theme:"oasis",width:"100%",height:480,panels:[{size:"8%"},{size:"92%"}]}),cargarGestionesRelaborales((new Date).getFullYear());var t={hdnNombres:{title:"Nombres y Apellidos",selectable:!0,hidden:!0},hdnCi:{title:"CI",selectable:!1,hidden:!1},hdnExpd:{title:"Expd",selectable:!1,hidden:!1},hdnGenero:{title:"Genero",selectable:!0,hidden:!0},hdnEdad:{title:"Edad",selectable:!0,hidden:!0},hdnFechaNac:{title:"Fecha Nac",selectable:!0,hidden:!0},hdnFechaCumple:{title:"Fecha Cumple",selectable:!0,hidden:!0},hdnEstadoDescripcion:{title:"Estado",selectable:!1,hidden:!1},hdnActivo:{title:"Activo",selectable:!0,hidden:!0},hdnUbicacion:{title:"Ubicacion",selectable:!0,hidden:!0},hdnCondicion:{title:"Condicion",selectable:!0,hidden:!0},hdnGerencia:{title:"Gerencia",selectable:!1,hidden:!1},hdnDepartamento:{title:"Departamento",selectable:!0,hidden:!0},hdnArea:{title:"Area",selectable:!0,hidden:!0},hdnProcesoContratacion:{title:"Proceso",selectable:!0,hidden:!0},hdnFuente:{title:"Fuente",selectable:!0,hidden:!0},hdnNivelSalarial:{title:"Nivel",selectable:!0,hidden:!0},hdnCargo:{title:"Cargo",selectable:!0,hidden:!0},hdnHaber:{title:"Haber",selectable:!0,hidden:!0},hdnFechaIng:{title:"Fecha Ing",selectable:!0,hidden:!0},hdnFechaIni:{title:"Fecha Ini",selectable:!0,hidden:!0},hdnFechaIncor:{title:"Fecha Incor",selectable:!0,hidden:!0},hdnFechaFin:{title:"Fecha Fin",selectable:!0,hidden:!0},hdnFechaBaja:{title:"Fecha Baja",selectable:!0,hidden:!0},hdnMotivoBaja:{title:"Motivo Baja",selectable:!0,hidden:!0},hdnAntiguedad:{title:"Antiguedad",selectable:!0,hidden:!0},hdnObservacion:{title:"Observacion",selectable:!0,hidden:!0}};$.each(t,function(e,a){(1==$("#"+e).val()&&1==a.selectable||0==a.selectable||null==$("#"+e).val())&&(t[e].hidden=!1)}),defineColumnasOcultas("jqxgrid","divComboColumnasVisibles","chkAllColumnasVisibles",t),definirGrillaParaListaRelaborales($("#lstGestion").val(),t),habilitarCamposParaNuevoRegistroDeRelacionLaboral(),$("#btnGuardarEditar").click(function(){validaFormularioPorEditarRegistro()&&guardarRegistroEditado()}),$("#lstGestion").off(),$("#lstGestion").on("change",function(){definirGrillaParaListaRelaborales($(this).val(),t)}),$("#btnGuardarMovilidad").click(function(){0==$("#hdnIdRelaboralMovilidadBaja").val()?validaFormularioPorRegistroMovilidad()&&guardarRegistroMovilidad()&&$("#popupWindowNuevaMovilidad").jqxWindow("close"):validaFormularioPorBajaRegistroMovilidad()&&bajaRegistroMovilidad()&&$("#popupWindowNuevaMovilidad").jqxWindow("close")}),$("#btnCancelarNuevo").click(function(){$("#jqxTabs").jqxTabs("enableAt",0),$("#jqxTabs").jqxTabs("disableAt",1),$("#jqxTabs").jqxTabs("disableAt",2),$("#jqxTabs").jqxTabs("disableAt",3),$("#jqxTabs").jqxTabs("disableAt",4),$("#jqxTabs").jqxTabs("disableAt",5),$("#msjs-alert").hide(),deshabilitarCamposParaNuevoRegistroDeRelacionLaboral()}),$("#btnCancelarEditar").click(function(){$("#jqxTabs").jqxTabs("enableAt",0),$("#jqxTabs").jqxTabs("disableAt",1),$("#jqxTabs").jqxTabs("disableAt",2),$("#jqxTabs").jqxTabs("disableAt",3),$("#jqxTabs").jqxTabs("disableAt",4),$("#jqxTabs").jqxTabs("disableAt",5),$("#msjs-alert").hide(),deshabilitarCamposParaEditarRegistroDeRelacionLaboral()}),$("#btnCancelarBaja").click(function(){$("#jqxTabs").jqxTabs("enableAt",0),$("#jqxTabs").jqxTabs("disableAt",1),$("#jqxTabs").jqxTabs("disableAt",2),$("#jqxTabs").jqxTabs("disableAt",3),$("#jqxTabs").jqxTabs("disableAt",4),$("#jqxTabs").jqxTabs("disableAt",5),$("#msjs-alert").hide(),deshabilitarCamposParaBajaRegistroDeRelacionLaboral()}),$("#btnCancelarVista").click(function(){$("#jqxTabs").jqxTabs("enableAt",0),$("#jqxTabs").jqxTabs("disableAt",1),$("#jqxTabs").jqxTabs("disableAt",2),$("#jqxTabs").jqxTabs("disableAt",3),$("#jqxTabs").jqxTabs("disableAt",4),$("#jqxTabs").jqxTabs("disableAt",5),$("#msjs-alert").hide()}),$("#btnVolverDesdeMovilidad").click(function(){$("#jqxTabs").jqxTabs("enableAt",0),$("#jqxTabs").jqxTabs("disableAt",1),$("#jqxTabs").jqxTabs("disableAt",2),$("#jqxTabs").jqxTabs("disableAt",3),$("#jqxTabs").jqxTabs("disableAt",4),$("#jqxTabs").jqxTabs("disableAt",5),$("#msjs-alert").hide()}),$("#btnVolverDesdeBaja").click(function(){$("#jqxTabs").jqxTabs("enableAt",0),$("#jqxTabs").jqxTabs("disableAt",1),$("#jqxTabs").jqxTabs("disableAt",2),$("#jqxTabs").jqxTabs("disableAt",3),$("#jqxTabs").jqxTabs("disableAt",4),$("#jqxTabs").jqxTabs("disableAt",5),$("#msjs-alert").hide()}),$("#btnCancelarMovilidad").click(function(){$("#lstTipoMemorandum").off()}),$("#popupGrillaCargo").on("show",function(){$(this).find(".modal-body").css({width:"auto",height:"auto","max-height":"100%"})}),$("#chkAllCols").click(function(){1==this.checked?$("#jqxlistbox").jqxListBox("checkAll"):$("#jqxlistbox").jqxListBox("uncheckAll")}),$("#btnImprimirHistorial").on("click",function(){$("#HistorialSplitter").printArea({mode:"popup",popClose:!1})}),$("#lstMotivosBajas").change(function(){var e=this.value.split("_");$("#hdnFechaRenBaja").val(e[0]),$("#hdnFechaAceptaRenBaja").val(e[1]),$("#hdnFechaAgraServBaja").val(e[2]),0<e[0]?defineFechasBajas(e[1],e[2],e[3]):$("#divFechasBaja").hide()}),$("#chkAi").on("click",function(){var e=$("#txtCargoMovilidad").val();("object"==jQuery.type(e)&&(e=String(e.label)),null!=(e+="")&&""!=e)&&(1==this.checked?e.indexOf("a.i.")<0&&(e+=" a.i.",$("#txtCargoMovilidad").val(e)):0<e.indexOf("a.i.")&&(e=e.replace("a.i.","").trim(),$("#txtCargoMovilidad").val(e)))}),$("#liList").click(function(){$("#btnCancelarNuevo").click(),$("#btnCancelarEditar").click(),$("#btnCancelarBaja").click()}),$("#popupWindowNuevaMovilidad").jqxWindow({position:{x:300,y:200},height:700,width:"100%",resizable:!0,isModal:!0,autoOpen:!1,cancelButton:$("#btnCancelarMovilidad"),modalOpacity:.01}),$(".numeral").keyup(function(e){""!=$(this).val()&&$(this).val($(this).val().replace(/[^0-9]/g,""))}),$(".literal").keyup(function(e){""!=$(this).val()&&$(this).val($(this).val().replace(/[^A-Z,a-z,ñ,Ñ, ]/g,""))}),$("#divMsjeNotificacionError").jqxNotification({width:"100%",position:"bottom-right",opacity:.9,autoOpen:!1,animationOpenDelay:800,autoClose:!0,autoCloseDelay:7e3,template:"error"}),$("#divMsjeNotificacionWarning").jqxNotification({width:"100%",position:"bottom-right",opacity:.9,autoOpen:!1,animationOpenDelay:800,autoClose:!0,autoCloseDelay:7e3,template:"warning"}),$("#divMsjeNotificacionSuccess").jqxNotification({width:"100%",position:"bottom-right",opacity:.9,autoOpen:!1,animationOpenDelay:800,autoClose:!0,autoCloseDelay:7e3,template:"success"}),$("#txtMotivoMovilidad").jqxInput({width:300,height:35,placeHolder:"Introduzca el motivo de la comisión."}),$("#txtLugarMovilidad").jqxInput({width:300,height:35,placeHolder:"Introduzca el lugar donde se realizará el evento."}),$(document).keypress(OperaEvento),$(document).keyup(OperaEvento)});var rownumberrenderer=function(e,a,t,i,n,r){return"<div align='center'>"+(e+1)+"</div>"};function OperaEvento(e){"keyup"!=e.type&&"keydown"!=e.type||"27"!=e.which||($("#jqxTabs").jqxTabs("enableAt",0),$("#jqxTabs").jqxTabs("disableAt",1),$("#jqxTabs").jqxTabs("disableAt",2),$("#jqxTabs").jqxTabs("disableAt",3),$("#jqxTabs").jqxTabs("disableAt",4),$("#jqxTabs").jqxTabs("disableAt",5),$("#jqxTabs").jqxTabs({selectedItem:0}),$("#popupWindowCargo").jqxWindow("close"),$("#popupWindowNuevaMovilidad").jqxWindow("close"),$("#lstTipoMemorandum").off(),$("#jqxgrid").jqxGrid("focus"))}function procesaTextoAFecha(e,a){var t=e.split(a);return(e=new Date(t[1]+"/"+t[0]+"/"+t[2])).getTime()}function obtenerFiltrables(e){var a=null;return $.ajax({url:"/relaborales/getfilters/",type:"POST",datatype:"json",async:!1,cache:!1,data:{gestion:e},success:function(e){a=jQuery.parseJSON(e)},error:function(){alert("Se ha producido un error Inesperado")}}),a}function obtenerRutaFoto(e,a){var t="/images/perfil-profesional.jpg";return""!=e&&$.ajax({url:"/relaborales/obtenerrutafoto/",type:"POST",datatype:"json",async:!1,cache:!1,data:{ci:e,num_complemento:a},success:function(e){var a=jQuery.parseJSON(e);1==a.result&&(t=a.ruta)},error:function(){alert("Se ha producido un error Inesperado")}}),t}function fechaHoy(e,a){""==e&&(e="-");var t=new Date,i=t.getDate().toString(),n=(t.getMonth()+1).toString(),r=1===i.length?"0"+i:i,o=1===n.length?"0"+n:n;if("dd-mm-yyyy"==a)var d=r+e+o+e+t.getFullYear();else if("mm-dd-yyyy"==a)d=o+e+r+e+t.getFullYear();else d=t;return d}var cellclass=function(e,a,t){return"ACTIVO"==t?"verde":"EN PROCESO"==t?"amarillo":"PASIVO"==t?"rojo":""};function evalua(e){return 0<e}function habilitarCamposParaNuevoRegistroDeRelacionLaboral(){defineFechas()}function defineFechas(){$("#FechaIni").jqxDateTimeInput({enableBrowserBoundsDetection:!0,height:24,formatString:"dd-MM-yyyy"}),$("#FechaIncor").jqxDateTimeInput({enableBrowserBoundsDetection:!0,height:24,formatString:"dd-MM-yyyy"})}