function getCookie(n){for(var e=n+"=",t=decodeURIComponent(document.cookie).split(";"),g=0;g<t.length;g++){for(var o=t[g];" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(e))return o.substring(e.length,o.length)}}function setCookie(n,e,t){var g=new Date;g.setTime(g.getTime()+24*t*60*60*1e3);var o="expires="+g.toUTCString();document.cookie=n+"="+e+";"+o+";path=/"}var g_lang=getLang();function getLang(){return g_lang||getCookie("lang")||"en"}function setLang(n){var e="en"==n?"hi":"en",t="en"==n?"English":"हिंदी",g="en"==n?"हिंदी ":"English";$("#selected_option").html(t),$("#other_option").html(g),$("."+n).removeClass("d-none"),$("."+e).addClass("d-none")}function changeLang(){var n=getLang();return setCookie("lang",g_lang="en"==n?"hi":"en",365),setLang(g_lang),g_lang}setLang(g_lang);