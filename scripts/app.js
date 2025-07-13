
function init(){
/*-------------- Constants -------------*/
const icons = ["👒", "👒", "🧶", "🧶", "🧸","🧸", "🩰", "🩰","🎨", "🎨","🎠", "🎠","🎡","🎡", "🚂","🚂", "⛲️","⛲️","🏰", "🏰"]

/*---------- Variables (state) ---------*/
let match
let win

/*----- Cached Element References  -----*/
const cardElem = document.querySelectorAll(".cards")


/*-------------- Functions -------------*/
function placingIcons () {

    icons.forEach(function (card, index){
         cardElem[index].textContent = card
    })
}

function handleClick() {
    

}


/*----------- Event Listeners ----------*/
for (i = 0; i <= icons.length; i++) {
    cardElem[i].addEventListener('click', handleClick)
}

console.log()

}


document.addEventListener('DOMContentLoaded', init)