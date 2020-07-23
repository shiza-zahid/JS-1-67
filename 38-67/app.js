//*************************chapter 38 - 42***************************************

//Task 1 

function calpower(){
var a = prompt("value")
var b = prompt("power value")
var c = Math.pow(a,b);
document.write(c);

}
calpower();

//Task 2

// function leapYear(){
//     var a = +prompt("enter year to check");
//     if (a % 4 === 0){
//         document.write("leap year");
//     }
//     else{
//         document.write("not leap year");
    
//     }    
//     }

// leapYear();

// Task 3

// function calS(a,b,c){
// var s = 10
// var s = (a+b+c)/2;
// document.write("value of S " + s + "<br>");
// return s;
// }
// var val = calS(2,3,4)

// function calArea(a,b,c){
//     var area = (val*(val-a)*(val-b)*(val-c));
//     document.write("value of area " +area);    
// }
// calArea(2,3,4);

// Task 4


// function average(maths,eng,phy){
//  maths = +prompt("enter maths mark");
//  eng = +prompt("enter english mark");
//  phy = +prompt("enter physics mark");
// var total = maths+eng+phy;
// var avg = total / 300;
// return avg;
// }
// var avg = average();

// function percentage(){
//     var perc = avg*100;
//     return perc;
//     }
//     var perc =  percentage();

//     function mainFunc(){
//         document.write("percentage is " +perc + "<br>");
//         if(perc >= 80){
//             document.write("Grade A+");

//         }
//         else if(perc >= 70 && perc < 80){
//             document.write("Grade A");

//         }
//         else if(perc >= 60 && perc <70){
//             document.write("Grade B");

//         }
//         else{
//             document.write("Fail!")
//         }


//         }
//         mainFunc();

// Task 5



// Task 6

// function mainFunction(a){
// a = +prompt("enter distance in Km ");
// return a

// }
// var a = mainFunction();

// function meter(){
// var b = a*1000;
// document.write("meter : " +b+"<br>");
// }
// meter();

// function inch(){
//     var c = a*39370.1;
//     document.write("inch : " +c+"<br>");
// }
// inch();

// function centimeter(){
//     var d = a*100000;
//     document.write("centimeter : " +d+"<br>");
// }
// centimeter();

// Task 7

// function overtime(){
//     var a = +prompt("enter total hours worked");
//     if(a > 40){
//         var b = a - 40;
//         var c = b*12;
//         document.write("overtime pay: "+c);
//     }
//     else{
//         document.write(a);
//     }
// }
// overtime();

// Task 8

// function cashier(a){
//      a = prompt("enter amount");
//      document.write("amount : " +a+ "<br>");
//     var e = parseInt(a/1000); 
//     var b = parseInt((a%1000)/100);
//     var c = parseInt(((a % 1000) % 100) / 50);
//     var d = parseInt((((a % 1000) % 100) % 50) / 10);
//     if(a.length == 2){
//         document.write( c + " fifty " + d + " ten");
//     }
//     else if(a.length == 3){
//         document.write(b + " hundred " + c + " fifty " +d+ " ten");
//     }
//     else if(a.length == 4){
//         document.write( e + " thousand " +b + " hundred " + c + " fifty " +d+ " ten");
//     }
// }
// cashier();

//***************************** Task 43 - 48 ****************************************************************** 

//Task 1

/* <button onclick="showlink()">CLICK ME </button>
function showlink(){
    alert("hello world");
} */

//Task 2

/* <style>
        .img{
            width: 350px !important;
            height: 350px !important;
        }
    </style>
<img class="img" onclick="purchase()" src="https://propakistani.pk/price/wp-content/uploads/2018/04/samsung-galaxy-s9-1-2-1.jpg" alt="" >
    <img class="img" onclick="purchase()" src="https://images.priceoye.pk/oppo-a1k-pakistan-priceoye-am3xz.jpg" alt="oppo"></img>

function purchase(){
    alert("thanks for purchasing a phone from us");
} */


// Task 3

/* <table id="row1">    
<tr>
    <th>index</th>
    <th>name</th>
    <th>class</th>
</tr>
<tr >
    <td>0</td>
    <td>hamza</td>
    <td>se</td>
    <td><button onclick="delfunc(1)">delete</button></td>
</tr>
<tr >
    <td>1</td>
    <td>ahmed</td>
    <td>se</td>
    <td><button onclick="delfunc(2)">delete</button></td>
</tr><tr >
    <td>2</td>
    <td>mughal</td>
    <td>se</td>
    <td><button onclick="delfunc(3)">delete</button></td>
</tr><tr >
    <td>3</td>
    <td>khalid</td>
    <td>se</td>
    <td><button onclick="delfunc(4)">delete</button></td>
</tr>
</table>

function delfunc(a){
document.getElementById("row1").deleteRow(a);
}
delfunc(a) */


