import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaidComponent } from './plaid.component';

describe('PlaidComponent', () => {
  let component: PlaidComponent;
  let fixture: ComponentFixture<PlaidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PlaidComponent]
    });
    fixture = TestBed.createComponent(PlaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
