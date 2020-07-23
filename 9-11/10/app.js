var temp =prompt("ENTER TEMPERATURE : "+temp);
if (temp>40) {
	document.write("It is too hot outside.");
}
else if (temp>30) {
	document.write("The Weather today is Normal.");
}
else if (temp>20) {
	document.write("Todays Weather is cool.");
}
else if (temp>10) {
	document.write("OMG! Today’s weather is so Cool..");
}
else{
	document.write("INVALID");
}