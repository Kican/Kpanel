import {Directive, HostBinding, OnInit} from '@angular/core';
import {SidebarService} from '../../services/sidebar.service';
import {SidebarStatus} from '../../models/sidebar-status.enum';
import {concat} from 'rxjs';
import {SidebarMode} from '../../models/sidebar-mode.enum';

@Directive({
	selector: 'k-sidebar-content',
})
export class SidebarContentDirective implements OnInit {
	@HostBinding('class')
	sidebarContent = 'sidebar-content';

	@HostBinding('class.pushed')
	pushed: boolean;

	@HostBinding('class.over')
	over: boolean;

	@HostBinding('class.side')
	side: boolean;

	constructor(private sidebarService: SidebarService
	) {
	}

	ngOnInit(): void {
		concat(this.sidebarService.statusChange$, this.sidebarService.modeChange$).subscribe(value => {
			this.setClass(this.sidebarService.modeChange.getValue(), this.sidebarService.statusChange.getValue());
		});
	}

	private setClass(mode: SidebarMode, status: SidebarStatus): void {
		if (status === SidebarStatus.Closed) {
			this.over = this.side = this.pushed = false;
		} else {
			this.pushed = mode === SidebarMode.Push;
			this.over = mode === SidebarMode.Over;
			this.side = mode === SidebarMode.Side;
		}
	}
}
