
function init(){
/*-------------- Constants -------------*/
const icons = ["👒", "👒", "🧶", "🧶", "🧸","🧸", "🩰", "🩰","🎨", "🎨","🎠", "🎠","🎡","🎡", "🚂","🚂", "⛲️","⛲️","🏰", "🏰"]

/*---------- Variables (state) ---------*/
let match
let win
let firstCard
let secondCard
let countdown = 40
let numberOfCards = 20

/*----- Cached Element References  -----*/
const cardElem = document.querySelectorAll(".cards")
const timerElem = document.querySelector(".timer")


/*-------------- Functions -------------*/
function placingIcons () {
    // randomlyPlacing()
    // icons.forEach(function (card, index){
        
    //     cardElem[index].textContent = card
    //     card.classList.add('hidden')
    //     card.textContent = card.iconValue
    // })


    const shuffledIcons = randomlyPlacing(icons)
    icons.forEach(function (icon, index){
        
       const card = cardElem[index]
        card.classList.add('hidden')
        card.iconValue = shuffledIcons[index]
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
        if (firstCard.iconValue === secondCard.iconValue){
            console.log("it is a match")
            firstCard.classList.remove('hidden')
            secondCard.classList.remove('hidden')
        }
        else{
            console.log("Not a match")
        }
        resetChoice()
    }

    function resetChoice() {
        firstCard = null
        secondCard = null
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
        for (i=0; i < icons.length; i++) {
        cardPosition = Math.floor(Math.random() * numberOfCards)

        let temp = icons[i] 
        icons[i] = icons[cardPosition] 
        icons[cardPosition] = temp 
    }
    return icons
    }

    
    





/*----------- Event Listeners ----------*/
for (i = 0; i < icons.length; i++) {
     cardElem[i].addEventListener('click', handleClick)    

}


timer()
placingIcons()

}


document.addEventListener('DOMContentLoaded', init)