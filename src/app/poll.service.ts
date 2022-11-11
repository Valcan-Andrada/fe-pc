import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PollService {
  uri = 'http://localhost:4200';
  constructor(private http: HttpClient) { }
  getIssues() {
    return this.http.get(`${this.uri}/poll`);
  }
  getIssueById(id) {
    return this.http.get(`${this.uri}/poll/${id}`);
  }

  addIssue(question, topic, keywords, expirationdate) {
    const poll = {
      question: question,
      topic: topic,
      keywords: keywords,
      expirationdate: expirationdate
    };
    return this.http.post(`${this.uri}/poll/add`, poll);
  }

  updateIssue(id, question, topic, keywords, expirationdate, active) {
    const poll = {
      question: question,
      topic: topic,
      keywords: keywords,
      expirationdate: expirationdate,
      active: active
    };
    return this.http.post(`${this.uri}/poll/update/${id}`, poll);
  }

  deleteIssue(id) {
    return this.http.get(`${this.uri}/poll/delete/${id}`);
  }

}

