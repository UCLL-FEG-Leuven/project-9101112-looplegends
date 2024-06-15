import { Routes } from '@angular/router';
import { DrinkenComponent } from './drinken/drinken.component';
import { HoofdgerechtenComponent } from './hoofdgerechten/hoofdgerechten.component';
import { TussendoortjesComponent } from './tussendoortjes/tussendoortjes.component';
import { DessertenComponent } from './desserten/desserten.component';
import { BonComponent } from './bon/bon.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'drinken', component: DrinkenComponent },
  { path: 'hoofdgerechten', component: HoofdgerechtenComponent },
  { path: 'tussendoortjes', component: TussendoortjesComponent },
  { path: 'desserten', component: DessertenComponent },
  { path: 'bon', component: BonComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/drinken', pathMatch: 'full' },
  { path: '**', redirectTo: '/drinken', pathMatch: 'full' },
];
