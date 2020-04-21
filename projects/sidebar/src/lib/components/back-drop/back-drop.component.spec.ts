import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BackDropComponent} from './back-drop.component';
import {SidebarService} from '../../services/sidebar.service';
import {By} from '@angular/platform-browser';
import {SIDEBAR_CONFIG, SidebarConfiguration} from '../../models/sidebar.config';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('BackDropComponent', () => {
	let component: BackDropComponent;
	let fixture: ComponentFixture<BackDropComponent>;
	let service: SidebarService;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [BackDropComponent],
			providers: [
				{provide: SIDEBAR_CONFIG, useValue: new SidebarConfiguration()},
				SidebarService
			],
			imports: [
				BrowserAnimationsModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		service = TestBed.inject(SidebarService);
		fixture = TestBed.createComponent(BackDropComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should view backdrop when sidebar is open and hasBackdrop is true', () => {
		service.changeCloseOnBackdropClick(true);
		service.open();

		fixture.detectChanges();

		expect(fixture.debugElement.query(By.css('.k-backdrop'))).toBeTruthy();
	});

	it('should not view backdrop when hasBackdrop is false', () => {
		service.changeBackdrop(false);
		service.open();

		fixture.detectChanges();

		expect(fixture.debugElement.query(By.css('.k-backdrop'))).toBeFalsy();
	});

	it('should not view backdrop when sidebar is closed', () => {
		service.close();

		fixture.detectChanges();

		expect(fixture.debugElement.query(By.css('.k-backdrop'))).toBeFalsy();
	});

	it('should set position to sidebar service position property', () => {
		service.changeIsFixed(true);
		service.open();

		fixture.detectChanges();

		expect(fixture.debugElement.query(By.css('.k-backdrop')).styles.position).toBe(service.position);
	});
});
