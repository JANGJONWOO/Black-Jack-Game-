<!DOCTYPE html>
<html lang="en">
<head>
    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="black-jack_game_favicon.jpeg" type="image/x-icon">
    <title>Black-jack Game</title>
    
    <link rel="stylesheet" href="black-jack_game.css">
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
