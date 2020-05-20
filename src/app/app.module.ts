import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import { NameComponent } from './components/name/name.component';
import { QuizComponent } from './components/quiz/quiz.component';
import {QuestionComponent} from "./components/question/question.component";
import {YouTubePlayerModule} from "@angular/youtube-player";
import { SummaryComponent } from './components/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    QuizComponent,
    QuestionComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
