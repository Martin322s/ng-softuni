import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactDetailsComponent } from './fact-details.component';

describe('FactDetailsComponent', () => {
  let component: FactDetailsComponent;
  let fixture: ComponentFixture<FactDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FactDetailsComponent]
    });
    fixture = TestBed.createComponent(FactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
