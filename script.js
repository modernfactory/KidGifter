window.onload = function(){
  var f1 = document.getElementById("f1").value;
	var f2 = document.getElementById("f2").value;
	var but = document.getElementById("sub");

	but.onclick = function(){
		document.write(f1 + " " + f2);
	}
}
