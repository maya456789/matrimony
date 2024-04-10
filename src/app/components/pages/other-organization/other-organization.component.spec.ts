import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherOrganizationComponent } from './other-organization.component';

describe('OtherOrganizationComponent', () => {
  let component: OtherOrganizationComponent;
  let fixture: ComponentFixture<OtherOrganizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherOrganizationComponent]
    });
    fixture = TestBed.createComponent(OtherOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
