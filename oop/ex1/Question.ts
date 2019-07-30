export abstract class Question {
    private _qText!: string;
    get qText(): string {
        return this._qText;
    }
    set qText(q: string) {
        this._qText = q;
    }
    constructor(q:string) {
        this.qText = q;
    }
    public toString(): string {
        let str = `The question is: ${this.qText}`;
        return str;
    }
    public abstract getCorrectAnswer(): string;
    public abstract addCorrectAnswer(answer: string): void;
}