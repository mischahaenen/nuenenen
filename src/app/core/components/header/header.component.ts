import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  color = 'primary';
  public navElements = [
    { titel: 'Home', routerLink: '/home' },
    { titel: 'Abteilung', routerLink: '/abteilung' },
    { titel: 'Mitmachen', routerLink: '/mitmachen' },
    { titel: 'Shop', routerLink: '/shop' },
  ];
  constructor(private router: Router) {}

  @HostListener('window:scroll', ['$event']) onScroll() {
    const element = document.querySelector('.header');
    if (this.router.url === '/home' && element) this.changeBackgroundOnScroll(element);
  }

  ngOnInit(): void {
    const element = document.querySelector('.header');
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        if (element) {
          if (event.url === '/home' || event.url === '/') {
            element.classList.add('navbar-inverse');
            this.changeBackgroundOnScroll(element);
          } else {
            element.classList.remove('navbar-inverse');
            this.color = 'primary';
          }
        }
      });
  }

  changeBackgroundOnScroll(element: Element) {
    if (window.pageYOffset > element.clientHeight) {
      element.classList.remove('navbar-inverse');
    } else {
      element.classList.add('navbar-inverse');
      this.color = 'primary';
    }
  }
}
