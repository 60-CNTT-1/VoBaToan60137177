window.onload=function Event(){
	var bt=document.getElementById("bt");
	bt.onclick = function(){alert("This Message Appears When you exit a page!!!!");}
	window.onbeforeunload = function(){
    	return "Do you really want to close?";
	}
}