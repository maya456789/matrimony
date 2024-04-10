import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPracticeComponent } from './carousel-practice.component';

describe('CarouselPracticeComponent', () => {
  let component: CarouselPracticeComponent;
  let fixture: ComponentFixture<CarouselPracticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselPracticeComponent]
    });
    fixture = TestBed.createComponent(CarouselPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
