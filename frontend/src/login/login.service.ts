import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor() {}

  login(username: string, password: string): void {
    // Implement your authentication logic here
    // For example, you can check if the provided credentials are valid

    console.log(username);
    console.log(password);

    if (username === 'test' && password === 'password') {
      this.isAuthenticatedSubject.next(true);
    } else {
      this.isAuthenticatedSubject.next(false);
    }
  }

  logout(): void {
    // Implement logout logic if needed
    this.isAuthenticatedSubject.next(false);
  }
}
