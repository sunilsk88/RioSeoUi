import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSummaryComponent } from './location-summary.component';

describe('LocationSummaryComponent', () => {
  let component: LocationSummaryComponent;
  let fixture: ComponentFixture<LocationSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
