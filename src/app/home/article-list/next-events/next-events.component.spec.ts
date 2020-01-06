import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextEventsComponent } from './next-events.component';

describe('NextEventsComponent', () => {
  let component: NextEventsComponent;
  let fixture: ComponentFixture<NextEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
