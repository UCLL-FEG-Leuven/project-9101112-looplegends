import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CheckoutItem {
  title: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutItems: CheckoutItem[] = [];

  constructor() { }

  ngOnInit(): void {
    const savedItems = localStorage.getItem('checkoutItems');
    if (savedItems) {
      this.checkoutItems = JSON.parse(savedItems);
    }
  }

  addToCheckout(title: string, price: number): void {
    const item = this.checkoutItems.find(i => i.title === title);
    if (item) {
      item.quantity += 1;
    } else {
      this.checkoutItems.push({ title, quantity: 1, price });
    }
    this.saveItems();
  }

  increaseQuantity(item: CheckoutItem): void {
    item.quantity += 1;
    this.saveItems();
  }

  decreaseQuantity(item: CheckoutItem): void {
    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      this.deleteItem(item);
    }
    this.saveItems();
  }

  deleteItem(item: CheckoutItem): void {
    const index = this.checkoutItems.indexOf(item);
    if (index > -1) {
      this.checkoutItems.splice(index, 1);
    }
    this.saveItems();
  }

  private saveItems(): void {
    localStorage.setItem('checkoutItems', JSON.stringify(this.checkoutItems));
  }
}
