"use strict";
exports.__esModule = true;
var models_1 = require("./models");
var r = new models_1.Rectangle(3, 3, "red", 5, 4);
console.log(r.draw());
var c = new models_1.Circle(3, 3, "red", 6);
var s = new models_1.Square(3, 3, "red", 5);
console.log(s.draw());
