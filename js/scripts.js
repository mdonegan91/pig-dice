let turnScore = 0;
let roll = 0;
let totalScore1 = 0;
let totalScore2 = 0;

function rollDice() {
    const roll = Math.floor(Math.random() * 6) + 1;
    return roll;
}

function isOne(roll) {
    return roll === 1;
}

//player 1
function scoreTotal(turnScore, totalScore1) {
    roll = rollDice();
    if (roll === 1) { // if(roll !== 1 ) {
        turnScore = 0;
        console.log("player1 score: " + roll)
        return totalScore1;
    } else {
        turnScore += roll
        totalScore1 += turnScore;
        return totalScore1;
    }
}
-----------------------------------------------------------------------------------
function PigDice(player1, player2) {
    this.player1 = {name: player1, score: 0 }
    this.player2 = {name: player2, score: 0 }
    this.currentRoll = 0;
    this.turnScore = 0;
    this.currentPlayer = 1;
}

PigDice.prototype.rollDice = function() {
    return Math.floor(Math.random() * 6) + 1;
}

PigDice.prototype.playGame = function() {
    //while(score < 100) {
    this.currentRoll = rollDice();
    if(this.currentRoll === 1) {
        this.player1.turnScore = 0;
    } else {
        this.player1.turnScore += this.currentRoll;
    }
}
