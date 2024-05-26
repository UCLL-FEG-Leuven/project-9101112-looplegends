import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { KlokComponent } from './klok/klok.component';
import { ButtonComponent } from './button/button.component';
import { DrinkenComponent } from './drinken/drinken.component';
import { HoofdgerechtenComponent } from './hoofdgerechten/hoofdgerechten.component';
import { TussendoortjesComponent } from './tussendoortjes/tussendoortjes.component';
import { DessertenComponent } from './desserten/desserten.component';
import { KeyboardtestComponent } from './keyboardtest/keyboardtest.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    KlokComponent,
    ButtonComponent,
    DrinkenComponent,
    HoofdgerechtenComponent,
    TussendoortjesComponent,
    DessertenComponent,
    KeyboardtestComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  clickedButtons: { [key: string]: { count: number; price: number } } = {};
  clickedButtonTitle: string = '';
  totalCost: number = 0;

  showTitle(category: string, price: number) {
    if (!this.clickedButtons[category]) {
      this.clickedButtons[category] = { count: 1, price: price };
    } else {
      this.clickedButtons[category].count++;
    }

    this.updateTotalCost(); // Update de totale kosten
    this.updateClickedButtonTitle(); // Update de weergave van de geklikte knoppen
  }

  private updateTotalCost() {
    this.totalCost = Object.keys(this.clickedButtons).reduce((acc, key) => {
      const item = this.clickedButtons[key];
      return acc + item.price * item.count;
    }, 0);
  }

  private updateClickedButtonTitle() {
    this.clickedButtonTitle = Object.keys(this.clickedButtons)
      .map((key) => {
        const item = this.clickedButtons[key];
        const count = item.count > 1 ? `${item.count}X` : '';
        return `${count} ${key} €${item.price}`;
      })
      .join('<br>');
  }
}
