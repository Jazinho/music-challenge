import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {YouTubePlayer} from "@angular/youtube-player";
import {PlayerService} from "../../service/player.service";

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

  @Output('nextQuestionTrigger')
  nextQuestionTrigger: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild(YouTubePlayer)
  youTubePlayer: YouTubePlayer;

  areAnswersVisible: boolean = false;
  videoStarted: boolean = false;
  givenAnswer: string = "";

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  play(){
    if(!this.videoStarted){
      this.youTubePlayer.playVideo();
      this.areAnswersVisible = true;
      this.videoStarted = true;
    }
  }

  makeGuess(answer: string){
    this.givenAnswer = answer;
    this.youTubePlayer.stopVideo();

    if(answer == this.title){
      this.playerService.increaseUserResult()
    }

    setTimeout(() => {
      this.areAnswersVisible = false;
      setTimeout(() => {
        this.nextQuestionTrigger.emit(true);
      }, 200);
    }, 2000);
  }
}
