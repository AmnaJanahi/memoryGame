function init(){
/*-------------- Constants -------------*/
const icons = ["👒", "👒", "🧶", "🧶", "🧸","🧸", "🩰", "🩰","🎨", "🎨","🎠", "🎠","🎡","🎡", "🚂","🚂", "⛲️","⛲️","🏰", "🏰"]

/*---------- Variables (state) ---------*/
let match
let win = false
let firstCard
let secondCard
let countdown = 20
let initialClick = false
let pairs = 0

/*----- Cached Element References  -----*/
const cardElem = document.querySelectorAll(".cards")
const timerElem = document.querySelector(".timer")
const endModal   = document.getElementById('endModal')
const modalTitle = document.getElementById('modalTitle')
const modalText  = document.getElementById('modalText')
// const playAgain  = document.getElementById('playAgain')
const restartElem  = document.querySelector('#restart')




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
    if (firstCard && secondCard) return;
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
        cardElem.stopPropagation()
    
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
            pairs++
            console.log ("the total number of pairs is" + pairs)
            firstCard.classList.remove('hidden')
            secondCard.classList.remove('hidden')
            firstCard = null
            secondCard = null

            winner()

        }
        else{
            console.log("Not a match")
                setTimeout(()=>{      
                    resetChoice()
            },1000)
        }
    }

    function timer() {
        
    
        let interval = setInterval(() => {
            if (win){
                clearInterval(interval)
                return
            }
            
            if(initialClick){
                timerElem.textContent = `00:${countdown}`
                countdown--
            }

        if (countdown < 0 ){
            clearInterval(interval)
            timerElem.textContent = "Time's up"
            cardElem.forEach(card => {
            card.removeEventListener('click', handleClick)})
            showEnd("⏰ Time's Up!")
            

        }
        }, 450)
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

    function winner(){
        if (pairs === 10){
            win = true
            
            timerElem.textContent = "🎉 You Win!"

             cardElem.forEach(card => {
            card.removeEventListener('click', handleClick)
            showEnd("🎉 You Win!", "All pairs matched!");
        })
        

        }


    }
    
function showEnd(title, message) {
  modalTitle.textContent = title;
  modalText.textContent  = message;
  endModal.classList.add('show');
}


/*----------- Event Listeners ----------*/
for (i = 0; i < icons.length; i++) {
     cardElem[i].addEventListener('click', handleClick)    

}
// playAgain.addEventListener('click', () => location.reload());


timer()
placingIcons()

}


document.addEventListener('DOMContentLoaded', init)





/* 

in the compare condition for the matching correct it should not flip back the cards

there should also be a variable tracking correct pairs

when the time is up stop the timer and console.log() game over ----> after show game over on page

after every pair is checked it should check if they have the right number of correct pairs. if they do stop the game and let them win

disabiling the click function 
reseat button


adding sounds 

*/