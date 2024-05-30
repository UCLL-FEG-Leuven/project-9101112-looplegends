import { Component } from '@angular/core';
import { KeyboardComponent } from '../keyboard/keyboard.component';
import { KeyboardLetterComponent } from '../keyboard-letter/keyboard-letter.component';

@Component({
  selector: 'app-keyboardtest',
  standalone: true,
  imports: [KeyboardComponent, KeyboardLetterComponent],
  templateUrl: './keyboardtest.component.html',
  styleUrl: './keyboardtest.component.css',
})
export class KeyboardtestComponent {}
