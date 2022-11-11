import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Poll {
  constructor(
    public id: number,
    public question: string,
    public topic: string,
    public active: boolean,
    public creation_date: Date,
    public expiration_date: Date
  ) {
  }
}

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  polls!: Poll[];
  constructor(
    private httpClient: HttpClient
  ){}

  ngOnInit(): void {
    this.getPolls();
  }
  getPolls(){
    this.httpClient.get<any>('http://localhost:8080/allPolls').subscribe(
      response => {
        console.log(response);
        this.polls = response;
      }
    );
  }

}
