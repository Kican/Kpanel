import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {SidebarService} from '../../services/sidebar.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
	selector: 'k-back-drop',
	templateUrl: './back-drop.component.html',
	styleUrls: ['./back-drop.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [
		trigger('backdrop', [
			state('void', style([{opacity: 0}])),
			transition('void <=> *', animate('.2s 0s ease-out'))
		])
	]
})
export class BackDropComponent implements OnInit {

	constructor(public sidebarService: SidebarService) {
	}

	ngOnInit(): void {
	}

	close() {
		this.sidebarService.close();
	}
}
