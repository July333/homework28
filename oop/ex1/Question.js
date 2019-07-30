"use strict";
exports.__esModule = true;
var Question = /** @class */ (function () {
    function Question(q) {
        this.qText = q;
    }
    Object.defineProperty(Question.prototype, "qText", {
        get: function () {
            return this._qText;
        },
        set: function (q) {
            this._qText = q;
        },
        enumerable: true,
        configurable: true
    });
    Question.prototype.toString = function () {
        var str = "The question is: " + this.qText;
        return str;
    };
    return Question;
}());
exports.Question = Question;
