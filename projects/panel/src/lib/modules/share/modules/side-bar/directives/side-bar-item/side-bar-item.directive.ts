import {Directive, HostListener} from '@angular/core';
import {WindowSizeService} from '../../../../services/window-size/window-size.service';
import {SideBarService} from '../../services/side-bar/side-bar.service';

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
