var first = prompt("Please enter your first name", "firstname");
var second = prompt("Please enter your second name", "secondname");
var full = first + second;
alert( "Welcome" +full);
//////
var phone = prompt("Please enter your favourite mobile phone", "samsung");
document.write( "My favurite mobile model is :" +phone);
var n= phone.length;
document.write(n);

///////
var e= "pakistan";
var o= e.indexOf("n");
document.write("word is: <br>"+e + "<br> n is at index: " +o);

//////////////////
var str = "hello world";
var n = str.lastIndexOf("l");
document.write("<br> last index of hello world is at :" +n);
//////////////////
var str = "pakistan";
var res = str.charAt(3);
document.write("<br> at index 3 of of pakistan the char is :" +res);
/////////////////////////////
var first = prompt("Please enter your first name", "firstname");
var second = prompt("Please enter your second name", "secondname");
alert( "Welcome" +first+second );
/////////////////////////////////
var str = "Hyder abad!";
var res1 = str.replace("Hyder", "Islam");
document.write("<br>"+res1);
///////////////////////////////
var message = "Ali and Sami are best friends. They play cricket and football together.";
var res1 = message.replace("and", "&");
document.write("<br>"+res1);
//////////////////////////

  var y = "6766";
  var x = + y;
  document.write("<br>" +typeof y + "<br>" + typeof x);
//////////////////////////////////////////////////////
var p = prompt("Please enter", "peanut");
var s= p.toUpperCase();
  document.write("<br>" +s + "<br>");
///////////////////////////////////////////
function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  return str.join(' ');
}
document.write(titleCase("javascript"));
/////////////////////////////////////////////
var num = 36.36;
var n = num.toString();
document.write("<br>" +typeof num + "<br>" + typeof n);
//////////////////////////////////////
var userName=prompt("Enter your Input: ");
checkValidName(userName);
function checkValidName(un)
{
    var message;
    var split=[];
    var arr=[];
    for(var i=0;i<un.length;i++)
    {
        split[i]=un.split("&nbsp;");
        arr[i]=un.charCodeAt(i);
        if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
        {
                message="Correct User Name";
        }
        while(arr[i]==33||arr[i]==44||arr[i]==46||arr[i]==64)
        {
            alert("please enter a valid userName");                                                                                                                   
            userName=prompt("Enter your Input: ");
            split[i]=un.split("&nbsp;");
            arr[i]=un.charCodeAt(i);
            if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
            {
                message="correct in";
                break;
            }
        }

    }
    alert(message);
}
//////////////////////////////////////////////
var e=["spple","mango","banana","orange"];
var n = str.search(v);
var v=prompt("enter seach");
document.write(n);
/////////////////////////////////////
  var str = "University Karachi";
  var res = str.split("/~/");
  document.write(res)
  //////////////////////////////////////
  var str = prompt("enter string");
var n = str.charAt(str.length - 1);
document.write("<br> last index of userinput is at :" +n);

