
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterLink,
    InputTextModule,
    ButtonModule
  ],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css'],
})
export class Signup {
  name: string = "";
  email: string = "";
  password: string = "";
  phone: string = "";
  message: string = "";
  constructor(private router: Router) {}
  signup(form: any) {
    if (form.invalid) {
      Object.values(form.controls).forEach((control: any) => {
        control.markAsTouched();
      });
      return;
    }
    const user = {
      name: this.name,
      email: this.email,
      password: this.password,
      phone: this.phone
    };
    let users = JSON.parse(localStorage.getItem('users') || "[]");
    let existingUser = users.find((u: any) =>
      u.email.trim().toLowerCase() === this.email.trim().toLowerCase()
    );
    if (existingUser) {
      this.message = "User already exists. Please login.";
      return;
    }
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    this.message = "Signup successful!";
    this.name = "";
    this.email = "";
    this.password = "";
    this.phone = "";
    this.router.navigate(['/login']);
  }
}