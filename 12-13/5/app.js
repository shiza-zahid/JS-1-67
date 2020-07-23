var JS="abchello";
var ask=prompt("ENTER YOUR PASSWORD : "+ask);
if(ask!==""){
	if(ask==JS){
		document.write("Correct. The password you entered matches the original password");
	}
	else{
		document.write("Incorrect password");
	}
}
else{
	document.write("PLEASE ENTER YOUR PASSWORD");
}
