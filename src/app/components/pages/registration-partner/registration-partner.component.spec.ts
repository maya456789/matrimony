import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationPartnerComponent } from './registration-partner.component';

describe('RegistrationPartnerComponent', () => {
  let component: RegistrationPartnerComponent;
  let fixture: ComponentFixture<RegistrationPartnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationPartnerComponent]
    });
    fixture = TestBed.createComponent(RegistrationPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
