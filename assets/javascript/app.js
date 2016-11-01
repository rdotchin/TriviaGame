$(document).ready(function() {
  //Global Variables
  //--------------------------------------------------------------------	
  var round = 0;
  var correct = 0;
  var incorrect = 0;
  var questions = 4;
  var percent = correct / questions;
  var time = 5;
  var counter = setInterval(timer, 1000)


  var game = {
    question: ["question1", "question2", "question3", "question4"],
    choice1: ["gators", "two1", "three1", "four1"],
    choice2: ["one2", "two2", "three2", "four2"],
    choice3: ["one3", "two3", "three3", "four3"],
    choice4: ["one4", "two4", "three4", "four4"],
    correct: ["gators", "two", "three", "four"]

  }

  var	question1 = {
    question: "What is the mascot of University of Florida",
    answers: ['crane', 'gator', 'bulldog', 'tide'],
    correct: [false, true, false, false]
    //could also use correct: 2 would say answer 3 is correct
  };

  var question2 = {
    question: "what is the mascot of Georgia",
    answers: ['bulldog', 'golden retriever', 'puppy', 'blah'],
    correct: [true, false, false, false]
  };

  var question3 = {
    question: "this is the third question",
    answers: ['answer1', 'answer2', 'answer3', 'answer4'],
    correct: 2
  //this shows answer3 is correct
  }

  //functions
  //--------------------------------------------------------------------

  /*reduces time variable by 1 per second, insets the time into the #timer div, if time
  reaches 0 stop and call the funciton for the next question*/
  function timer() {
    time--;
    $('#timer').text(time + ' seconds');
  
  if(time == 0){
      resetTimer();
      init();
    }
  }

  function resetTimer() {
    time = 5;
  }

  function stopTimer() {
    clearTimeout(counter);
  }

  function checkAnswer() {
    if(userGuess == game.question[round].correct){
      correct++;
    }
    else{
      incorrect++;
    }
  }
/*  function init() {
    //hide the start page
    $('#timer').text(time);
    $('#question').text(question1.question);
    $('#button1').text(question1.answers[0]);
    $('#button2').text(question1.answers[1]);
    $('#button3').text(question1.answers[2]);
    $('#button4').text(question1.answers[3]);
    round++

  };*/

/*  function questionTwo() {
    $('#timer').text(time);
    $('#question').text(question2.question);
    $('#button1').text(question2.answers[0]);
    $('#button2').text(question2.answers[1]);
    $('#button3').text(question2.answers[2]);
    $('#button4').text(question2.answers[3]);
    timer();



  }*/
  /*calls the question and answer to the #game div, resets the timer and 
  increases the round variable by 1.  If it round is greater than the amount
  of questions it will stop the timer, hide the #game and show the #results div*/
  function init() {
    if(round < game.question.length) {
    console.log("pre" + round)
    $('#timer').text(time + ' seconds');
    $('#question').text(game.question[round]);
    $('#button1').text(game.choice1[round]);
    $('#button2').text(game.choice2[round]);
    $('#button3').text(game.choice3[round]);
    $('#button4').text(game.choice4[round]);
    round++;
    counter;
    console.log("post" + round);
    } 
    else{
      stopTimer();
      $('#game').hide();
      $('#results').show();
    }
    return;
  }




  //Main Process
  //--------------------------------------------------------------------
  /*start screen button that when pressed will hide the #start div and show the
  #game div*/
  $('#buttonStart').on('click', function() {
    $('#start').hide();
    $('#game').show();

    init();
          
  });

  /*if the user selects an answer button it will reset the timer and bring
  up the next round of questions*/
  $('.buttons').on('click', function() {
      
      resetTimer();
      init();
  });









//hover not currently working
  $(".buttons").hover(function() {
      $(this).addClass(".hover");
  },
  function(){
      $(this).removeClass(".hover");
  });






}); 













