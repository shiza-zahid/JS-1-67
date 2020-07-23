var num1 = +prompt("ENTER FIRST NUMBER : "+num1);
var num2 = +prompt("ENTER FIRST NUMBER : "+num2);
var op = prompt("ENTER OPERATION + , - , x , / , %: "+op);
var add= num1 + num2;
if (op=="+") {
	document.write(num1 +" + "+num2+" = "+ add);
}
else if (op=="-") {
	document.write(num1 +" - "+num2+" = "+ num1-num2);
}
else if (op=="x") {
	document.write(num1 +" x "+num2+" = "+ num1*num2);
}
else if (op=="/") {
	document.write(num1 +" / "+num2+" = "+ num1/num2);
}
else if (op=="%") {
	document.write(num1 +" & "+num2+" = "+ num1%num2);
}
else{
	document.write("INVALID");
}