import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prode',
  templateUrl: './prode.component.html',
  styleUrls: ['./prode.component.scss']
})
export class ProdeComponent implements OnInit {
  activeId = '';

  constructor(private router: Router) { }

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
