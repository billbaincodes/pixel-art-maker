//pixel click
let container = document.querySelector('.container')

let chosenColor = ''

container.addEventListener("click", function(event) {
  event.target.style.backgroundColor = chosenColor
})

//color selection
let colors = document.querySelector('.colors')

function handleColor (event) {
  chosenColor = event.target.classList[1]
  console.log(event.target.classList[1])
}

colors.addEventListener("click", handleColor)