import { Component, OnInit } from '@angular/core';
import { LigaService } from 'src/app/Services/Liga/liga.service';
import { IFixture } from 'src/app/Core/domain/liga/liga';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.scss']
})
export class FixtureComponent implements OnInit {
  headers: string[];
  rows: IFixture[];
  editable = false;
  selected: number;
  control: number;
  ligaCd: number;
  divisionCd: number;

  constructor(private service: LigaService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // tslint:disable-next-line: radix
    this.ligaCd = parseInt(this.route.snapshot.queryParams.liga);
    // tslint:disable-next-line: radix
    this.divisionCd = parseInt(this.route.snapshot.queryParams.division);
    this.service.getLastRound(this.ligaCd, this.divisionCd).subscribe(value => {
      this.control = value[0].RoundCd;
      this.selected = value[0].RoundCd;
    this.service.getFixture(this.ligaCd, this.divisionCd, value[0].RoundCd).subscribe(value => {
      this.rows = value;
      this.headers = [...new Set<string>(value.map((header) => header.Day))];
    });
    });
  }

  onChanges(event: any) {
    this.service.getFixture(this.ligaCd, this.divisionCd, event).subscribe(value => {
      this.rows = value;
      this.headers = [...new Set<string>(value.map((header) => header.Day))];
    });
  }

  array(i: number) {
    return new Array(i);
  }

  nextRound() {
    if (this.selected < this.control) {
      this.selected++;
      this.onChanges(this.selected);
    }
  }

  previousRound() {
    if (this.selected > 1) {
      this.selected--;
      this.onChanges(this.selected);
    }
  }
}
