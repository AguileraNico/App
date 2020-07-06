import { Component, OnInit } from '@angular/core';
import { LigaService } from 'src/app/Services/Liga/liga.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  constructor(private service: LigaService) { }

  ngOnInit(): void {
    this.service.getTeams(1).subscribe(value => {
      console.log(value);
    })
  }

}
