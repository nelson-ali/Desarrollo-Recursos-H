function exportarReporteHorariosYMarcaciones(d,o){columna=new Object,filtros=new Object,agrupados=new Object,ordenados=new Object,gestion=$("#divGridControlMarcaciones").jqxGrid("getcolumn","gestion"),mes_nombre=$("#divGridControlMarcaciones").jqxGrid("getcolumn","mes_nombre"),turno=$("#divGridControlMarcaciones").jqxGrid("getcolumn","turno"),modalidad_marcacion=$("#divGridControlMarcaciones").jqxGrid("getcolumn","modalidad_marcacion"),d1=$("#divGridControlMarcaciones").jqxGrid("getcolumn","d1"),estado1=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado1"),estado1_descripcion=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado1_descripcion"),d2=$("#divGridControlMarcaciones").jqxGrid("getcolumn","d2"),estado2=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado2"),estado2_descripcion=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado2_descripcion"),d3=$("#divGridControlMarcaciones").jqxGrid("getcolumn","d3"),estado3=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado3"),estado3_descripcion=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado3_descripcion"),d4=$("#divGridControlMarcaciones").jqxGrid("getcolumn","d4"),estado4=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado4"),estado4_descripcion=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado4_descripcion"),d5=$("#divGridControlMarcaciones").jqxGrid("getcolumn","d5"),estado5=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado5"),estado5_descripcion=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado5_descripcion"),d6=$("#divGridControlMarcaciones").jqxGrid("getcolumn","d6"),estado6=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado6"),estado6_descripcion=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado6_descripcion"),d7=$("#divGridControlMarcaciones").jqxGrid("getcolumn","d7"),estado7=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado7"),estado7_descripcion=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado7_descripcion"),d8=$("#divGridControlMarcaciones").jqxGrid("getcolumn","d8"),estado8=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado8"),estado8_descripcion=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado8_descripcion"),d9=$("#divGridControlMarcaciones").jqxGrid("getcolumn","d9"),estado9=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado9"),estado9_descripcion=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado9_descripcion"),d10=$("#divGridControlMarcaciones").jqxGrid("getcolumn","d10"),estado10=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado10"),estado10_descripcion=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado10_descripcion"),d11=$("#divGridControlMarcaciones").jqxGrid("getcolumn","d11"),estado11=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado11"),estado11_descripcion=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado11_descripcion"),d12=$("#divGridControlMarcaciones").jqxGrid("getcolumn","d12"),estado12=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado12"),estado12_descripcion=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado12_descripcion"),d13=$("#divGridControlMarcaciones").jqxGrid("getcolumn","d13"),estado13=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado13"),estado13_descripcion=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado13_descripcion"),d14=$("#divGridControlMarcaciones").jqxGrid("getcolumn","d14"),estado14=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado14"),estado14_descripcion=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado14_descripcion"),d15=$("#divGridControlMarcaciones").jqxGrid("getcolumn","d15"),estado15=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado15"),estado15_descripcion=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado15_descripcion"),d16=$("#divGridControlMarcaciones").jqxGrid("getcolumn","d16"),estado16=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado16"),estado16_descripcion=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado16_descripcion"),d17=$("#divGridControlMarcaciones").jqxGrid("getcolumn","d17"),estado17=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado17"),estado17_descripcion=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado17_descripcion"),d18=$("#divGridControlMarcaciones").jqxGrid("getcolumn","d18"),estado18=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado18"),estado18_descripcion=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado18_descripcion"),d19=$("#divGridControlMarcaciones").jqxGrid("getcolumn","d19"),estado19=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado19"),estado19_descripcion=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado19_descripcion"),d20=$("#divGridControlMarcaciones").jqxGrid("getcolumn","d20"),estado20=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado20"),estado20_descripcion=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado20_descripcion"),d21=$("#divGridControlMarcaciones").jqxGrid("getcolumn","d21"),estado21=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado21"),estado21_descripcion=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado21_descripcion"),d22=$("#divGridControlMarcaciones").jqxGrid("getcolumn","d22"),estado22=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado22"),estado22_descripcion=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado22_descripcion"),d23=$("#divGridControlMarcaciones").jqxGrid("getcolumn","d23"),estado23=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado23"),estado23_descripcion=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado23_descripcion"),d24=$("#divGridControlMarcaciones").jqxGrid("getcolumn","d24"),estado24=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado24"),estado24_descripcion=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado24_descripcion"),d25=$("#divGridControlMarcaciones").jqxGrid("getcolumn","d25"),estado25=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado25"),estado25_descripcion=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado25_descripcion"),d26=$("#divGridControlMarcaciones").jqxGrid("getcolumn","d26"),estado26=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado26"),estado26_descripcion=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado26_descripcion"),d27=$("#divGridControlMarcaciones").jqxGrid("getcolumn","d27"),estado27=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado27"),estado27_descripcion=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado27_descripcion"),d28=$("#divGridControlMarcaciones").jqxGrid("getcolumn","d28"),estado28=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado28"),estado28_descripcion=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado28_descripcion"),d29=$("#divGridControlMarcaciones").jqxGrid("getcolumn","d29"),estado29=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado29"),estado29_descripcion=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado29_descripcion"),d30=$("#divGridControlMarcaciones").jqxGrid("getcolumn","d30"),estado30=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado30"),estado30_descripcion=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado30_descripcion"),d31=$("#divGridControlMarcaciones").jqxGrid("getcolumn","d31"),estado31=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado31"),estado31_descripcion=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado31_descripcion"),ultimo_dia=$("#divGridControlMarcaciones").jqxGrid("getcolumn","ultimo_dia"),atrasos=$("#divGridControlMarcaciones").jqxGrid("getcolumn","atrasos"),faltas=$("#divGridControlMarcaciones").jqxGrid("getcolumn","faltas"),abandono=$("#divGridControlMarcaciones").jqxGrid("getcolumn","abandono"),omision=$("#divGridControlMarcaciones").jqxGrid("getcolumn","omision"),lsgh=$("#divGridControlMarcaciones").jqxGrid("getcolumn","lsgh"),agrupador=$("#divGridControlMarcaciones").jqxGrid("getcolumn","agrupador"),compensacion=$("#divGridControlMarcaciones").jqxGrid("getcolumn","compensacion"),observacion=$("#divGridControlMarcaciones").jqxGrid("getcolumn","observacion"),estado=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado"),estado_descripcion=$("#divGridControlMarcaciones").jqxGrid("getcolumn","estado_descripcion"),columna[gestion.datafield]={text:gestion.text,hidden:gestion.hidden},columna[mes_nombre.datafield]={text:mes_nombre.text,hidden:mes_nombre.hidden},columna[turno.datafield]={text:turno.text,hidden:turno.hidden},columna[modalidad_marcacion.datafield]={text:modalidad_marcacion.text,hidden:modalidad_marcacion.hidden},columna[estado_descripcion.datafield]={text:modalidad_marcacion.text,hidden:estado_descripcion.hidden},columna[d1.datafield]={text:d1.text,hidden:d1.hidden},columna[d2.datafield]={text:d2.text,hidden:d2.hidden},columna[d3.datafield]={text:d3.text,hidden:d3.hidden},columna[d4.datafield]={text:d4.text,hidden:d4.hidden},columna[d5.datafield]={text:d5.text,hidden:d5.hidden},columna[d6.datafield]={text:d6.text,hidden:d6.hidden},columna[d7.datafield]={text:d7.text,hidden:d7.hidden},columna[d8.datafield]={text:d8.text,hidden:d8.hidden},columna[d9.datafield]={text:d9.text,hidden:d9.hidden},columna[d10.datafield]={text:d10.text,hidden:d10.hidden},columna[d11.datafield]={text:d11.text,hidden:d11.hidden},columna[d12.datafield]={text:d12.text,hidden:d12.hidden},columna[d13.datafield]={text:d13.text,hidden:d13.hidden},columna[d14.datafield]={text:d14.text,hidden:d14.hidden},columna[d15.datafield]={text:d15.text,hidden:d15.hidden},columna[d16.datafield]={text:d16.text,hidden:d16.hidden},columna[d17.datafield]={text:d17.text,hidden:d17.hidden},columna[d18.datafield]={text:d18.text,hidden:d18.hidden},columna[d19.datafield]={text:d19.text,hidden:d19.hidden},columna[d20.datafield]={text:d20.text,hidden:d20.hidden},columna[d21.datafield]={text:d21.text,hidden:d21.hidden},columna[d22.datafield]={text:d22.text,hidden:d22.hidden},columna[d23.datafield]={text:d23.text,hidden:d23.hidden},columna[d24.datafield]={text:d24.text,hidden:d24.hidden},columna[d25.datafield]={text:d25.text,hidden:d25.hidden},columna[d26.datafield]={text:d26.text,hidden:d26.hidden},columna[d27.datafield]={text:d27.text,hidden:d27.hidden},columna[d28.datafield]={text:d28.text,hidden:d28.hidden},columna[d29.datafield]={text:d29.text,hidden:d29.hidden},columna[d30.datafield]={text:d30.text,hidden:d30.hidden},columna[d31.datafield]={text:d31.text,hidden:d31.hidden},columna[ultimo_dia.datafield]={text:ultimo_dia.text,hidden:ultimo_dia.hidden},columna[atrasos.datafield]={text:atrasos.text,hidden:atrasos.hidden},columna[faltas.datafield]={text:faltas.text,hidden:faltas.hidden},columna[abandono.datafield]={text:abandono.text,hidden:abandono.hidden},columna[omision.datafield]={text:omision.text,hidden:omision.hidden},columna[lsgh.datafield]={text:lsgh.text,hidden:lsgh.hidden},columna[observacion.datafield]={text:observacion.text,hidden:observacion.hidden};var i=$("#divGridControlMarcaciones").jqxGrid("groups");null!=i&&""!=i||(i="null");var e=$("#divGridControlMarcaciones").jqxGrid("getsortinformation");if(null!=e.sortcolumn){var t=e.sortcolumn,r=e.sortdirection;ordenados[t]={asc:r.ascending,desc:r.descending}}else ordenados="";for(var n=$("#divGridControlMarcaciones").jqxGrid("getrows"),a=$("#divGridControlMarcaciones").jqxGrid("getfilterinformation"),c=0,s=0;s<a.length;s++)for(var l=a[s],G=l.filter.getfilters(),m=0;m<G.length;m++){0<m&&c++,filtros[s+c]={columna:l.filtercolumn,valor:G[m].value,condicion:G[m].condition,tipo:G[m].type}}var x=n.length,u=JSON.stringify(filtros),g=JSON.stringify(columna),v=JSON.stringify(ordenados);g=btoa(utf8_encode(g)),u=btoa(utf8_encode(u)),v=btoa(utf8_encode(v));var C=btoa(utf8_encode(i));g=g.replace(/\+/g,"-").replace(/\//g,"_").replace(/\=+$/,""),u=u.replace(/\+/g,"-").replace(/\//g,"_").replace(/\=+$/,""),C=C.replace(/\+/g,"-").replace(/\//g,"_").replace(/\=+$/,""),v=v.replace(/\+/g,"-").replace(/\//g,"_").replace(/\=+$/,"");var j="";switch(d){case 1:j="/horariosymarcaciones/exportmarcacionesexcel/";break;case 2:j="/horariosymarcaciones/exportmarcacionespdf/"}""!=j&&window.open(j+o+"/"+x+"/"+g+"/"+u+"/"+C+"/"+v,"_blank")}function utf8_encode(d){if(null==d)return"";var o,i,e,t=d+"",r="";o=i=0,e=t.length;for(var n=0;n<e;n++){var a=t.charCodeAt(n),c=null;if(a<128)i++;else if(127<a&&a<2048)c=String.fromCharCode(a>>6|192,63&a|128);else if(55296!=(63488&a))c=String.fromCharCode(a>>12|224,a>>6&63|128,63&a|128);else{if(55296!=(64512&a))throw new RangeError("Unmatched trail surrogate at "+n);var s=t.charCodeAt(++n);if(56320!=(64512&s))throw new RangeError("Unmatched lead surrogate at "+(n-1));a=((1023&a)<<10)+(1023&s)+65536,c=String.fromCharCode(a>>18|240,a>>12&63|128,a>>6&63|128,63&a|128)}null!==c&&(o<i&&(r+=t.slice(o,i)),r+=c,o=i=n+1)}return o<i&&(r+=t.slice(o,e)),r}