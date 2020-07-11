import { Component, OnInit } from '@angular/core';
import { LigaService } from 'src/app/Services/Liga/liga.service';
import { IFixture } from 'src/app/Core/domain/liga/liga';

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

  constructor(private service: LigaService) { }

  ngOnInit(): void {
    this.service.getLastRoundFixture(1, 1).subscribe(value => {
      this.rows = value;
      this.headers = [...new Set<string>(value.map((header) => header.Day))];
    });
    this.service.getLastRound(1, 1).subscribe(value => {
      this.control = value[0].RoundCd;
      this.selected = value[0].RoundCd;
    });
  }

  onChanges(event: any) {
    this.service.getFixture(1, 1, event).subscribe(value => {
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
