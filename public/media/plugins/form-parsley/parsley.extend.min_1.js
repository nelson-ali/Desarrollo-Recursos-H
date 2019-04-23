/* Parsley dist/parsley.extend.min.js build version 1.1.17 http://parsleyjs.org */
window.ParsleyConfig=window.ParsleyConfig||{};
(function(d){window.ParsleyConfig=d.extend(!0,{},window.ParsleyConfig,{validators:{minwords:function(a,b){a=a.replace(/(^\s*)|(\s*$)/gi,"");a=a.replace(/[ ]{2,}/gi," ");a=a.replace(/\n /,"\n");a=a.split(" ").length;return a>=b},maxwords:function(a,b){a=a.replace(/(^\s*)|(\s*$)/gi,"");a=a.replace(/[ ]{2,}/gi," ");a=a.replace(/\n /,"\n");a=a.split(" ").length;return a<=b},rangewords:function(a,b){a=a.replace(/(^\s*)|(\s*$)/gi,"");a=a.replace(/[ ]{2,}/gi," ");a=a.replace(/\n /,"\n");a=a.split(" ").length;
return a>=b[0]&&a<=b[1]},greaterthan:function(a,b,c){c.options.validateIfUnchanged=!0;return new Number(a)>new Number(d(b).val())},lessthan:function(a,b,c){c.options.validateIfUnchanged=!0;return new Number(a)<new Number(d(b).val())},beforedate:function(a,b){return Date.parse(a)<Date.parse(d(b).val())},afterdate:function(a,b){return Date.parse(d(b).val())<Date.parse(a)},inlist:function(a,b,c){return-1!==(b+"").split(RegExp("\\s*\\"+(c.options.inlistDelimiter||",")+"\\s*")).indexOf(a.trim())},luhn:function(a){a=
a.replace(/[ -]/g,"");var b,c,e,d,f;c=0;f=a.split("").reverse();b=e=0;for(d=f.length;e<d;b=++e)a=f[b],a=+a,b%2?(a*=2,c=10>a?c+a:c+(a-9)):c+=a;return 0===c%10},americandate:function(a){if(!/^([01]?[0-9])[\.\/-]([0-3]?[0-9])[\.\/-]([0-9]{4}|[0-9]{2})$/.test(a))return!1;var b=a.split(/[.\/-]+/);a=parseInt(b[1],10);var c=parseInt(b[0],10),b=parseInt(b[2],10);if(0==b||0==c||12<c)return!1;var d=[31,28,31,30,31,30,31,31,30,31,30,31];if(0==b%400||0!=b%100&&0==b%4)d[1]=29;return 0<a&&a<=d[c-1]}},messages:{minwords:"This value should have %s words at least.",
maxwords:"This value should have %s words maximum.",rangewords:"This value should have between %s and %s words.",greaterthan:"This value should be greater than %s.",lessthan:"This value should be less than %s.",beforedate:"This date should be before %s.",afterdate:"This date should be after %s.",luhn:"This value should pass the luhn test.",americandate:"This value should be a valid date (MM/DD/YYYY)."}})})(window.jQuery||window.Zepto);