// Task 4

// <img class="img"  src="https://images.priceoye.pk/oppo-a1k-pakistan-priceoye-am3xz.jpg" 
// onmouseover= "src='after.jpg'" 
// onmouseout="src='car1.jpg ' " alt="oppo"></img>



// Task 5

/* <h3 id="indec">

</h3>
<button onclick="increase()">increase</button>
<button onclick="decrease()">decrease</button>

var indec = 0;
var ind = document.getElementById("indec");

function increase(){
    indec++;
    ind.innerHTML = indec;

}
increase()

function decrease(){
    indec--;
    ind.innerHTML = indec;

    }
decrease()
 */


 //******************************* */ Chap 49 - 52 *****************************************************************************

 // Task 1

//  <p>Name: </p><input id="name" type="text">
// <p>Password</p> <input id="pass" type="text">
// <button onclick="signup()">signUp</button>

// <p id="sent"></p>
// <p id="sent1"> </p>

//  var n = document.getElementById("name");
//  var p = document.getElementById("pass");
//  function signup(){
//  var s = document.getElementById("sent");   
//  var s1 = document.getElementById("sent1");   
// s.innerHTML = n.value;
// s1.innerHTML = p.value;
//  }
//  signup();

// Task 2



// Task 3

/* <table id="row1">    
<tr>
    <th>index</th>
    <th>name</th>
    <th>class</th>
</tr>
<tr >
    <td>0</td>
    <td>hamza</td>
    <td>se</td>
    <td><button onclick="delfunc(1)">delete</button></td>
</tr>
<tr >
    <td>1</td>
    <td>ahmed</td>
    <td>se</td>
    <td><button onclick="delfunc(2)">delete</button></td>
</tr><tr >
    <td>2</td>
    <td>mughal</td>
    <td>se</td>
    <td><button onclick="delfunc(3)">delete</button></td>

</tr><tr >
    <td>3</td>
    <td>khalid</td>
    <td>se</td>
    <td><button onclick="delfunc(4)">delete</button></td>
</tr>
</table>

function delfunc(a){
document.getElementById("row1").deleteRow(a);
}




// ******************************* chap 52-57 **********************************************************************88


// .img{
//     width: 250px;
//     cursor: pointer;
// }
// .setImg{
//     width: 400px;
//     height: 350px;
// }

/* <img onclick="showImage(this)" class="img" data-toggle="modal" data-target="#exampleModal" src="images/1.jpg" alt="" srcset="">
<img onclick="showImage(this)" class="img" data-toggle="modal" data-target="#exampleModal" src="images/11.jpg" alt="" srcset="">
<img onclick="showImage(this)" class="img" data-toggle="modal" data-target="#exampleModal" src="images/3.jpg" alt="" srcset="">
<img onclick="showImage(this)" class="img" data-toggle="modal" data-target="#exampleModal" src="images/4.jpg" alt="" srcset="">
<img onclick="showImage(this)" class="img" data-toggle="modal" data-target="#exampleModal" src="images/5.jpg" alt="" srcset="">
<img onclick="showImage(this)" class="img" data-toggle="modal" data-target="#exampleModal" src="images/6.jpg" alt="" srcset="">
<img onclick="showImage(this)" class="img" data-toggle="modal" data-target="#exampleModal" src="images/7.jpg" alt="" srcset="">
<img onclick="showImage(this)" class="img" data-toggle="modal" data-target="#exampleModal" src="images/8.jpg" alt="" srcset="">
<img onclick="showImage(this)" class="img" data-toggle="modal" data-target="#exampleModal" src="images/9.jpg" alt="" srcset="">

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
   <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body" >
      <img class="setImg" src="" alt="" id="modelImage">
    </div>
   
  </div>
</div>
</div> */


// function showImage(a){
//     var modelImage = document.getElementById("modelImage");
//     modelImage.src = a.src;
// }








// ****************************** Chap 58 - 67 ***************************************************************************



//  var a = document.getElementById("main-content");
// 1.      console.log(a);
// 2.      console.log(a.children);

// 4.
// var a = document.getElementById("first-name");
// a.value = "hamza";
 

// 5.
// var a = document.getElementById("last-name");
// var b = document.getElementById("email");
// a.value = "mughal";
// b.value = "hamza@example.com"


// Q2.

// 1.
// var a = document.getElementById("form-content");
// console.log(a.nodeType);

// 2,3.
// var a = document.getElementById("lastName");
// // console.log(a.nodeType)
// console.log(a.childNodes)

// 4.
// var a = document.getElementById("main-content");
// console.log(a.firstChild);
// console.log(a.lastChild);

// 5.
// var a = document.getElementById("lastName");
// console.log(a.nextSibling);
// console.log(a.previousSibling);

// 6.
// var a = document.getElementById("email");
// console.log(a.parentNode);
// console.log(a.nodeType);




