import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { KeyboardtestComponent } from './keyboardtest/keyboardtest.component';
import { BonComponent } from './bon/bon.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    KeyboardComponent,
    KeyboardtestComponent,
    BonComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}

