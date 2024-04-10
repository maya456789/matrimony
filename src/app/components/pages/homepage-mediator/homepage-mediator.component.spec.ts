import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageMediatorComponent } from './homepage-mediator.component';

describe('HomepageMediatorComponent', () => {
  let component: HomepageMediatorComponent;
  let fixture: ComponentFixture<HomepageMediatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomepageMediatorComponent]
    });
    fixture = TestBed.createComponent(HomepageMediatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
