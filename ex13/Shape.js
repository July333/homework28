"use strict";
exports.__esModule = true;
var Shape = /** @class */ (function () {
    function Shape(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }
    Shape.prototype.toString = function () {
        var str = "X is: " + this.x + ";\n        Y is: " + this.y + ";\n        Color is: " + this.color + ";";
        return str;
    };
    return Shape;
}());
exports.Shape = Shape;
