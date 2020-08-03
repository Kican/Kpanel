import {Component, OnInit} from '@angular/core';
import {WindowSizeService} from "../../modules/share/services/window-size/window-size.service";
import {SideBarService} from "../../modules/share/modules/side-bar/services/side-bar/side-bar.service";
import {SideBarStatus} from "../../modules/share/modules/side-bar/enums/side-bar-status.enum";

@Component({
	selector: 'app-panel-content',
	templateUrl: './panel-content.component.html',
	styleUrls: ['./panel-content.component.scss']
})
export class PanelContentComponent implements OnInit {
	sidebarStatus: SideBarStatus;

	constructor(private sidebarService: SideBarService, public windowSizeService: WindowSizeService) {
	}

	get indented() {
		return this.sidebarStatus === SideBarStatus.Opened && !this.windowSizeService.isSmallScreen();
	}

	ngOnInit() {
		this.sidebarService.sidebarStatusChange$.subscribe(value => {
			this.sidebarStatus = value;
		});
	}
}
