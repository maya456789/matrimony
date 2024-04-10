import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationPhotoAndVideoComponent } from './registration-photo-and-video.component';

describe('RegistrationPhotoAndVideoComponent', () => {
  let component: RegistrationPhotoAndVideoComponent;
  let fixture: ComponentFixture<RegistrationPhotoAndVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationPhotoAndVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationPhotoAndVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
