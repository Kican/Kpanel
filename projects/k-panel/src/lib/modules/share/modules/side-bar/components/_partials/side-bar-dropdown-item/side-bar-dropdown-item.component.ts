import {Attribute, Component, HostBinding, Input} from '@angular/core';
import {DropdownStatus} from '../../../enums/dropdown-status.enum';
import {slideToggle} from "../../../../../../../animations/pub-anim";

@Component({
	// tslint:disable-next-line:component-selector
	selector: '[app-side-bar-dropdown-item]',
	templateUrl: './side-bar-dropdown-item.component.html',
	styleUrls: ['./side-bar-dropdown-item.component.scss'],
	animations: [slideToggle]
})
export class SideBarDropdownItemComponent {
	@Input()
	label: string;

	@HostBinding('class')
	class = 'dropdown-group';

	status = DropdownStatus.closed;

	constructor(
		@Attribute('iconClass') public iconClass: string
	) {
	}

	toggle() {
		this.status = (this.status === DropdownStatus.closed) ? DropdownStatus.opened : DropdownStatus.closed;
	}
}
