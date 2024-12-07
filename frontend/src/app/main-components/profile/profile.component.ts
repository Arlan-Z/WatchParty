import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth-service/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  userName$: Observable<string | null>;

  constructor(private authService: AuthService, private router: Router) {
    this.userName$ = this.authService.userName$;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']); 
  }
}