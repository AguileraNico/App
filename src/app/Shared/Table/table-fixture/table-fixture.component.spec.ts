import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFixtureComponent } from './table-fixture.component';

describe('TableFixtureComponent', () => {
  let component: TableFixtureComponent;
  let fixture: ComponentFixture<TableFixtureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableFixtureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
