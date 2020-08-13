window.onload=function myFuntion(){
	var kt = document.getElementById("kt");
	kt.onclick = function(){
		var tk = document.getElementById("tk");
		var pas = document.getElementById("pas");
		var rpas = document.getElementById("rpas");
		
		//Không nhập thông tin 1 trong 3 ô
		if((tk.value.length==0) || (pas.value.length==0) || (rpas.value.length==0)){
			alert("Lỗi! Vui lòng nhập đầy đủ thông tin.");
			tk.style.backgroundColor="yellow";	
			pas.style.backgroundColor="yellow";
			rpas.style.backgroundColor="yellow";
		}
		else{
			tk.style.backgroundColor="white";	
			pas.style.backgroundColor="white";
			rpas.style.backgroundColor="white";
			
			//Tên đăng nhập ít hơn 6 ký tự
			if(tk.value.length<6){	
				tk.style.backgroundColor="yellow";	
				alert("Lỗi tên đăng nhập!");
			}
			else{
				tk.style.backgroundColor="white";
			}
			
			//Mật khẩu nhập lại sai
			if(pas.value!=rpas.value){

				pas.style.backgroundColor="yellow";
				rpas.style.backgroundColor="yellow";
				alert("Mật khẩu nhập lại không đúng!");
			}
			else{
				pas.style.backgroundColor="white";
				rpas.style.backgroundColor="white";
			}	
		}	
	}
}