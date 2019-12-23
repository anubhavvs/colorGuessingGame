var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	h1.style.background = "steelblue";
	numOfSquares = 3;
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0;i<squares.length;i++) {
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
})

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	h1.style.background = "steelblue";
	numOfSquares = 6;
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0;i<squares.length;i++) {
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
})

resetButton.addEventListener("click", function(){
	//generate new colors
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	//change colors of square
	for(var i=0; i< squares.length; i++){
	squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
	resetButton.textContent = "New Colors";
})

colorDisplay.textContent = pickedColor;

for(var i=0; i< squares.length; i++){
	//add initial colors
	squares[i].style.background = colors[i];
	//add click listeners
	squares[i].addEventListener("click", function(){
		// grab color of clicked square
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		}
		else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again!";
		}
	})
}

function changeColors(color){
	//loop through all square
	for(i=0; i < squares.length; i++){
		//change all squares to match colors
		squares[i].style.background = color;
	}
	
}function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make array
	var arr = [];
	//repeat num times
	for(var i = 0; i<num;i++){
		//get random color
		arr.push(radomColor())
	}
	//return array
	return arr;
}

function radomColor(){
	//pick red
	var r = Math.floor(Math.random() * 256);
	//pick green
	var g = Math.floor(Math.random() * 256);
	// pick blue
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}