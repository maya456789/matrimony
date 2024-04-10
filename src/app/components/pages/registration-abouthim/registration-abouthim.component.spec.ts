import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationAbouthimComponent } from './registration-abouthim.component';

describe('RegistrationAbouthimComponent', () => {
  let component: RegistrationAbouthimComponent;
  let fixture: ComponentFixture<RegistrationAbouthimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationAbouthimComponent]
    });
    fixture = TestBed.createComponent(RegistrationAbouthimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
