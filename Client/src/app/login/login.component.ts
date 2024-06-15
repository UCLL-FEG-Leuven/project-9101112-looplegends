import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KeyboardtestComponent } from '../keyboardtest/keyboardtest.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, KeyboardtestComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  correctUserName: string = 'admin';
  correctPassword: string = 'admin';
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  @ViewChild('usernameInput') usernameInput: ElementRef | undefined;
  @ViewChild('passwordInput') passwordInput: ElementRef | undefined;

  constructor(private router: Router) {}
  ngAfterViewInit() {
    if (this.usernameInput) {
      this.usernameInput.nativeElement.focus();
    }
  }
  onSubmit(username: string, password: string) {
    this.errorMessage = '';
    if (
      username === this.correctUserName &&
      password === this.correctPassword
    ) {
      console.log('correct');
      this.router.navigate(['/home']);
    } else {
      if (username !== this.correctUserName) {
        this.errorMessage = 'Wrong username';
      } else if (password !== this.correctPassword) {
        this.errorMessage = 'Wrong password';
      }
    }
  }
  onLetterPressed(letter: string) {
    this.username += letter;
  }

  onNumberPressed(number: number) {
    this.password += number.toString();
  }
}
