import { Component, Input, OnInit } from '@angular/core';
import { IHistoryPlayer, IHistoryComputer } from '../interfaces/interfaces';

@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  public playerHistory: Array<IHistoryPlayer> = [];
  public computerHistory: Array<IHistoryComputer> = [];


  constructor() {
    JSON.parse(localStorage.getItem('playerResults')) ? this.playerHistory = JSON.parse(localStorage.getItem('playerResults')) : this.playerHistory = [];
    JSON.parse(localStorage.getItem('computerResults')) ? this.computerHistory = JSON.parse(localStorage.getItem('computerResults')) : this.computerHistory = [];
  }

  ngOnInit() {

  }

  public compareResults(firstPlayer: number, secondPlayer: number): string {
    if (firstPlayer > secondPlayer)
      return 'winner center-align'
    else if (firstPlayer < secondPlayer)
      return 'loser center-align'
    else
      return 'equal center-align';
  }

  public clearHistory(mode: string) {
    if (mode == 'player') {
      this.playerHistory = [];
      localStorage.setItem('playerResults', JSON.stringify([]));
    } else if (mode == 'com') {
      this.computerHistory = [];
      localStorage.setItem('computerResults', JSON.stringify([]));
    }
  }

}
