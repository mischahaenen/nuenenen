import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
<<<<<<< Updated upstream:src/app/nav/nav.component.ts
=======
  constructor(public auth: AuthService) {}
>>>>>>> Stashed changes:src/app/components/nav/nav.component.ts

  constructor() { }

  ngOnInit() {
  }

}
