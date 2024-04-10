import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationAddEducationComponent } from './registration-add-education.component';

describe('RegistrationAddEducationComponent', () => {
  let component: RegistrationAddEducationComponent;
  let fixture: ComponentFixture<RegistrationAddEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationAddEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationAddEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
