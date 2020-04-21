import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SIDEBAR_CONFIG, SidebarConfiguration} from '../../models/sidebar.config';
import {SidebarService} from '../../services/sidebar.service';
import {SidebarContentDirective} from './sidebar-content.directive';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';
import {SidebarMode} from '../../models/sidebar-mode.enum';

@Component({
	template: `
        <k-sidebar-content></k-sidebar-content>
	`
})
export class SidebarContentDirectiveHostComponent {
}

describe('SidebarContentDirective', () => {
	let component: SidebarContentDirectiveHostComponent;
	let fixture: ComponentFixture<SidebarContentDirectiveHostComponent>;
	let sidebarService: SidebarService;

	const configuration = new SidebarConfiguration();
	configuration.overWrite({mode: SidebarMode.Over});

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				SidebarContentDirective,
				SidebarContentDirectiveHostComponent
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
		fixture = TestBed.createComponent(SidebarContentDirectiveHostComponent);
		component = fixture.componentInstance;
	});

	it('should set right opened class when sidebar gets opened', () => {
		sidebarService.open();
		fixture.detectChanges();

		expect(fixture.debugElement.query(By.directive(SidebarContentDirective)).classes[configuration.mode]).toBeTrue();
	});

	it('should remove opened classes when sidebar gets closed', () => {
		sidebarService.open();

		sidebarService.close();
		fixture.detectChanges();

		expect(fixture.debugElement.query(By.directive(SidebarContentDirective)).classes.over).toBeFalsy();
		expect(fixture.debugElement.query(By.directive(SidebarContentDirective)).classes.push).toBeFalsy();
		expect(fixture.debugElement.query(By.directive(SidebarContentDirective)).classes.side).toBeFalsy();
	});

	it('should set sidebar content class', () => {
		fixture.detectChanges();

		expect(fixture.debugElement.query(By.directive(SidebarContentDirective)).classes['k-sidebar-content']).toBeTrue();
	});
});
