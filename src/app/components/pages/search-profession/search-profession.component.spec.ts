import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProfessionComponent } from './search-profession.component';

describe('SearchProfessionComponent', () => {
  let component: SearchProfessionComponent;
  let fixture: ComponentFixture<SearchProfessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchProfessionComponent]
    });
    fixture = TestBed.createComponent(SearchProfessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
