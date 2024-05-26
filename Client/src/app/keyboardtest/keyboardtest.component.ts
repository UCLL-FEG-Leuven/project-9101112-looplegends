import { Component } from '@angular/core';
import { KeyboardComponent } from '../keyboard/keyboard.component';

@Component({
  selector: 'app-keyboardtest',
  standalone: true,
  imports: [KeyboardComponent],
  templateUrl: './keyboardtest.component.html',
  styleUrl: './keyboardtest.component.css',
})
export class KeyboardtestComponent {}
