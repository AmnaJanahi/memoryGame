function init(){
/*-------------- Constants -------------*/
const icons = ["👒", "👒", "🧶", "🧶", "🧸","🧸", "🩰", "🩰","🎨", "🎨","🎠", "🎠","🎡","🎡", "🚂","🚂", "⛲️","⛲️","🏰", "🏰"]

/*---------- Variables (state) ---------*/
let match
let win
let firstCard
let secondCard
let countdown = 40
let initialClick = false
/*----- Cached Element References  -----*/
const cardElem = document.querySelectorAll(".cards")
const timerElem = document.querySelector(".timer")


/*-------------- Functions -------------*/
function placingIcons () {
    const shuffledIcons = randomlyPlacing(icons)
    icons.forEach(function (card, index){
        
        cardElem[index].textContent = card
        
        cardElem[index].classList.add('hidden')
       
        
        // console.log(cardElem)
        console.log(card)
 
    })
    
}

function handleClick(event) {
    const cardClicked = event.target
    console.log(cardClicked)

    
    if (!firstCard){
        initialClick = true
        firstCard = cardClicked
        console.log("the first click is" , firstCard.textContent)
         firstCard.classList.remove('hidden')
    }    
    else {
        secondCard = cardClicked
        console.log("the second click is" , secondCard.textContent)
         secondCard.classList.remove('hidden')

        compareOptions()



    
    }   

    console.log("first card",firstCard)
    console.log("second card",secondCard)

    }

    

    function resetChoice() {
        firstCard.classList.add('hidden')
        secondCard.classList.add('hidden')
        firstCard = null
        secondCard = null
         
        console.log("first is " + firstCard +"second is" + secondCard)
    }

    function compareOptions() {
        if (firstCard.textContent === secondCard.textContent){
            console.log("it is a match")  
            firstCard.classList.remove('hidden')
            secondCard.classList.remove('hidden')
            return

        }
        else{
            console.log("Not a match")
   
            
        }

                setTimeout(()=>{      resetChoice()
},2000)
    }

    function timer() {
        setInterval(() => {
            if(initialClick){
        timerElem.textContent = `00:${countdown}`
            countdown--

            }
        if (firstCard){
            // timerElem.textContent = `00:${countdown}`
            // countdown--
    }

        if (countdown < 0 )
            timerElem.textContent = "Time's up"
        }, 1000)
    }

    function randomlyPlacing() {
        for (i=0; i < icons.length; i++) {
        cardPosition = Math.floor(Math.random() * icons.length)

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





/* 

in the compare condition for the matching correct it should not flip back the cards

there should also be a variable tracking correct pairs

when the time is up stop the timer and console.log() game over ----> after show game over on page

after every pair is checked it should check if they have the right number of correct pairs. if they do stop the game and let them win
*/