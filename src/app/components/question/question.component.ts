import { Component, OnInit } from '@angular/core';
import {PlayerService} from "../../service/player.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  playerName: string;

  constructor(private playerService: PlayerService,
              private router: Router) { }

  ngOnInit() {
  }

  goToQuiz(){
    this.playerService.playerName = this.playerName;
    this.router.navigateByUrl("quiz");
  }
}
