import { Injectable } from '@angular/core';

var songs = [
  {
    title:    'Hump De Bump',
    lang:     'en',
    videoId:  'OM9uMJWtNww',
    startTime: 50,
    answers:   ['Pump the vamp', 'Bump the Trump', 'Forrest Gump', 'Hump De Bump']
  },
  {
    title:    'Werteryczne serc połówki',
    lang:     'pl',
    videoId:  'xDtb2Cwux5A',
    startTime: 60,
    answers:   ['Olka Duch', 'Środa', 'Werteryczne serc połówki', 'Na starej pustej drodze']
  },
  {
    title:    'You don\'t fool me',
    lang:     'en',
    videoId:  'P-qd6hxfxpM',
    startTime: 108,
    answers:   ['You don\'t fool me', 'Killer Queen', 'Innuendo', 'Somebody to love']
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
