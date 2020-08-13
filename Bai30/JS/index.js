window.onload=function Event(){
	var click=document.getElementById("click");
	click.onclick=function(){
		var ps=document.getElementById("ps");
		var nhap=document.getElementById("nhap");
		var cl=document.getElementById("click");
		if(ps.type==="password"){
			ps.type="text";
			nhap.innerHTML="Hiển thị Password";
			cl.value="Click để ẩn Password";
		}
		else{
			ps.type="password";
			nhap.innerHTML="Nhập Password";
			cl.value="Click để hiển thị Password";
		}
	}
}