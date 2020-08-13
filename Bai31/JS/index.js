window.onload=function Event(){
	var save=document.getElementById("save");
	save.onclick=function(){
		var text=document.getElementById("data");
		var	t=text.value;
		var time=new Date();
		var h=time.getHours();
		var m=time.getMinutes();
			m=checkTime(m);
		var d=time.getDate();
		var mo=time.getMonth()+1;
		var y=time.getFullYear();
		
		document.getElementById("content").innerHTML=t+" - "+h+":"+m+" "+d+"/"+mo+"/"+y+"<br>"+document.getElementById("content").innerHTML;
		
	}
	function checkTime(i) {
    if (i < 10) {i = "0" + i}
    return i;
	}
	
}