import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationUploaddocComponent } from './registration-uploaddoc.component';

describe('RegistrationUploaddocComponent', () => {
  let component: RegistrationUploaddocComponent;
  let fixture: ComponentFixture<RegistrationUploaddocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationUploaddocComponent]
    });
    fixture = TestBed.createComponent(RegistrationUploaddocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
