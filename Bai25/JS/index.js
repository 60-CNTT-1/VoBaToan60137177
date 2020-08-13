window.onload=function myFuntion(){
	var myselect = document.getElementById("year"), year = 1950;
	var n = function(max){
		do{myselect.add(new Option(year++,max--),null);}
		while(max>0);}(71);
}