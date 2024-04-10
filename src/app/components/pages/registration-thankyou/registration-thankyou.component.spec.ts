import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationThankyouComponent } from './registration-thankyou.component';

describe('RegistrationThankyouComponent', () => {
  let component: RegistrationThankyouComponent;
  let fixture: ComponentFixture<RegistrationThankyouComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationThankyouComponent]
    });
    fixture = TestBed.createComponent(RegistrationThankyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
