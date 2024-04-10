import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationMediatorComponent } from './registration-mediator.component';

describe('RegistrationMediatorComponent', () => {
  let component: RegistrationMediatorComponent;
  let fixture: ComponentFixture<RegistrationMediatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationMediatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationMediatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
