import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdePositionsComponent } from './prode-positions.component';

describe('ProdePositionsComponent', () => {
  let component: ProdePositionsComponent;
  let fixture: ComponentFixture<ProdePositionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdePositionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdePositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
