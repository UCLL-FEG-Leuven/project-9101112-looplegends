import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  standalone: true,
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css'],
})
export class KeyboardComponent {
  @Input() keyNumber: number = 0;
  @Output() keyPressed = new EventEmitter<number>();

  onClick() {
    this.keyPressed.emit(this.keyNumber);
  }
}
