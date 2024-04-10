import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySuggestionComponent } from './my-suggestion.component';

describe('MySuggestionComponent', () => {
  let component: MySuggestionComponent;
  let fixture: ComponentFixture<MySuggestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MySuggestionComponent]
    });
    fixture = TestBed.createComponent(MySuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
