import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { PollService } from './poll.service';

export class Poll {
  constructor(
    public id: number,
    public question: string,
    public topic: string,
    public active: boolean,
    public creation_date: Date,
    public expirationDate: Date,
    public keywords: string
  ) {
  }
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  message = "Intrebarea a fost adresata cu succes!"
  confirm(){
    alert(this.message);
  }

  constructor(
    private httpClient: HttpClient
    
  ){}

  ngOnInit(): void {
    
  }
  onSubmit(data: any){
    this.httpClient.post("http://localhost:8080/newPoll",data)
    .subscribe((result)=>{
      console.warn("result",result)
    })
    console.warn(data);
  }
}
