import { Component } from '@angular/core';

@Component({
  selector: 'app-klok',
  standalone: true,
  imports: [],
  templateUrl: './klok.component.html',
  styleUrl: './klok.component.css',
})
export class KlokComponent {
  time: string | undefined;
  opening: boolean = false;

  constructor() {
    window.setInterval(() => {
      const currentTime = new Date();
      this.time = currentTime.toLocaleString();

      const hour = currentTime.getHours();
      this.opening = hour >= 9 && hour <= 17;
    }, 1000);
  }
}
