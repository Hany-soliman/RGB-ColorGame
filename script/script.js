var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    // mode buttons
    setUpModeButtons();
setupSquares();

    reset();
}

function setUpModeButtons(){
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            modeButtons[2].classList.remove("selected");
            this.classList.add("selected");
            // this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            if (this.textContent === "Easy"){
                numSquares = 3;
            } else if (this.textContent === "Hard"){
                numSquares = 6;
            } else {
                numSquares = 12;
            }
            reset();
        });
    }
}

function setupSquares(){
    for (let i = 0; i < squares.length; i++) {
        // Add initial colors to squares
        // Add event handlers to squares
        squares[i].addEventListener("click", function () {
            // Grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            // Compare color to picked square
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "correct";
                resetButton.textContent = "Play again?";
                changeColors(clickedColor);
                h1.style.background = pickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "try again";
            }
        });
    }
}
function reset() {
    colors = generateRandomColors(numSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New colors";
    // change colors of squares
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
h1.style.backgroundColor = "steelblue";
messageDisplay.textContent = "Pick the correct color";
}




resetButton.addEventListener("click", function () {
    reset();
});

function changeColors(color) {
    // Loop through all squares
    for (let index = 0; index < squares.length; index++) {
        // change each color to match the correct color
        squares[index].style.backgroundColor = color;

    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // Make an array
    var arr = [];
    // Repeat num times
    for (let i = 0; i < num; i++) {
        //    Get random color  

        arr.push(randomColor());
    }
    // Return array
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}