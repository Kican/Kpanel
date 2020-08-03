import {Attribute, Component, Input} from '@angular/core';

@Component({
	// tslint:disable-next-line:component-selector
	selector: '[app-side-bar-item]',
	templateUrl: './side-bar-item.component.html',
	styleUrls: ['./side-bar-item.component.scss']
})
export class SideBarItemComponent {
	@Input()
	exactActive: boolean;

	@Input()
	routerLink: string;

	constructor(
		@Attribute('iconClass') public iconClass: string,
	) {
	}
}
