import {Component, Input} from '@angular/core';
import {SideBarService} from '../../../services/side-bar/side-bar.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
	selector: 'app-back-drop',
	templateUrl: './back-drop.component.html',
	styleUrls: ['./back-drop.component.scss'],
	animations: [
		trigger('backDrop', [
			state('void', style({opacity: '0'})),
			transition('* <=> *', animate('.4s'))
		])
	]
})
export class BackDropComponent {
	@Input()
	visible: boolean;

	constructor(private sidebarService: SideBarService) {
	}

	closeSidebar() {
		this.sidebarService.close();
	}
}
