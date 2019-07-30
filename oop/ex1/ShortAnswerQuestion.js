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
var ShortAnswerQuestion = /** @class */ (function (_super) {
    __extends(ShortAnswerQuestion, _super);
    function ShortAnswerQuestion(q, a) {
        var _this = _super.call(this, q) || this;
        _this.answer = a;
        return _this;
    }
    ShortAnswerQuestion.prototype.toString = function () {
        var str = _super.prototype.toString.call(this) + ".\n        The answer is: " + this.answer;
        return str;
    };
    ShortAnswerQuestion.prototype.getCorrectAnswer = function () {
        var str = "The answer is: " + this.answer;
        return str;
    };
    ShortAnswerQuestion.prototype.addCorrectAnswer = function (answer) {
        this.answer = answer;
    };
    return ShortAnswerQuestion;
}(Question_1.Question));
exports.ShortAnswerQuestion = ShortAnswerQuestion;
