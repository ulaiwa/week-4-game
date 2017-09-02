$(document).ready(function(){
//variables
var wins = 0;
var losses = 0;
var drEvilWants = "";
var catWorth = 0;

$('#winCount').text(wins);
$('#lossCount').text(losses);

//The random number shown at the start of the game should be between 19 - 120.
//computer randomize Dr Evil wants
var drEvilRandomize = Math.floor(Math.random()*101+19)
console.log(drEvilRandomize);
$('#drEvilWants').text(drEvilRandomize);



//how the game run

//You will be given a random number at the start of the game.</p>
//There are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score.</p>
//You win the game by matching your total score to the random number. You lose the game if your total score goes above the random number. </p>



//rules
//when drEvilWants === catWorth, wins ++
//when catWorth > drEvilWants, losses ++

//Each crystal should have a random hidden value between 1 - 12.

//Each time the game starts, the game will change the values of each crystal.</p>





});