import { QuestionsCatalog } from "../ex2/QuestionsCatalog";
import { Question } from "../ex1/Question";
export class Questionnaire {
    public questionsCat: QuestionsCatalog;
    private corentQ: number;
    private countRightA: number;
    public constructor(type: number, num: number, cat: QuestionsCatalog) {
        this.questionsCat = cat;
        this.questionsCat.generateQuestionnaire(type, num);
        this.corentQ = 0;
        this.countRightA = 0;
    }
    public hasNext(): boolean {
        if (this.questionsCat.numberOfQuestions > this.corentQ + 1) {
            return true;
        }
        else {
            return false;
        }
    }
    public getNext(): Question {
        //if(this.hasNext()){
        this.corentQ++;
        return this.questionsCat.questions[this.corentQ - 1];
        //}

    }
    public checkAnswer(answer: string): void {
        if (answer == this.questionsCat.questions[this.corentQ].getCorrectAnswer()) {
            this.countRightA++;
        }
    }
    public getTotalQuestions(): number {
        return this.corentQ + 1;
    }
    public getCorrectAnswers(): number {
        return this.countRightA;
    }
}