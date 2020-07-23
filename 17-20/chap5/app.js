var a=2;
var b=5;
var sum;
sum=a+b;
document.write("The sum of "+a + " and " +b+ " is " +sum +"<br>");
var c=8;
var d=10;
var subtraction;
subtraction=c-d;
document.write("The subtraction of "+c + " and " +d+ " is " +subtraction + "<br>");
var e=8;
var f=8;
var multi;
multi=e*f;
document.write("The multiplication of "+e + " and " +f+ " is " +multi + "<br>");
//q3
var value;
value=5;
document.write("initial value is "+value +"<br>");
value++;
document.write("final value after increment is "+value+ "<br>");
var val=7;
var add;
add=val+value;
document.write("value after addition is "+add + "<br>");
add--;
document.write("value after deccrement is "+add + "<br>");
var rem;
rem=add%3;
document.write("remainder is  "+rem + "<br>");
//q4
var tick;
tick=5;
var total;
total=600*tick;
document.write(tick+"cost Rs  "+total + "<br>");

//q5
var num;
num=4;
var i;
for (i=1; i<=10; i++)
{
	var mul;
	mul=4*i;
	document.write(num+ "*"+i+"="+ mul +"<br>");
}

//q12
document.write("<h1> Geromatrizer </h1> <br>");
var r;
r=20;
var pi = 3.142;
var circle;
circle = 2 * pi * r; 
document.write("radius" +r+"<br>");
document.write("circumference is" +circle+"<br>");
//q13
document.write("<h1> the life time supply calcullatr </h1> <br>");
var currentage=8;
var est_age=65;
var snack=3;
var age;
age= est_age - currentage;
var snack2=age*snack;
document.write("You will need " +snack2+ " choclatechip to last you until the ripe old age of " +est_age + " <br>") ;
document.write("<h1> 7.Shopping cartt</h1> <br>");
var item1=650;
var item2=100;
var q=3;
var q2=7;
var ship=100;
document.write("price of item one : "+item1 +"<br>");
document.write("Quantitiy of item one : "+q +"<br>");
document.write("price of item two : "+item2 +"<br>");
document.write("price of item two : "+q2 +"<br>");
document.write("Shiping charge : "+ship +"<br>");
document.write("Totoal cost of order : "+((item1*q)+(item2*q2)+ship) +"<br>");

document.write("<h1> 8.Mark sheet</h1> <br>");
var tot_mark=980;
var obt_mark=804;
var perc;
perc=(804/980)*100;
document.write("Totalmarks" +tot_mark+"<br> Mark obtain:" +obt_mark+ "<br>"
	+ "percentage:"+perc+ "%<br>");


document.write("<h1> 9.Cureency in PKR </h1> <br>");
var us=10;
var saudi=25;
var converus=10 * 104.80;
var conversau=25 * 28;
var convert;
convert=converus+conversau;
document.write("Total curreny:"+convert+ "<br>");



document.write("<h1> age calculator </h1> <br>");
var currentyear=2020;
var Birthyear=1998;
var age1;
age1= currentyear - Birthyear;
var age11=age1-1;
document.write("You are either " +age1+ " year old or  " + age11  );


