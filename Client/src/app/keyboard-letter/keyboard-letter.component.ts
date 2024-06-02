import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-keyboard-letter',
  standalone: true,
  imports: [],
  templateUrl: './keyboard-letter.component.html',
  styleUrl: './keyboard-letter.component.css',
})
export class KeyboardLetterComponent {
  @Input() keyLetter: string = '';
  @Output()
  keyPressed = new EventEmitter<string>();

  onClick() {
    this.keyPressed.emit(this.keyLetter);
  }
}
