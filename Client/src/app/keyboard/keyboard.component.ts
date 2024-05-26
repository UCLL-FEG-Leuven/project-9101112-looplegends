import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  standalone: true,
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css'],
})
export class KeyboardComponent {
  @Input() keyLetter: string = '';
  @Input() keyNumber: number = 0;
}
