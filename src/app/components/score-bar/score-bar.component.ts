import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ScoreService } from 'src/app/score.service';

@Component({
  selector: 'app-score-bar',
  templateUrl: './score-bar.component.html',
  styleUrls: ['./score-bar.component.css'],
})
export class ScoreBarComponent implements OnInit {
  currentScore = 0;
  currentRound = 0;
  gameStarted = false;
  constructor(private score: ScoreService) {}
  ngOnInit(): void {
    this.score.gameScore$.subscribe((score: number) => {
      this.currentScore = score;
    });
    this.score.round$.subscribe((round: number) => {
      this.currentRound = round;
    });
    this.score.gameStarted$.subscribe((gameStarted: boolean) => {
      this.gameStarted = gameStarted;
    });
  }
  restart() {
    this.score.gameScore$.next(0);
    this.score.gameStarted$.next(true);
    this.score.round$.next(1);
  }
  ngOnDestroy(): void {
    this.score.gameScore$.unsubscribe;
  }
}
