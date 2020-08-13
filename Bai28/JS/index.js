window.onload=function myFuntion(){
	var enter=document.getElementById("Enter");
	enter.onclick=function(){
		var _url=document.getElementById("Url");
		window.open(_url.value);
	}
}