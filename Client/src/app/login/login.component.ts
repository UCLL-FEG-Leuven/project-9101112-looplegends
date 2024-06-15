import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  correctUserName: string = 'admin';
  correctPassword: string = 'admin';
  onSubmit(username: string, password: string) {
    if (username == this.correctUserName && password == this.correctPassword) {
      console.log('test');
    }
  }
}
