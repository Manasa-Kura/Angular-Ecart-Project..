import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class Login {

  email: string = "";
  password: string = "";
  message: string = "";

  constructor(private router: Router){}

  login(){

    let users = JSON.parse(localStorage.getItem('users') || "[]");

    let user = users.find((u:any) =>
      u.email === this.email && u.password === this.password
    );

    if(user){
      this.router.navigate(['/dashboard']);
    }
    else{
      this.message = "Invalid email or password";
    }
  }
}