import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterLink,
    ButtonModule,
    InputTextModule
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  email: string = "";
  password: string = "";
  message: string = "";
  constructor(private router: Router) {}
  login(form: any) {
    if (form.invalid) {
      Object.values(form.controls).forEach((control: any) => {
        control.markAsTouched();
      });
      return;
    }
    let users = JSON.parse(localStorage.getItem('users') || "[]");
    let user = users.find((u: any) =>
      u.email.trim().toLowerCase() === this.email.trim().toLowerCase() &&
      u.password === this.password
    );
    if (!user) {
      this.message = "Invalid email or password";
      return;
    }
    this.message = "Login successful!";
    this.router.navigate(['/dashboard']);
  }
}