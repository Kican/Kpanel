import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarControllerComponent } from './side-bar-controller.component';

describe('SideBarControllerComponent', () => {
  let component: SideBarControllerComponent;
  let fixture: ComponentFixture<SideBarControllerComponent>;

  beforeEach(async(() => {
	TestBed.configureTestingModule({
		declarations: [ SideBarControllerComponent ]
	})
	.compileComponents();
  }));

  beforeEach(() => {
	fixture = TestBed.createComponent(SideBarControllerComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it('should create', () => {
	expect(component).toBeTruthy();
  });
});
