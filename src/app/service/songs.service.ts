import { Injectable } from '@angular/core';

var songs = [
  {
    title:    'Hump De Bump',
    lang:     'en',
    videoId:  'OM9uMJWtNww',
    startTime: 50
  },
  {
    title:    'Werteryczne serc połówki',
    lang:     'pl',
    videoId:  'xDtb2Cwux5A',
    startTime: 60
  },
  {
    title:    'You dont fool me',
    lang:     'en',
    videoId:  'P-qd6hxfxpM',
    startTime: 108
  }
];

@Injectable({
  providedIn: 'root'
})
export class SongsService{

  constructor() { }

  getSongsForQuiz() {
    return songs;
  }

  getSongByNumber(index: number){
    let song = songs[index];
    return song;
  }

  generateWrongAnswers(): string[]{
    return ["dup1", "dup2", "dup3"];
  }
}
