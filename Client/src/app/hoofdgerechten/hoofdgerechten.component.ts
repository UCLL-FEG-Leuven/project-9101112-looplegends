import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { KlokComponent } from '../klok/klok.component';
import { ButtonComponent } from '../button/button.component';
import { TussendoortjesComponent } from '../tussendoortjes/tussendoortjes.component';
import { DessertenComponent } from '../desserten/desserten.component';

@Component({
  selector: 'app-hoofdgerechten',
  standalone: true,
  imports: [KlokComponent, ButtonComponent, TussendoortjesComponent, DessertenComponent, RouterOutlet, RouterLink],
  templateUrl: './hoofdgerechten.component.html',
  styleUrl: './hoofdgerechten.component.css'
})
export class HoofdgerechtenComponent {
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
        return `
        <div class="clicked-button-item">
          <span class="count">${count}</span>
          <span class="key">${key}</span>
          <span class="price">€${item.price}</span>
        </div>
      `;
      })
      .join('');
  }
}
