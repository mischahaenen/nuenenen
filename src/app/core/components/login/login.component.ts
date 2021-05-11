import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user$ = new Observable<any>();
  constructor(public authService: AuthService) {}
  ngOnInit() {
    this.user$ = this.authService.getUser();
  }

  login(): void {
    this.authService.googleLogin();
  }

  logout(): void {
    this.authService.signOut();
  }
}
