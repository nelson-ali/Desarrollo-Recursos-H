function limpiarMensajesErrorPorValidacionEditarRegistro(){$("#helpErrorUbicacionesEditar").html(""),$("#helpErrorProcesosEditar").html(""),$("#helpErrorCategoriasEditar").html(""),$("#helpErrorNumContratosEditar").html(""),$("#helpErrorItemsEditar").html(""),$("#helpErrorFechasIniEditar").html(""),$("#helpErrorFechasIncorEditar").html(""),$("#helpErrorFechasFinEditar").html(""),$("#divUbicacionesEditar").removeClass("has-error"),$("#divProcesosEditar").removeClass("has-error"),$("#divCategoriasEditar").removeClass("has-error"),$("#divFechasIniEditar").removeClass("has-error"),$("#divFechasIncorEditar").removeClass("has-error"),$("#divFechasFinEditar").removeClass("has-error"),$("#divNumContratosEditar").removeClass("has-error"),$("#divItemsEditar").removeClass("has-error"),$("#tr_cargo_seleccionado_editar").html("")}function guardarRegistroEditado(){var a=!0,r=$("#hdnIdRelaboralEditar").val(),e=0;null!=$("#lstAreasEditar").val()&&(e=$("#lstAreasEditar").val());var i=$("#hdnIdPersonaSeleccionadaEditar").val(),s=$("#hdnIdCargoSeleccionadoEditar").val(),t=$("#lstUbicacionesEditar").val(),o=$("#lstProcesosEditar").val(),d=$("#hdnIdCondicionEditableSeleccionada").val(),l="",n=null;if(2==d||3==d){l=$("#txtNumContratoEditar").val();n=$("#FechaFinEditar").jqxDateTimeInput("getText")}var c=$("#FechaIniEditar").jqxDateTimeInput("getText"),h=$("#FechaIncorEditar").jqxDateTimeInput("getText"),E=$("#txtObservacionEditar").val();if(0<r&&0<i&&0<s)a=$.ajax({url:"/relaborales/save/",type:"POST",datatype:"json",async:!1,data:{id:r,id_persona:i,id_cargo:s,num_contrato:l,id_area:e,id_ubicacion:t,id_regional:1,id_procesocontratacion:o,fecha_inicio:c,fecha_incor:h,fecha_fin:n,observacion:E},success:function(a){var r=jQuery.parseJSON(a);$(".msjes").hide(),1==r.result?($("#divMsjeExito").show(),$("#divMsjeExito").addClass("alert alert-success alert-dismissable"),$("#aMsjeExito").html(r.msj),$("#jqxTabs").jqxTabs("enableAt",0),$("#jqxTabs").jqxTabs("disableAt",1),$("#jqxTabs").jqxTabs("disableAt",2),$("#jqxTabs").jqxTabs("disableAt",3),deshabilitarCamposParaEditarRegistroDeRelacionLaboral(),$("#jqxgrid").jqxGrid("updatebounddata")):0==r.result?($("#divMsjePeligro").show(),$("#divMsjePeligro").addClass("alert alert-warning alert-dismissable"),$("#aMsjePeligro").html(r.msj)):($("#divMsjeError").show(),$("#divMsjeError").addClass("alert alert-danger alert-dismissable"),$("#aMsjeError").html(r.msj))},error:function(){alert("Se ha producido un error Inesperado")}});else a=!1;return a}