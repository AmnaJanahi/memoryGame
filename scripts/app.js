
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

/*----------- Event Listeners ----------*/
for (i = 0; i < icons.length; i++) {
     cardElem[i].addEventListener('click', handleClick)    

}


placingIcons()



}


document.addEventListener('DOMContentLoaded', init)