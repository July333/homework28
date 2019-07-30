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
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(x, y, color, r) {
        var _this = _super.call(this, x, y, color) || this;
        _this.R = r;
        return _this;
    }
    Circle.prototype.toString = function () {
        var str = _super.prototype.toString.call(this) + ("Radius is: " + this.R + ".");
        return str;
    };
    Circle.prototype.S = function () {
        var temp = Math.pow(this.R, 2) * Math.PI;
        return temp;
    };
    Circle.prototype.P = function () {
        var temp = 2 * this.R * Math.PI;
        return temp;
    };
    return Circle;
}(Shape_1.Shape));
exports.Circle = Circle;
