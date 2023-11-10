import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiskComponent } from './lisk.component';

describe('LiskComponent', () => {
  let component: LiskComponent;
  let fixture: ComponentFixture<LiskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiskComponent]
    });
    fixture = TestBed.createComponent(LiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
