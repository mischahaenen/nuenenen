import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  color = 'primary';
  public navElements = [
    { titel: 'Home', routerLink: '/home' },
    { titel: 'Abteilung', routerLink: '/abteilung' },
    { titel: 'Mitmachen', routerLink: '/mitmachen' },
    { titel: 'Shop', routerLink: '/shop' },
  ];
  constructor(public auth: AuthService) {}

  @HostListener('window:scroll', ['$event']) onScroll() {
    let element = document.querySelector('.header');
    if (element) {
      if (window.pageYOffset > element.clientHeight) {
        element.classList.remove('navbar-inverse');
      } else {
        element.classList.add('navbar-inverse');
        this.color = 'primary';
      }
    }
  }
}
