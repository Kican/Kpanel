import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionBarProfileComponent } from './option-bar-profile.component';

describe('OptionBarProfileComponent', () => {
  let component: OptionBarProfileComponent;
  let fixture: ComponentFixture<OptionBarProfileComponent>;

  beforeEach(async(() => {
	TestBed.configureTestingModule({
		declarations: [ OptionBarProfileComponent ]
	})
	.compileComponents();
  }));

  beforeEach(() => {
	fixture = TestBed.createComponent(OptionBarProfileComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it('should create', () => {
	expect(component).toBeTruthy();
  });
});
