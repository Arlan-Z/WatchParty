import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
    selector: 'app-signin',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent {
    isSignIn = true;
    user = { username: '', email: '', password: '', confirmPassword: '' };
    error: string | null = null;
    isLoading = false;


    constructor(private authService: AuthService, private router: Router) { }


    toggleMode() {
        this.isSignIn = !this.isSignIn;
        this.user = { username: '', email: '', password: '', confirmPassword: '' };
        this.error = null;
    }

    async onSubmit() {
        this.error = null;
        this.isLoading = true;

        try {
            if (this.isSignIn) {
                await this.authService.signIn(this.user.email, this.user.password).toPromise(); 
                this.router.navigate(['/rooms']); 
            } else {
                await this.authService.signUp(this.user).toPromise(); 
            }
        } catch (err: any) {
            this.error = err.message;
        } finally {
            this.isLoading = false;
        }
    }
}