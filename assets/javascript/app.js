$(document).ready(function() {
  //Global Variables
  //--------------------------------------------------------------------	
  var round = 0;
  var correct = 0;
  var incorrect = 0;
  var unanswered = 0;
  var percent = 0;
  var time = 5;
  
  /*arrays containing the questions, choices, and correct answer that the variable
  round will cycle through when called in functions*/
  var questions =    ["Where did the name lynard skynard come from?",
                      "What is the real name of Freddie Mercury?",
                      "What is Paul McCartney's first name?",
                      "How did AC/DC get their name?"];
  var choiceArray1 = ['Local Mailman', 'Freddie Mingus', 'James', 'Air Conditioning & DC Comics'];
  var choiceArray2 = ['High School Football Coach', 'Farrokh Bulsara', 'Paul', 'Sewing Machine'];
  var choiceArray3 = ['The Bassist Name', 'Ben Johnson', 'Sting', 'Magazine Ad'];
  var choiceArray4 = ['High School Gym Teacher', 'Eleven', 'John', 'TV Commercial'];
  var correctArray = ['High School Gym Teacher', 'Farrokh Bulsara', 'James', 'Sewing Machine'];
  var gifArray = ['assets/gifs/gif1.gif', 'assets/gifs/gif2.gif', 'assets/gifs/gif3.gif', 'assets/gifs/gif4.gif'];

  //functions
  //--------------------------------------------------------------------

  
  //functions to set up the timer
  //--------------------------------------------------------------------

  /*sets the timer interval to 1 second with a variable of counter to cancel
  with clearTimeout()*/
  function setTimer() {
    counter = setInterval(timer, 1000);
  }
 //stops the timer at the end of the game by clearing the variable
  function stopTimer() {
    clearTimeout(counter);
  }

  /*reduces time variable by 1 per 1 second interval, insets the time into the 
  #timer div.  If time reaches 0 stop, unanswered++ and call the funciton for the 
  next question.*/
  function timer() {
    time--;
    $('#timer').text('Time Remaining: ' + time + ' Seconds');
    if(time == 0){
      unanswered++;
      stopTimer();
      outOfTime();
    }
  }

  //resets the timer to the starting amount
  function resetTimer() {
    time = 5;
  }

  //--------------------------------------------------------------------

  /*calls the question and answer to the #game div.  If theround is greater 
  than the amount of questions it will stop the timer, hide the game screen 
  and show results*/
  function init() {
    $('#pauseScreen').hide();
    $('#game').show();
    if(round < questions.length) {
      $('#timer').text('Time Remaining: ' + time + ' Seconds');
      $('#question').text(questions[round]);
      $('#button1').text(choiceArray1[round]);
      $('#button2').text(choiceArray2[round]);
      $('#button3').text(choiceArray3[round]);
      $('#button4').text(choiceArray4[round]);
    } 
    else{
      stopTimer();
      $('#game').hide();
      $('#results').show();
      $('#correct').text("Correct: " + correct);
      $('#incorrect').text("Incorrect: " + incorrect);
      $('#unanswered').text("Unanswered: " + unanswered)
      $('#percent').text("Percent Correct: " + percentWin() + "%");
    }
    return;
  }
  
  //calls functions for a new round
  function newRound(){
    round++;
    resetTimer();
    setTimer();
    init();
  }

    /*compares the users choice to the correct answer.  correct/incorrect++ 
    and starts a new round*/
  function checkAnswer(answer) {
    stopTimer();
    if(answer == correctArray[round]){
      correct++;
      stopTimer();
      rightAnswer();
    }
    else {
      incorrect++;
      console.log("incorrect " + incorrect);
      stopTimer();
      wrongAnswer();
    }

  }

  /*divide correct answers by the total amount of questions to give a 
  percent.  Multiply by 100 to take it from a decimal*/
  function percentWin() {
    var percent = correct / questions.length;
    return percent * 100
  }
  
  function pauseScreen() {
    $('#pauseScreen').show();
      $('#timer').text('Time Remaining: ' + time + ' Seconds');
      $('#game').hide();
      $('#gif').html('<img src="' + gifArray[round] + '">');
  }

  function outOfTime() {
      setTimeout(newRound, 3000);
      pauseScreen();
      $('#quickResponse').text("You ran out of time!");
      $('#correctAnswer').text("The correct answer was: " + correctArray[round]);
    }

  function wrongAnswer() {
    setTimeout(newRound, 3000);
      pauseScreen();
      $('#quickResponse').text("Wrong Answer!");
      $('#correctAnswer').text("The correct answer was: " + correctArray[round]);
  }

  function rightAnswer() {
    setTimeout(newRound, 3000);
      pauseScreen();
      $('#quickResponse').text("Right Answer!");
  }
  //Main Game
  //--------------------------------------------------------------------
  /*start screen button that when pressed will hide the #start div and show the
  #game div*/
  $('#buttonStart').on('click', function() {
    $('#start').hide();
    $('#game').show();
    init();
    setTimer();
          
  });

  /*calls the checkAnswer function to compare the choice[round#] in the array the user
  made to the correct answer*/
  $('#button1').on('click', function() {
      checkAnswer(choiceArray1[round])
      
  });

    $('#button2').on('click', function() {
      checkAnswer(choiceArray2[round])
  });

    $('#button3').on('click', function() {
      checkAnswer(choiceArray3[round])
  });

    $('#button4').on('click', function() {
      checkAnswer(choiceArray4[round])
  });


//CSS
//--------------------------------------------------------------------

//when hovering over the buttons the background chnages color
  $('#button1').hover(function() {
      $(this).css({"background-color": "gray", "border": "black solid 2px"})
    },
    function() {
      $(this).css({"background-color": "", "border": ""})
    });

$('#button2').hover(function() {
      $(this).css({"background-color": "gray", "border": "black solid 2px"})
    },
    function() {
      $(this).css({"background-color": "", "border": ""})
    });

$('#button3').hover(function() {
      $(this).css({"background-color": "gray", "border": "black solid 2px"})
    },
    function() {
      $(this).css({"background-color": "", "border": ""})
    });

$('#button4').hover(function() {
      $(this).css({"background-color": "gray", "border": "black solid 2px"})
    },
    function() {
      $(this).css({"background-color": "", "border": ""})
    });





}); 













