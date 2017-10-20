import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuestionService} from './question.service';
import { Router } from '@angular/router';
import { Question } from "./question";


@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  question: String;
  answer: String;
  fake1: String;
  fake2: String;
  new_question: Question;

  constructor(private question_service: QuestionService, private router: Router) { }

  ngOnInit() {
    this.new_question = new Question
  }

  add_question(){
    this.question_service.add_question(this.new_question)
      .then(() => this.router.navigate(["/add"]))
      .catch(err => console.log("Add questin ERROR", err))
  }

}
