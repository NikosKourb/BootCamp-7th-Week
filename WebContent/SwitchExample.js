/**
 * 
 */

prompt: var fruittype = prompt("Give a fruit you'd like to buy to show you the value", "none")

switch(fruittype) {
case "oranges":
console.log("oranges are $0.79 a kilo.");
alert:alert ("oranges are $0.79 a kilo.");
break;
case "apples":
console.log("apples are $0.89 a kilo.");
alert:alert ("oranges are $0.79 a kilo.");
break;
case "bananas":
console.log("bananas are $0.99 a kilo.");
alert:alert ("bananas are $0.99 a kilo.");
break;
case "cherries":
console.log("cherries are $2.99 a kilo.");
alert:alert ("cherries are $2.99 a kilo.");
break;
case "grapes":
console.log("grapes are $3.99 a pound.");
alert:alert ("grapes are $3.99 a pound.");
break;

default:
console.log("Sorry, we are out of "+fruittype+" .");
alert:alert ("Sorry, we are out of "+fruittype+" .");
}

console.log("Is there anything else you'd like?");
alert:alert ("Is there anything else you'd like?");
