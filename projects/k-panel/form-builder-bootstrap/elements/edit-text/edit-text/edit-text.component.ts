import {Component, OnInit} from '@angular/core';
import {IElementComponent} from "../../../../form-builder/classes/ielement-component";
import {IComponent} from "../../../../form-builder/classes/icomponent";

@Component({
	selector: 'k-edit-text',
	templateUrl: './edit-text.component.html',
	styleUrls: ['./edit-text.component.css']
})
export class EditTextComponent implements OnInit, IElementComponent {
	componentData: IEditTextComponent;

	constructor() {
	}

	ngOnInit(): void {
	}

}

export interface IEditTextComponent extends IComponent {
	title: string;
}
