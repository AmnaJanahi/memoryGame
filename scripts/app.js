function init(){
    
/*-------------- Constants -------------*/
const icons = ["👒", "👒", "🧶", "🧶", "🧸","🧸", "🩰", "🩰","🎨", "🎨","🎠", "🎠","🎡","🎡", "🚂","🚂", "⛲️","⛲️","🏰", "🏰"]

/*---------- Variables (state) ---------*/
let match
let win = false
let firstCard
let secondCard
let countdown = 65
let initialClick = false
let pairs = 0
let  intervalId
let score = 8

/*----- Cached Element References  -----*/
const cardElem = document.querySelectorAll(".cards")
const timerElem = document.querySelector(".timer")
const endModal   = document.querySelector('#endModal')
const modalTitle = document.querySelector('#modalTitle')
const modalText  = document.querySelector('#modalText')
const playAgain  = document.querySelector('#playAgain')
const restartButton  = document.querySelector('#restart')
const audioElem = document.querySelector('#flipCard')
const CorrectAnswerElem = document.querySelector('#CorrectAnswer')
const scoreElem = document.querySelector('.score')


/*-------------- Functions -------------*/
function placingIcons () {
    const shuffledIcons = randomlyPlacing(icons)
             icons.forEach(function (card, index){
                cardElem[index].classList.remove('hidden')
                cardElem[index].textContent = card   
            })
    setTimeout(()=>{
         icons.forEach(function (card, index){
        cardElem[index].textContent = card   
        cardElem[index].classList.add('hidden')
        console.log(card) 
    })
},5000)    
}

function handleClick(event) {
    if (firstCard && secondCard) return
    const cardClicked = event.target
    console.log(cardClicked)
    
    if (!firstCard){
        audioElem.play()
        initialClick = true
        firstCard = cardClicked
        console.log("the first click is" , firstCard.textContent)
         firstCard.classList.remove('hidden')
    }    
    else {
        audioElem.play()
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
            CorrectAnswerElem.play()
            pairs++
            
            console.log ("the total number of pairs is" + pairs)
            firstCard.classList.remove('hidden')
            secondCard.classList.remove('hidden')
            firstCard.classList.add('correct')
            secondCard.classList.add('correct')

            firstCard = null
            secondCard = null

            winner()
        }
        else{
            console.log("Not a match")
                setTimeout(()=>{      
                    resetChoice()
            },250)
            score--
            addScore()    
        }
    }

    function timer() {
         intervalId = setInterval(() => {
            if (win){
                clearInterval(intervalId)
                return
            }
            
            if(initialClick){
                timerElem.textContent = `00:${countdown}`
                countdown--
            }

        if (countdown < 0 ){
            clearInterval(intervalId)
            timerElem.textContent = "Time's up"
            cardElem.forEach(card => {
            card.removeEventListener('click', handleClick)})
            showEnd("⏰ Time's Up!")
            

        }
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

    function winner(){
        if (pairs === 10 ){
            win = true
            
            timerElem.textContent = "🎉 You Win!"

            cardElem.forEach(card => {
            card.removeEventListener('click', handleClick)
            showEnd("🎉 You Win!", `All pairs match`)
        })}
        
        
        
    }
    
function showEnd(title, message) {
  modalTitle.textContent = title
  modalText.textContent  = message
  endModal.classList.add('show')
}

function restarGame(e) {
  clearInterval(intervalId)


  
  match = null
  win = false
  firstCard = null
  secondCard = null
  countdown = 65
  initialClick = false
  pairs = 0
  
  timerElem.textContent = "0:65"

  
  placingIcons()
  
  endModal.classList.remove('show')
  
  timer()
       
}

function addScore() {
    scoreElem.textContent = `Score: ${score}`
    scoureCount()
}

function scoureCount() {
    if (score <= 0 ) {
        cardElem.forEach(card => {
            card.removeEventListener('click', handleClick)
            clearInterval(intervalId)
        showEnd("❌ You lose", `You have run out of guesses`)
    })
    }
}




/*----------- Event Listeners ----------*/
for (i = 0; i < icons.length; i++) {
     cardElem[i].addEventListener('click', handleClick)    

}
playAgain.addEventListener('click', ()=>{location.reload()})
restartButton.addEventListener('click', restarGame)


timer()
placingIcons()


}


document.addEventListener('DOMContentLoaded', init)




