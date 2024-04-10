import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeloginMediatorComponent } from './beforelogin-mediator.component';

describe('BeforeloginMediatorComponent', () => {
  let component: BeforeloginMediatorComponent;
  let fixture: ComponentFixture<BeforeloginMediatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeforeloginMediatorComponent]
    });
    fixture = TestBed.createComponent(BeforeloginMediatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
