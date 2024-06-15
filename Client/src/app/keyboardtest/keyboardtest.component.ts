import { Component, EventEmitter, Output } from '@angular/core';
import { KeyboardComponent } from '../keyboard/keyboard.component';
import { KeyboardLetterComponent } from '../keyboard-letter/keyboard-letter.component';
import { FilInFieldComponent } from '../fil-in-field/fil-in-field.component';

@Component({
  selector: 'app-keyboardtest',
  standalone: true,
  imports: [KeyboardComponent, KeyboardLetterComponent, FilInFieldComponent],
  templateUrl: './keyboardtest.component.html',
  styleUrls: ['./keyboardtest.component.css'],
})
export class KeyboardtestComponent {
  @Output() letterPressed = new EventEmitter<string>();
  @Output() numberPressed = new EventEmitter<number>();
  enteredText = '';

  onLetterPressed(letter: string) {
    this.enteredText += letter;
    this.letterPressed.emit(letter);
  }

  onNumberPressed(number: number) {
    this.enteredText += number;
    this.numberPressed.emit(number);
  }
}
