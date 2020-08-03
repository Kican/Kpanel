import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
	selector: 'app-option-bar-profile',
	templateUrl: './option-bar-profile.component.html',
	styleUrls: ['./option-bar-profile.component.scss']
})
export class OptionBarProfileComponent {
	@Output()
	profileClick = new EventEmitter<number>();

	@Input()
	public profileImage: string;

	@Input()
	public fullName: string;

	@Input()
	public role: string;

	constructor() {
	}

	onProfileClick() {
		this.profileClick.emit();
	}
}
