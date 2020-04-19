import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {SidebarService} from '../../services/sidebar.service';
import {SidebarMode} from '../../models/sidebar-mode.enum';

@Component({
	selector: 'k-sidebar-container',
	templateUrl: './sidebar-container.component.html',
	styleUrls: ['sidebar-container.component.scss'],
	providers: [SidebarService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarContainerComponent {
	@Input() set mode(mode: SidebarMode) {
		this.sidebarService.changeMode(mode);
	}

	@Input() set hasBackdrop(hasBackdrop: boolean) {
		this.sidebarService.changeBackdrop(hasBackdrop);
	}

	constructor(
		private sidebarService: SidebarService) {
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
