var wins = 0;
var losses = 0;
// var crystal_1 = in each game it becomes a random number 1-12
//var crystal_2 = in each game it becomes a random number 1-12
//var crystal_3 = in each game it becomes a random number 1-12
//var crystal_4 = in each game it becomes a random number 1-12
//var boss_number = in each game it become a random number 19-120 (it's called the boss number bc its the number to beat LIKE the boss battle in video games lol)
var leftover_boss_number = "";

$ (function()reset; 



$(document).ready(function(){
    
 var boss_number= Math.floor(Math.random() * 120) + 19)
 $("#boss_number").text(random);      
    
var crystal_1= Math.floor(Math.random() * 12) + 1);
var crystal_2= Math.floor(Math.random() * 12) + 1);
var crystal_3= Math.floor(Math.random() * 12) + 1);
var crystal_4= Math.floor(Math.random() * 12) + 1);
}

//Next step would be create an on.click event 
//so that when the player presses a crystal the random number subtracts from the boss_number 
// so a function is need that would take the value of the pressed crsytal - boss_number = (and creates) leftover boss_number
//I would need an if/else statement
        //if the value of the selected crystal does not equal boss_number pick another crystal 
        // and complete function above (subtract crsytal value from boss_number then create leftover boss_number)
        //then leftover boss_number become the new value 

        //else (crystal===boss_number)you win

        // store win into #wins

        //then you might need another if/else 
        //if crystal value > leftover boss_number then you loss

        //store loss into #losses
        //once loss we need to reset the game. 







