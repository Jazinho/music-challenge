import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import { NameComponent } from './components/name/name.component';
import { QuizComponent } from './components/quiz/quiz.component';
import {QuestionComponent} from "./components/question/question.component";

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    QuizComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
