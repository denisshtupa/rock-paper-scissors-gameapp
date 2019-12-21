import { Component } from '@angular/core';
import { IHistoryComputer, IHistoryPlayer } from './interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Rock Paper Scissors';

  constructor(private router:Router) {

  } 

}
