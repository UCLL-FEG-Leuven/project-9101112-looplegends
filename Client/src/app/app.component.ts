import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { KeyboardtestComponent } from './keyboardtest/keyboardtest.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, KeyboardComponent, KeyboardtestComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
