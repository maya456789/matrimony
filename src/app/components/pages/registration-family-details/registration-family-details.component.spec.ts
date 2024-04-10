import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFamilyDetailsComponent } from './registration-family-details.component';

describe('RegistrationFamilyDetailsComponent', () => {
  let component: RegistrationFamilyDetailsComponent;
  let fixture: ComponentFixture<RegistrationFamilyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationFamilyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFamilyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
