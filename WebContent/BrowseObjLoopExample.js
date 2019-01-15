/**
 * 
 */
var txt="";
var person={fname:"John",lname:"Doe",age:27};
for(var x in person) {
	txt+=person[x]+" ";
	console.log(x+" "+person[x]);
	alert(x+" "+person[x]);
}
