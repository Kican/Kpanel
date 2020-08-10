import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionBarActionsContainerComponent } from './option-bar-actions-container.component';

describe('OptionBarActionsContainerComponent', () => {
  let component: OptionBarActionsContainerComponent;
  let fixture: ComponentFixture<OptionBarActionsContainerComponent>;

  beforeEach(async(() => {
	TestBed.configureTestingModule({
		declarations: [ OptionBarActionsContainerComponent ]
	})
	.compileComponents();
  }));

  beforeEach(() => {
	fixture = TestBed.createComponent(OptionBarActionsContainerComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it('should create', () => {
	expect(component).toBeTruthy();
  });
});
