import { Component, OnInit } from '@angular/core';
import { LigaService } from 'src/app/Services/Liga/liga.service';
import { IFixture } from 'src/app/Core/domain/teams/liga';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.scss']
})
export class FixtureComponent implements OnInit {
  headers: string[];
  rows: IFixture[];
  editable = false;
  selected = 'option2';

  constructor(private service: LigaService) {
  }

  ngOnInit(): void {
    this.service.getFixture(1).subscribe(value => {
      this.rows = value;
      this.headers = [...new Set<string>(value.map((header) => header.Day))];
    });
  }

}
