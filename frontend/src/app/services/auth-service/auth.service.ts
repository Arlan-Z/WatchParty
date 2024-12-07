import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

interface AuthResponse {
    token: string;
    message?: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'http://localhost:5056/api/auth';
    private isLoggedInSubject = new BehaviorSubject<boolean>(!!localStorage.getItem('token')); 
    private userNameSubject = new BehaviorSubject<string | null>(null); 
    userName$ = this.userNameSubject.asObservable();

    isLoggedIn$ = this.isLoggedInSubject.asObservable();



    constructor(private http: HttpClient) { }

    signIn(email: string, password: string): Observable<AuthResponse> {
      return this.http.post<AuthResponse>(`${this.apiUrl}/login`, { username: email, password })
          .pipe(
              tap(response => {
                  localStorage.setItem('token', response.token);
                  this.isLoggedInSubject.next(true);

                  this.userNameSubject.next(email);
              }),
              catchError(this.handleError)
          );
  }

    signUp(user: any): Observable<AuthResponse> {
        return this.http.post<AuthResponse>(`${this.apiUrl}/register`, user)
            .pipe(
                tap(response => {
                    localStorage.setItem('token', response.token);
                     this.isLoggedInSubject.next(true); 
                }),
                catchError(this.handleError)
            );
    }

    logout() {
        localStorage.removeItem('token');
        this.isLoggedInSubject.next(false);
    }



    private handleError(error: HttpErrorResponse) {
        let errorMessage = 'An error occurred.';
        if (error.error instanceof ErrorEvent) {
            errorMessage = `Error: ${error.error.message}`;
        } else if (typeof error.error === 'string') {
            errorMessage = error.error;
        } else if (error.error && error.error.errors) {
            errorMessage = error.error.errors[0].description || 'Registration failed.';
        } else if (error.status === 400 && error.error && error.error.message) {
            errorMessage = error.error.message;
        }
        console.error(errorMessage, error);
        return throwError(() => new Error(errorMessage));
    }
}