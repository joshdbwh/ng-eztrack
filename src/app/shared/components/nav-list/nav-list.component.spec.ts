import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavListComponent } from './nav-list.component';

describe('NavItemComponent', () => {
  let component: NavListComponent;
  let fixture: ComponentFixture<NavListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NavListComponent],
    });
    fixture = TestBed.createComponent(NavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
