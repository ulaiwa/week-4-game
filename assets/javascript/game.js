$(document).ready(function(){
//variables
var wins = 0;
var losses = 0;
var drEvilWants = "";
var userScore = 0;

//The random number shown at the start of the game should be between 19 - 120.
//computer randomize Dr Evil wants
var drEvilRandomize = Math.floor(Math.random()*101+19)
console.log(drEvilRandomize);
$('#drEvilWants').text(drEvilRandomize);

//Each cat should have a random hidden value between 1 - 12.
var randomCat1= Math.floor(Math.random()*11+1)
var randomCat2= Math.floor(Math.random()*11+1)
var randomCat3= Math.floor(Math.random()*11+1)
var randomCat4= Math.floor(Math.random()*11+1)

function winPOP() {
	alert("It's your lucky day! Dr Evil(& your cats) spare your life!");
	wins ++;
	$('#winCount').text(wins);
	reset();
}

function lossPOP() {
	alert("Too many cats for Dr Evil. You are dead!");
	losses ++;
	$('#lossCount').text(losses);
	reset();
}

function reset(){
	userScore = 0;
	randomCat1= Math.floor(Math.random()*11+1);
	randomCat2= Math.floor(Math.random()*11+1);
	randomCat3= Math.floor(Math.random()*11+1);
	randomCat4= Math.floor(Math.random()*11+1);
	$('#catWorth').text(userScore);

	drEvilRandomize = Math.floor(Math.random()*101+19)
	console.log(drEvilRandomize);
	$('#drEvilWants').text(drEvilRandomize);
}

//creat value for each cat
	$('#cat1').click(function(){
	    userScore = userScore + randomCat1;
	    console.log(userScore);
	    $('#catWorth').text(userScore); 

	        if (userScore == drEvilRandomize){
	          winPOP();
	        }
	        else if ( userScore > drEvilRandomize){
	          lossPOP();
	        }   
	});

	$('#cat2').click(function(){
	    userScore = userScore + randomCat2;
	    console.log(userScore);
	    $('#catWorth').text(userScore); 

	        if (userScore == drEvilRandomize){
	          winPOP();
	        }
	        else if ( userScore > drEvilRandomize){
	          lossPOP();
	        }   
	});

	$('#cat3').click(function(){
	    userScore = userScore + randomCat3;
	    console.log(userScore);
	    $('#catWorth').text(userScore); 

	        if (userScore == drEvilRandomize){
	          winPOP();
	        }
	        else if ( userScore > drEvilRandomize){
	          lossPOP();
	        }   
	});

	$('#cat4').click(function(){
	    userScore = userScore + randomCat4;
	    console.log(userScore);
	    $('#catWorth').text(userScore); 

	        if (userScore == drEvilRandomize){
	          winPOP();
	        }
	        else if ( userScore > drEvilRandomize){
	          lossPOP();
	        }   
	});

});