import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SidebarContainerComponent} from './sidebar-container.component';
import {SIDEBAR_CONFIG, SidebarConfiguration} from '../../models/sidebar.config';
import {SidebarService} from '../../services/sidebar.service';

describe('SidebarContainerComponent', () => {
	let component: SidebarContainerComponent;
	let fixture: ComponentFixture<SidebarContainerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SidebarContainerComponent],
			providers: [
				{provide: SIDEBAR_CONFIG, useValue: new SidebarConfiguration()},
				SidebarService
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SidebarContainerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
