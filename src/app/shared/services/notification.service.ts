import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { NotificationType } from '../models/notification-type';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  durationInSeconds = 5;
  constructor(private _snackBar: MatSnackBar) {}

  notify(type: NotificationType, message: string) {
    this._snackBar.open(message, '', {
      panelClass: NotificationType.SUCCESS === type ? ['style-success'] : ['style-error'],
      duration: this.durationInSeconds * 1000
    });
  }
}
