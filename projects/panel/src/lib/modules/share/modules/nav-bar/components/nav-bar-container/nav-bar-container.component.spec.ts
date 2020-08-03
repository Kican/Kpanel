import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarContainerComponent } from './nav-bar-container.component';

describe('NavBarContainerComponent', () => {
  let component: NavBarContainerComponent;
  let fixture: ComponentFixture<NavBarContainerComponent>;

  beforeEach(async(() => {
	TestBed.configureTestingModule({
		declarations: [ NavBarContainerComponent ]
	})
	.compileComponents();
  }));

  beforeEach(() => {
	fixture = TestBed.createComponent(NavBarContainerComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it('should create', () => {
	expect(component).toBeTruthy();
  });
});
