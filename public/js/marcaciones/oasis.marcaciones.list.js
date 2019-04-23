function definirGrillaParaListaControlMarcacionesPorIdRelaboral(e){var t=e.opcion,a=e.idOrganigrama,n=e.idArea,i=e.idUbicacion,r=e.idRelaboral,o=e.fechaIni,c=e.fechaFin,l=(new Date).getFullYear(),d=[l+"",l-1+""],s={datatype:"json",datafields:[{name:"nro_row",type:"integer"},{name:"nombres",type:"string"},{name:"ci",type:"string"},{name:"expd",type:"string"},{name:"gestion",type:"integer"},{name:"mes",type:"integer"},{name:"mes_nombre",type:"string"},{name:"fecha",type:"date"},{name:"hora",type:"string"},{name:"id_maquina",type:"integer"},{name:"maquina",type:"string"},{name:"observacion",type:"string"},{name:"estado",type:"string"},{name:"estado_descripcion",type:"string"},{name:"user_reg_id",type:"integer"},{name:"usuario",type:"string"},{name:"fecha_reg",type:"date"},{name:"fecha_ini_rango",type:"date"},{name:"fecha_fin_rango",type:"date"}],url:"/marcaciones/listbyrelaboral?opcion="+t+"&id="+r+"&id_organigrama="+a+"&id_area="+n+"&id_ubicacion="+i+"&id_relaboral="+r+"&fecha_ini="+o+"&fecha_fin="+c,cache:!1,root:"Rows",beforeprocessing:function(e){s.totalrecords=e[0].TotalRows},filter:function(){$("#divGridControlMarcaciones").jqxGrid("updatebounddata","filter")},sort:function(){$("#divGridControlMarcaciones").jqxGrid("updatebounddata","sort")}},u=new $.jqx.dataAdapter(s);!function(){var e=prepareSimulator("grid");$("#divGridControlMarcaciones").jqxGrid({theme:e,width:"100%",height:"420px",source:u,sortable:!0,altRows:!0,groupable:!0,columnsresize:!0,pageable:!0,pagerMode:"advanced",pagesize:10,virtualmode:!0,rendergridrows:function(e){return e.data},showfilterrow:!0,filterable:!0,showtoolbar:!0,autorowheight:!0,rendertoolbar:function(e){var t=$("<div></div>");e.append(t),t.append("<button title='Exportar a Excel.' id='exportexcelmrowbutton' class='btn btn-sm btn-primary' type='button'><i class='fi fi-xls fa-2x text-success' title='Exportar a Excel.'/></i></button>"),t.append("<button title='Exportar a PDF.' id='exportpdfmrowbutton' class='btn btn-sm btn-primary' type='button'><i class='fi fi-pdf fa-2x text-danger' title='Exportar a PDF.'/></i></button>"),t.append("<button title='Refrescar Grilla' id='refreshmbutton' class='btn btn-sm btn-primary' type='button'><i class='fa fa-repeat fa-2x text-default' title='Refrescar grilla.'/></i></button>"),t.append("<button title='Desagrupar.' id='cleargroupsmrowbutton' class='btn btn-sm btn-primary' type='button'><i class='fa fa-chain-broken fa-2x text-default' title='Desagrupar.'/></i></button>"),t.append("<button title='Desfiltrar.' id='clearfiltersmrowbutton' class='btn btn-sm btn-primary' type='button'><i class='gi gi-sorting fa-2x text-default' title='Desfiltrar.'/></i></button>"),$("#refreshmbutton").jqxButton(),$("#cleargroupsmrowbutton").jqxButton(),$("#clearfiltersmrowbutton").jqxButton(),$("#exportexcelmrowbutton").jqxButton(),$("#exportpdfmrowbutton").jqxButton(),$("#refreshmbutton").off(),$("#refreshmbutton").on("click",function(){$("#divGridControlMarcaciones").jqxGrid("updatebounddata")}),$("#cleargroupsmrowbutton").off(),$("#cleargroupsmrowbutton").on("click",function(){$("#divGridControlMarcaciones").jqxGrid("cleargroups")}),$("#clearfiltersmrowbutton").off(),$("#clearfiltersmrowbutton").on("click",function(){$("#divGridControlMarcaciones").jqxGrid("clearfilters")}),$("#exportexcelmrowbutton").off(),$("#exportexcelmrowbutton").on("click",function(){var e=$("#divListBoxControlMarcaciones").jqxListBox("getCheckedItems"),a=0;$.each(e,function(e,t){a++});var t=$("#hdnIdRelaboralControlMarcaciones").val(),n=$("#txtFechaIniControlMarcaciones").val(),i=$("#txtFechaFinControlMarcaciones").val();if(0<t&&0<a&&""!=n&&""!=i)exportarReporteControlMarcaciones(1,t,n,i);else{var r="";0==a&&(r="Debe seleccionar al menos una columna para la obtención del reporte solicitado."),0==a&&""!=n&&""!=i&&(r+="</br>"),""!=n&&""!=i&&(r+="Debe seleccionar la fecha de inicio y finalizaci&oacute;n necesariamente para la obtenci&oacute;n del reporte solicitado."),$("#divMsjePorWarning").html(""),$("#divMsjePorWarning").append(r),$("#divMsjeNotificacionWarning").jqxNotification("open"),$("#divListBoxMarcaciones").focus()}}),$("#exportpdfmrowbutton").off(),$("#exportpdfmrowbutton").on("click",function(){var e=$("#divListBoxControlMarcaciones").jqxListBox("getCheckedItems"),a=0;$.each(e,function(e,t){a++});var t=$("#hdnIdRelaboralControlMarcaciones").val(),n=$("#txtFechaIniControlMarcaciones").val(),i=$("#txtFechaFinControlMarcaciones").val();if(0<t&&0<a)exportarReporteControlMarcaciones(2,t,n,i);else{$("#divMsjePorWarning").html(""),$("#divMsjePorWarning").append("Debe seleccionar al menos una columna para la obtención del reporte solicitado."),$("#divMsjeNotificacionWarning").jqxNotification("open"),$("#divListBoxMarcaciones").focus()}})},columns:[{text:"Nro.",filterable:!1,columntype:"number",width:40,cellsalign:"center",align:"center",pinned:!0,cellsrenderer:rownumberrenderer},{text:"Nombres y Apellidos",filterable:!1,datafield:"nombres",width:300,align:"center",pinned:!0,hidden:!1},{text:"CI",filterable:!1,datafield:"ci",width:80,cellsalign:"center",align:"center",pinned:!0,hidden:!1},{text:"Exp",filterable:!1,datafield:"expd",width:40,cellsalign:"center",align:"center",pinned:!0,hidden:!1},{text:"Gesti&oacute;n",filtertype:"checkedlist",filteritems:d,datafield:"gestion",width:60,cellsalign:"center",align:"center",hidden:!1},{text:"Mes",filtertype:"checkedlist",filteritems:["ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"],datafield:"mes_nombre",width:100,cellsalign:"center",align:"center",hidden:!1},{text:"Fecha",datafield:"fecha",filtertype:"range",width:90,cellsalign:"center",cellsformat:"dd-MM-yyyy",align:"center",hidden:!1},{text:"Hora",filtertype:"checkedlist",datafield:"hora",width:70,cellsalign:"center",align:"center",hidden:!1},{text:"M&aacute;quina",columntype:"textbox",filtertype:"input",datafield:"maquina",width:200,cellsalign:"center",align:"center",hidden:!1},{text:"Usuario Descarga",columntype:"textbox",filtertype:"input",datafield:"usuario",width:200,cellsalign:"center",align:"center",hidden:!0},{text:"Fecha Descarga",datafield:"fecha_reg",filtertype:"range",width:90,cellsalign:"center",cellsformat:"dd-MM-yyyy",align:"center",hidden:!0},{text:"Fecha Ini Rango",datafield:"fecha_ini_rango",filtertype:"range",width:90,cellsalign:"center",cellsformat:"dd-MM-yyyy",align:"center",hidden:!0},{text:"Fecha Fin Rango",datafield:"fecha_fin_rango",filtertype:"range",width:90,cellsalign:"center",cellsformat:"dd-MM-yyyy",align:"center",hidden:!0},{text:"Observaci&oacute;n",columntype:"textbox",filtertype:"input",datafield:"observacion",width:150,align:"center",hidden:!0}]});$("#divListBoxControlMarcaciones").jqxListBox({source:[{label:"Nombres",value:"nombres",checked:!0},{label:"CI",value:"ci",checked:!0},{label:"Expd",value:"expd",checked:!0},{label:"Gesti&oacute;n",value:"gestion",checked:!0},{label:"Mes",value:"mes_nombre",checked:!0},{label:"Fecha",value:"fecha",checked:!0},{label:"Hora",value:"hora",checked:!0},{label:"M&aacute;quina",value:"maquina",checked:!0},{label:"Usuario Descarga",value:"usuario",checked:!1},{label:"Fecha Descarga",value:"fecha_reg",checked:!1},{label:"Fecha Ini Rango",value:"fecha_ini_rango",checked:!1},{label:"Fecha Fin Rango",value:"fecha_fin_rango",checked:!1},{label:"Observaci&oacute;n",value:"observacion",checked:!1}],width:"100%",height:430,checkboxes:!0}),$("#divListBoxControlMarcaciones").on("checkChange",function(e){$("#divGridControlMarcaciones").jqxGrid("beginupdate"),e.args.checked?$("#divGridControlMarcaciones").jqxGrid("showcolumn",e.args.value):$("#divGridControlMarcaciones").jqxGrid("hidecolumn",e.args.value),$("#divGridControlMarcaciones").jqxGrid("endupdate")})}()}var rownumberrenderer=function(e,t,a,n,i,r){return"<div align='center'>"+(e+1)+"</div>"},cellsrenderer=function(e,t,a,n){return $(n)[0].outerHTML};