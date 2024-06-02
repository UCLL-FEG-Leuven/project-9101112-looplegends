import { Component } from '@angular/core';
import { KeyboardComponent } from '../keyboard/keyboard.component';
import { KeyboardLetterComponent } from '../keyboard-letter/keyboard-letter.component';
import { FilInFieldComponent } from '../fil-in-field/fil-in-field.component';
@Component({
  selector: 'app-keyboardtest',
  standalone: true,
  imports: [KeyboardComponent, KeyboardLetterComponent, FilInFieldComponent],
  templateUrl: './keyboardtest.component.html',
  styleUrl: './keyboardtest.component.css',
})
export class KeyboardtestComponent {
  enteredText = '';

  onLetterPressed(letter: string) {
    this.enteredText += letter;
  }

  onNumberPressed(number: number) {
    this.enteredText += number;
  }
}
