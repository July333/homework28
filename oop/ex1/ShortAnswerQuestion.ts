import { Question } from "./Question";
export class ShortAnswerQuestion extends Question {
    public answer: string;
    constructor(q: string, a: string) {
        super(q);
        this.answer = a;
    }
    public toString(): string {
        let str = `${super.toString()}.
        The answer is: ${this.answer}`
        return str;
    }
    public getCorrectAnswer(): string {
        let str = `The answer is: ${this.answer}`;
        return str;
    }
    public addCorrectAnswer(answer: string): void {
        this.answer = answer;
    }
}