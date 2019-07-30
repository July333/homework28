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
var Shape_1 = require("./Shape");
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(x, y, color, l) {
        var _this = _super.call(this, x, y, color) || this;
        _this.length = l;
        return _this;
    }
    Square.prototype.toString = function () {
        var str = _super.prototype.toString.call(this) + ("The lenght of one side is: " + this.length + ".");
        return str;
    };
    Square.prototype.S = function () {
        var temp = Math.pow(this.length, 2);
        return temp;
    };
    Square.prototype.P = function () {
        var temp = this.length * 4;
        return temp;
    };
    Square.prototype.draw = function () {
        var _draw = '';
        for (var i = 0; i < this.length; i++) {
            for (var j = 0; j < this.length; j++) {
                if (i == 0 || i == this.length - 1) {
                    _draw += '*';
                }
                else if (j == 0 || j == this.length - 1) {
                    _draw += '*';
                }
                else {
                    _draw += ' ';
                }
            }
            _draw += '\n';
        }
        return _draw;
    };
    return Square;
}(Shape_1.Shape));
exports.Square = Square;
