import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarItemsContainerComponent } from './side-bar-items-container.component';

describe('SideBarItemsContainerComponent', () => {
  let component: SideBarItemsContainerComponent;
  let fixture: ComponentFixture<SideBarItemsContainerComponent>;

  beforeEach(async(() => {
	TestBed.configureTestingModule({
		declarations: [ SideBarItemsContainerComponent ]
	})
	.compileComponents();
  }));

  beforeEach(() => {
	fixture = TestBed.createComponent(SideBarItemsContainerComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it('should create', () => {
	expect(component).toBeTruthy();
  });
});
