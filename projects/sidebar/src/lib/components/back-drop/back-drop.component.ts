import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {SidebarService} from '../../services/sidebar.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {SidebarConfiguration, SIDEBAR_CONFIG} from '../../models/sidebar.config';

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
		@Inject(SIDEBAR_CONFIG) private config: SidebarConfiguration,
		public sidebarService: SidebarService
	) {
	}

	ngOnInit(): void {
		this.sidebarService.isFixedChange$.subscribe(value => {
			this.position = this.sidebarService.position;
		});
	}

	close() {
		if (this.sidebarService.closeOnBackdropClick) {
			this.sidebarService.close();
		}
	}
}
