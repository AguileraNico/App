import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {
  url = '';

  constructor(private router: Router) {
    router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        this.url = route.url;
        if (this.url && this.url.length > 0) {
          this.url = this.url.split('/')[1].split('?')[0];
        }
      }
    });
  }

  ngOnInit(): void {
  }

  islogged(): boolean {
    return localStorage.getItem('user') === 'null' ? false : true;
  }

}
