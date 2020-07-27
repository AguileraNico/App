import { Component, OnInit } from '@angular/core';
import { LigaService } from 'src/app/Services/Liga/liga.service';
import { IFixture } from 'src/app/Core/domain/liga/liga';
import { ProdeService } from 'src/app/Services/Prode/prode.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  headers: string[];
  rows: IFixture[];
  editable = false;
  selected: number;
  control: number;

  constructor(private prodeService: ProdeService) { }

  ngOnInit(): void {
    /*
    this.prodeService.getUserRound(1, 1).subscribe(roundcd => {
      if (roundcd === undefined) {
        this.control = roundcd[0].RoundCd;
        this.selected = roundcd[0].RoundCd;
        this.prodeService.getUserFixture(1, 1, roundcd[0].RoundCd).subscribe(fixture => {
          this.rows = fixture;
          this.headers = [...new Set<string>(fixture.map((header) => header.Day))];
        });
      }
    });*/
  }

  onChanges(event: number) {
    /*
    this.prodeService.getUserFixture(1, 1, event).subscribe(value => {
      this.rows = value;
      this.headers = [...new Set<string>(value.map((header) => header.Day))];
    });*/
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
