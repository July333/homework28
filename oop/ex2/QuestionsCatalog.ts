import { Question } from "../ex1/Question";
import { ShortAnswerQuestion } from "../ex1/ShortAnswerQuestion";
import { MultipleChoiceQuestion } from "../ex1/MultipleChoiceQuestion";

export class QuestionsCatalog {
    public questions: Question[];
    private _numberOfQuestions: number;
    get numberOfQuestions(): number {
        return this._numberOfQuestions;
    }
    set numberOfQuestions(num: number) {
        if (this._numberOfQuestions == 20) {
            throw "You get max number of questions";
        }
        this._numberOfQuestions = num;
    }
    //final?
    public static SHORT: number = 1;
    public static MULTIPLE: number = 2;
    public static BOTH: number = 3;

    constructor() {
        this._numberOfQuestions = 0;
        this.questions = [];
    }
    public addQuestion(q: Question): void {
        if (this._numberOfQuestions < 20) {
            this.questions[this._numberOfQuestions] = q;//push
            this._numberOfQuestions++;
        }
        else {
            throw "You get max number of questions";
        }
    }
    private generate(num: number, type: number,tempQ: Question[] ): Question[] {
        let arr = [ShortAnswerQuestion, MultipleChoiceQuestion, Question];
        this.questions.forEach(q => {
            if (q instanceof arr[type - 1]) {
                tempQ.push(q);
            };
            if (tempQ.length == num) {
                return tempQ;
            }
        });
        return tempQ;
    }
    public generateQuestionnaire(num: number, type: number): Question[] {
        let tempQ:Question[]=[];
        if (type == QuestionsCatalog.SHORT) {
            tempQ = this.generate(num, type,tempQ);
        }
        if (type == QuestionsCatalog.MULTIPLE) {
            tempQ = this.generate(num, type,tempQ);
        }
        if (type == QuestionsCatalog.BOTH) {
            tempQ = this.generate(num, type,tempQ);
        }
        tempQ = tempQ.sort(function () {
            return 0.5 - Math.random();// need more explane
        });
        return tempQ;
    }
}