import { Question,  ShortAnswerQuestion, MultipleChoiceQuestion, QuestionsCatalog, Questionnaire } from  "./models";

//import { Question } from "./ex1/Question";
//import { ShortAnswerQuestion } from "./ex1/ShortAnswerQuestion";
//import { MultipleChoiceQuestion } from "./ex1/MultipleChoiceQuestion";
//import { QuestionsCatalog } from "./ex2/QuestionsCatalog";
//import { Questionnaire } from "./ex3/Questionnaire";

function main() {
    var cat: QuestionsCatalog = new QuestionsCatalog();
    //var q1: Question = new ShortAnswerQuestion("How much legs does the spider have?", "8");
    var q1 = new ShortAnswerQuestion("How much legs does the spider have?", "8");
    cat.addQuestion(q1);
    //var q2: Question = new MultipleChoiceQuestion("Where is the sun rise?", "East");
    var q2 = new MultipleChoiceQuestion("Where is the sun rise?", "East");
    q2.addAnswer("West");
    q2.addAnswer("North");
    q2.addAnswer("South");
    cat.addQuestion(q2);
    // add more questions to the catalog

    var qnr: Questionnaire = new Questionnaire(QuestionsCatalog.BOTH, 5, cat);
    console.log("Welcome to our questionnaire, its starts now!");
    while (qnr.hasNext()) {
        var q: Question = qnr.getNext();
        console.log(q);
        console.log("Your answer: ");
        //var answer: string = scan.nextLine();
        var answer: string = "abs";
        console.log(answer);
        qnr.checkAnswer(answer);
    }
    console.log("Thank you for participating in our test");
    var correct: number = qnr.getCorrectAnswers();
    var total: number = qnr.getTotalQuestions();
    console.log("You've answered " + correct + " correct answers out of " +
        total + " questions");
}
main();