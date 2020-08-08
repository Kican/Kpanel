import {Component, Input, OnInit} from '@angular/core';
import {IEditTextComponent, IElementComponent} from "@ngx-k-panel/form-builder";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
	selector: 'k-input-text',
	templateUrl: './input-text.component.html',
	styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit, IElementComponent {
	@Input()
	componentData: IEditTextComponent;

	@Input()
	parentFormGroup: FormGroup;

	control: FormControl;

	constructor() {
		this.control = new FormControl('', Validators.required);
	}

	ngOnInit(): void {
		this.parentFormGroup.addControl(this.toLowerCamelCase(this.componentData.name), this.control);
	}

	toLowerCamelCase(text: string): string {
		return text.substring(0, 1).toLowerCase() + text.substring(1);
	}

}
