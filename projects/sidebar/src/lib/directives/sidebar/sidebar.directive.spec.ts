import {Component} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SIDEBAR_CONFIG, SidebarConfiguration} from '../../models/sidebar.config';
import {SidebarMode} from '../../models/sidebar-mode.enum';
import {SidebarContentDirective} from '../sidebar-content/sidebar-content.directive';
import {SidebarService} from '../../services/sidebar.service';
import {SidebarDirective} from './sidebar.directive';
import {By} from '@angular/platform-browser';

@Component({
	template: `
        <k-sidebar></k-sidebar>
	`
})
class SidebarDirectiveHostComponent {
}

describe('SidebarContentDirective', () => {
	let component: SidebarDirectiveHostComponent;
	let fixture: ComponentFixture<SidebarDirectiveHostComponent>;
	let sidebarService: SidebarService;

	const configuration = new SidebarConfiguration();
	configuration.overWrite({mode: SidebarMode.Over});

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				SidebarDirectiveHostComponent,
				SidebarDirective
			],
			providers: [
				SidebarService,
				{provide: SIDEBAR_CONFIG, useValue: configuration}
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		sidebarService = TestBed.inject<SidebarService>(SidebarService);
		fixture = TestBed.createComponent(SidebarDirectiveHostComponent);
		component = fixture.componentInstance;
	});

	it('should append opened class to classes when sidebar is on opened status', () => {
		sidebarService.open();
		fixture.detectChanges();

		expect(fixture.debugElement.query(By.directive(SidebarDirective)).classes.opened).toBeTrue();
	});

	it('should remove opened class to classes when sidebar is on closed status', () => {
		sidebarService.close();
		fixture.detectChanges();

		expect(fixture.debugElement.query(By.directive(SidebarDirective)).classes.opened).toBeFalsy();
	});

	it('should set position style from sidebar service position property', () => {
		fixture.detectChanges();

		expect(fixture.debugElement.query(By.directive(SidebarDirective)).styles.position).toBe(sidebarService.position);
	});
});
