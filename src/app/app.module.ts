import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatProgressSpinner,
  MatProgressSpinnerModule
} from '@angular/material';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HistoryComponent } from './history of games/history.component';
import { GameComponent } from './game/game.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    AngularFontAwesomeModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinner
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
