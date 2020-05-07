import { Injectable } from '@angular/core';
import {Song} from "../models/song";

var songs = [
  {
    title:    'Hump De Bump',
    lang:     'en',
    videoId:  'OM9uMJWtNww',
    startTime: 50
  },
  {
    title:    'Scenariusz Dla moich sąsiadów',
    lang:     'pl',
    videoId:  'AbyJ_h4xfRQ',
    startTime: 34
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

  songs: Song[];
  currentSongNumber: number = 0;

  constructor() { }

  setSongsForQuiz() {
    this.songs = songs;
  }
}
