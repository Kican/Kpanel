import {Attribute, ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import {SidebarService} from '../../services/sidebar.service';
import {SidebarMode} from '../../models/sidebar-mode.enum';
import {SidebarStatus} from '../../models/sidebar-status.enum';

@Component({
	selector: 'k-sidebar-container',
	templateUrl: './sidebar-container.component.html',
	providers: [SidebarService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarContainerComponent {
	@Input()
	set mode(mode: SidebarMode) {
		this.sidebarService.changeMode(mode);
	}

	get mode(): SidebarMode {
		return this.sidebarService.mode;
	}

	@Input()
	set hasBackdrop(hasBackdrop: boolean) {
		this.sidebarService.changeBackdrop(hasBackdrop);
	}

	get hasBackdrop(): boolean {
		return this.sidebarService.hasBackdrop;
	}

	@Input()
	set fixed(fixed: boolean) {
		this.sidebarService.changeIsFixed(fixed);
	}

	get fixed(): boolean {
		return this.sidebarService.isFixed;
	}

	@Input()
	set closeOnBackdropClick(closeOnBackdropClick: boolean) {
		this.sidebarService.changeCloseOnBackdropClick(closeOnBackdropClick);
	}

	get closeOnBackdropClick(): boolean {
		return this.sidebarService.closeOnBackdropClick;
	}

	@HostBinding('class')
	sidebarContainer = 'k-sidebar-container';

	constructor(
		@Attribute('initialState') initialState: SidebarStatus,
		private sidebarService: SidebarService
	) {
		if (initialState === SidebarStatus.Opened) {
			this.open();
		}
		if (initialState === SidebarStatus.Closed) {
			this.close();
		}
	}

	open(): void {
		this.sidebarService.open();
	}

	close(): void {
		this.sidebarService.close();
	}

	toggle(): void {
		this.sidebarService.toggle();
	}
}
