import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fil-in-field',
  standalone: true,
  imports: [],
  templateUrl: './fil-in-field.component.html',
  styleUrl: './fil-in-field.component.css',
})
export class FilInFieldComponent {
  @Input() fillInField: string = '';
}
