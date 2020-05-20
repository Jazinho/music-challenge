import { Component, OnInit } from '@angular/core';
import {PlayerService} from "../../service/player.service";
import {Song} from "../../models/song";
import {SongsService} from "../../service/songs.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questionNumber: number = 1;
  quizSongs: Song[] = [];
  // currentSong: Song;

  constructor(private songsService: SongsService,
              private playerService: PlayerService,
              private router: Router) { }

  ngOnInit() {
    this.quizSongs = this.songsService.getSongsForQuiz();
    // console.log(this.quizSongs);

    this.playerService.setUserResult(0);
    // this.currentSong = this.songsService.getSongByNumber(this.questionNumber-1);
  }

  onNextQuestionTrigger($event){
    if(this.questionNumber < 10){
      this.questionNumber++;
    } else {
      this.router.navigateByUrl("/summary")
    }
  }

  finish(){
    this.router.navigateByUrl("/summary")
  }
}
