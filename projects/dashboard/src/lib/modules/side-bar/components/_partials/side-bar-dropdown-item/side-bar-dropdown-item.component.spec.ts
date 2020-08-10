import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarDropdownItemComponent } from './side-bar-dropdown-item.component';

describe('SideBarDropdownItemComponent', () => {
  let component: SideBarDropdownItemComponent;
  let fixture: ComponentFixture<SideBarDropdownItemComponent>;

  beforeEach(async(() => {
	TestBed.configureTestingModule({
		declarations: [ SideBarDropdownItemComponent ]
	})
	.compileComponents();
  }));

  beforeEach(() => {
	fixture = TestBed.createComponent(SideBarDropdownItemComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it('should create', () => {
	expect(component).toBeTruthy();
  });
});
