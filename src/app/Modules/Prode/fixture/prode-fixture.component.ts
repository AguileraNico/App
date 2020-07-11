import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { LigaService } from 'src/app/Services/Liga/liga.service';
import { IFixture } from 'src/app/Core/domain/liga/liga';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-prode-fixture',
  templateUrl: './prode-fixture.component.html',
  styleUrls: ['./prode-fixture.component.scss']
})
export class ProdeFixtureComponent implements OnInit {
  subscription: Subscription;
  headers: string[];
  rows: IFixture[];
  date: Date;
  tournament = 1;

  constructor(private service: LigaService) {
    this.date = new Date();
  }

  ngOnInit(): void {
    this.service.getLastRoundFixture(1, 1).subscribe(value => {
      this.rows = value;
      this.headers = [...new Set<string>(value.map((header) => header.Day))];
      this.rows.map(x => {
        if (x.DateTime < this.date) {
          x.Editable = 0; // este va en cero cuando termine de testear
        } else {
          x.Editable = 1;
        }
      });
    });
    const source = interval(10000);
    this.subscription = source.subscribe(val => {
      this.date = new Date();
      this.rows.map(x => {
        console.log(x.DateTime < this.date)
        if (x.DateTime < this.date) {
          console.log(x)
          x.Editable = 0; // este va en cero cuando termine de testear
        } else {
          console.log(x)
          x.Editable = 1;
        }
      });
    });
  }

}
