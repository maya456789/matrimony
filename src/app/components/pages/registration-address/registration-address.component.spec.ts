import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationAddressComponent } from './registration-address.component';

describe('RegistrationAddressComponent', () => {
  let component: RegistrationAddressComponent;
  let fixture: ComponentFixture<RegistrationAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationAddressComponent]
    });
    fixture = TestBed.createComponent(RegistrationAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
