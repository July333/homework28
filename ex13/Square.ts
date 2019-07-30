import { Shape } from "./Shape";
import { IDrawable } from "./IDrawable";
export class Square extends Shape implements IDrawable{
    private length: number;
    constructor(x: number, y: number, color: string, l: number) {
        super(x, y, color);
        this.length = l;
    }
    toString(): string {
        let str=super.toString()+`The lenght of one side is: ${this.length}.`
        return str;
    }
    S(): number {
        let temp = Math.pow(this.length, 2);
        return temp;
    }
    P(): number {
        let temp = this.length * 4;
        return temp;
    }
    draw() {
        let _draw = '';
        for (let i = 0; i < this.length; i++) {
            for (let j = 0; j < this.length; j++) {
                if (i == 0 || i == this.length - 1) {
                    _draw += '*';
                }
                else if (j == 0 || j == this.length - 1) {
                    _draw += '*';
                } else {
                    _draw += ' ';
                }
            }
            _draw += '\n';
        }
        return _draw;
    }
}