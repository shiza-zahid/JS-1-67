var d = new Date(2018, 11, 24, 10, 33, 30, 0);
document.write(d);
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  var d = new Date();
  var n = month[d.getMonth()];
  document.write(n);
  //////////////////////////////////////////////
  var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var s = weekday[d.getDay()];
document.write("<br>"+s);
//////////////////////////////////
  var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var s = weekday[d.getDay()];
  if(s=='Saturday' || s=="Sunday") {
document.write("<br>"+s+ "Its a fun day!");
}
else
{
	document.write("wordday");
}
///////////////////////
today = new Date();
var dd = today.getDate();
  if(dd>=15) {
document.write("<br>"+s+ "Last 15 days");
}
else
{
	document.write("First 15 days");
}
///////////////////////////////////////////////////

///////////////////
var j = new Date();
var x = j.getHours()

if(x<=12){
	document.write("<br> its AM");
}
else{
	document.write("its PM");
}
/////////////////////////////////
var today = new Date();
var lastDayOfMonth = new Date(today.getFullYear(), today.getMonth()+1, 0);
document.write(lastDayOfMonth);
//////////////////////////////////////
var doomsday = new Date("June 15, 2035");


var msToday = today.getTime();

var msDoomsday = doomsday.getTime();



var msDiff = msDoomsday - msToday;
document.write(msDiff);
//////////////////////////
var d = new Date(2018, 11, 24, 10, 33, 30, 0);
var u = new Date(2018, 1, 1, 1, 1, 1, 0);
var dif= d-u;
document.write(diff);
/////////////////////////
var c= prompt("enter age");
var d = new Date();
var n = d.getFullYear();
var e= n-c;
document.write("birthyear:"+e);
