import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public navElements = [
    { titel: 'Home', routerLink: '/home' },
    { titel: 'Abteilung', routerLink: '/abteilung' },
    { titel: 'Mitmachen', routerLink: '/mitmachen' },
    { titel: 'Shop', routerLink: '/shop' }
  ];
  constructor(public auth: AuthService) {}
}
