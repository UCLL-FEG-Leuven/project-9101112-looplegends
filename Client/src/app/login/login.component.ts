import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSliderModule, MatIconModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  correctUserName: string = 'admin';
  correctPassword: string = 'admin';
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onSubmit(username: string, password: string) {
    this.errorMessage = '';
    if (
      username === this.correctUserName &&
      password === this.correctPassword
    ) {
      this.router.navigate(['/home']);
    } else {
      if (username !== this.correctUserName) {
        this.errorMessage = 'Wrong username';
      } else if (password !== this.correctPassword) {
        this.errorMessage = 'Wrong password';
      }
    }
  }
}
