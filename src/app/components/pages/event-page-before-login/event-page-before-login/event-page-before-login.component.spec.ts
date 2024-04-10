import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPageBeforeLoginComponent } from './event-page-before-login.component';

describe('EventPageBeforeLoginComponent', () => {
  let component: EventPageBeforeLoginComponent;
  let fixture: ComponentFixture<EventPageBeforeLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventPageBeforeLoginComponent]
    });
    fixture = TestBed.createComponent(EventPageBeforeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
