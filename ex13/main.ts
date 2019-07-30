import { Circle, Square, Rectangle } from "./models";
var r=new Rectangle(3, 3, "red", 5, 4);
console.log(r.draw());
var c=new Circle(3, 3, "red", 6);
var s=new Square(3, 3, "red", 5);
console.log(s.draw());