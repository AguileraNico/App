import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-prode',
  templateUrl: './prode.component.html',
  styleUrls: ['./prode.component.scss']
})
export class ProdeComponent implements OnInit {
  activeId = '';

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.addClass(event.url);
      }
    });
  }

  ngOnInit(): void {
    this.addClass(this.router.url);
  }

  addClass(url: string): void {
    switch (url) {
      case '/prode/fixture':
        this.activeId = 'fixture';
        break;
      case '/prode/history':
        this.activeId = 'history';
        break;
      case '/prode/positions':
        this.activeId = 'positions';
        break;
    }
  }
}
