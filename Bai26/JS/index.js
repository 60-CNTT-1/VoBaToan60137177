window.onload=function TimeNow(){
    var now= new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("time").innerHTML = "Bây giờ là "+h+":"+m+":"+s;
	var t = setTimeout(TimeNow, 500);
}
function checkTime(i){
    if (i < 10) {i = "0" + i}
    return i;
}