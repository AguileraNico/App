import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdeFixtureComponent } from './prode-fixture.component';

describe('ProdeFixtureComponent', () => {
  let component: ProdeFixtureComponent;
  let fixture: ComponentFixture<ProdeFixtureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdeFixtureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdeFixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
