function obtenerGestionesPorPersona(e){var t=[];return $.ajax({url:"/relaborales/listgestionesporpersona",type:"POST",datatype:"json",async:!1,cache:!1,data:{id:e},success:function(e){var a=jQuery.parseJSON(e);0<a.length&&$.each(a,function(e,a){t.push(a.gestion)})}}),t}function getDescuentosPorPersona(e){var t=null;return $.ajax({url:"/planillassal/getdescuentospersonales/",type:"POST",datatype:"json",data:{gestion:e},async:!1,cache:!1,success:function(e){var a=jQuery.parseJSON(e);t=a},error:function(){}}),t}function cargarDescuentosPorPersonaEnGestion(e){var t=[],n=[],s=[],o=[],r=[],l=[];for(i=0;i<12;i++)t[i]=0,n[i]=0,s[i]=0,o[i]=0,r[i]=0,l[i]=0;var a=getDescuentosPorPersona(e);0<a.length&&$.each(a,function(e,a){t[a.mes-1]=parseFloat(a.atrasos),n[a.mes-1]=parseFloat(a.faltas),s[a.mes-1]=parseFloat(a.lsgh),o[a.mes-1]=parseFloat(a.abandono),r[a.mes-1]=parseFloat(a.omision),l[a.mes-1]=parseFloat(a.otros)}),$("#container").highcharts({chart:{type:"column"},title:{text:"Descuentos Mensuales"},subtitle:{text:"Fuente: Planillas Salariales"},xAxis:{categories:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]},yAxis:{min:0,title:{text:"Descuento (días)"}},tooltip:{headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f} días</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0},plotOptions:{column:{pointPadding:.2,borderWidth:0}},series:[{name:"Atrasos",data:t},{name:"Faltas",data:n},{name:"Lsgh",data:s},{name:"Abandono",data:o},{name:"Omisión",data:r}]})}function cargarTorta(e,a){var t=[];return $.ajax({url:"/Index/getdatospie/",type:"POST",datatype:"json",async:!1,data:{id_encuesta:e,id_pregunta:a},success:function(e){var a=jQuery.parseJSON(e);0<a.length&&$.each(a,function(e,a){t.push({name:a.opcion_respuesta,y:parseFloat(a.cantidad),drilldown:a.cantidad})})},error:function(){alert("Se ha producido un error Inesperado")}}),t}$().ready(function(){var e=obtenerGestionesPorPersona($("#hdnIdPersona").val());0<e.length&&($("#lstGestion").html(""),$.each(e,function(e,a){$("#lstGestion").append("<option value='"+a+"'>"+a+"</option>")})),null!=$("#hdnIdPersona").val()&&(cargarDescuentosPorPersonaEnGestion($("#lstGestion").val()),$("#lstGestion").off(),$("#lstGestion").on("change",function(){cargarDescuentosPorPersonaEnGestion($("#lstGestion").val())}))});