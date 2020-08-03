import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarActionsItemComponent } from './nav-bar-actions-item.component';

describe('NavBarActionsItemComponent', () => {
  let component: NavBarActionsItemComponent;
  let fixture: ComponentFixture<NavBarActionsItemComponent>;

  beforeEach(async(() => {
	TestBed.configureTestingModule({
		declarations: [ NavBarActionsItemComponent ]
	})
	.compileComponents();
  }));

  beforeEach(() => {
	fixture = TestBed.createComponent(NavBarActionsItemComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it('should create', () => {
	expect(component).toBeTruthy();
  });
});
