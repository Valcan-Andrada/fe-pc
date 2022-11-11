import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RouterModule, Routes } from '@angular/router';
import { AnswerComponent } from './components/answer/answer.component';
import { CreateComponent } from './components/create/create.component';
import { QuestionComponent } from './components/question/question.component';
import { FormsModule } from '@angular/forms';
import { ChartsComponent } from './components/charts/charts.component';
//import { PollService } from './poll.service';

// import the ChartModule for the Chart component
import { ChartModule } from '@syncfusion/ej2-angular-charts';


const routes: Routes = [
  {path: '', component:HomepageComponent},
  {path: 'Answer', component: AnswerComponent},
  {path: 'Create', component: CreateComponent},
  {path: 'Question', component: QuestionComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomepageComponent,
    AnswerComponent,
    CreateComponent,
    QuestionComponent,
    ChartsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
   
  ],
  providers: [],//[PollService],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
