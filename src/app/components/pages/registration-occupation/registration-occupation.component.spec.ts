import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationOccupationComponent } from './registration-occupation.component';

describe('RegistrationOccupationComponent', () => {
  let component: RegistrationOccupationComponent;
  let fixture: ComponentFixture<RegistrationOccupationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationOccupationComponent]
    });
    fixture = TestBed.createComponent(RegistrationOccupationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
