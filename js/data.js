window.onload = function() {  
var show = document.getElementById("show");  
setInterval(function() {   
var time = new Date();   // 程序计时的月从0开始取值后+1   
var m = time.getMonth() + 1;   
var t = time.getFullYear() + "/" + m + "/"     
	+ time.getDate() + " " + time.getHours() + ":"     
	+ time.getMinutes() + ":" + time.getSeconds();   
show.innerHTML = t;  
}, 1000); 
};