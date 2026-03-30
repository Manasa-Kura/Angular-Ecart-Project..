import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [FormsModule,CommonModule,RouterLink],
  standalone:true,
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  name:string="";
  email:string="";
  password:string="";
  message:string="";
  signup()
  {
    if(!this.name || !this.email || !this.password){
    this.message = "Please fill all fields";
    return;
  }
    const user={              //create user object
      name:this.name,
      email:this.email,
      password:this.password
    };
    let users=JSON.parse(localStorage.getItem('users')||"[]");  //get existing user
    let Existinguser = users.find((u:any) =>
      u.email.trim().toLowerCase() === this.email.trim().toLowerCase()
    );
    if(Existinguser){
      this.message = "User already exists. Please login.";
      return;
    }
    users.push(user);                                           //add new user
    localStorage.setItem('users',JSON.stringify(users));        //store in local storage
    this.message = "Signup successful!";
    this.name="";
    this.email="";
    this.password="";
  }
}
