import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestReceivedNewComponent } from './interest-received-new.component';

describe('InterestReceivedNewComponent', () => {
  let component: InterestReceivedNewComponent;
  let fixture: ComponentFixture<InterestReceivedNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestReceivedNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestReceivedNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
