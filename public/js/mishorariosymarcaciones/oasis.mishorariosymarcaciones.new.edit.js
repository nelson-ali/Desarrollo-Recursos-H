function inicializarFormularioControlExcepcionesNuevoEditar(i,o,e,r,a,n,c,t,s){var d="New";2==i&&(d="Edit"),$("#txtFechaIni"+d).datepicker("update",""),$("#txHoraIni"+d).val(""),$("#txtFechaIni"+d).datepicker("update",""),$("#txtHoraFin"+d).val(""),$("#txtJustificacion"+d).val(""),$("#txtObservacion"+d).val(""),2==i&&($("#txtFechaIni"+d).datepicker("update",r),$("#txtHoraIni"+d).val(a),$("#txtFechaFin"+d).datepicker("update",n),$("#txtHoraFin"+d).val(c)),$("#txtFechaIni"+d).datepicker("hiden"),$("#txtFechaFin"+d).datepicker("hiden"),$("#txtJustificacion"+d).val(t),$("#txtObservacion"+d).val(s);var p=$("#txtHoraIni"+d).clockpicker({placement:"bottom",align:"left",autoclose:!0,default:"now"}).on("changeDate",function(i){$(this).hide()});$("#aHoraIni"+d).off(),$("#aHoraIni"+d).on("click",function(i){i.stopPropagation(),p.clockpicker("show")});var l=$("#txtHoraFin"+d).clockpicker({placement:"bottom",align:"left",autoclose:!0,default:"now"}).on("changeDate",function(i){$(this).hide()});$("#aHoraFin"+d).off(),$("#aHoraFin"+d).on("click",function(i){i.stopPropagation(),l.clockpicker("show")}),cargaListaDeExcepciones(i,e)}function cargaListaDeExcepciones(i,e){var r="New";2==i&&(r="Edit");var a="";$("#lstExcepcion"+r).html(""),$("#lstExcepcion"+r).append("<option value=''>Seleccionar..</option>"),$("#lstExcepcion"+r).prop("disabled",!0),$.ajax({url:"/excepciones/list/",type:"POST",datatype:"json",async:!1,cache:!1,success:function(i){var o=jQuery.parseJSON(i);0<o.length&&($("#lstExcepcion"+r).prop("disabled",!1),$.each(o,function(i,o){a=e==o.id?"selected":"",$("#lstExcepcion"+r).append("<option value='"+o.id+"' "+a+">"+o.excepcion+"</option>")}))},error:function(){$("#divMsjePorError").html(""),$("#divMsjePorError").append("Se ha producido un error Inesperado"),$("#divMsjeNotificacionError").jqxNotification("open")}})}function limpiarMensajesErrorPorValidacionControlExcepcion(i){var o="New";2==i&&(o="Edit"),$("#divExcepcion"+o).removeClass("has-error"),$("#helpErrorExcepcion"+o).html(""),$("#divFechaIni"+o).removeClass("has-error"),$("#helpErrorFechaIni"+o).html(""),$("#divHoraIni"+o).removeClass("has-error"),$("#helpErrorHoraIni"+o).html(""),$("#divFechaFin"+o).removeClass("has-error"),$("#helpErrorFechaFin"+o).html(""),$("#divHoraFin"+o).removeClass("has-error"),$("#helpErrorHoraFin"+o).html(""),$("#divJustificacion"+o).removeClass("has-error"),$("#helpErrorJustificacion"+o).html("")}function guardaControlExcepciones(i){var e=!1,o=0,r="New";2==i&&(o=$("#hdnIdControlExcepcionEdit").val(),r="Edit");var a=$("#hdnIdRelaboral"+r).val(),n=$("#lstExcepcion"+r).val(),c=$("#txtFechaIni"+r).val(),t=$("#txtHoraIni"+r).val(),s=$("#txtFechaFin"+r).val(),d=$("#txtHoraFin"+r).val(),p=$("#txtJustificacion"+r).val(),l=$("#txtObservacion"+r).val();return""!=n&&0<n&&$.ajax({url:"/controlexcepciones/save/",type:"POST",datatype:"json",async:!1,cache:!1,data:{id:o,relaboral_id:a,excepcion_id:n,fecha_ini:c,hora_ini:t,fecha_fin:s,hora_fin:d,justificacion:p,observacion:l},success:function(i){var o=jQuery.parseJSON(i);$(".msjes").hide(),1==o.result?(e=!0,$("#divMsjePorSuccess").html(""),$("#divMsjePorSuccess").append(o.msj),$("#divMsjeNotificacionSuccess").jqxNotification("open"),$("#divGridControlExcepciones").jqxGrid("updatebounddata")):0==o.result?($("#divMsjePorWarning").html(""),$("#divMsjePorWarning").append(o.msj),$("#divMsjeNotificacionWarning").jqxNotification("open")):($("#divMsjePorError").html(""),$("#divMsjePorError").append(o.msj),$("#divMsjeNotificacionError").jqxNotification("open"))},error:function(){$("#divMsjePorError").html(""),$("#divMsjePorError").append("Se ha producido un error Inesperado"),$("#divMsjeNotificacionError").jqxNotification("open")}}),e}function verificaCruceDeHorarios(i,o,e,r,a,n,c,t){var s=!1;return $.ajax({url:"/controlexcepciones/verificacruce/",type:"POST",datatype:"json",async:!1,cache:!1,data:{id:i,relaboral_id:o,excepcion_id:e,excepcion_id:e,fecha_ini:r,hora_ini:a,fecha_fin:n,hora_fin:c,justificacion:t},success:function(i){var o=jQuery.parseJSON(i);$(".msjes").hide(),0==o.result?s=!0:1==o.result?($("#divMsjePorWarning").html(""),$("#divMsjePorWarning").append(o.msj),$("#divMsjeNotificacionWarning").jqxNotification("open")):($("#divMsjePorError").html(""),$("#divMsjePorError").append(o.msj),$("#divMsjeNotificacionError").jqxNotification("open"))},error:function(){$("#divMsjePorError").html(""),$("#divMsjePorError").append("Se ha producido un error Inesperado"),$("#divMsjeNotificacionError").jqxNotification("open")}}),s}