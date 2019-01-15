/**
 * 
 */

$(document).ready(()=>{
	
	

var userOutput = document.getElementById("user_output");

$(".input").keyup(function() {
	userOutput.value = this.value;
});





});