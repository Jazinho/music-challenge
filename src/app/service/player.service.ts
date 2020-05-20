import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playerName: string;
  result: number;

  constructor() { }

  increaseUserResult(){
    this.result++;
  }

  getUserResult(){
    return this.result;
  }

  setUserResult(res: number){
    this.result = res;
  }

  getPlayerName(){
    return this.playerName;
  }

  setPlayerName(name: string){
    this.playerName = name;
  }
}
