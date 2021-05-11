import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AbteilungComponent } from './abteilung.component';

describe('AbteilungComponent', () => {
  let component: AbteilungComponent;
  let fixture: ComponentFixture<AbteilungComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AbteilungComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AbteilungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
