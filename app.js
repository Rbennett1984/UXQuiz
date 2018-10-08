function populate() {
  if(quiz.isEnded()) {
    showScores();
  }

  else {
    //show question
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    //show choices
    var choices = quiz.getQuestionIndex().choices;
    for(var i = 0; i< choices.length; i++) {
      var element = document.getDocumentById("choice" + i);
      element.innerHTML = choices[i];
      guess('btn' + i, choices[i]);
    }

    showProgress()
   }
  
};

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function() {
    quiz.guess(guess);
  }
}





function showScores() {
  var gameOverHtml =  "<h1>Result</h1>";
      gameOverHtml += "<h2 id='score'> Your scores: " + quiz.score + "</h2>"
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHtml;
  populate();
  };

function showProgress() {
  var currentQuestionNumber = quiz.QuestionIndex = 1;
  var element = document.getElementById("progress");
  element.innerHtml = "Question" + currentQuestionNumber = "of" + quiz.questions.length;
}



var questions = [
  new Question('Which is not blah?',['one', 'two', 'three', 'four'], 'four'),
  new Question('Which is not blah?',['one', 'two', 'three', 'four'], 'four'),
  new Question('Which is not blah?',['one', 'two', 'three', 'four'], 'four'),
  new Question('Which is not blah?',['one', 'two', 'three', 'four'], 'four'),
  new Question('Which is not blah?',['one', 'two', 'three', 'four'], 'four')
];

var quiz = new Quiz(questions);

populate();