import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { KlokComponent } from '../klok/klok.component';
import { ButtonComponent } from '../button/button.component';
import { TussendoortjesComponent } from '../tussendoortjes/tussendoortjes.component';
import { DessertenComponent } from '../desserten/desserten.component';
import { DrinkenComponent } from '../drinken/drinken.component';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


interface CheckoutItem {
  title: string;
  quantity: number;
  price: number;
}
@Component({
  selector: 'app-hoofdgerechten',
  standalone: true,
  imports: [CommonModule, DrinkenComponent, KlokComponent, ButtonComponent, TussendoortjesComponent, DessertenComponent, RouterOutlet, RouterLink, MatSliderModule, MatIconModule, MatButtonModule,],
  templateUrl: './hoofdgerechten.component.html',
  styleUrl: './hoofdgerechten.component.css'
})
export class HoofdgerechtenComponent implements OnInit {
  checkoutItems: CheckoutItem[] = [];
  totalCost: number = 0;

  constructor() { }


  ngOnInit(): void {
    const savedItems = localStorage.getItem('checkoutItems');
    if (savedItems) {
      this.checkoutItems = JSON.parse(savedItems);
      this.calculateTotalCost();
    }
  }

  addToCheckout(title: string, price: number): void {
    const item = this.checkoutItems.find(i => i.title === title);
    if (item) {
      item.quantity += 1;
    } else {
      this.checkoutItems.push({ title, quantity: 1, price });
    }
    this.calculateTotalCost();
    this.saveItems();
  }

  increaseQuantity(item: CheckoutItem): void {
    item.quantity += 1;
    this.calculateTotalCost();
    this.saveItems();
  }

  decreaseQuantity(item: CheckoutItem): void {
    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      this.deleteItem(item);
    }
    this.calculateTotalCost();
    this.saveItems();
  }

  deleteItem(item: CheckoutItem): void {
    const index = this.checkoutItems.indexOf(item);
    if (index > -1) {
      this.checkoutItems.splice(index, 1);
    }
    this.calculateTotalCost();
    this.saveItems();
  }

  private calculateTotalCost(): void {
    const total = this.checkoutItems.reduce((total, item) => total + (item.quantity * item.price), 0);
    this.totalCost = parseFloat(total.toFixed(2));
  }


  private saveItems(): void {
    localStorage.setItem('checkoutItems', JSON.stringify(this.checkoutItems));
  }

  public ResetItems(): void {
    localStorage.clear();
    window.location.reload();
  }






}


