import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFavouriteProfilesComponent } from './my-favourite-profiles.component';

describe('MyFavouriteProfilesComponent', () => {
  let component: MyFavouriteProfilesComponent;
  let fixture: ComponentFixture<MyFavouriteProfilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyFavouriteProfilesComponent]
    });
    fixture = TestBed.createComponent(MyFavouriteProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
