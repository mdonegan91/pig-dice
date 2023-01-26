
function PigDice(player1, player2) {
    this.player1 = 'player1'
    this.player2 = 'player2'
    this.player1Score = 0;
    this.player2Score = 0;
    this.currentRoll = 0;
    this.turnScore = 0;
    this.currentPlayer = 1; 
}

// function PigDice(playerId, turnScore, totalScore) {
//     this.playerId = playerId;
//     this.turnScore = turnScore;
//     this.totalScore = totalScore;
// }

// PigDice.prototype.rollDice = function () {
//     return Math.floor(Math.random() * 6) + 1;
// }

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// function addToTurnScore() {
//     totalScore1 += rollTurnScore();
// }

PigDice.prototype.rollResult = function () {
    //while(score < 100) {
    this.currentRoll = rollDice();
    if (this.currentRoll === 1) {
        this.turnScore = 0;
        // return this.turnScore;
        this.switchPlayer(); // does this work?
    } else {
        this.turnScore += this.currentRoll
        // return this.turnScore;
    }
    console.log(this.turnScore + ": turn score");
    console.log(this.currentRoll + ": current roll");
}

// let player = true
// new Player = !player 

// PigDice.prototype.playGame = function () {
//     this.currentRoll = PigDice.rollDice();
//     if (this.currentRoll === 1) {
//         this.turnScore= 0;
//         this.switchPlayer();
//     } else {
//         this.turnScore += this.currentRoll;
//     }
// }
PigDice.prototype.switchPlayer = function() {
    if(this.currentPlayer = this.player1) {
        this.currentPlayer = this.player2;
    } else { 
        this.currentPlayer = this.player1;
    }
}

PigDice.prototype.hold = function() {
    if (this.currentPlayer === 1) {
        this.player1Score += this.turnScore;
        this.turnScore = 0;
        this.switchPlayer();
    } 
    else {
        this.player2Score += this.turnScore;
        this.turnScore = 0;
        this.switchPlayer();
    } 
}


// function Scoreboard() {
//     this.players = {};
//     this.currentPlayer = 1;
// }

// UI Logic

function gameMode(event) {
    event.preventDefault();
    document.getElementById("play-btn").setAttribute("class", "hidden");
    document.getElementById("scoreboard").removeAttribute("class", "hidden");
    PigDice();
    document.getElementById("player-id").innerText = this.currentPlayer;
}

function handleRoll() {
    // let PigDice = new PigDice();
    // let rolled = rollDice();
    let rolledResult = PigDice.prototype.rollResult();
    document.getElementById("dice-value").innerText = null;
    // let playerId = PigDice.currentPlayer;
    // let player = PigDice.players[playerId];
    if (rolledResult === 0) {
        document.getElementById("player-id").innerText = PigDice.prototype.currentPlayer;
        document.getElementById("turn-total").innerText = "You rolled a 1, bummer, you're still in the game but pass the mouse to the other player";
    } else {
        rolledResult;
        document.getElementById("turn-total").innerText = parseInt(PigDice.prototype.turnScore);
        console.log(rolledResult);
    }
       //     //something about if they hit 100 here
}

function handleHold() {
    // let scoreboard = new Scoreboard();
    // let hold = PigDice.prototype.hold()
    let hold = PigDice.prototype.hold();
    // document.getElementById("hold").innerText = null;
    if (PigDice.currentPlayer === 1) {
        hold;
        document.getElementById("player-one-score").innerText = PigDice.prototype.player1Score
    }
    else {
        hold;
        document.getElementById("player-two-score").innerText = PigDice.prototype.player1Score
    }

}

window.addEventListener("load", function () {
    document.getElementById("play-btn").addEventListener("click", gameMode);
    document.getElementById("roll").addEventListener("click", handleRoll);
    document.getElementById("hold").addEventListener("click", handleHold)
})
