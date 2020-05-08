import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {YouTubePlayer} from "@angular/youtube-player";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input()
  videoId: string;

  @Input()
  title: string;

  @Input()
  startTime: string;

  @Input()
  answers: string[];

  @ViewChild(YouTubePlayer)
  youTubePlayer: YouTubePlayer;

  areAnswersVisible: boolean = false;

  constructor() { }

  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  play(){
    this.youTubePlayer.playVideo();
    this.areAnswersVisible = true;
  }

  makeGuess(){
    this.areAnswersVisible = false;
  }
}