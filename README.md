 Memory Card Game
 
Introduction
The Memory Card Game is a classic, browser-based matching game where players flip over cards to find matching pairs within a certain time limit. The game includes sound effects, scoring, and win/loss conditions, making it both engaging and interactive.

Play the game:https://amnajanahi.github.io/memoryGame/

________________________________________
Contents

•	Introduction

•	Project Features

•	How to Play

•	Technologies Used

•	Core Logic

•	Wins & Blockers

•	Future Enhancements

•	Conclusion
________________________________________
Project Features

•	20 cards (10 pairs of emoji icons)
•	Cards briefly revealed at game start (5 seconds)
•	Flip animations and sounds
•The guess count is set to 8 tries
•	Modal end screen for win/loss feedback
•	Restart and Play Again options
•	Lose if time ends or guessCount is 0
________________________________________
Technologies

•	HTML5

•	CSS3

•	JavaScript ES6

•	Git

<img width="1165" height="1018" alt="image" src="https://github.com/user-attachments/assets/4e37452a-691d-4b84-95b3-4e2b8867d8eb" />


How to Play
1.	All cards will be revealed for 5 seconds at the beginning.
2.	Start matching by clicking two cards at a time.
3.	Correct matches stay visible, incorrect ones flip back.
4.	Match all 10 pairs before time runs out to win.
5.	Score decreases with each mismatch. Losing when its 0, which ends the game early.
________________________________________

 Core Logic
 
Initial Card Reveal

All cards are shown for 5 seconds at the start using a setTimeout():
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

Matching Logic

•	Cards are flipped on click and checked for a match.
•	Matching pairs remain visible and styled with .correct.
•	Mismatches flip back after 250ms.

Timer

•	65-second countdown using setInterval().
•	Timer starts on first interaction (initialClick = true).
•	Game ends if time reaches 0.

Scoring System

•	score-- for a mismatch.
•	Losing condition: score = 0

Restart

•	Clicking the Restart button clears timer, reshuffles icons, and resets state without reloading the page.
•	Clicking Play Again reloads the full page using location.reload().
________________________________________
Wins and Blockers

 Wins
 
Restart Button with Full Reset Logic:

Implemented a custom restart function that stops the timer, resets all game states, and reshuffles the icons — ensuring a smooth restart without reloading the page.


challanges

Icon–Card Binding:

Linking string-based icons to DOM card elements was tricky. Since strings can’t hold properties, I had to rely on precise indexing to sync the shuffled icons with their visual elements.
________________________________________
 Future Enhancements
 
•	Adding difficulty levels (more cards / faster timer/ less guess count)

________________________________________
Conclusion
In conclusion, creating this game was an enjoyable experience and gave me the opportunity to complete a full project from start to finish.
