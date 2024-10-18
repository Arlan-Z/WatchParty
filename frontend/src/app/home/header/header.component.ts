import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) {}

  goToLogin(){
    this.router.navigate(['/home/login']);
  }

  goToAbout(){
    this.router.navigate(['/home/about']);
  }

  goToHome(){
    this.router.navigate(['/home']);
  }
}
