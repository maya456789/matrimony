import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileOthersComponent } from './profile-others.component';

describe('ProfileOthersComponent', () => {
  let component: ProfileOthersComponent;
  let fixture: ComponentFixture<ProfileOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileOthersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
