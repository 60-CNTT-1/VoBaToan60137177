window.onload=function myFuntion(){
	/////+
	document.getElementById("plus").onclick = function PhepCong(){
		var m = document.getElementById("math");
		var a = parseInt(m.a.value);
		var b = parseInt(m.b.value);
		var kq = a+b;
		m.kq.value=kq;
	}
	/////-
	document.getElementById("minus").onclick = function PhepTru(){
		var m = document.getElementById("math");
		var a = parseInt(m.a.value);
		var b = parseInt(m.b.value);
		var kq = a-b;
		m.kq.value=kq;
	}
	/////*
	document.getElementById("multiply").onclick = function PhepNhan(){
		var m = document.getElementById("math");
		var a = parseInt(m.a.value);
		var b = parseInt(m.b.value);
		var kq = a*b;
		m.kq.value=kq;
	}
	//////
	document.getElementById("divisor").onclick = function PhepChia(){
		var m = document.getElementById("math");
		var a = parseInt(m.a.value);
		var b = parseInt(m.b.value);
		var kq = a/b;
		m.kq.value=kq;
	}
	/////^
	document.getElementById("circumflex").onclick = function PhepMu(){
		var m = document.getElementById("math");
		var a = parseInt(m.a.value);
		var b = parseInt(m.b.value);
		var kq = Math.pow(a,b);
		m.kq.value = kq;
	}
	
}