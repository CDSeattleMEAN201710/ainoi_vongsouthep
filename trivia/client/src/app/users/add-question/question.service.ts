import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Question } from './question';
import "rxjs/add/operator/map";

@Injectable()
export class QuestionService {

  constructor(private http: Http) { }

    add_question(new_question: Question){
    return this.http.post("/add", new_question).map(data => data.json()).toPromise()
  }

}
