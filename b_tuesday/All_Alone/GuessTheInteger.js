/**
 * 
 */


var rand = Math.floor((Math.random() * 100)+1);
var count = 0;
prompt: var guess = prompt("Guess the number! (1 - 100)");
 
 
do {
    if (guess>rand) {
        count++;
        guess = prompt("Try lower!")
    }else if (guess<rand) {
        count++;
        guess = prompt("Try higher!")
    }
    
}while(rand!=guess);
count++;
alert("Congratulations you found it after " + count + " tries!");
if (count>6) {
    alert("You could do better!!!!!")
}