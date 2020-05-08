import { Component, OnInit } from '@angular/core';
import {PlayerService} from "../../service/player.service";
import {Song} from "../../models/song";
import {SongsService} from "../../service/songs.service";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questionNumber: number = 1;
  quizSongs: Song[] = [];
  // currentSong: Song;

  constructor(private songsService: SongsService) { }

  ngOnInit() {
    this.quizSongs = this.songsService.getSongsForQuiz();
    console.log(this.quizSongs);
    // this.currentSong = this.songsService.getSongByNumber(this.questionNumber-1);
  }

  nextQuestion(){
    this.questionNumber++;
    // this.currentSong = this.songsService.getSongByNumber(this.questionNumber-1);
  }

}
