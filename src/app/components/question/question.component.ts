import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Choises {
  constructor(
    public id: number,
    public answer: number,
    public comment: string,
    public date_of_vote: Date,
    public poll_id: number,
    public user_id: number
  ) {
  }
}

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  message="Raspunsul dumneavoastra a fost inregistrat!"
  confirm(){
    alert(this.message);
  }
  
  str2="";
  postcomment:String[]=[];

  post(){
    this.str2 = (<HTMLInputElement>document.getElementById("str")).value;
    this.postcomment.push(this.str2);
  }

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(data: any){
    this.httpClient.post("http://localhost:8080/choise",data)
      .subscribe((result)=>{
        console.warn("result",result)
      })
    console.warn(data);
  }
}
