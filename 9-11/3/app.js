var Color =prompt("ENTER COLOR OF RAOD TRAFFIC SIGNAL : "+Color);
if (Color=="Red") {
	document.write("Must Stop");
}
else if (Color=="Yellow") {
	document.write("Ready to move");
}
else if (Color=="Green") {
	document.write("Move now");
}
else{
    document.write("This Color is not in traffic signal");
}