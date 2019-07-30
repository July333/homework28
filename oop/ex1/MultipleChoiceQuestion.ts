import { Question } from "./Question";
export class MultipleChoiceQuestion extends Question {
    public answers: string[];
    private _numberOfAnswers!: number;
    get numberOfAnswers(): number {
        return this._numberOfAnswers;
    }
    set numberOfAnswers(num: number) {
        if (num < 6) {
            this._numberOfAnswers = num;
        }
        else {
            throw "Too much answers";
        }
    }
    correctAnswerIndex: number;
    constructor(q: string, an: string) {
        super(q);
        this.answers=[];
        this.answers[0] = an;
        this.numberOfAnswers = 1;
        this.correctAnswerIndex = 0;
    }
    public toString(): string {
        let str = `${super.toString()}.
        The answers are: `;
        this.answers.forEach(an => {
            str += an = "/n";
        });
        return str;
    }
    public getCorrectAnswer(): string {
        let ans = this.answers[this.correctAnswerIndex];
        let str = `The answer is: ${ans}`;
        return str;
    }
    public addCorrectAnswer(answer: string): void {
        if (this.ans(answer)) {
            this.correctAnswerIndex = this.numberOfAnswers - 1;
        }
    }
    public addAnswer(answer: string): void {
        this.ans(answer);
    }
    private ans(an: string): boolean {
        if (this.numberOfAnswers >= 5) {
            return false;
        }
        this.answers[this.numberOfAnswers] = an;
        this.numberOfAnswers++;
        return true;
    }
}
