
var subj1 = +prompt("ENTER MARKS OBTAINED : "+subj1);
var subj2 = +prompt("ENTER MARKS OBTAINED : "+subj2);
var subj3 = +prompt("ENTER MARKS OBTAINED : "+subj3);
var full=300;
var total = subj1 + subj2 + subj3;
var per = total/300*100;
if(per >=80){
	document.write("Total marks : "+full);
	document.write("Marks obtained : "+total);
	document.write("Total marks : "+full);
	document.write("Percentage : "+per);
	document.write("Grade : A-one");
	document.write("Remarks : Excellent");
}
else if(per >=70){
	document.write("Total marks : "+full);
	document.write("Marks obtained : "+total);
	document.write("Total marks : "+full);
	document.write("Percentage : "+per);
	document.write("Grade : A");
	document.write("Remarks : Good");
}
else if(per >=60){
	document.write("Total marks : "+full);
	document.write("Marks obtained : "+total);
	document.write("Total marks : "+full);
	document.write("Percentage : "+per);
	document.write("Grade : B");
	document.write("Remarks : You need to improve");
}
else if(per <60){
	document.write("Total marks : "+full);
	document.write("Marks obtained : "+total);
	document.write("Total marks : "+full);
	document.write("Percentage : "+per);
	document.write("Grade : Fail");
	document.write("Remarks : Sorry");
}