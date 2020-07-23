var Fuel =prompt("ENTER REMAINING FUEL IN CAR (in litres) : "+Fuel);
if (Fuel<0.25) {
	document.write("Please refill the fuel in your Car");
}
else{
    document.write("Enough.Fill it before it exceeds to 0.25 litres");
}