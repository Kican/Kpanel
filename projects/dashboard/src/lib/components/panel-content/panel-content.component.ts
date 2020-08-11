import {Component, OnInit} from '@angular/core';
import {SideBarStatus} from '../../modules/side-bar/enums/side-bar-status.enum';
import {SideBarService} from '../../modules/side-bar/services/side-bar/side-bar.service';
import {WindowSizeService} from '@ngx-k/core';

@Component({
	selector: 'app-panel-content',
	templateUrl: './panel-content.component.html',
})
export class PanelContentComponent implements OnInit {
	sidebarStatus: SideBarStatus;

	constructor(private sidebarService: SideBarService, public windowSizeService: WindowSizeService) {
	}

	get indented() {
		return this.sidebarStatus === SideBarStatus.Opened && !this.windowSizeService.isSmallScreen;
	}

	ngOnInit() {
		this.sidebarService.sidebarStatusChange$.subscribe(value => {
			this.sidebarStatus = value;
		});
	}
}
