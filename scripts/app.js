
function init(){
/*-------------- Constants -------------*/
const icons = ["👒", "👒", "🧶", "🧶", "🧸","🧸", "🩰", "🩰","🎨", "🎨","🎠", "🎠","🎡","🎡", "🚂","🚂", "⛲️","⛲️","🏰", "🏰"]

/*---------- Variables (state) ---------*/
let match
let win
let firstCard
let secondCard
let countdown = 40

/*----- Cached Element References  -----*/
const cardElem = document.querySelectorAll(".cards")
const timerElem = document.querySelector(".timer")


/*-------------- Functions -------------*/
function placingIcons () {

    icons.forEach(function (card, index){
         cardElem[index].textContent = card
    })
}

function handleClick(event) {
    const cardClicked = event.target.id
    
    
    if (!firstCard){
        firstCard = icons[cardClicked]
        console.log("the first click is" + firstCard)
    }    
    else {
        secondCard = icons[cardClicked]
        console.log("the second click is" + secondCard)
        compareOptions()
    }    
    }

    function compareOptions() {
        if (firstCard === secondCard){
            console.log("it is a match")
        }
        else{
            console.log("Not a match")
        }
        resetChoice()
    }

    function resetChoice() {
        firstCard === null
        secondCard === null
        console.log("first is " + firstCard +"second is" + secondCard)
    }

    function timer() {
        setInterval(() => {
        if (firstCard){
            timerElem.textContent = `00:${countdown}`
            countdown--
    }

        if (countdown < 0 )
            timerElem.textContent = "Time's up"
        }, 1000)
    }

    function randomlyPlacing() {
        
    }

    
    





/*----------- Event Listeners ----------*/
for (i = 0; i < icons.length; i++) {
     cardElem[i].addEventListener('click', handleClick)    

}


timer()
placingIcons()
}


document.addEventListener('DOMContentLoaded', init)