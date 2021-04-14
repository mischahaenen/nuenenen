import { AfterContentInit, AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';
import { User } from 'app/shared/models/user';
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
    this.authService.getUser().subscribe((user) => console.log(user));
  }

  login(): void {
    this.authService.googleLogin();
  }

  logout(): void {
    this.authService.signOut();
  }
}
