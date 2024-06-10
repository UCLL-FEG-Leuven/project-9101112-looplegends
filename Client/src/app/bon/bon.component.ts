import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { RouterModule } from '@angular/router';

interface CheckoutItem {
  title: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-bon',
  standalone: true,
  imports: [NgForOf, RouterModule],
  templateUrl: './bon.component.html',
  styleUrls: ['./bon.component.css'],
})
export class BonComponent implements OnInit {
  checkoutItems: CheckoutItem[] = [];
  totalCost: number = 0;

  constructor() {}

  ngOnInit(): void {
    const savedItems = localStorage.getItem('checkoutItems');
    if (savedItems) {
      this.checkoutItems = JSON.parse(savedItems);
      this.calculateTotalCost();
    }
  }

  private calculateTotalCost(): void {
    const total = this.checkoutItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    this.totalCost = parseFloat(total.toFixed(2));
  }
}
