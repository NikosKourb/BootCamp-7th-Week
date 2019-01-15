/**
 * 
 */


/*alert: alert("message");

confirm: var r = confirm("question");*/
 
prompt: var hourOfDay = prompt("Give the Hour of the Day", "default placeholder")




var greeting;

if (hourOfDay>4 && hourOfDay<12) {
	greeting="Good Morning!";
}
else if (hourOfDay>12 && hourOfDay<18) {
	greeting="Good Afternoon!";
}
else{
	greeting="Good Evening!";
}

alert:alert (greeting);
console.log(greeting);