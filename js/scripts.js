

function PigDice(player1, player2) {
    this.player1 = 'player1'
    this.player2 = 'player2'
    this.player1Score = 0;
    this.player2Score = 0;
    this.currentRoll = 0;
    this.turnScore = 0;
    this.currentPlayer = 1; 
}

let pigDice = new PigDice();

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
    console.log(pigDice.turnScore)
    this.currentRoll = rollDice();
    if (this.currentRoll === 1) {
        pigDice.turnScore = 0;
        // this.switchPlayer(); // does this work?
    } else {
        console.log(pigDice.turnScore)
        pigDice.turnScore += this.currentRoll
    }
    console.log(pigDice.turnScore + ": turn score");
    console.log(this.currentRoll + ": current roll");
    return pigDice.turnScore;
}



PigDice.prototype.switchPlayer = function() {
    if(this.currentPlayer = this.player1) {
        this.currentPlayer = this.player2;
    } else { 
        this.currentPlayer = this.player1;
    }
}

PigDice.prototype.hold = function() {
    if (this.currentPlayer === 1) {
        parseInt(this.player1Score) += this.turnScore;
        // this.turnScore = 0;
        // this.switchPlayer();
    } 
    else {
        this.player2Score += this.turnScore;
        // this.turnScore = 0;
        // this.switchPlayer();
    } 
    pigDice.turnScore = 0;
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
    let rolledResult = PigDice.prototype.rollResult();
    console.log(rolledResult);
    document.getElementById("dice-value").innerText = null;
    if (currentPlayer === 1) {
        rolledResult;
        if (rolledResult === 1) {
        document.getElementById("player-id").innerText = PigDice.prototype.currentPlayer;
        document.getElementById("turn-total").innerText = "You rolled a 1, bummer, you're still in the game but pass the mouse to the other player";
    } else {
        rolledResult;
        document.getElementById("turn-total").innerText = parseInt(PigDice.prototype.turnScore);
        console.log(rolledResult);
    }
}
       //     //something about if they hit 100 here
}

function handleHold() {
    let hold = PigDice.prototype.hold();
    let player1Score = pigDice.player1Score;
    let player2Score = pigDice.player2Score;
    if (PigDice.currentPlayer === 1) {
        hold;
        document.getElementById("player-one-score").innerText = player1Score
        pigDice.switchPlayer();
    }
    else {
        hold;
        document.getElementById("player-two-score").innerText = player2Score
    }

}

window.addEventListener("load", function () {
    document.getElementById("play-btn").addEventListener("click", gameMode);
    document.getElementById("roll").addEventListener("click", handleRoll);
    document.getElementById("hold").addEventListener("click", handleHold)
})
