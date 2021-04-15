import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageScrollService } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  activeSection = 1;
  constructor(
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any
  ) {}

  ngOnInit() {}

  fullPageScroll(e: HTMLElement, i: number) {
    this.pageScrollService.scroll({
      scrollTarget: e,
      document: this.document,
    });

    this.activeSection = i;
  }
}
