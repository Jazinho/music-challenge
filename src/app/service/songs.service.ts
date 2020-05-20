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
  },
  {
    title:    'Zamkni na piasku',
    lang:     'pl',
    videoId:  'lGZ1mdkF3Bo',
    startTime: 21,
    answers:   ['Sztuka latania', 'Zamkni na piasku', 'Stacja Warszawa', 'Na co komu dziś']
  },
  {
    title:    'Kraków Główny',
    lang:     'pl',
    videoId:  'EdHd2BDK7vk',
    startTime: 59,
    answers:   ['Kraków Główny', 'Polityka', 'W trosce o swe psychiczne zdrowie', 'Komuniści z Placu Wolności']
  },
  {
    title:    'Wiosna',
    lang:     'pl',
    videoId:  'RRnFG-5_Ces',
    startTime: 21,
    answers:   ['Zabili mi żółwia', 'Zamyślone głowy', 'Głupi ja', 'Wiosna']
  },
  {
    title:    'Wielki tenis',
    lang:     'pl',
    videoId:  'KI8zRG0hMQg',
    startTime: 20,
    answers:   ['Wielki tenis', 'Ona jest pedałem', 'Przewróciło się niech leży', 'Nic mnie nie rusza']
  },
  {
    title:    'Kawałek do tańca',
    lang:     'pl',
    videoId:  'BpS6xNrnMVc',
    startTime: 0,
    answers:   ['Okrutna zła i podła', 'Kawałek do tańca', 'Byłaś dla mnie wszystkim', 'Wezme Cię']
  },
  {
    title:    'Back in Black',
    lang:     'pl',
    videoId:  'pAgnJDJN4VA',
    startTime: 37,
    answers:   ['Back in Black', 'Thunderstruck', 'Highway to hell', 'Hells Bells']
  },
  {
    title:    'Robert Kubica',
    lang:     'pl',
    videoId:  '4qTdqcwZ5wM',
    startTime: 23,
    answers:   ['Robert Kubica', 'Robert Kubica', 'Robert Kubica', 'Robert Kubica']
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
