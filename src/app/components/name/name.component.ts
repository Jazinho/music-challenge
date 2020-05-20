import { Component, OnInit } from '@angular/core';
import {PlayerService} from "../../service/player.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  playerName: string;

  constructor(private playerService: PlayerService,
              private router: Router) { }

  ngOnInit() {
  }

  goToQuiz(){
    this.playerService.setPlayerName(this.playerName);
    this.router.navigateByUrl("quiz");
  }
}
