import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HompageAfterloginComponent } from './hompage-afterlogin.component';

describe('HompageAfterloginComponent', () => {
  let component: HompageAfterloginComponent;
  let fixture: ComponentFixture<HompageAfterloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HompageAfterloginComponent]
    });
    fixture = TestBed.createComponent(HompageAfterloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
