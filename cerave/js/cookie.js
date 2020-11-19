function createCookie(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}

function countSpecial(str) {
   var punct = "/";
   let count = 0;
   for(var i = 0; i < str.length; i++){
      if(!punct.includes(str[i])){
         continue;
      };
      count++;
   };
   return count;
};



$(document).ready(function() {
	var pages = localStorage.getItem('visited');
  console.log(pages);
	if(pages === null ||  !pages.length){
	pages = '/';
}
	var url = window.location.href.toString().split(window.location.host)[1];
	var formattedUrl = url.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
	var page = formattedUrl + "/";
	if (!pages.includes(page)) {
	pages+=page;
}
	var json_str = pages;
	localStorage.setItem('visited', json_str);
	var progress = 	countSpecial(pages)/40 * 100;


	if ($('.account-info__progress')) {
	if (progress > 100) {progress = 100};
	$('.account-info__progress').attr("data-value", progress.toString() + "%");
	$('.account-info__progress-fill').css("width" , progress.toString() + "%");
}
})
