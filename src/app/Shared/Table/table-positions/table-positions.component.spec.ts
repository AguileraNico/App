import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePositionsComponent } from './table-positions.component';

describe('TableComponent', () => {
  let component: TablePositionsComponent;
  let fixture: ComponentFixture<TablePositionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePositionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
