function Quiz(questions) {
  this.score = 0;
  this.questions = question;
  this.questionIndex = 0;
}
//to get the text of current question 
Quiz.prototype.getQuestionIndex = function(){
  return this.questions[this.questionIndex];
}
//if quiz has ended or not
Quiz.prototype.isEnded = function () {
  return this.questions.length === this.questionIndex;
}

//to check if answer is correct or not
Quiz.prototype.guess = function(answer) {
  if(this.getQuestionIndex().correctAnswer(answer)) {
    this.score++;
  } 
  
  this.questionIndex++;


}