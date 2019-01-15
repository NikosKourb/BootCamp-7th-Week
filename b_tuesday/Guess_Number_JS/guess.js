

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.ceil(max));
}

function guessNumber(){
	var number = getRandomInt(100);
	do {
		var guess = prompt("Enter your guess");
		if (guess < number)
			alert("This is low, try higher!");
		else if (guess > number)
			alert("This is high, try lower!");
	} while (guess != number); 
	alert("Congratulations! Number was " + number);
}