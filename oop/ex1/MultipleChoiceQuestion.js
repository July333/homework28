"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Question_1 = require("./Question");
var MultipleChoiceQuestion = /** @class */ (function (_super) {
    __extends(MultipleChoiceQuestion, _super);
    function MultipleChoiceQuestion(q, an) {
        var _this = _super.call(this, q) || this;
        _this.answers = [];
        _this.answers[0] = an;
        _this.numberOfAnswers = 1;
        _this.correctAnswerIndex = 0;
        return _this;
    }
    Object.defineProperty(MultipleChoiceQuestion.prototype, "numberOfAnswers", {
        get: function () {
            return this._numberOfAnswers;
        },
        set: function (num) {
            if (num < 6) {
                this._numberOfAnswers = num;
            }
            else {
                throw "Too much answers";
            }
        },
        enumerable: true,
        configurable: true
    });
    MultipleChoiceQuestion.prototype.toString = function () {
        var str = _super.prototype.toString.call(this) + ".\n        The answers are: ";
        this.answers.forEach(function (an) {
            str += an = "/n";
        });
        return str;
    };
    MultipleChoiceQuestion.prototype.getCorrectAnswer = function () {
        var ans = this.answers[this.correctAnswerIndex];
        var str = "The answer is: " + ans;
        return str;
    };
    MultipleChoiceQuestion.prototype.addCorrectAnswer = function (answer) {
        if (this.ans(answer)) {
            this.correctAnswerIndex = this.numberOfAnswers - 1;
        }
    };
    MultipleChoiceQuestion.prototype.addAnswer = function (answer) {
        this.ans(answer);
    };
    MultipleChoiceQuestion.prototype.ans = function (an) {
        if (this.numberOfAnswers >= 5) {
            return false;
        }
        this.answers[this.numberOfAnswers] = an;
        this.numberOfAnswers++;
        return true;
    };
    return MultipleChoiceQuestion;
}(Question_1.Question));
exports.MultipleChoiceQuestion = MultipleChoiceQuestion;
