import {Component, Input, OnInit} from '@angular/core';
import {IEditTextComponent, IElementComponent} from "@ngx-k-panel/form-builder";

@Component({
	selector: 'k-input-text',
	templateUrl: './input-text.component.html',
	styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit, IElementComponent {
	@Input()
	componentData: IEditTextComponent;

	constructor() {
	}

	ngOnInit(): void {
	}

	toLowerCamelCase(text: string): string {
		return text.substring(0, 1).toLowerCase() + text.substring(1);
	}
}
