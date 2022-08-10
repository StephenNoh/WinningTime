const questions = [
    {
      "question": "You have three timeouts remaining with 3:01 left in the game. Your team is down by one and the opposing team has just made a free throw. As you prepare to inbound, you: ",
      "answer1": "Let your guard bring the ball up. If no easy transition opportunities present themselves in the first few seconds of the shot clock, then call a timeout and set something up",
      "answer1Total": 0,
      "answer2": "Call a timeout immediately, before the ball is inbounded",
      "answer2Total": 1,
      "answer3": "This is going to be a close game. You need to save all three timeouts to allow offense/defense subs late",
      "answer3Total": 0,
      "answer4": "Wait until your team crosses halfcourt, then call timeout so that you can inbound from halfcourt where your plays work better.",
      "answer4Total": 0
    },
    {
      "question": "Your team is down by one with 11 seconds to go and one timeout remaining. Your opponent has airballed a wild layup, and your point guard has just grabbed the rebound. You:",
      "answer1": "Call a timeout to advance the ball and set up the game-winner",
      "answer1Total": 0,
      "answer2": "Call a timeout to sub in your best shooters",
      "answer2Total": 0,
      "answer3": "Let the offense see if it can get something easy. If nothing's there after a few seconds, then you can always call the timeout",
      "answer3Total": 1,
      "answer4": "Save the timeout, tell your guard to slow down, and yell out your best play from the sideline",
      "answer4Total": 0
    },
    {
      "question": "You're down by four with 15 seconds to go and the ball. You've just called a timeout, leaving yourself with one remaining. You are deciding which play to draw up. You have a quick 2 play that usually takes about two seconds and works 55% of the time. You also have a play for a 3 that can get you a 35 percent shot. All of the players on the opposing team shoot at least 80% from the line. You:",
      "answer1": "Call the quick 2 play. You will have to foul anyway, and if you miss the 3, then the game is over.",
      "answer1Total": 0,
      "answer2": "Call the 3 play. You need to make up points as quickly as possible.",
      "answer2Total": 1,
      "answer3": "Call the quick 2 play. You still have a timeout to extend the game if it doesn't work.",
      "answer3Total": 0,
      "answer4": "Call the 3 play and wind down the clock. You don't want to give the other team an opportunity to set up a good play after the shot.",
      "answer4Total": 0

    },
    {
      "question": "Tie game, 0.2 seconds left. You have the ball, and you've called timeout. What play are you drawing up?",
      "answer1": "Just don't turn it over or commit any sort of foul. Not enough time to legally get a shot off, we can only lose on free throws to the other team.",
      "answer1Total": 0,
      "answer2": "Try to shoot it into the basket from the inbound and have our big man commit offensive goaltending when the ball is in the cylinder.",
      "answer2Total": 1,
      "answer3": "0.2 is still enough time to get our fastest shooter a normal catch-and-shoot free throw line jumper. Run our best play to set that up. ",
      "answer3Total": 0,
      "answer4": "Try to punch the ball in the air towards the basket",
      "answer4Total": 0

    },
    {
      "question": "Tie game, 20 seconds left. You have the ball, and you've called timeout. What do you tell your team? ",
      "answer1": "Wind the clock down and make absolutely sure the ball in the air when the time is at zero so that our opponent doesn't have a chance to score. ",
      "answer1Total": 1,
      "answer2": "Get a shot up with a few seconds left so that we have a chance to get an offensive rebound and putback off a miss.",
      "answer2Total": 0,
      "answer3": "Get the shot up early. If we miss, we can intentionally foul and still get the ball back for the last shot with a chance to win or tie.",
      "answer3Total": 0,
      "answer4": "Find the best shot you can and don't worry about the clock. The most important thing is that we get a make and take the lead.",
      "answer4Total": 0

    },
    {
      "question": "Four minutes left in the fourth quarter. Your team’s head coach, Tim Poylen, used up all of your timeouts three minutes ago and was ejected for challenging the referee to a push up contest. You, the assistant coach, have taken over. The referees called your star player out of bounds saving the ball, but you look up at the jumbotron and see that he was clearly inbounds. You:",
      "answer1": "Call a challenge to try and get the call reversed",
      "answer1Total": 0,
      "answer2": "Install a punch clock because why not? ",
      "answer2Total": 0,
      "answer3": "Save your challenge for the last two minutes",
      "answer3Total": 0,
      "answer4": "Don't call a challenge.",
      "answer4Total": 1

    },
    {
      "question": "Three minutes left in the game. You have one timeout remaining. Your opponent has clearly double dribbled before laying it in. You",
      "answer1": "Call a challenge. Every point is crucial down the stretch, especially if you have a high chance of overturning a play.",
      "answer1Total": 0,
      "answer2": "Don't call a challenge. You need to save it for the last two minutes of the game.",
      "answer2Total": 0,
      "answer3": "Don't call a challenge. The play is not reviewable.",
      "answer3Total": 1,
      "answer4": "Don't call a challenge. Challenges are automatic in the last three minutes",
      "answer4Total": 0

    }

  ]

  
let currentQuestion = 0;
let score = [];
const totalQuestions =questions.length;
  
const container = document.querySelector('.quiz-container');
const jumbotron = document.querySelector('.jumbotron');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');
  
//Function to generate question 
function generateQuestions (index) {
    const question = questions[index];
    const option1Total = questions[index].answer1Total;
    const option2Total = questions[index].answer2Total;
    const option3Total = questions[index].answer3Total;
    const option4Total = questions[index].answer4Total;
    questionEl.innerHTML = `<li value=${index + 1}> ${question.question}</li>`
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    option3.setAttribute('data-total', `${option3Total}`);
    option4.setAttribute('data-total', `${option4Total}`);
    option1.innerHTML = `${question.answer1}`
    option2.innerHTML = `${question.answer2}`
    option3.innerHTML = `${question.answer3}`
    option4.innerHTML = `${question.answer4}`
}


  
function loadNextQuestion () {
  const selectedOption = document.querySelector('input[type="radio"]:checked');
  //Check if input selected
  if(!selectedOption) {
      alert('Please select your answer!');
      return;
  }
  //Get value of selected radio
  const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

  ////Add the answer score to the score array
  score.push(answerScore);
  currentQuestion++;

  //once finished clear checked
  selectedOption.checked = false;
  //If quiz is on the final question
  if(currentQuestion == totalQuestions - 1) {
      nextButton.textContent = 'Finish';
  }
  

  //populate HTML in results container
  if(currentQuestion == totalQuestions) {
      let totalScore = score.reduce(function(a,b){
        return a+b;
    });
      container.style.display = 'none';
      jumbotron.style.display = 'none';
      result.style.display = "inherit";
      result.innerHTML =

        `<h1 class="final-score">YOUR FINAL SCORE</h1> 
        <p>${totalScore}/7</p>
        
      <button type="button" class="btn btn-primary btn-lg" id="restart-button" onclick="restartQuiz()">Restart Quiz</button>
        `;
      return;
  }
  generateQuestions(currentQuestion);
}
  
//load previous question
function loadPreviousQuestion() {
  currentQuestion--;
  score.pop();
  generateQuestions(currentQuestion);
}
  
//reset and restart the quiz;
function restartQuiz() {
    currentQuestion = 0;
    score = [];
    location.reload();
}
  
  
generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click',loadPreviousQuestion);