$(document).ready(function() {
	
var round = 0;
var correct = 0;
var incorrect = 0;
var questions = 4;
var percent = correct / questions;

var	question1 = {
  question: "this is the first question",
  answers: ['answer1', 'answer2', 'answer3', 'answer4'],
  correct: [false, true, false, false]
  //could also use correct: 2 would say answer 3 is correct
};

var question2 = {
  question: "this is the second question",
  answers: ['answer1', 'answer2', 'answer3', 'answer4'],
  correct: 2
  //this shows answer3 is correct
};

var question2 = {

}




//run game function if button pressed
//turns button off and turns game dive on
//game start turnst he timer on as well

$('#buttonStart').on('click', function() {
  $('#start').hide();
  $('#game').show();
    init();
    
});





function init() {
  //hide the start page
  $('#question').text(question1.question);
  $('#button1').text(question1.answers[0]);
  $('#button2').text(question1.answers[1]);
  $('#button3').text(question1.answers[2]);
  $('#button4').text(question1.answers[3]);

};

$('.buttons').on('click', function() {
    $('#game').hide();
    $('#results').show();




});

//capture data of the user guess

//check to see if the user guess is correct

}); 

//for loop putting each question into the game
//for loop putting a <button> + answer[i]+</button>

//function to call the question and possible answers





//funciton to record the click as the user guess


/*var count = 30;
var counter=setInterval(timer, 1000); 
//function to change the question once time runs down or user chooses a question
console.log(count);
function timer()
{
  count--;
  if (count <= 0)
  {
  	document.getElementsById('body').innerHTML="you lose";
     count = 30;
     return;
  }

 document.getElementById("timer").innerHTML=count + " secs"; // watch for spelling
}
*/









