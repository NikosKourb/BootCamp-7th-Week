

function hideDiv() {
	var div = document.getElementById("mydiv");
	var button = document.getElementById("button");
	
	if (div.style.visibility == "hidden") {
		div.style.visibility = "visible";
		document.title = "Visible Div";
		button.textContent = "Click to hide";
	}
	else {
		div.style.visibility = "hidden";
		document.title = "Hidden Div";
		button.textContent = "Click to show";
	}

}