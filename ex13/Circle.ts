import { Shape } from "./Shape";
export class Circle extends Shape{
    private R: number;
    constructor(x: number, y: number, color: string, r: number) {
        super(x, y, color);
        this.R = r;
    }
    toString():string{
        let str=super.toString()+`Radius is: ${this.R}.`
        return str;
    } 
    S():number{
        let temp=Math.pow(this.R, 2)*Math.PI;
        return temp;
    }
    P():number{
        let temp=2*this.R*Math.PI;
        return temp;
    }
}