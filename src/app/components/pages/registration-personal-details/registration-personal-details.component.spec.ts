import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationPersonalDetailsComponent } from './registration-personal-details.component';

describe('RegistrationPersonalDetailsComponent', () => {
  let component: RegistrationPersonalDetailsComponent;
  let fixture: ComponentFixture<RegistrationPersonalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationPersonalDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationPersonalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
