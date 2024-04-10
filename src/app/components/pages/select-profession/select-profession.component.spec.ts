import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectProfessionComponent } from './select-profession.component';

describe('SelectProfessionComponent', () => {
  let component: SelectProfessionComponent;
  let fixture: ComponentFixture<SelectProfessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectProfessionComponent]
    });
    fixture = TestBed.createComponent(SelectProfessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
