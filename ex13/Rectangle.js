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
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(x, y, color, l, h) {
        var _this = _super.call(this, x, y, color) || this;
        _this.length = l;
        _this.h = h;
        return _this;
    }
    Rectangle.prototype.toString = function () {
        var str = _super.prototype.toString.call(this) + ("The lenght of one side is: " + this.length + ";\n        The height is: " + this.h + ".");
        return str;
    };
    Rectangle.prototype.S = function () {
        var temp = this.length * this.h;
        return temp;
    };
    Rectangle.prototype.P = function () {
        var temp = 2 * (this.length + this.h);
        return temp;
    };
    Rectangle.prototype.draw = function () {
        var _draw = '';
        for (var i = 0; i < this.h; i++) {
            for (var j = 0; j < this.length; j++) {
                if (i == 0 || i == this.h - 1) {
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
    return Rectangle;
}(Shape_1.Shape));
exports.Rectangle = Rectangle;
