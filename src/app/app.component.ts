import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'game-app';
  public scores = [0, 0];
  public enemySelected = -1;

  private playerSelected = -1;
  private loading = false;
  private isResultShow = false;
  private theResult = 0;
  private weapons = [
    'rock',
    'paper',
    'scissors'
  ];

  constructor() {

  }

  public pick(weapon: number): void {
    // return immediately when still loading. You don't want
    // the user to spam the button.
    if (this.loading) return;
    this.loading = true;
    this.playerSelected = weapon;

    setTimeout(() => {
      this.loading = false;
      const randomNum = Math.floor(Math.random() * 3);
      this.enemySelected = randomNum;
      this.checkResult();
      this.isResultShow = true;
    }, Math.floor(Math.random() * 500) + 900);
  }

  public reset(): void {
    this.scores = [0, 0];
  }

  private checkResult(): void {
    const playerPick = this.playerSelected;
    const enemyPick = this.enemySelected;
    if (playerPick == enemyPick) {
      this.theResult = 2;
    }
    else if ((playerPick - enemyPick + 3) % 3 == 1) {
      // YOU WIN
      this.theResult = 0;
      this.scores[0] = this.scores[0] + 1;
    }
    else {
      // YOU LOSE
      this.theResult = 1;
      this.scores[1] = this.scores[1] + 1;
    }
  }

}
