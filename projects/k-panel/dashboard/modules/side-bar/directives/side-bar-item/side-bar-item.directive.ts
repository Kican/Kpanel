import {Directive, HostListener} from '@angular/core';
import {SideBarService} from '../../services/side-bar/side-bar.service';
import {WindowSizeService} from "@ngx-k-panel/core";

@Directive({
	selector: '.sidebar-item'
})
export class SideBarItemDirective {

	constructor(private winSizeService: WindowSizeService, private sidebarService: SideBarService) {
	}

	@HostListener('click') onClick() {
		if (this.winSizeService.isSmallScreen())
			this.sidebarService.close();
	}
}
