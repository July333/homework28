"use strict";
exports.__esModule = true;
var Questionnaire = /** @class */ (function () {
    function Questionnaire(type, num, cat) {
        this.questionsCat = cat;
        this.questionsCat.generateQuestionnaire(type, num);
        this.corentQ = 0;
        this.countRightA = 0;
    }
    Questionnaire.prototype.hasNext = function () {
        if (this.questionsCat.numberOfQuestions > this.corentQ + 1) {
            return true;
        }
        else {
            return false;
        }
    };
    Questionnaire.prototype.getNext = function () {
        //if(this.hasNext()){
        this.corentQ++;
        return this.questionsCat.questions[this.corentQ - 1];
        //}
    };
    Questionnaire.prototype.checkAnswer = function (answer) {
        if (answer == this.questionsCat.questions[this.corentQ].getCorrectAnswer()) {
            this.countRightA++;
        }
    };
    Questionnaire.prototype.getTotalQuestions = function () {
        return this.corentQ + 1;
    };
    Questionnaire.prototype.getCorrectAnswers = function () {
        return this.countRightA;
    };
    return Questionnaire;
}());
exports.Questionnaire = Questionnaire;
