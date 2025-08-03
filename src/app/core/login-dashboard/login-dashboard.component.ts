import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; // adjust path as needed

@Component({
  selector: 'app-login-dashboard',
  templateUrl: './login-dashboard.component.html',
  styleUrls: ['./login-dashboard.component.css']
})
export class LoginDashboardComponent {
  username: string = '';
  password: string = '';
  showPassword: boolean = false; // added flag

  constructor(private router: Router, private authService: AuthService) {}

 togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  login() {
    if (this.username === 'admin255' && this.password === 'G#9vT!r2@LpQ') {
      this.authService.login();
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid username or password');
    }
  }
}
