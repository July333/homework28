export abstract class Shape{
    protected x: number;
    protected y: number;
    protected color: string;

    constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    toString():string{
        let str=`X is: ${this.x};
        Y is: ${this.y};
        Color is: ${this.color};`
        return str;
    } 
    abstract S();
    abstract P();
}