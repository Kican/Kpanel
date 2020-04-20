import {Directive, HostBinding, Inject, OnInit} from '@angular/core';
import {SidebarService} from '../../services/sidebar.service';
import {SidebarStatus} from '../../models/sidebar-status.enum';
import {SidebarConfiguration, SIDEBAR_CONFIG} from '../../models/sidebar.config';

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
		@Inject(SIDEBAR_CONFIG) config: SidebarConfiguration,
		private sidebarService: SidebarService
	) {
	}

	ngOnInit(): void {
		this.sidebarService.statusChange$.subscribe(value => {
			this.opened = (value === SidebarStatus.Opened);
		});

		this.sidebarService.isFixedChange$.subscribe(value => {
			this.position = this.sidebarService.position;
		});
	}
}
