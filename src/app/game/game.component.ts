import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IHistoryPlayer, IHistoryComputer } from '../interfaces/interfaces';

@Component({
    selector: 'game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent {
    public scores: Array<any> = [0, 0];
    public playerGamesHistory: Array<IHistoryPlayer> = [];
    public computerScores: Array<any> = [0, 0];
    public computerGamesHistory: Array<IHistoryComputer> = [];
    public enemyChoosing: any = -1;
    public computerOneChoose: any = -1;
    public computerTwoChoose: any = -1;
    public isPlayerMode: boolean = true;

    public playerChoosing: any = -1;
    public loading: boolean = false;
    public isShowingResult: boolean = false;
    public thePlayerResult: number = 0;
    public theComputerResult: number = 0;
    public weapons: Array<string> = [
        'rock',
        'paper',
        'scissors'
    ];

    constructor(private router: Router) {

    }

    // Player vs Computer mode
    public pickPlayer(weapon: number): void {
        if (this.loading) return;
        this.loading = true;
        this.playerChoosing = weapon;

        setTimeout(() => {
            this.loading = false;
            const randomNum = Math.floor(Math.random() * 3);
            this.enemyChoosing = randomNum;
            this.checkPlayerResult();
            this.isShowingResult = true;
        }, Math.floor(Math.random() * 500) + 900);
    }

    private checkPlayerResult(): void {
        const playerPick = this.playerChoosing;
        const enemyPick = this.enemyChoosing;
        if (playerPick == enemyPick) {
            this.thePlayerResult = 2;
        }
        else if ((playerPick - enemyPick + 3) % 3 == 1) {
            // YOU WIN
            this.thePlayerResult = 0;
            this.scores[0] = this.scores[0] + 1;
        }
        else {
            // YOU LOSE
            this.thePlayerResult = 1;
            this.scores[1] = this.scores[1] + 1;
        }
    }
    // end of Player vs Computer

    // Computer vs Computer mode
    public pickComputer(): void {
        if (this.loading) return;
        this.loading = true;
        const randomComputerOneNum = Math.floor(Math.random() * 3);
        this.computerOneChoose = randomComputerOneNum;

        setTimeout(() => {
            this.loading = false;
            const randomNum = Math.floor(Math.random() * 3);
            this.computerTwoChoose = randomNum;
            this.checkComputerResult();
            this.isShowingResult = true;
        }, Math.floor(Math.random() * 500) + 900);
    }

    private checkComputerResult(): void {
        const comOne = this.computerOneChoose;
        const comTwo = this.computerTwoChoose;
        if (comOne == comTwo) {
            this.theComputerResult = 2;
        }
        else if ((comOne - comTwo + 3) % 3 == 1) {
            // COM 1 WIN
            this.theComputerResult = 0;
            this.computerScores[0] = this.computerScores[0] + 1;
        }
        else {
            // COM 2 WIN
            this.theComputerResult = 1;
            this.computerScores[1] = this.computerScores[1] + 1;
        }
    }
    // end of Computer vs Computer

    public changeModeGame(mode: string) {
        if (mode === 'player') {
            this.isPlayerMode = true;
            this.isShowingResult = false;
        } else {
            this.isPlayerMode = false;
            this.isShowingResult = false;
        }
    }

    public resetPlayerGame(): void {
        JSON.parse(localStorage.getItem('playerResults')) ? this.playerGamesHistory = JSON.parse(localStorage.getItem('playerResults')) : this.playerGamesHistory = [];

        let result: IHistoryPlayer = {
            player: this.scores[0],
            computer: this.scores[1]
        };
        this.playerGamesHistory = this.playerGamesHistory.concat(result);
        localStorage.setItem('playerResults', JSON.stringify(this.playerGamesHistory));

        this.scores = [0, 0];
        this.playerChoosing = -1;
        this.thePlayerResult = 0;
        this.isShowingResult = false;
    }

    public resetComputerGame(): void {
        JSON.parse(localStorage.getItem('computerResults')) ? this.computerGamesHistory = JSON.parse(localStorage.getItem('computerResults')) : this.computerGamesHistory = [];

        let result: IHistoryComputer = {
            computerOne: this.computerScores[0],
            computerTwo: this.computerScores[1]
        };
        this.computerGamesHistory = this.computerGamesHistory.concat(result);
        localStorage.setItem('computerResults', JSON.stringify(this.computerGamesHistory));

        this.computerScores = [0, 0];
        this.theComputerResult = 0;
        this.isShowingResult = false;
    }

    public triggerHistoryPage() {
        this.router.navigate(['history'])
    }

}
