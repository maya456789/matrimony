import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailPageBeforeLoginComponent } from './event-detail-page-before-login.component';

describe('EventDetailPageBeforeLoginComponent', () => {
  let component: EventDetailPageBeforeLoginComponent;
  let fixture: ComponentFixture<EventDetailPageBeforeLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventDetailPageBeforeLoginComponent]
    });
    fixture = TestBed.createComponent(EventDetailPageBeforeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
