import { Component, OnInit } from '@angular/core';
import {PlayerService} from "../../service/player.service";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    console.log(this.playerService.playerName);
  }

}
