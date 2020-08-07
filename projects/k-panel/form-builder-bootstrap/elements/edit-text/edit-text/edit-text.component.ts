import {Component, OnInit} from '@angular/core';
import {IElementComponent} from "../../../../form-builder/classes/ielement-component";
import {IComponent} from "../../../../form-builder/classes/icomponent";
import {IEditTextComponent} from "../../../../form-builder/classes/iedit-text-component";

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
