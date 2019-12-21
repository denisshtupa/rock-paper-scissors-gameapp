import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HistoryComponent } from './history of games/history.component';
import { GameComponent } from './game/game.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', component: GameComponent},
  { path: 'game', component: GameComponent},
  { path: 'history', component: HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
