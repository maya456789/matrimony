import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestAcceptedComponent } from './interest-accepted.component';

describe('InterestAcceptedComponent', () => {
  let component: InterestAcceptedComponent;
  let fixture: ComponentFixture<InterestAcceptedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestAcceptedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestAcceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
