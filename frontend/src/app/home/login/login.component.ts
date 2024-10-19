import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true, // otherwise website dies :(
  imports: [FormsModule, NgClass],
})

export class LoginComponent {
  username: string = '';
  password: string = '';

  loginError: boolean = false;

  onSubmit() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  } 
  validateUsername(){
      if(!this.username.includes('@')){
        this.loginError = true;
      } else this.loginError = false;
  }
}
