<!DOCTYPE html>
<html lang="en">
<head>
    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="black-jack_game_favicon.jpeg" type="image/x-icon">
    <title>Black-jack Game</title>
    
    <link rel="stylesheet" href="black-jack_game.css">
    <style>body {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    align-items: center;
    background-image: url(Black-jack_game.jpg);
    background-size: cover;
    font-weight: bold;
    text-align: center;
}


h1 {
    color: goldenrod;
    text-align: center;
    padding-top: 100px;
}

#message-el {
    text-align: center;
    color: white;
    font-style: italic;
}
p {
    text-align: center;
    color: white;
    font-size: 20px;
}
button {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    border-radius: 10px;
    font-weight: lighter;
    font-size: 20px;
    padding: 20px;
    width: 200px;
    background-color: goldenrod;
    text-align: center;  
    margin-bottom: 2px;
    margin-top: 2px;
}
.vertical{
    padding-left: 0%;
    border-radius: 50px;
    font-family: 'Times New Roman', Times, serif;
    padding-top: 20px;
}
button:hover {
    background-color: silver;
}
 </style>
 <script>
     let cards = []; //array -- orederd list of item 
let sum = 0;
let hasBlaclJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
// let sumEl = document.querySelector("#sum-el");
let cardEl = document.getElementById("card-el");

let player =  {                        // Object  -- bucket to store the key and its value 

    Name : "Shantanu",                //  Key  : Value
    Chips : 145

}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.Name + ": "+ "$"+ player.Chips;

function getRandomCard(){
    
    let RandomCard= Math.floor(Math.random()*13 + 1);
    if(RandomCard === 1){
        return 11;
    }
    else if(RandomCard ===11 || RandomCard === 12 || RandomCard ===13){
        return 10;
    }
    else {
        return RandomCard;
    }
}

function renderGame() {

    cardEl.innerText = "Cards" +" : ";
   for (let i = 0; i < cards.length; i++){
        cardEl.textContent +=  cards[i] + " ";

    }
    sumEl.innerText = "Sum: "+ sum;
    if (sum <= 20){
        message = "Do you want to draw a new card ❓" ;
    }
    else if(sum === 21){
        message = "You,ve Won!!🙂";
        hasBlaclJack = true;
    }
    else{
        message = "You are out of the Game 😞";  
        isAlive = false;
    }
    messageEl.innerText = message;
    

}
function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}
function newCard(){
    if(isAlive === true && hasBlaclJack === false){
    let thirdcard = getRandomCard();
    sum += thirdcard;
    cards.push(thirdcard);
    
    renderGame();
    }
}
 </script>
</head>
<body>
    
    <h1>Black Jack Game</h1>
    
    <p id="message-el">Want to play a round ?</p>
    <p id="card-el">Cards: </p>
    <p id="sum-el">Sum: </p>
    
    <div class="container">
        
    <button onclick="startGame()">START</button>
    <button onclick="newCard()">NEW CARD</button>
     </div>
     <p id="player-el"></p>
  
     <script src="black-jack_game.js"></script>
</body>
</html>
