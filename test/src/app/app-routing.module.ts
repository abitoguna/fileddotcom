import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AllCardsComponent } from './pages/all-cards/all-cards.component';
import { NewCardComponent } from './pages/new-card/new-card.component';


const routes: Routes = [
  { path: '', component: AllCardsComponent },
  { path: 'new-card', component: NewCardComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
