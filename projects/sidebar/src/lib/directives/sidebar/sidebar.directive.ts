import {Directive, HostBinding, Inject, OnInit} from '@angular/core';
import {SidebarService} from '../../services/sidebar.service';
import {SidebarStatus} from '../../models/sidebar-status.enum';
import {SIDEBAR_CONFIG, SidebarConfig} from '../../models/sidebar.config';

@Directive({
	selector: 'k-sidebar',
})
export class SidebarDirective implements OnInit {
	@HostBinding('class')
	sidebarClass = 'k-sidebar';

	@HostBinding('class.opened')
	opened: boolean;

	@HostBinding('style.position')
	position: string;

	constructor(
		@Inject(SIDEBAR_CONFIG) config: SidebarConfig,
		private sidebarService: SidebarService
	) {
		// TODO should have default value in component or configuration
		this.position = config.fixedPosition ? 'fixed' : 'absolute';
	}

	ngOnInit(): void {
		this.sidebarService.statusChange$.subscribe(value => {
			this.opened = (value === SidebarStatus.Opened);
		});
	}
}
