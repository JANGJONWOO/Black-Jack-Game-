let firstcard = 10;
let secondcard = 10;
let cards = [firstcard, secondcard]; //array -- orederd list of item 
let sum = firstcard + secondcard;
let hasBlaclJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
// let sumEl = document.querySelector("#sum-el");
let cardEl = document.getElementById("card-el");

function renderGame() {
    cardEl.innerText = "Cards" +" : "+" " + cards[0] + " "+ cards[1];
    sumEl.innerText = sum;
    if (sum <= 20){
        message = "Do you want to draw a new card ❓" ;
    }
    else if(sum === 21){
        message = "You,ve Won!!🙂";
    }
    else{
        message = "You are out of the Game 😞";  
    }
    messageEl.innerText = message;
    

}
function startGame(){
    renderGame();
}
function newCard(){
    let thirdcard = 3;
    sum += thirdcard;
    startGame();
}