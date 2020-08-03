import {Component, OnInit} from '@angular/core';
import {SideBarStatus} from '../../enums/side-bar-status.enum';
import {SideBarService} from '../../services/side-bar/side-bar.service';
import {WindowSizeService} from '../../../../services/window-size/window-size.service';

@Component({
	selector: 'app-side-bar-container',
	templateUrl: './side-bar-container.component.html',
	styleUrls: ['./side-bar-container.component.scss']
})
export class SideBarContainerComponent implements OnInit {
	status: SideBarStatus;

	constructor(private sidebarService: SideBarService, public windowSizeService: WindowSizeService) {
	}
	get opened() {
		return this.status === SideBarStatus.Opened;
	}
	get isSmallScreen() {
		return this.windowSizeService.isSmallScreen();
	}

	ngOnInit(): void {
		this.subscribeToSidebarStatusChange();
		this.subscribeToWindowResize();
	}

	subscribeToSidebarStatusChange() {
		this.sidebarService.sidebarStatusChange$.subscribe(value => {
			this.status = value;
		});
	}

	subscribeToWindowResize() {
		this.windowSizeService.windowSizeChange$.subscribe(value => {
			if (this.windowSizeService.isSmallScreen()) {
				this.sidebarService.close();
			} else {
				this.sidebarService.open();
			}
		});
	}
}
