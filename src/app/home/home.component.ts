import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '@shared/services/notification.service';
import { NotificationType } from '@shared/models/notification-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToAbteilungPage(): void {
    this.router.navigate(['abteilung']);
  }
}
