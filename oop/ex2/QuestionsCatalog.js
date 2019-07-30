"use strict";
exports.__esModule = true;
var Question_1 = require("../ex1/Question");
var ShortAnswerQuestion_1 = require("../ex1/ShortAnswerQuestion");
var MultipleChoiceQuestion_1 = require("../ex1/MultipleChoiceQuestion");
var QuestionsCatalog = /** @class */ (function () {
    function QuestionsCatalog() {
        this._numberOfQuestions = 0;
        this.questions = [];
    }
    Object.defineProperty(QuestionsCatalog.prototype, "numberOfQuestions", {
        get: function () {
            return this._numberOfQuestions;
        },
        set: function (num) {
            if (this._numberOfQuestions == 20) {
                throw "You get max number of questions";
            }
            this._numberOfQuestions = num;
        },
        enumerable: true,
        configurable: true
    });
    QuestionsCatalog.prototype.addQuestion = function (q) {
        if (this._numberOfQuestions < 20) {
            this.questions[this._numberOfQuestions] = q; //push
            this._numberOfQuestions++;
        }
        else {
            throw "You get max number of questions";
        }
    };
    QuestionsCatalog.prototype.generate = function (num, type, tempQ) {
        var arr = [ShortAnswerQuestion_1.ShortAnswerQuestion, MultipleChoiceQuestion_1.MultipleChoiceQuestion, Question_1.Question];
        this.questions.forEach(function (q) {
            if (q instanceof arr[type - 1]) {
                tempQ.push(q);
            }
            ;
            if (tempQ.length == num) {
                return tempQ;
            }
        });
        return tempQ;
    };
    QuestionsCatalog.prototype.generateQuestionnaire = function (num, type) {
        var tempQ = [];
        if (type == QuestionsCatalog.SHORT) {
            tempQ = this.generate(num, type, tempQ);
        }
        if (type == QuestionsCatalog.MULTIPLE) {
            tempQ = this.generate(num, type, tempQ);
        }
        if (type == QuestionsCatalog.BOTH) {
            tempQ = this.generate(num, type, tempQ);
        }
        tempQ = tempQ.sort(function () {
            return 0.5 - Math.random(); // need more explane
        });
        return tempQ;
    };
    //final?
    QuestionsCatalog.SHORT = 1;
    QuestionsCatalog.MULTIPLE = 2;
    QuestionsCatalog.BOTH = 3;
    return QuestionsCatalog;
}());
exports.QuestionsCatalog = QuestionsCatalog;
