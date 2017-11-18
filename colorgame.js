var numSquares = 6;
var colors = [];

var goalColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");
var resetBtn = document.querySelector("#reset");

init();

function init(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		});
	}

	for(var i = 0; i < squares.length; i++)
	{
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === goalColor){
				messageDisplay.textContent = "Correct";
				changeColors(goalColor);
				resetBtn.textContent = "Play Again?";
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
	
	reset();
}



function reset(){
	messageDisplay.textContent = "";
	colors = generateRandomColors(numSquares);
	goalColor = pickColor();
	colorDisplay.textContent = goalColor;
	h1.style.backgroundColor = "steelblue";
	resetBtn.textContent = "New Colors"
	for(var i = 0; i < squares.length; i++)
	{
	if(colors[i]){
		squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];
	}else{
		squares[i].style.display = "none";
	}
	
	}
}

resetBtn.addEventListener("click", function(){
	reset();
	
});

function changeColors(color){
	for(var i = 0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = color;
		h1.style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generateRandomColors(num){
	var array = []
	for(var i = 0; i < num; i++){
		array.push(randomColor());
	}
	return array;
}

function randomColor() {
	 var r = Math.floor(Math.random() * 256);
	 
	 var g = Math.floor(Math.random() * 256)
	 
	 var b = Math.floor(Math.random() * 256)
	 
	 return "rgb(" + r + ", " + g + ", " + b + ")";
}