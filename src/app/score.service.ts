import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  gameScore$ = new BehaviorSubject<number>(0);
  round$ = new BehaviorSubject<number>(1);
  gameStarted$ = new BehaviorSubject<boolean>(false);
  constructor() {}
}
