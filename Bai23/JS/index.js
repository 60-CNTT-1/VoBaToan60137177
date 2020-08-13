window.onload=function Event(){
	var li = document.getElementById("link");
	li.onclick = function(e){
		if(!confirm("Are you sure want to go to that page?")){
			e.preventDefault();
			}
	}
}