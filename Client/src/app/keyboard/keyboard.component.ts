import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  standalone: true,
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.css',
})
export class KeyboardComponent {
  @Input() keyLetter: string = 'Default Letter';
  @Input() keyNumber: number = 0;
}
