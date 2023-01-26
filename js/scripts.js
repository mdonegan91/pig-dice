
function PigDice(player1, player2) {
    this.player1 = { player1, score: 0 }
    this.player2 = { player2, score: 0 }
    this.currentRoll = 0;
    this.turnScore = 0;
    this.currentPlayer = 1; //player1
}

PigDice.prototype.rollDice = function () {
    return Math.floor(Math.random() * 6) + 1;
}

function addToTurnScore() {
    totalScore1 += rollTurnScore();
}

PigDice.prototype.rollResult = function () {
    //while(score < 100) {
    this.currentRoll = rollDice();
    if (this.currentRoll === 1) {
        this.turnScore = 0;
        return this.turnScore;
    } else {
        this.turnScore += this.currentRoll
        return this.turnScore;
    }
}


let player = true
   newPlayer = !player 
---------------------------------------------------------

PigDice.prototype.playGame = function () {
    this.currentRoll = rollDice();
    if (this.currentRoll === 1) {
        this.turnScore= 0;
        this.switchPlayer();
    } else {
        this.turnScore += this.currentRoll;
    }
}

PigDice.prototype.hold = function() {
    this.currentPlayer.score += this.turnScore;
    this.turnScore = 0;
    this.switchPlayer();
}

PigDice.prototype.switchPlayer = function() {
    if(this.currentPlayer = this.player1) {
        this.currentPlayer = this.player2;
    } else { 
        this.currentPlayer = this.player1;
    }
}
--------------------------------------------------------------
*/

function Scoreboard() {
    this.players = {};
    this.rollesResult = 1;
}

// UI Logic

function gameMode(event) {
    document.getElementById("play-btn").setAttribute("class", "hidden");
    document.getElementById("scoreboard").removeAttribute("class", "hidden");
    PigDice();
    document.getElementById("player-id").innerText = this.currentPlayer;
}

function handleRoll() {
    let rolled = rollDice();
    let rolledResult = rollTurnScore(rolled);
    document.getElementById("dice-value").innerText = null;
    // let playerId = scoreboard.currentPlayer;
    // let player = scoreboard.players[playerId];
    if (rolledResult === 0) {
        scoreboard.SWITCHPLAYER();
        document.getElementById("player-id").innerText = this.currentPlayer;
        document.getElementById("turn-total").innerText = "You rolled a 1, bummer, you're still in the game but pass the mouse to the other player";
    } else {
        player.rollResult(rolledResult);
        document.getElementById("turn-total").innerText = player.turnScore;
        //something about if they hit 100 here
    }
}

function handleHold() {

}

window.addEventListener("load", function () {
    document.getElementById("play-btn").addEventListener("click", gameMode);
    document.getElementById("roll").addEventListener("click", handleRoll);
    document.getElementById("hold").addEventListener("click", handleHold)
})
