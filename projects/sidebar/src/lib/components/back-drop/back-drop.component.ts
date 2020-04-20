import {ChangeDetectionStrategy, Component, HostBinding, Inject, OnInit} from '@angular/core';
import {SidebarService} from '../../services/sidebar.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {SIDEBAR_CONFIG, SidebarConfig} from '../../models/sidebar.config';

@Component({
	selector: 'k-back-drop',
	templateUrl: './back-drop.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [
		trigger('backdrop', [
			state('void', style([{opacity: 0}])),
			transition('void <=> *', animate('.2s 0s ease-out'))
		])
	]
})
export class BackDropComponent implements OnInit {
	position: string;

	constructor(
		@Inject(SIDEBAR_CONFIG) config: SidebarConfig,
		public sidebarService: SidebarService
	) {
		// TODO should have default value in component or configuration
		this.position = config.fixedPosition ? 'fixed' : 'absolute';
	}

	ngOnInit(): void {
	}

	close() {
		this.sidebarService.close();
	}
}
