import { Component } from '@angular/core';
import { ScoreService } from 'src/app/score.service';

@Component({
  selector: 'cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css'],
})
export class CardContainerComponent {
  cards = [
    {
      name: 'diamonds',
      flip: false,
      img: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Ace_of_diamonds.svg',
    },
    {
      name: 'clubs',
      flip: false,
      img: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Ace_of_clubs.svg',
    },
    {
      name: 'spades',
      flip: false,
      img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Ace_of_spades.svg',
    },
    {
      name: 'hearts',
      flip: false,
      img: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Ace_of_hearts.svg',
    },
  ];
  gameStarted = false;
  cardSelectionIsDone = false;
  newRound = true;
  constructor(private score: ScoreService) {}
  ngOnInit(): void {
    this.score.gameStarted$.subscribe((gameStarted: boolean) => {
      this.gameStarted = gameStarted;
    });
  }

  shuffle() {
    if (this.score.round$.value > 9 && this.gameStarted) {
      return;
    }
    this.score.round$.next(this.score.round$.value + 1);
    this.newRound = true;
    this.cardSelectionIsDone = false;
    this.flipAllCards();
    setTimeout(() => {
      let currentIndex = this.cards.length,
        randomIndex;

      // While there remain elements to shuffle.
      while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [this.cards[currentIndex], this.cards[randomIndex]] = [
          this.cards[randomIndex],
          this.cards[currentIndex],
        ];
      }
    }, 1000);
  }

  flipAllCards() {
    this.cards = this.cards.map((card: any) => {
      if (card.flip) card.flip = false;
      return card;
    });
  }

  flipTheCard(cardIndex: number) {
    if (!this.cardSelectionIsDone && this.gameStarted) {
      this.newRound = false;
      this.cardSelectionIsDone = true;
      this.cards[cardIndex].flip = !this.cards[cardIndex].flip;
      if (this.cards[cardIndex].name === 'spades') {
        this.score.gameScore$.next(this.score.gameScore$.value + 1);
      }
      setTimeout(() => {
        this.revelAllCards();
      }, 2000);
    }
  }
  revelAllCards() {
    if (this.cardSelectionIsDone && !this.newRound) {
      this.cardSelectionIsDone = true;
      this.cards = this.cards.map((card: any) => {
        if (!card.flip) card.flip = true;
        return card;
      });
    }
  }
  restart() {
    this.score.gameScore$.next(0);
    this.score.round$.next(1);
    this.score.gameStarted$.next(false);
  }
  ngOnDestroy(): void {
    this.score.gameScore$.unsubscribe();
    this.score.round$.unsubscribe();
  }
}
