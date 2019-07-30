import { Shape } from "./Shape";
import { IDrawable } from "./IDrawable";
export class Rectangle extends Shape  implements IDrawable {
    private length: number;
    private h: number;
    constructor(x: number, y: number, color: string, l: number, h: number) {
        super(x, y, color);
        this.length = l;
        this.h = h;
    }
    toString(): string {
        let str = super.toString() + `The lenght of one side is: ${this.length};
        The height is: ${this.h}.`
        return str;
    }
    S(): number {
        let temp = this.length * this.h;
        return temp;
    }
    P(): number {
        let temp = 2 * (this.length + this.h);
        return temp;
    }
    draw() {
        let _draw = '';
        for (let i = 0; i < this.h; i++) {
            for (let j = 0; j < this.length; j++) {
                if (i == 0 || i == this.h - 1) {
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