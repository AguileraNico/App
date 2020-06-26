import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/Services/Teams/teams.service';
import { ITeams } from 'src/app/Core/domain/teams/teams';

@Component({
  selector: 'app-liga',
  templateUrl: './liga.component.html',
  styleUrls: ['./liga.component.scss']
})
export class LigaComponent implements OnInit {
  teams: ITeams[];

  constructor(private service: TeamsService) { }

  ngOnInit(): void {
    this.service.getTeams().subscribe(value => {
      this.teams = value;
      console.log(this.teams);
    })
  }

}
