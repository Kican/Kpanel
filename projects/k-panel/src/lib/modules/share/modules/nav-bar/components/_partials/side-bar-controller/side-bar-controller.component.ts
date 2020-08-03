import {Component, OnInit} from '@angular/core';
import {SideBarService} from '../../../../side-bar/services/side-bar/side-bar.service';
import {SideBarStatus} from '../../../../side-bar/enums/side-bar-status.enum';

@Component({
	selector: 'app-side-bar-controller',
	templateUrl: './side-bar-controller.component.html',
	styleUrls: ['./side-bar-controller.component.scss']
})
export class SideBarControllerComponent implements OnInit {
	sidebarStatus: SideBarStatus;

	constructor(private sidebarService: SideBarService) {
	}

	ngOnInit() {
		this.sidebarService.sidebarStatusChange$.subscribe(value => {
			this.sidebarStatus = value;
		});
	}

	toggleSidebar() {
		this.sidebarService.toggle();
	}
}
