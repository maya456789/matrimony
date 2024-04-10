import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationAstroComponent } from './registration-astro.component';

describe('RegistrationAstroComponent', () => {
  let component: RegistrationAstroComponent;
  let fixture: ComponentFixture<RegistrationAstroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationAstroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationAstroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
