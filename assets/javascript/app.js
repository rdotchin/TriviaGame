$(document).ready(function() {
  //Global Variables
  //--------------------------------------------------------------------	
  var round = 0;
  var correct = 0;
  var incorrect = 0;
  var unanswered = 0;
  var percent = 0
  var time = 30;
  /*var counter = setInterval(timer, 1000)*/

  /*arrays containing the questions, choices, and correct answer that the variable
  round will cycle through when called in functions*/
  var questions = ["Where did the name lynard skynard come from?",
                   "What is the real name of Freddie Mercury?",
                   "What is Paul McCartney's first name?",
                   "How did AC/DC get their name?"];
  var choiceArray1 = ['Local Mailman', 'Freddie Mingus', 'James', 'Air Conditioning & DC Comics'];
  var choiceArray2 = ['High School Football Coach', 'Farrokh Bulsara', 'Paul', 'Sewing Machine'];
  var choiceArray3 = ['The Bassist Name', 'Ben Johnson', 'Sting', 'Magazine Ad'];
  var choiceArray4 = ['High School Gym Teacher', 'Eleven', 'John', 'TV Commercial'];
  var correctArray = ['High School Gym Teacher', 'Farrokh Bulsara', 'James', 'Sewing Machine'];


  //functions
  //--------------------------------------------------------------------

  
  //functions to set up the timer
  //--------------------------------------------------------------------

  //sets the timer interval but does not start it
  function setTimer() {
    counter = setInterval(timer, 1000);
  }

  /*reduces time variable by 1 per second, insets the time into the #timer div, if time
  reaches 0 stop and call the funciton for the next question.  Does not start the
  timer*/
  function timer() {
    time--;
    $('#timer').text('Time Remaining: ' + time + ' Seconds');
    if(time == 0){
      unanswered++;
      newRound();
    }
  }

  //resets the timer to the starting amount
  function resetTimer() {
    time = 30;
  }

  //stops the timer at the end of the game by calling the variable
  function stopTimer() {
    clearTimeout(counter);
  }
  //--------------------------------------------------------------------

  /*calls the question and answer to the #game div, resets the timer and 
  increases the round variable by 1.  If it round is greater than the amount
  of questions it will stop the timer, hide the #game and show the #results div*/
  function init() {
    if(round < questions.length) {
    $('#timer').text('Time Remaining: ' + time + ' Seconds');
    $('#question').text(questions[round]);
    $('#button1').text(choiceArray1[round]);
    $('#button2').text(choiceArray2[round]);
    $('#button3').text(choiceArray3[round]);
    $('#button4').text(choiceArray4[round]);
    /*counter;*/

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
  
  function newRound(){
    round++;
    resetTimer();
    init();
  }

    /*checks the question in the choice array to the correct answer array.  If correct
  it adds 1 to correct, 1 to round, resets the timer and init calls the new question,
  choices and timer*/
  function checkAnswer(answer) {
    if(answer == correctArray[round]){
      correct++;
      newRound();
    }
    else {
      incorrect++;
      console.log("incorrect " + incorrect);
      newRound();
    }

  }

  /*divide correct answers by the total amount of questions to give a 
  percent.  Multiply by 100 to take it from a decimal*/
  function percentWin() {
    var percent = correct / questions.length;
    return percent * 100
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

  /*if the user selects an answer button it will reset the timer and bring
  up the next round of questions*/
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













