
function init(){
/*-------------- Constants -------------*/
const icons = ["👒", "👒", "🧶", "🧶", "🧸","🧸", "🩰", "🩰","🎨", "🎨","🎠", "🎠","🎡","🎡", "🚂","🚂", "⛲️","⛲️","🏰", "🏰"]

/*---------- Variables (state) ---------*/
let match
let win
let firstCard
let secondCard

/*----- Cached Element References  -----*/
const cardElem = document.querySelectorAll(".cards")


/*-------------- Functions -------------*/
function placingIcons () {

    icons.forEach(function (card, index){
         cardElem[index].textContent = card
    })
}

function handleClick(event) {
    const cardClicked = event.target.id
    console.log("clicked"+ cardClicked)
    
    if (firstCard){
        firstCard = cardClicked 
        console.log("the first click is" + firstCard)
    }
    
    if (!firstCard){
        secondCard = cardClicked 
        console.log("the second click is" + secondCard)
    } else {
    cardElem.disabled = true
    }
    }
/*----------- Event Listeners ----------*/
for (i = 0; i < icons.length; i++) {
     cardElem[i].addEventListener('click', handleClick)    

}


placingIcons()
console.log()

}


document.addEventListener('DOMContentLoaded', init)