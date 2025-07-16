 Memory Card Game
 
Introduction
The Memory Card Game is a classic, browser-based matching game where players flip over cards to find matching pairs within a certain time limit. The game includes sound effects, scoring, and win/loss conditions, making it both engaging and interactive.
Play the game:

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
•	Score tracking (+1 for correct, −1 for wrong)
•	Modal end screen for win/loss feedback
•	Restart and Play Again options
•	Lose if time ends or score drops below −1
________________________________________
Technologies

•	HTML5

•	CSS3

•	JavaScript ES6

•	Git

<img width="1217" height="1021" alt="image" src="https://github.com/user-attachments/assets/b34881d9-1f00-465c-92cf-fcd616f34009" />

How to Play
1.	All cards will be revealed for 5 seconds at the beginning.
2.	Start matching by clicking two cards at a time.
3.	Correct matches stay visible, incorrect ones flip back.
4.	Match all 10 pairs before time runs out to win.
5.	Score decreases with each mismatch. Losing score ≤ −1 ends the game early.
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

•	score++ for a match.
•	score-- for a mismatch.
•	Losing condition: score < -1

Restart

•	Clicking the Restart button clears timer, reshuffles icons, and resets state without reloading the page.
•	Clicking Play Again reloads the full page using location.reload().
________________________________________
Wins and Blockers

 Wins
 
•	Timed memory logic works reliably.

•	Clean UI with card flip feedback and modals.

•	Game restarts cleanly without needing a page refresh.


challanges

•	Resetting timer logic required refactoring shared intervalId.

•	Reveling all the cards at the beginning of the game and then flip them back while linking the array icon with the element index 

•	 The delay coordination between card reveal and user interaction was tricky.
________________________________________
 Future Enhancements
 
•	Difficulty levels (more cards / faster timer)
•	High score tracking
Conclusion
This project demonstrates DOM traversal, event handling, timing functions, state tracking, and user feedback mechanisms. The result is a polished, playable game with clean logic and modular code structure.

