import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-liga',
  templateUrl: './liga.component.html',
  styleUrls: ['./liga.component.scss']
})
export class LigaComponent implements OnInit {
  activeId = '';
  ligaCd: number;
  divisionCd: number;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.addClass('/liga/positions');
    this.ligaCd = parseInt(this.route.snapshot.queryParams.liga);
    this.divisionCd = parseInt(this.route.snapshot.queryParams.division);
  }

  addClass(url: string): void {
    switch (url) {
      case '/liga/positions':
        this.activeId = 'positions';
        break;
      case '/liga/fixture':
        this.activeId = 'fixture';
        break;
      case '/liga/promedios':
        this.activeId = 'promedios';
        break;
      case '/liga/teams':
        this.activeId = 'teams';
        break;
    }
  }

}
