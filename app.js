// Builds the canvas
let container = document.querySelector('.container')
for (var i = 0; i < 432; i++) {
  let canvasSquare = document.createElement('div')
  canvasSquare.setAttribute('class', 'canvasSquare')
  container.appendChild(canvasSquare)
}

//Colors the canvas
var chosenColor = ''
container.addEventListener("click", function (event) {
  event.target.style.backgroundColor = chosenColor
})

//Selects color
let colors = document.querySelector('.colors')
function handleColor(event) {
  chosenColor = event.target.classList[1]
  currentColor.style.backgroundColor = chosenColor
}
colors.addEventListener("click", handleColor)

//Handles the eraser
let eraser = document.querySelector('.eraser')
function erase() {
  currentColor.style.backgroundColor = 'white'
  chosenColor = 'white'
}
eraser.addEventListener('click', erase)