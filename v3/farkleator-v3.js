// Farkleator Version 3

// Input
// - player name
// - player score (each round)

// Processing 
// - player table with scores
// - whether or not a player made it in
// - if a round has progressed
// - when the final round has been reached

// Output
// - player score (broken out by round)
// - winner
// - scores & player tables to file

//global variables
const finalRoundThreshold = 10000;
let playerList = [];

//player template
const newPlayerTemplate = {
    name: " ",
    score: 0,
    turnOrder: 0,

};

//adds player to playerList
function addPlayer() {
    var playerName = document.getElementById("playername").value;
    createNewPlayer(playerName);
}

//creates player object
function createNewPlayer (name) {
    var newPlayer = object.create(newPlayerTemplate);
    newPlayer.name = name; 
    //playerList.push(Object.create(newPlayerTemplate));
    return console.log(newPlayer.name + " has been added as a new player.");

}

createNewPlayer(josh);