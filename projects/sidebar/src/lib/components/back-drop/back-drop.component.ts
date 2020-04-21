import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SidebarService} from '../../services/sidebar.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

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
export class BackDropComponent {
	position: string;

	constructor(public sidebarService: SidebarService) {
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
