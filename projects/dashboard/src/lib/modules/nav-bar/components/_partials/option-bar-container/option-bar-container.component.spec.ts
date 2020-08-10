import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionBarContainerComponent } from './option-bar-container.component';

describe('OptionBarContainerComponent', () => {
  let component: OptionBarContainerComponent;
  let fixture: ComponentFixture<OptionBarContainerComponent>;

  beforeEach(async(() => {
	TestBed.configureTestingModule({
		declarations: [ OptionBarContainerComponent ]
	})
	.compileComponents();
  }));

  beforeEach(() => {
	fixture = TestBed.createComponent(OptionBarContainerComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it('should create', () => {
	expect(component).toBeTruthy();
  });
});
