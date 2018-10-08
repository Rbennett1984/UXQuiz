function Question(text, choices, answer) {
    this.text = text;
    this.choice = choices;
    this.answer = answer;

}

Question.prototype.correctAnswer = function(choice) {
  return choice === this.answer;
}



