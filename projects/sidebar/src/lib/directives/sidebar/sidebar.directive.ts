import {Directive, HostBinding, OnInit} from '@angular/core';
import {SidebarService} from '../../services/sidebar.service';
import {SidebarStatus} from '../../models/sidebar-status.enum';

@Directive({
	selector: 'k-sidebar',
})
export class SidebarDirective implements OnInit {
	status: SidebarStatus;

	@HostBinding('class')
	sidebarClass = 'k-sidebar';

	@HostBinding('class.opened')
	opened: boolean;

	constructor(
		private sidebarService: SidebarService,
	) {
	}

	ngOnInit(): void {
		this.sidebarService.statusChange$.subscribe(value => {
			this.opened = (value === SidebarStatus.Opened);
		});
	}
}
