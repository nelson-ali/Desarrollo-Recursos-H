function cargarDatosDestinatariosFormulario(i,e,a){var o="divDestinatarioPrincipal",r="divDestinatarioSecundario",t=0,n=0,c=0,d="",s="";$("#chkDestinatarioSecundario").prop("checked",!1),$("#divCheckAndDestinatarioSecundario").hide(),$("#hdnIdRelSolicitante").val(i.id_relaboral),$("#hdnIdControlExcepcionEnvio").val(e.id),$("#hdnIntermediacion").val(c);var l=verificaRequerimientoAprobacionDirectaConsiderandoOrganigrama(i.id_relaboral,i.id_persona,fechaConvertirAFormato(e.fecha_ini),o);if(0<l)t=l,n=0,d="<div class='block'><p>Solicitud de Excepci&oacute;n por <b>"+e.excepcion+"</b>.</p></div>",$("#divAsunto").html(d),s="<div class='block'><p>"+e.justificacion+"</p></div>",$("#divJustificacion").html(s),$("#hdnAprobacionDirecta").val(1),$("#hdnIdRelDestPrincipal").val(t),$("#hdnIdRelDestSecundario").val(n),$("#txtMensajeAdicional").val(""),$("#txtMensajeAdicional").focus(),0<(n=despliegaWidgetDestinatarioFijo(t,r))?($("#divCheckAndDestinatarioSecundario").show(),$("#chkDestinatarioSecundario").prop("checked",!0)):$("#divCheckAndDestinatarioSecundario").hide();else if(c=-1,c=0===a?verificaAplicabilidadDeIntermediario(i.departamento_administrativo,i.cargo):2,$("#chkDestinatarioSecundario").prop("checked",!1),$("#divCheckAndDestinatarioSecundario").hide(),$("#hdnIdRelSolicitante").val(i.id_relaboral),$("#hdnIdControlExcepcionEnvio").val(e.id),$("#hdnIntermediacion").val(c),0<=c)if($("#"+r).html(""),$("#"+r).html(""),$("#divCheckAndDestinatarioSecundario").hide(),$("#hdnAprobacionDirecta").val(0),$("#divCheckAndDestinatarioSecundario").show(),0===c||2===c)(n=0)<(t=despliegaWidgetDestinatarioFijo(i.id_relaboral,o))&&(0<(n=despliegaWidgetDestinatarioFijo(t,r))?$("#divCheckAndDestinatarioSecundario").show():$("#divCheckAndDestinatarioSecundario").hide()),d="<div class='block'><p>Solicitud de Excepci&oacute;n por <b>"+e.excepcion+"</b>.</p></div>",$("#divAsunto").html(d),s="<div class='block'><p>"+e.justificacion+"</p></div>",$("#divJustificacion").html(s),$("#hdnIdRelDestPrincipal").val(t),$("#hdnIdRelDestSecundario").val(n),$("#txtMensajeAdicional").val(""),$("#txtMensajeAdicional").focus();else{var p,u,v=despliegaSelectDestinatariosSeleccionables(i.id_departamento_administrativo,i.cargo,0,o);p={localdata:v,datatype:"array"},u=new $.jqx.dataAdapter(p);$("#divDestinatarioPrincipal").html("<div style='border: none;' id='lstBoxDestinatariosPrincipales'></div>"),$("#lstBoxDestinatariosPrincipales").jqxListBox({multiple:!0,checkboxes:!0,filterable:!0,allowDrop:!0,allowDrag:!0,source:u,width:"100%",height:250,displayMember:"nombres",valueMember:"id_relaboral",renderer:function(i,e,a){var o=v[i];if(null!=o){var r="<div class='widget'>";return r+="<div class='widget-simple themed-background-default'>",r+="<a href='page_ready_user_profile.html'>",r+="<img src='"+o.ruta_foto+"' class='widget-image img-circle pull-left'>",r+="</a>",r+="<h4 class='widget-content widget-content-light'>",r+="<a href='#'>",r+="<strong>"+o.nombres+"</strong>",r+="</a>",r+="<small>"+o.cargo+"</small>",r+="</h4>",r+="</div></div>"}}}),n=despliegaWidgetDestinatarioFijo(i.id_relaboral,r),d="<div class='block'><p>Solicitud de Excepci&oacute;n por <b>"+e.excepcion+"</b>.</p></div>",$("#divAsunto").html(d),s="<div class='block'><p>"+e.justificacion+"</p></div>",$("#divJustificacion").html(s),$("#hdnIdRelSolicitante").val(i.id_relaboral),$("#hdnIdControlExcepcionEnvio").val(e.id),$("#hdnIdRelDestPrincipal").val(n),$("#hdnIdRelDestSecundario").val(n),$("#txtMensajeAdicional").val(""),$("#txtMensajeAdicional").focus()}else $("#divMsjePorSuccess").append("No se encontr&oacute; el registro de Gerencia Administrativa, verifique nuevemante."),$("#divMsjeNotificacionSuccess").jqxNotification("open"),$("#divGridControlExcepciones").jqxGrid("updatebounddata")}function verificaAplicabilidadDeIntermediario(i,e){var a=0;return $.ajax({url:"/misboletasexcepciones/verificaintemerdiacion/",type:"POST",datatype:"json",data:{departamento_administrativo:i,cargo:e},async:!1,cache:!1,success:function(i){var e=jQuery.parseJSON(i);a=e.result},error:function(){a=-2}}),a}function despliegaWidgetDestinatarioFijo(i,o){var r="",t=0;return $.ajax({url:"/relaborales/getinmediatojefesuperior/",type:"POST",datatype:"json",data:{id_relaboral:i,cantidad:1},async:!1,cache:!1,success:function(i){var e=jQuery.parseJSON(i);if(1==e.length){var a=e[0];r="<div class='widget'>",r+="<div class='widget-simple themed-background-default'>",r+="<a href='page_ready_user_profile.html'>",r+="<img src='"+a.ruta_foto+"' class='widget-image img-circle pull-left'>",r+="</a>",r+="<h4 class='widget-content widget-content-light'>",r+="<a href='#'>",r+="<strong>"+a.nombres+"</strong>",r+="</a>",r+="<small>"+a.cargo+"</small>",r+="</h4>",r+="</div></div>",$("#"+o).html(r),t=a.id_relaboral}}}),t}function verificaRequerimientoAprobacionDirectaConsiderandoOrganigrama(i,e,a,r){var t=0;return $.ajax({url:"/relaborales/getaprobadordirectopororg/",type:"POST",datatype:"json",data:{id_relaboral:i,id_persona:e,fecha:a},async:!1,cache:!1,success:function(i){var e=jQuery.parseJSON(i);if(1==e.length){var a=e[0],o="<div class='widget'>";o+="<div class='widget-simple themed-background-default'>",o+="<a href='page_ready_user_profile.html'>",o+="<img src='"+a.ruta_foto+"' class='widget-image img-circle pull-left'>",o+="</a>",o+="<h4 class='widget-content widget-content-light'>",o+="<a href='#'>",o+="<strong>"+a.nombres+"</strong>",o+="</a>",o+="<small>"+a.cargo+"</small>",o+="</h4>",o+="</div></div>",$("#"+r).html(o),t=a.id_relaboral}}}),t}function despliegaSelectDestinatariosSeleccionables(i,e,a,o){var r=[];return $.ajax({url:"/relaborales/getintermediariospordepartamento/",type:"POST",datatype:"json",data:{id_organigrama:i,cargo:e,cantidad:0},async:!1,cache:!1,success:function(i){r=jQuery.parseJSON(i)}}),r}function enviarMensajeSolicitudExcepcion(i,e,a,o,r,t,n){var c=!1;return $.ajax({url:"/misboletasexcepciones/enviomensaje/",type:"POST",datatype:"json",data:{id_rel_solicitante:i,id_rel_dest_principal:e,id_rel_dest_secundario:a,id_controlexcepcion:o,mensaje_adicional:r,operacion:t,copia_destinatario_secundario:n},async:!1,cache:!1,beforeSend:function(){$("#divCarga").show()},complete:function(){$("#divCarga").hide()},success:function(i){var e=jQuery.parseJSON(i);c=e.result,1==e.result?(c=!0,$("#divMsjePorSuccess").html(""),$("#divMsjePorSuccess").append(e.msj),$("#divMsjeNotificacionSuccess").jqxNotification("open"),$("#divGridControlExcepciones").jqxGrid("updatebounddata")):0==e.result?(c=!1,$("#divMsjePorWarning").html(""),$("#divMsjePorWarning").append(e.msj),$("#divMsjeNotificacionWarning").jqxNotification("open"),(4<=e.estado||e.estado<0)&&(c=!0,$("#divGridControlExcepciones").jqxGrid("updatebounddata"))):(c=!1,$("#divMsjePorError").html(""),$("#divMsjePorError").append(e.msj),$("#divMsjeNotificacionError").jqxNotification("open"))}}),c}function controlaPlazoDeSolicitudBoleta(i){var a=!1;return $.ajax({url:"/misboletasexcepciones/vervalideztemporalidadsolicitud/",type:"POST",datatype:"json",data:{id_controlexcepcion:i},async:!1,cache:!1,success:function(i){var e=jQuery.parseJSON(i);1==e.result?a=!0:(a=!1,$("#divMsjePorError").html(""),$("#divMsjePorError").append(e.msj),$("#divMsjeNotificacionError").jqxNotification("open"))}}),a}function controlaValidezPlazoDeSolicitudBoleta(i,e){var a=!1;return $.ajax({url:"/misboletasexcepciones/verificavalideztemporalidadsolicitud/",type:"POST",datatype:"json",data:{id_relaboral:i,fecha:e},async:!1,cache:!1,success:function(i){var e=jQuery.parseJSON(i);1==e.result?a=!0:(a=!1,$("#divMsjePorError").html(""),$("#divMsjePorError").append(e.msj),$("#divMsjeNotificacionError").jqxNotification("open"))}}),a}