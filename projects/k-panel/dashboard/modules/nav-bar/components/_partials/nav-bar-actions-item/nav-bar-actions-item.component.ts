import {Attribute, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
	selector: 'app-nav-bar-actions-item',
	templateUrl: './nav-bar-actions-item.component.html',
	styleUrls: ['./nav-bar-actions-item.component.scss']
})
export class NavBarActionsItemComponent {
	@Input()
	tooltip: string;

	@Output()
	actionClick = new EventEmitter();

	constructor(
		@Attribute('iconClass') public iconClass: string
	) {
	}

	onActionClick() {
		this.actionClick.emit();
	}
}
