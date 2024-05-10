import { Component } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']; // Sample data, replace with your data
}
