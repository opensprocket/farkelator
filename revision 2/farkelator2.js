/* 
===================================
 Farkleator: The Farkle Calculator
===================================
Version: 1.0
Last updated: 6 Dec 2019
Designed by Josh Breiter
===================================
*/

//global variables
var playerList = [];

//add players
function addPlayer(name) {
    playerList.push(name);
    console.log(playerList[0]);
}

function createNewPlayer() {
    var input = document.getElementById("playername").value;
    console.log("Player name: " + input);
    addPlayer(input);    
}