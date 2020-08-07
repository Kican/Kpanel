import {Component, Input, OnInit} from '@angular/core';
import {IEditTextComponent, IElementComponent} from "@ngx-k-panel/form-builder";

@Component({
	selector: 'k-input-number',
	templateUrl: './input-number.component.html',
	styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit, IElementComponent {

	@Input()
	componentData: IEditTextComponent;

	ngOnInit(): void {
	}

	toLowerCamelCase(text: string): string {
		return text.substring(0, 1).toLowerCase() + text.substring(1);
	}

}
